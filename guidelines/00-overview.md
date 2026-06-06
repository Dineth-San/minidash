# 00 — What is MiniDash?

Welcome! 👋 This doc is your "what is this thing and why am I building it" intro.

## The one-line version

**MiniDash** is a tiny mobile app — one screen, full of cards — that shows simple,
read-only information like a quote, the weather, your team's tasks, and so on.
Nothing fancy: there's no login, no buttons that save data, nothing to type in.
Just a scrollable screen of 12 little cards, each showing something different.

## Why are we building something this small?

Because **the app isn't really the point — *you* are.** MiniDash exists so that
**11 of you** can each learn three things, hands-on, as fast as possible:

- **React Native** — how to build mobile screens with components
- **Node.js / Express** — how to build a small web server with endpoints
- **Git** — how to branch, commit, push, and open a Pull Request without fear

The app is intentionally tiny so that the *learning* is the focus, not fighting
with a huge, confusing codebase.

## The 12-card model

The app shows **12 cards**, stacked one after another on a single screen called
`DashboardScreen`. Every card is powered by exactly **one backend endpoint**:

```
Card on screen   ──fetches from──▶   One backend endpoint   ──reads from──▶   Database
```

There are 12 cards and 12 endpoints — one pair per person on the team:

- **You (Members #1–#11)** each own **one card + one endpoint**. That's your
  whole assignment. Build it, test it, open a PR for it.
- **Member #12 is Claude Code** — it built the database, the server shell, the
  app shell, *and* one fully-finished card+endpoint pair (the "Quote" one) as a
  **reference** for everyone else to copy the pattern from.

## "You own one card + one endpoint" — what does that actually mean?

It means there are exactly **two files with your name on them**:

1. A backend route file, e.g. `backend/routes/stats.routes.js`
2. A frontend card file, e.g. `frontend/components/StatsCard.js`

You read data out of the database (already done for you — see
[01-architecture.md](01-architecture.md)), return it as JSON from your endpoint,
fetch it from your card, and show it on screen. That's the whole loop, and
you'll do it the exact same way the reference "Quote" card does it.

## Where to go next

- New to the idea of frontend/backend/database? Read
  [01-architecture.md](01-architecture.md) next.
- Want to see exactly how a card talks to an endpoint? Read
  [02-frontend-to-backend.md](02-frontend-to-backend.md).
- Ready to find out which card is *yours*? Jump to
  [05-assignments.md](05-assignments.md).
