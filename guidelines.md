# MiniDash — System Plan & Build Guidelines (for Claude Code)

> **Read this entire file before doing anything.** This document is the single source of
> truth for building **MiniDash**, a tiny full-stack learning project for a **12-person team**
> (11 human learners + you, Claude Code, as Member #12).
>
> Your job is **NOT** to build the whole app. Your job is to **scaffold everything around it**,
> fully implement **only Member #12's slice** as a worked reference, and leave **clearly marked,
> runnable stub files with written guides** for Members #1–#11 to fill in themselves.

---

## 1. The App: Specification & Goal

**Name:** MiniDash
**One-liner:** A tiny mobile dashboard that displays simple, read-only information as a grid of cards.

**Goal of the project (the real point):** This is a **learning vehicle**, not a product. Eleven
team members must each learn **React Native**, **Node.js (Express)**, and **basic Git** as fast as
possible by each owning **one frontend card** and **one backend endpoint** that they build start to
finish, in isolation, without stepping on each other.

> ⚠️ Members are **NOT** learning SQLite. All database/SQL work is owned by Claude Code (Member #12).
> Members only ever *call a ready-made data function* — they never write SQL.

**What the user sees:** A single scrollable screen titled "MiniDash". On it, **12 cards** stacked
vertically (each ~1 screen-width). Each card fetches its own data from one backend endpoint and
shows it. No login, no navigation, no writing data. Read-only. That's the whole app.

**Frontend size budget:** 1 screen + 12 small card components + 1 tiny API helper. (≈4 pages of code total.)

---

## 2. Tech Stack (and why)

| Layer    | Tech                         | Why this choice |
|----------|------------------------------|-----------------|
| Frontend | **React Native via Expo**    | Easiest possible RN setup for beginners — no Xcode/Android Studio build config. |
| Backend  | **Node.js + Express**        | Smallest, most-taught way to make HTTP endpoints. |
| Database | **SQLite via `better-sqlite3`** | File-based, zero-config, **synchronous** so the code reads top-to-bottom with no async confusion. Owned entirely by Claude Code. |
| Tooling  | **Git**                      | Each member works on their own branch and opens one Pull Request. |

---

## 3. What Each Member Learns

- **React Native:** components, `useState`, `useEffect`, `fetch`, `FlatList`, basic `StyleSheet`.
- **Node.js / Express:** routers, route handlers, `req`/`res`, JSON responses, status codes, query params.
- **Git:** `clone`, `branch`, `add`, `commit`, `push`, `pull`, and opening a PR.

---

## 4. High-Level Architecture (keep this tiny)

```
 [ Phone / Expo app ]                 [ Node + Express server ]            [ SQLite file ]
  DashboardScreen                       server.js (mounts routes)            minidash.db
     ├─ ProfileCard  ──fetch GET──►  /api/profile  ──calls──►  queries.getProfile()  ──►  reads table
     ├─ TasksCard    ──fetch GET──►  /api/tasks    ──calls──►  queries.getTasks()    ──►  reads table
     └─ ...12 cards                  ...12 routes              ...12 query functions
```

**The contract that keeps members independent:** every card talks to exactly **one** endpoint, and
every endpoint calls exactly **one** ready-made query function. Members never touch each other's
files, the DB, or the app shell.

---

## 5. Repository Structure (Claude Code creates ALL of this)

Legend: **[CC-FULL]** = you implement completely · **[CC-STUB]** = you create a runnable placeholder + written guide for a member · **[CC-DOC]** = you write a beginner doc.

```
minidash/
├── README.md                         [CC-FULL]  how to clone & run, links to guidelines/
├── guidelines/                       (beginner docs — see §11)
│   ├── 00-overview.md                [CC-DOC]
│   ├── 01-architecture.md            [CC-DOC]
│   ├── 02-frontend-to-backend.md     [CC-DOC]
│   ├── 03-git-basics.md              [CC-DOC]
│   ├── 04-running-the-project.md     [CC-DOC]
│   └── 05-assignments.md             [CC-DOC]
│
├── backend/
│   ├── package.json                  [CC-FULL]
│   ├── server.js                     [CC-FULL]  boots Express, mounts all 12 routers
│   ├── db/
│   │   ├── database.js               [CC-FULL]  opens SQLite, runs schema + seed once
│   │   ├── schema.sql                [CC-FULL]
│   │   ├── seed.sql                  [CC-FULL]
│   │   └── queries.js                [CC-FULL]  one query function per member (NO member writes SQL)
│   └── routes/
│       ├── quote.routes.js           [CC-FULL]  ⭐ Member #12 reference endpoint
│       ├── profile.routes.js         [CC-STUB]  Member #1
│       ├── time.routes.js            [CC-STUB]  Member #2
│       ├── stats.routes.js           [CC-STUB]  Member #3
│       ├── tasks.routes.js           [CC-STUB]  Member #4
│       ├── announcements.routes.js   [CC-STUB]  Member #5
│       ├── weather.routes.js         [CC-STUB]  Member #6
│       ├── notes.routes.js           [CC-STUB]  Member #7
│       ├── members.routes.js         [CC-STUB]  Member #8
│       ├── links.routes.js           [CC-STUB]  Member #9
│       ├── activity.routes.js        [CC-STUB]  Member #10
│       └── goals.routes.js           [CC-STUB]  Member #11
│
└── frontend/
    ├── package.json                  [CC-FULL]  (Expo)
    ├── App.js                        [CC-FULL]  renders DashboardScreen
    ├── api/
    │   └── client.js                 [CC-FULL]  BASE_URL + get(path) helper
    ├── screens/
    │   └── DashboardScreen.js        [CC-FULL]  ScrollView that renders all 12 cards in order
    └── components/
        ├── QuoteCard.js              [CC-FULL]  ⭐ Member #12 reference component
        ├── ProfileCard.js            [CC-STUB]  Member #1
        ├── ClockCard.js              [CC-STUB]  Member #2
        ├── StatsCard.js              [CC-STUB]  Member #3
        ├── TasksCard.js              [CC-STUB]  Member #4
        ├── AnnouncementsCard.js      [CC-STUB]  Member #5
        ├── WeatherCard.js            [CC-STUB]  Member #6
        ├── NotesCard.js              [CC-STUB]  Member #7
        ├── MembersCard.js            [CC-STUB]  Member #8
        ├── LinksCard.js              [CC-STUB]  Member #9
        ├── ActivityCard.js           [CC-STUB]  Member #10
        └── GoalsCard.js              [CC-STUB]  Member #11
```

---

## 6. Master Assignment Table

Each member owns **exactly one route file + one component file**. They are independent.

| Member | Backend file (endpoint) | Frontend file (card) | RN concept practiced |
|-------:|-------------------------|----------------------|----------------------|
| **#1**  | `profile.routes.js` → `GET /api/profile` | `ProfileCard.js` | state + fetch, View/Text styling |
| **#2**  | `time.routes.js` → `GET /api/time` | `ClockCard.js` | string formatting, greeting logic |
| **#3**  | `stats.routes.js` → `GET /api/stats` | `StatsCard.js` | flex row of mini-boxes |
| **#4**  | `tasks.routes.js` → `GET /api/tasks` | `TasksCard.js` | `FlatList`, conditional badge style |
| **#5**  | `announcements.routes.js` → `GET /api/announcements` | `AnnouncementsCard.js` | `FlatList`, multi-line text |
| **#6**  | `weather.routes.js` → `GET /api/weather` | `WeatherCard.js` | conditional rendering (emoji by condition) |
| **#7**  | `notes.routes.js` → `GET /api/notes` | `NotesCard.js` | list rendering |
| **#8**  | `members.routes.js` → `GET /api/members` | `MembersCard.js` | `FlatList` two-line rows |
| **#9**  | `links.routes.js` → `GET /api/links` | `LinksCard.js` | `Pressable` + `Linking.openURL` |
| **#10** | `activity.routes.js` → `GET /api/activity` | `ActivityCard.js` | `FlatList` feed |
| **#11** | `goals.routes.js` → `GET /api/goals` | `GoalsCard.js` | percentage-width progress bar |
| **#12 (You)** | `quote.routes.js` → `GET /api/quote` | `QuoteCard.js` | **full reference for all of the above** |

---

## 7. Backend Endpoint Contracts

All endpoints are **GET**, return **JSON**, and call one function from `db/queries.js`.
**Members do not write SQL** — Claude Code implements every function in `queries.js` and lists its
name in each stub.

| Endpoint | Query function (CC writes) | Response shape |
|----------|----------------------------|----------------|
| `GET /api/profile` | `getProfile()` | `{ name, role, initials }` |
| `GET /api/time` | `getGreeting()` | `{ greeting, serverTime, date }` |
| `GET /api/stats` | `getStats()` | `{ totalTasks, completed, pending, members }` |
| `GET /api/tasks` | `getTasks(status?)` | `[{ id, title, status }]` — supports `?status=open\|done` |
| `GET /api/announcements` | `getAnnouncements()` | `[{ id, title, body, date }]` |
| `GET /api/weather` | `getWeather()` | `{ city, tempC, condition }` |
| `GET /api/notes` | `getNotes()` | `[{ id, text }]` |
| `GET /api/members` | `getMembers()` | `[{ id, name, role }]` |
| `GET /api/links` | `getLinks()` | `[{ id, label, url }]` |
| `GET /api/activity` | `getActivity()` | `[{ id, who, action, time }]` |
| `GET /api/goals` | `getGoals()` | `[{ id, label, percent }]` |
| `GET /api/quote` ⭐ | `getQuote()` | `{ text, author }` |

---

## 8. Database (Claude Code owns 100% of this)

In `schema.sql`, create one small table per data type (`profile`, `tasks`, `announcements`,
`weather`, `notes`, `members`, `links`, `activity`, `goals`, `quotes`, `greeting`). In `seed.sql`,
insert **2–5 fake rows each** (e.g. 4 tasks, 3 announcements, 6 team members, 3 goals with percents).
Keep all values obviously fake and friendly.

`database.js`: open `minidash.db` with `better-sqlite3`, run `schema.sql` then `seed.sql` **only if
the DB is empty**, and export the `db` instance. `queries.js`: import `db`, implement **every**
function from §7 (one `db.prepare(...).all()/.get()` each), and export them. This is the only place
SQL lives.

---

## 9. Reference Implementation — Member #12 (build these COMPLETELY)

These two files are the **gold-standard examples** every learner copies the *pattern* from.
Implement them fully and idiomatically, with short teaching comments.

**`backend/routes/quote.routes.js` (full):** an Express `Router`, a `GET /` handler wrapped in
`try/catch` that calls `getQuote()`, returns it with `res.json(...)`, and returns `res.status(500)`
on error. Export the router. (`server.js` mounts it at `/api/quote`.)

**`frontend/components/QuoteCard.js` (full):** a function component using `useState` for
`data`/`loading`/`error`, `useEffect` to `get('/api/quote')` on mount, render a loading text, an
error text, or the quote + author inside a styled `Card` view, plus a small "🔄 Refresh" `Pressable`
that re-fetches. Use a local `StyleSheet`.

> Keep `QuoteCard` self-contained so a member can open it side-by-side with their own stub and mirror it.

---

## 10. Stub Convention — Members #1–#11 (build these as RUNNABLE PLACEHOLDERS only)

For every `[CC-STUB]` file you must do three things:

1. **Make the app run today.** A stub route returns `501` ("not implemented yet"); a stub card shows
   a gray "Member #N — build me" placeholder. So the whole app boots and renders from day one, and
   each member simply replaces their own placeholder.
2. **Write the guide as comments at the top of the file** (the steps below — *words, not the solution*).
3. **Point them to the reference** (`QuoteCard.js` / `quote.routes.js`).

**Backend stub template (use for each route file):**
```js
// ============================================================
// MEMBER #<N> — <Name>Card data endpoint
// FILE: backend/routes/<x>.routes.js   MOUNTED AT: /api/<x>
// ------------------------------------------------------------
// GOAL: return JSON shaped like §7 of guidelines.md
// DATA: call queries.<fnName>()  // already written for you — do NOT write SQL
//
// STEPS (do NOT just copy the answer — follow the pattern in quote.routes.js):
//   1. import express and create a Router
//   2. import { <fnName> } from "../db/queries.js"
//   3. add a GET "/" handler: read data = <fnName>(), then res.json(data)
//   4. wrap it in try/catch; on error res.status(500).json({ error: "..." })
//   5. export the router (server.js already mounts it)
// REFERENCE: backend/routes/quote.routes.js
// ============================================================

const express = require("express");
const router = express.Router();

// TODO Member #<N>: replace this placeholder with your real handler.
router.get("/", (req, res) => {
  res.status(501).json({ error: "Member #<N> endpoint not implemented yet" });
});

module.exports = router;
```

**Frontend stub template (use for each card file):**
```js
// ============================================================
// MEMBER #<N> — <Name>Card
// FILE: frontend/components/<Name>Card.js
// ------------------------------------------------------------
// GOAL: fetch GET /api/<x> and display it (shape in §7).
//
// STEPS (mirror QuoteCard.js, do NOT copy blindly):
//   1. useState for data, loading, error
//   2. useEffect(() => { get('/api/<x>').then(setData)... }, [])
//   3. while loading -> <Text>Loading…</Text>
//   4. on error -> <Text>Could not load</Text>
//   5. render the data (RN concept for you: <see §6 table>)
//   6. style with a local StyleSheet (copy the Card style from QuoteCard)
// REFERENCE: frontend/components/QuoteCard.js
// ============================================================

import { View, Text, StyleSheet } from "react-native";

export default function <Name>Card() {
  // TODO Member #<N>: build this card. Placeholder below keeps the app running.
  return (
    <View style={styles.placeholder}>
      <Text>Member #<N>: build me 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: { padding: 16, margin: 8, backgroundColor: "#eee", borderRadius: 12 },
});
```

> `DashboardScreen.js` must already import and render all 12 cards in order, so as each member
> finishes their card, it lights up automatically with no changes needed elsewhere.

---

## 11. The `guidelines/` Folder (Claude Code writes these beginner docs)

Write each as short, friendly, jargon-light Markdown for someone who has never built an app.

- **`00-overview.md`** — what MiniDash is, the goal, the 12-member model, "you own one card + one endpoint."
- **`01-architecture.md`** — explain frontend vs backend vs database in plain words; include the ASCII diagram from §4; explain *why* the card → endpoint → query split keeps everyone independent.
- **`02-frontend-to-backend.md`** — what an API/endpoint is, what `GET` and JSON mean, how `fetch` works, and walk through the `QuoteCard` ↔ `/api/quote` round trip step by step.
- **`03-git-basics.md`** — the exact workflow in §12 with copy-paste commands and a one-line explanation of each.
- **`04-running-the-project.md`** — install + run steps from §13, including the `BASE_URL` gotcha.
- **`05-assignments.md`** — the table from §6, plus the per-member checklist: "edit only these 2 files, branch `member-N`, open one PR."

---

## 12. Git Workflow (one branch + one PR per member)

```bash
git clone <repo-url>          # get the project
cd minidash
git checkout -b member-3      # YOUR branch (use your member number)
# ...edit ONLY your two files: routes/stats.routes.js and components/StatsCard.js...
git add backend/routes/stats.routes.js frontend/components/StatsCard.js
git commit -m "Member #3: implement stats endpoint and card"
git push origin member-3      # push your branch
# then open a Pull Request on GitHub: base = main, compare = member-3
git pull origin main          # later, get everyone else's merged work
```

Rule for learners: **only touch your own two files.** This is what prevents merge conflicts.

---

## 13. How to Run (put in README + `04-running-the-project.md`)

**Backend:**
```bash
cd backend
npm install
npm run start            # boots Express on http://localhost:3000 and creates minidash.db
```

**Frontend:**
```bash
cd frontend
npm install
npx expo start           # scan QR with the Expo Go app, or press a for Android / i for iOS
```

**⚠️ BASE_URL gotcha (document this clearly):** a phone/emulator can't reach `localhost`.
In `frontend/api/client.js`, set `BASE_URL` to your computer's LAN IP, e.g.
`http://192.168.1.50:3000`. Android emulator uses `http://10.0.2.2:3000`. Tell members to ask one
person for the correct IP so all 11 cards work.

---

## 14. Definition of Done (for you, Claude Code)

You are finished when:
- [ ] Both apps install and run with the commands in §13.
- [ ] The DB schema + seed are complete; every function in `queries.js` returns real seeded data.
- [ ] `server.js` mounts **all 12** routers; `DashboardScreen.js` renders **all 12** cards.
- [ ] **Member #12** (`quote.routes.js` + `QuoteCard.js`) is fully implemented and works end-to-end.
- [ ] **Members #1–#11** files exist as **runnable placeholders** (501 route + "build me" card) with the **guide comments** filled in for their specific endpoint/shape.
- [ ] All six `guidelines/` docs are written.
- [ ] `README.md` covers clone + run and links to `guidelines/`.

**Do NOT implement the real logic for Members #1–#11. That is their learning work.**
Leave their files as guided placeholders only.
