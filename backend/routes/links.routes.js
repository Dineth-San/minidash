// ============================================================
// MEMBER #9 — LinksCard data endpoint
// FILE: backend/routes/links.routes.js   MOUNTED AT: /api/links
// ------------------------------------------------------------
// GOAL: return JSON shaped like [{ id, label, url }]  (see §7 of guidelines.md)
// DATA: call queries.getLinks()  // already written for you — do NOT write SQL
//
// STEPS (do NOT just copy the answer — follow the pattern in quote.routes.js):
//   1. import express and create a Router
//   2. import { getLinks } from "../db/queries.js"
//   3. add a GET "/" handler: read data = getLinks(), then res.json(data)
//   4. wrap it in try/catch; on error res.status(500).json({ error: "..." })
//   5. export the router (server.js already mounts it)
// REFERENCE: backend/routes/quote.routes.js
// ============================================================

const express = require("express");
const {getLinks} = require("../db/queries.js");
const router = express.Router();

// TODO Member #9: replace this placeholder with your real handler.
router.get("/", (req, res) => {
  try{
    const data =getLinks();
    res.json(data);
  } catch (error) {
    res.status(500).json({error:"Could not load links"});
  }
});

module.exports = router;
