use crate::db::project::{Database, Error, FromRow, Result};
use rusqlite::types::{FromSql, FromSqlResult, ToSql, ToSqlOutput, ValueRef};
use serde::{Deserialize, Serialize};
use utoipa::ToSchema;

#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq, Deserialize, Serialize, ToSchema)]
pub enum Permission {
    None,
    ReadOnly,
    Write,
}

impl From<&str> for Permission {
    fn from(s: &str) -> Self {
        match s {
            "0" => Permission::None,
            "1" => Permission::ReadOnly,
            "2" => Permission::Write,
            _ => unimplemented!("Unknown permission variant"),
        }
    }
}

impl FromSql for Permission {
    fn column_result(value: ValueRef<'_>) -> FromSqlResult<Self> {
        i64::column_result(value).and_then(|value| match value {
            0 => Ok(Permission::None),
            1 => Ok(Permission::ReadOnly),
            2 => Ok(Permission::Write),
            _ => Err(rusqlite::types::FromSqlError::OutOfRange(2)),
        })
    }
}

impl ToSql for Permission {
    fn to_sql(&self) -> rusqlite::Result<ToSqlOutput<'_>> {
        Ok((*self as i64).into())
    }
}

#[derive(Debug, PartialEq, Deserialize, Serialize, ToSchema)]
pub struct Permissions {
    pub access_user: Permission,
    pub access_absence: Permission,
    pub access_criminal: Permission,
}

impl FromRow for Permissions {
    fn from_row(row: &rusqlite::Row) -> rusqlite::Result<Permissions> {
        Ok(Permissions {
            access_user: row.get("access_user")?,
            access_absence: row.get("access_absence")?,
            access_criminal: row.get("access_criminal")?,
        })
    }
}

#[derive(Deserialize, PartialEq, Debug, ToSchema)]
pub struct Login {
    pub user: String,
    pub password: String,
    pub access_user: Permission,
    pub access_absence: Permission,
    pub access_criminal: Permission,
}

impl Login {
    pub fn is_valid(&self) -> bool {
        !self.user.trim().is_empty()
            && self.user.starts_with(char::is_alphabetic)
            && !self.user.contains(':')
            && !self.password.trim().is_empty()
    }
}

impl FromRow for Login {
    fn from_row(row: &rusqlite::Row) -> rusqlite::Result<Login> {
        Ok(Login {
            user: row.get("user")?,
            password: row.get("password")?,
            access_user: row.get("access_user")?,
            access_absence: row.get("access_absence")?,
            access_criminal: row.get("access_criminal")?,
        })
    }
}

/// Returns the login with the given `user` and `password`.
pub fn fetch(db: &Database, user: &str, password: &str) -> Result<Login> {
    let mut stmt = db.con.prepare(
        "select \
        user, \
        password, \
        access_user, \
        access_absence, \
        access_criminal \
        from login \
        where user=? and password=?
        limit 1",
    )?;
    let mut result = stmt.query([user, password])?;
    Ok(Login::from_row(result.next()?.ok_or(Error::NothingFound)?)?)
}

/// Returns the permissions of the user with the given `user`.
pub fn fetch_permission(db: &Database, user: &str) -> Result<Permissions> {
    let mut stmt = db.con.prepare(
        "select \
        access_user, \
        access_absence, \
        access_criminal \
        from login \
        where user=?
        limit 1",
    )?;
    let mut result = stmt.query([user])?;
    Ok(Permissions::from_row(
        result.next()?.ok_or(Error::NothingFound)?,
    )?)
}

pub fn all_logins(db: &Database) -> Result<Vec<String>> {
    let mut stmt = db.con.prepare(
        "select \
        user \
        from login \
        order by user",
    )?;

    let mut rows = stmt.query([])?;
    let mut users = Vec::new();
    while let Some(row) = rows.next()? {
        users.push(row.get(0)?);
    }

    Ok(users)
}

/// Adds a new login.
pub fn add(db: &Database, login: &Login) -> Result<()> {
    if !login.is_valid() {
        return Err(Error::InvalidUser);
    }
    db.con.execute(
        "INSERT INTO login VALUES (?, ?, ?, ?, ?)",
        rusqlite::params![
            login.user.trim(),
            login.password.trim(),
            login.access_user,
            login.access_absence,
            login.access_criminal
        ],
    )?;
    Ok(())
}

#[derive(Deserialize, PartialEq, Debug, ToSchema)]
pub struct UpdateLogin {
    pub previous_user: String,
    pub previous_password: String,
    pub new_user: String,
    pub new_password: String,
}

impl UpdateLogin  {
    fn is_valid(&self) ->  bool {
        !self.previous_user.trim().is_empty()
            && self.previous_user.starts_with(char::is_alphabetic)
            && !self.previous_user.contains(':')
            && !self.previous_password.trim().is_empty()
            && !self.new_user.trim().is_empty()
            && self.new_user.starts_with(char::is_alphabetic)
            && !self.new_user.contains(':')
            && !self.new_password.trim().is_empty()
    } 
}

/// Updates a login.
/// This includes only it's user and password.
pub fn update(db: &Database, login: &UpdateLogin) -> Result<()> {
    if !login.is_valid() {
        return Err(Error::InvalidLogin);
    }
    db.con.execute(
        "update login set user=?, password=? where user=? and password=?",
        rusqlite::params![
            login.new_user.trim(),
            login.new_password.trim(),
            login.previous_user.trim(),
            login.previous_password.trim(),
        ],
    )?;
    Ok(())
}

/// Deletes the login by user.
pub fn delete(db: &Database, user: &str) -> Result<()> {
    let user = user.trim();
    if user.is_empty() {
        return Err(Error::InvalidUser);
    }
    // remove non-admin users
    db.con
        .execute("delete from login where user=?", rusqlite::params![user])?;
    Ok(())
}

#[cfg(test)]
mod tests {
    //TODO: Tests

    use crate::db::login::{self, Login, Permission};
    use crate::db::project::{create, Database};

    #[test]
    fn fetch_add_delete_logins() {
        let db = Database::memory().unwrap();
        create(&db).unwrap();

        let login = Login {
            user: "nils.wrenger".into(),
            password: "123456".into(),
            access_user: Permission::ReadOnly,
            access_absence: Permission::Write,
            access_criminal: Permission::None,
        };
        login::add(&db, &login).unwrap();

        let result = login::fetch(&db, &login.user, &login.password);
        assert!(result.is_ok());
        assert_eq!(result.unwrap(), login);

        let result = login::fetch_permission(&db, &login.user);
        assert!(result.is_ok());

        let result = login::all_logins(&db).unwrap();
        assert_eq!(result.len(), 1);

        login::delete(&db, &login.user).unwrap();

        let result = login::fetch(&db, &login.user, &login.password);
        println!("{result:?}");
        assert!(result.is_err());
    }
}
