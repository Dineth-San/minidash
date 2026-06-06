// ============================================================
// MEMBER #4 — TasksCard data endpoint
// FILE: backend/routes/tasks.routes.js   MOUNTED AT: /api/tasks
// ------------------------------------------------------------
// GOAL: return JSON shaped like [{ id, title, status }]  (see §7 of guidelines.md)
// DATA: call queries.getTasks(status)  // already written for you — do NOT write SQL
//
// EXTRA: this endpoint also supports an optional query string —
//   GET /api/tasks            -> every task
//   GET /api/tasks?status=open  -> only the open ones
//   GET /api/tasks?status=done  -> only the finished ones
// queries.getTasks() already knows how to filter — just hand it whatever
// status you were asked for (Express puts query strings on `req.query`).
//
// STEPS (do NOT just copy the answer — follow the pattern in quote.routes.js):
//   1. import express and create a Router
//   2. import { getTasks } from "../db/queries.js"
//   3. add a GET "/" handler: read the optional `status` from req.query,
//      call data = getTasks(status), then res.json(data)
//   4. wrap it in try/catch; on error res.status(500).json({ error: "..." })
//   5. export the router (server.js already mounts it)
// REFERENCE: backend/routes/quote.routes.js
// ============================================================

const express = require("express");
const router = express.Router();

// TODO Member #4: replace this placeholder with your real handler.
router.get("/", (req, res) => {
  res.status(501).json({ error: "Member #4 endpoint not implemented yet" });
});

module.exports = router;
