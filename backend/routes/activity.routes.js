// ============================================================
// MEMBER #10 — ActivityCard data endpoint
// FILE: backend/routes/activity.routes.js   MOUNTED AT: /api/activity
// ------------------------------------------------------------
// GOAL: return JSON shaped like [{ id, who, action, time }]  (see §7 of guidelines.md)
// DATA: call queries.getActivity()  // already written for you — do NOT write SQL
//
// STEPS (do NOT just copy the answer — follow the pattern in quote.routes.js):
//   1. import express and create a Router
//   2. import { getActivity } from "../db/queries.js"
//   3. add a GET "/" handler: read data = getActivity(), then res.json(data)
//   4. wrap it in try/catch; on error res.status(500).json({ error: "..." })
//   5. export the router (server.js already mounts it)
// REFERENCE: backend/routes/quote.routes.js
// ============================================================

const express = require("express");
const router = express.Router();

// TODO Member #10: replace this placeholder with your real handler.
router.get("/", (req, res) => {
  res.status(501).json({ error: "Member #10 endpoint not implemented yet" });
});

module.exports = router;
