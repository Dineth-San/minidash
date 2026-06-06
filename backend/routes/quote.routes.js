// ============================================================
// MEMBER #12 — QuoteCard data endpoint  ⭐ REFERENCE IMPLEMENTATION
// FILE: backend/routes/quote.routes.js   MOUNTED AT: /api/quote
// ------------------------------------------------------------
// This is the file every other member's route should mirror.
// It is intentionally tiny — that's the whole pattern:
//
//   1. Make a Router.
//   2. Handle GET "/".
//   3. Ask queries.js for data (no SQL here — that's owned by Claude Code).
//   4. res.json(...) on success, res.status(500) on failure.
//   5. Export the router so server.js can mount it.
//
// Copy this shape, swap `getQuote` for your own query function, and you're done.
// ============================================================

const express = require("express");
const router = express.Router();

// All SQL lives in db/queries.js — this file only ever calls the function.
const { getQuote } = require("../db/queries");

// GET /api/quote -> { text, author }
router.get("/", (req, res) => {
  try {
    const quote = getQuote();
    res.json(quote);
  } catch (err) {
    console.error("GET /api/quote failed:", err);
    res.status(500).json({ error: "Could not load the quote right now." });
  }
});

module.exports = router;
