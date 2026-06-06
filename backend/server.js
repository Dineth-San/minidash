// ============================================================
// MiniDash backend entry point
// ------------------------------------------------------------
// Boots Express, mounts all 12 routers (one per card), and starts
// listening. Each router lives in routes/ and owns exactly one
// endpoint — see §6 and §7 of guidelines.md for the full map.
//
// You should not need to edit this file for your assignment:
// your route file is already mounted below.
// ============================================================

const express = require("express");
const cors = require("cors");

// Importing db/database.js (indirectly, via queries.js inside each router)
// is what creates minidash.db and seeds it on first boot.
const profileRoutes = require("./routes/profile.routes");
const timeRoutes = require("./routes/time.routes");
const statsRoutes = require("./routes/stats.routes");
const tasksRoutes = require("./routes/tasks.routes");
const announcementsRoutes = require("./routes/announcements.routes");
const weatherRoutes = require("./routes/weather.routes");
const notesRoutes = require("./routes/notes.routes");
const membersRoutes = require("./routes/members.routes");
const linksRoutes = require("./routes/links.routes");
const activityRoutes = require("./routes/activity.routes");
const goalsRoutes = require("./routes/goals.routes");
const quoteRoutes = require("./routes/quote.routes");

const app = express();
const PORT = 3000;

// Lets the Expo app (running on your phone or in the browser) call this API.
app.use(cors());

// A friendly landing page so visiting http://localhost:3000 in a browser shows something.
app.get("/", (req, res) => {
  res.json({
    name: "MiniDash API",
    message: "👋 The MiniDash backend is running. Try GET /api/quote",
    endpoints: [
      "/api/profile",
      "/api/time",
      "/api/stats",
      "/api/tasks",
      "/api/announcements",
      "/api/weather",
      "/api/notes",
      "/api/members",
      "/api/links",
      "/api/activity",
      "/api/goals",
      "/api/quote",
    ],
  });
});

// One line per member — each mounts their router at their endpoint's base path.
app.use("/api/profile", profileRoutes); // Member #1
app.use("/api/time", timeRoutes); // Member #2
app.use("/api/stats", statsRoutes); // Member #3
app.use("/api/tasks", tasksRoutes); // Member #4
app.use("/api/announcements", announcementsRoutes); // Member #5
app.use("/api/weather", weatherRoutes); // Member #6
app.use("/api/notes", notesRoutes); // Member #7
app.use("/api/members", membersRoutes); // Member #8
app.use("/api/links", linksRoutes); // Member #9
app.use("/api/activity", activityRoutes); // Member #10
app.use("/api/goals", goalsRoutes); // Member #11
app.use("/api/quote", quoteRoutes); // Member #12 ⭐ reference endpoint

app.listen(PORT, () => {
  console.log(`🚀 MiniDash API listening on http://localhost:${PORT}`);
  console.log(`   Try it: http://localhost:${PORT}/api/quote`);
});
