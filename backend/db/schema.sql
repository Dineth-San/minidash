-- ============================================================
-- MiniDash database schema
-- ------------------------------------------------------------
-- Owned 100% by Claude Code (Member #12). Nobody else needs to
-- open this file — every table here is read through a single
-- ready-made function in db/queries.js.
--
-- One small table per data type, matching the cards in the app.
-- `CREATE TABLE IF NOT EXISTS` makes this safe to run on every boot.
-- ============================================================

-- #1 ProfileCard — a single row describing "you"
CREATE TABLE IF NOT EXISTS profile (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  name     TEXT NOT NULL,
  role     TEXT NOT NULL,
  initials TEXT NOT NULL
);

-- #2 ClockCard — one friendly message per time-of-day period
CREATE TABLE IF NOT EXISTS greeting (
  id      INTEGER PRIMARY KEY AUTOINCREMENT,
  period  TEXT NOT NULL UNIQUE,   -- 'morning' | 'afternoon' | 'evening' | 'night'
  message TEXT NOT NULL
);

-- #3 StatsCard reads counts from these same `tasks` / `members` tables —
-- there is no separate `stats` table, the numbers are derived on the fly.

-- #4 TasksCard — small to-do list, each task is 'open' or 'done'
CREATE TABLE IF NOT EXISTS tasks (
  id     INTEGER PRIMARY KEY AUTOINCREMENT,
  title  TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('open', 'done'))
);

-- #5 AnnouncementsCard — short team announcements
CREATE TABLE IF NOT EXISTS announcements (
  id    INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  body  TEXT NOT NULL,
  date  TEXT NOT NULL
);

-- #6 WeatherCard — a single fake "current weather" row
CREATE TABLE IF NOT EXISTS weather (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  city      TEXT NOT NULL,
  tempC     INTEGER NOT NULL,
  condition TEXT NOT NULL
);

-- #7 NotesCard — a short list of sticky-note style reminders
CREATE TABLE IF NOT EXISTS notes (
  id   INTEGER PRIMARY KEY AUTOINCREMENT,
  text TEXT NOT NULL
);

-- #8 MembersCard — the roster of all 12 team members
CREATE TABLE IF NOT EXISTS members (
  id   INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  role TEXT NOT NULL
);

-- #9 LinksCard — handy links the team opens often
CREATE TABLE IF NOT EXISTS links (
  id    INTEGER PRIMARY KEY AUTOINCREMENT,
  label TEXT NOT NULL,
  url   TEXT NOT NULL
);

-- #10 ActivityCard — a tiny "who did what, when" feed
CREATE TABLE IF NOT EXISTS activity (
  id     INTEGER PRIMARY KEY AUTOINCREMENT,
  who    TEXT NOT NULL,
  action TEXT NOT NULL,
  time   TEXT NOT NULL
);

-- #11 GoalsCard — progress bars with a percent each
CREATE TABLE IF NOT EXISTS goals (
  id      INTEGER PRIMARY KEY AUTOINCREMENT,
  label   TEXT NOT NULL,
  percent INTEGER NOT NULL
);

-- #12 QuoteCard (Member #12 reference) — a small pool of quotes to pick from
CREATE TABLE IF NOT EXISTS quotes (
  id     INTEGER PRIMARY KEY AUTOINCREMENT,
  text   TEXT NOT NULL,
  author TEXT NOT NULL
);
