// ============================================================
// MiniDash database bootstrap
// ------------------------------------------------------------
// Opens (creating if needed) minidash.db with Node's built-in
// `node:sqlite` module — a SYNCHRONOUS SQLite driver, so there's
// no async/await to worry about here. Runs schema.sql every boot
// (CREATE TABLE IF NOT EXISTS is safe to repeat) and seed.sql only
// the very first time, so restarting the server never duplicates rows.
//
// Note: the original plan called for the `better-sqlite3` package, but
// it's a native module that needs a C++ compiler to install, and not every
// machine has one set up. `node:sqlite` ships inside Node.js itself (no
// install step, nothing to compile) and offers the exact same properties
// the project needs: file-based, zero-config, and synchronous — with a
// `db.prepare(sql).get()/.all()/.run()` API that reads identically to
// better-sqlite3's. (It's marked "experimental" by Node — totally fine for
// a learning project like this one.)
//
// Nobody outside db/ should ever require() this file directly —
// db/queries.js is the one place all SQL lives, and routes only
// ever call a function from queries.js.
// ============================================================

const path = require("path");
const fs = require("fs");
const { DatabaseSync } = require("node:sqlite");

const DB_PATH = path.join(__dirname, "minidash.db");
const SCHEMA_PATH = path.join(__dirname, "schema.sql");
const SEED_PATH = path.join(__dirname, "seed.sql");

const db = new DatabaseSync(DB_PATH);

// Tables are created on every boot — this is a no-op once they already exist.
db.exec(fs.readFileSync(SCHEMA_PATH, "utf8"));

// Only seed an empty database, so we never duplicate rows on restart.
const { count } = db.prepare("SELECT COUNT(*) AS count FROM profile").get();
if (count === 0) {
  db.exec(fs.readFileSync(SEED_PATH, "utf8"));
  console.log("🌱 minidash.db was empty — seeded it with starter data");
}

module.exports = db;
