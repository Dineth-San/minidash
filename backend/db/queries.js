// ============================================================
// MiniDash data-access layer
// ------------------------------------------------------------
// THIS IS THE ONLY FILE IN THE WHOLE PROJECT THAT CONTAINS SQL.
//
// Every route handler imports one function from here and calls it —
// e.g. `const tasks = getTasks();`. Members never write `db.prepare(...)`
// themselves; that's the whole point of this file. If your endpoint
// needs data, the function you need is already written below.
//
// Each function does one `db.prepare(sql).all()` (many rows) or
// `.get()` (one row) and returns plain JS objects/arrays — exactly
// the shapes documented in §7 of guidelines.md.
// ============================================================

const db = require("./database");

// ---- Member #1 — ProfileCard ------------------------------------------------
// GET /api/profile -> { name, role, initials }
function getProfile() {
  return db.prepare("SELECT name, role, initials FROM profile LIMIT 1").get();
}

// ---- Member #2 — ClockCard ---------------------------------------------------
// GET /api/time -> { greeting, serverTime, date }
// The greeting message comes from the `greeting` table (one row per time-of-day
// period); the clock and date are simply read from the server's current time.
function getGreeting() {
  const now = new Date();
  const hour = now.getHours();

  let period;
  if (hour < 12) period = "morning";
  else if (hour < 17) period = "afternoon";
  else if (hour < 21) period = "evening";
  else period = "night";

  const row = db.prepare("SELECT message FROM greeting WHERE period = ?").get(period);

  return {
    greeting: row ? row.message : "Hello!",
    serverTime: now.toLocaleTimeString(),
    date: now.toLocaleDateString(),
  };
}

// ---- Member #3 — StatsCard ----------------------------------------------------
// GET /api/stats -> { totalTasks, completed, pending, members }
// There is no separate `stats` table — these are small counts derived live
// from the `tasks` and `members` tables.
function getStats() {
  const totalTasks = db.prepare("SELECT COUNT(*) AS n FROM tasks").get().n;
  const completed = db.prepare("SELECT COUNT(*) AS n FROM tasks WHERE status = 'done'").get().n;
  const pending = db.prepare("SELECT COUNT(*) AS n FROM tasks WHERE status = 'open'").get().n;
  const members = db.prepare("SELECT COUNT(*) AS n FROM members").get().n;

  return { totalTasks, completed, pending, members };
}

// ---- Member #4 — TasksCard -----------------------------------------------------
// GET /api/tasks            -> [{ id, title, status }]            (all tasks)
// GET /api/tasks?status=open|done -> [{ id, title, status }]      (filtered)
function getTasks(status) {
  if (status === "open" || status === "done") {
    return db
      .prepare("SELECT id, title, status FROM tasks WHERE status = ? ORDER BY id")
      .all(status);
  }
  return db.prepare("SELECT id, title, status FROM tasks ORDER BY id").all();
}

// ---- Member #5 — AnnouncementsCard -----------------------------------------------
// GET /api/announcements -> [{ id, title, body, date }]
function getAnnouncements() {
  return db
    .prepare("SELECT id, title, body, date FROM announcements ORDER BY date DESC, id DESC")
    .all();
}

// ---- Member #6 — WeatherCard -------------------------------------------------------
// GET /api/weather -> { city, tempC, condition }
function getWeather() {
  return db.prepare("SELECT city, tempC, condition FROM weather LIMIT 1").get();
}

// ---- Member #7 — NotesCard -----------------------------------------------------------
// GET /api/notes -> [{ id, text }]
function getNotes() {
  return db.prepare("SELECT id, text FROM notes ORDER BY id").all();
}

// ---- Member #8 — MembersCard ----------------------------------------------------------
// GET /api/members -> [{ id, name, role }]
function getMembers() {
  return db.prepare("SELECT id, name, role FROM members ORDER BY id").all();
}

// ---- Member #9 — LinksCard -------------------------------------------------------------
// GET /api/links -> [{ id, label, url }]
function getLinks() {
  return db.prepare("SELECT id, label, url FROM links ORDER BY id").all();
}

// ---- Member #10 — ActivityCard ----------------------------------------------------------
// GET /api/activity -> [{ id, who, action, time }]
function getActivity() {
  return db.prepare("SELECT id, who, action, time FROM activity ORDER BY id DESC").all();
}

// ---- Member #11 — GoalsCard ---------------------------------------------------------------
// GET /api/goals -> [{ id, label, percent }]
function getGoals() {
  return db.prepare("SELECT id, label, percent FROM goals ORDER BY id").all();
}

// ---- Member #12 — QuoteCard (reference implementation) ------------------------------------
// GET /api/quote -> { text, author }
// Picks one random quote each time, so pressing "🔄 Refresh" on the card feels alive.
function getQuote() {
  return db.prepare("SELECT text, author FROM quotes ORDER BY RANDOM() LIMIT 1").get();
}

module.exports = {
  getProfile,
  getGreeting,
  getStats,
  getTasks,
  getAnnouncements,
  getWeather,
  getNotes,
  getMembers,
  getLinks,
  getActivity,
  getGoals,
  getQuote,
};
