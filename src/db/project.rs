use std::{
    borrow::Cow,
    fmt,
    path::{Path, PathBuf},
    ptr::addr_of,
};

use chrono::NaiveDate;

use rusqlite::Connection;

/// Data object for a user.
#[derive(Debug, Clone)]
#[cfg_attr(test, derive(PartialEq, Default))]
pub struct User {
    pub(crate) account: String,
    pub(crate) forename: String,
    pub(crate) surname: String,
    pub(crate) role: String,
    pub(crate) criminal: bool,
    pub(crate) data: Option<String>,
}

#[derive(Debug, Clone)]
#[cfg_attr(test, derive(PartialEq, Default))]
pub struct Presence {
    pub(crate) date: Option<NaiveDate>,
    pub(crate) presenter: String,
    pub(crate) data: Option<String>,
}

macro_rules! error {
    ($($args:tt)*) => {
        println!($($args)*)
    };
}

#[derive(Debug)]

pub enum Error {
    Arguments,
    Logic,
    NoProject,
    FileNotFound,
    FileOpen,
    SQL,
    Network,
    InvalidFormat,
    NothingFound,
    // Specific errors
    InvalidDate,
    InvalidUser,
    // Migration
    UnsupportedProjectVersion,
}

impl From<rusqlite::Error> for Error {
    fn from(e: rusqlite::Error) -> Self {
        error!("SQL: {e}");
        Self::SQL
    }
}

impl From<std::convert::Infallible> for Error {
    fn from(e: std::convert::Infallible) -> Self {
        error!("convert::Infallible: {e:?}");
        Self::Arguments
    }
}

impl From<std::io::Error> for Error {
    fn from(e: std::io::Error) -> Self {
        error!("File Error: {e:?}");
        Self::FileOpen
    }
}

type Result<T> = std::result::Result<T, Error>;

pub trait FromRow: Sized {
    fn from_row(stmt: &rusqlite::Row) -> rusqlite::Result<Self>;
}

impl<'a, T: FromRow> Iterator for DBIter<'a, T> {
    type Item = Result<T>;
    fn next(&mut self) -> Option<Self::Item> {
        match self.rows.next() {
            Ok(row) => Some(T::from_row(row?).map_err(Into::into)),
            Err(e) => Some(Err(e.into())),
        }
    }
}

pub struct DBIter<'a, T> {
    rows: rusqlite::Rows<'a>,
    ty: std::marker::PhantomData<T>,
}

impl<'a, T> DBIter<'a, T> {
    pub fn new(rows: rusqlite::Rows<'a>) -> Self {
        DBIter {
            rows,
            ty: std::marker::PhantomData,
        }
    }
}

pub struct Database {
    path: PathBuf,
    pub(crate) con: rusqlite::Connection,
}
impl fmt::Debug for Database {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        f.debug_struct("Database")
            .field("path", &self.path)
            .finish()
    }
}

impl Database {
    /// Creates a new database at the given path.
    pub fn create(path: Cow<'_, Path>) -> Result<Database> {
        if !path.exists() {
            let database = Database {
                con: rusqlite::Connection::open_with_flags(
                    &path,
                    rusqlite::OpenFlags::SQLITE_OPEN_CREATE
                        | rusqlite::OpenFlags::SQLITE_OPEN_READ_WRITE,
                )
                .map_err(|_| Error::FileOpen)?,
                path: path.into_owned(),
            };
            Ok(database)
        } else {
            Err(Error::FileOpen)
        }
    }

    /// Opens a database connection to the given project database.
    pub fn open(path: Cow<'_, Path>) -> Result<(Database, bool)> {
        if path.exists() {
            let database = Database {
                con: rusqlite::Connection::open_with_flags(
                    &path,
                    rusqlite::OpenFlags::SQLITE_OPEN_READ_WRITE,
                )
                .map_err(|_| Error::FileOpen)?,
                path: path.into_owned(),
            };
            Ok((database, true))
        } else {
            Err(Error::FileNotFound)
        }
    }

    /// Returns the filepath to this database.
    pub fn path(&self) -> &Path {
        &self.path
    }

    /// In memory database for testing purposes.
    pub fn memory() -> Result<Database> {
        Ok(Database {
            path: PathBuf::new(),
            con: rusqlite::Connection::open_in_memory()?,
        })
    }

    /// Creates a rollback point.
    /// If any statement on a transaction fails, all changes are rolled back
    /// to the point before this function is called.
    ///
    /// ## Safety
    /// This operation is only safe if called once.
    /// Stacking transactions on top of each other is not allowed!
    pub fn transaction(&self) -> rusqlite::Result<rusqlite::Transaction> {
        #[allow(clippy::cast_ref_to_mut)]
        let con = unsafe { &mut *(addr_of!(self.con) as *mut Connection) };
        con.transaction()
    }
}

pub fn create(db: &Database) -> Result<()> {
    const CREATE_TABLES: &str = "\
    create table user ( \
        account text not null primary key, \
        forename text not null, \
        surname text not null, \
        role text not null, \
        criminal integer not null default 0, \
        data text default none); \
    \
    create table presence ( \
        date text not null, \
        presenter text not null default '', \
        data text default none, \
        primary key (date, presenter)); \
    ";

    let transaction = db.transaction()?;
    transaction.execute_batch(CREATE_TABLES)?;
    transaction.commit()?;
    Ok(())
}
