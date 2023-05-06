pub mod db;
mod server;

use std::{borrow::Cow, path::Path};

use db::project::{fetch_user_data, Database};

use rocket::{catch, catchers, routes, Build, Request, Rocket};
use serde_json::json;
use server::ServerApiKey;
use utoipa::{
    openapi::security::{ApiKey, ApiKeyValue, SecurityScheme},
    Modify, OpenApi,
};
use utoipa_swagger_ui::SwaggerUi;

#[rocket::launch]
fn rocket() -> Rocket<Build> {
    let path = Path::new("./pdm.db");
    match Database::open(Cow::from(path)) {
        Ok(_) => Database::open(Cow::from(path)).unwrap().0,
        Err(_) => {
            let db = Database::create(Cow::from(path)).unwrap();
            db::project::create(&db).unwrap();
            fetch_user_data(&db, Cow::from(Path::new("./benutzer.txt")), "|").unwrap();
            db
        }
    };

    env_logger::init();

    #[derive(OpenApi)]
    #[openapi(
        paths(
            server::info,
            server::stats,
            server::all_users,
            server::fetch_user,
            server::search_user,
            server::add_user,
            server::update_user,
            server::delete_user,
            server::all_presences,
            server::fetch_presence,
            server::search_presence,
            server::add_presence,
            server::update_presence,
            server::delete_presence,
        ),
        components(
            schemas(db::project::User, db::project::Presence, db::stats::Stats, server::ServerError, server::Info)
        ),
        tags(
            (name = "server", description = "Server management endpoints.")
        ),
        modifiers(&SecurityAddon)
    )]
    struct ApiDoc;

    struct SecurityAddon;

    impl Modify for SecurityAddon {
        fn modify(&self, openapi: &mut utoipa::openapi::OpenApi) {
            let components = openapi.components.as_mut().unwrap(); // we can unwrap safely since there already is components registered.
            components.add_security_scheme(
                "api_key",
                SecurityScheme::ApiKey(ApiKey::Header(ApiKeyValue::new("server_api_key"))),
            )
        }
    }

    rocket::build()
        .register("/", catchers![unauthorized])
        .mount(
            "/",
            SwaggerUi::new("/swagger-ui/<_..>").url("/api-docs/openapi.json", ApiDoc::openapi()),
        )
        .mount(
            "/",
            routes![
                server::info,
                server::stats,
                server::all_users,
                server::fetch_user,
                server::search_user,
                server::add_user,
                server::update_user,
                server::delete_user,
                server::all_presences,
                server::fetch_presence,
                server::search_presence,
                server::add_presence,
                server::update_presence,
                server::delete_presence,
            ],
        )
}

#[catch(401)]
async fn unauthorized(req: &Request<'_>) -> serde_json::Value {
    let (_, server_error) = req.guard::<ServerApiKey>().await.failed().unwrap();

    json!(server_error)
}
