# MiniDash

A tiny mobile dashboard that displays simple, read-only information as a grid
of cards — built as a **learning project for a 12-person team** to practice
**React Native**, **Node.js (Express)**, and **basic Git** by each owning one
card and one endpoint, start to finish.

> 📚 New here? Start with [`guidelines/00-overview.md`](guidelines/00-overview.md)
> — it explains what MiniDash is, why it's shaped this way, and what you'll learn.

## What you get

- **Backend:** a small Express server with 12 read-only `GET` endpoints,
  backed by a zero-config SQLite database (already built — nobody needs to
  touch SQL).
- **Frontend:** a single-screen Expo / React Native app titled "MiniDash"
  that stacks 12 cards, one per endpoint.
- **One fully-finished reference pair** (`quote.routes.js` + `QuoteCard.js`)
  to copy the pattern from, and **11 runnable placeholder pairs** — one per
  learner — each with a written guide in its file's comments.

## Quick start

You'll run two things side by side: the **backend** (the server) and the
**frontend** (the app). Full walkthrough with troubleshooting in
[`guidelines/04-running-the-project.md`](guidelines/04-running-the-project.md)
— short version below.

### 1. Clone & install

```bash
git clone <repo-url>
cd minidash
```

### 2. Run the backend

```bash
cd backend
npm install
npm run start            # boots Express on http://localhost:3000 and creates minidash.db
```

The first run creates and seeds `minidash.db` automatically. Visit
`http://localhost:3000/api/quote` in a browser — you should see a JSON quote.

### 3. Run the frontend

In a **second terminal**:

```bash
cd frontend
npm install
npx expo start           # scan QR with the Expo Go app, or press a for Android / i for iOS
```

### ⚠️ Before you do anything else: set your `BASE_URL`

A phone can't reach `localhost` — that means *the phone itself*, not your
computer! Open [`frontend/api/client.js`](frontend/api/client.js) and set
`BASE_URL` to your computer's LAN IP (e.g. `http://192.168.1.50:3000`), or
`http://10.0.2.2:3000` for the Android emulator. **This trips up almost
everyone the first time** — the full explanation (and how to find your IP) is
in [`guidelines/04-running-the-project.md`](guidelines/04-running-the-project.md#%EF%B8%8F-3-the-base_url-gotcha--read-this-carefully).

## Project layout

```
minidash/
├── README.md                 ← you are here
├── guidelines/               ← start with 00-overview.md
├── backend/                  ← Express API + SQLite database
│   ├── server.js
│   ├── db/                   (schema, seed data, queries — all SQL lives here)
│   └── routes/               (one router per endpoint)
└── frontend/                 ← Expo / React Native app
    ├── App.js
    ├── api/client.js         (BASE_URL + fetch helper)
    ├── screens/DashboardScreen.js
    └── components/           (one card per endpoint)
```

## How the pieces fit together

```
 [ Phone / Expo app ]                 [ Node + Express server ]            [ SQLite file ]
  DashboardScreen                       server.js (mounts routes)            minidash.db
     ├─ ProfileCard  ──fetch GET──►  /api/profile  ──calls──►  queries.getProfile()  ──►  reads table
     ├─ TasksCard    ──fetch GET──►  /api/tasks    ──calls──►  queries.getTasks()    ──►  reads table
     └─ ...12 cards                  ...12 routes              ...12 query functions
```

Every card talks to exactly **one** endpoint, and every endpoint calls exactly
**one** ready-made query function. That's what lets 12 people build at once
without ever touching each other's files — see
[`guidelines/01-architecture.md`](guidelines/01-architecture.md) for the full
explanation.

## The guidelines/ folder

Read these roughly in order — they're written for someone who's never built
an app before:

1. [**00-overview.md**](guidelines/00-overview.md) — what MiniDash is and why it exists
2. [**01-architecture.md**](guidelines/01-architecture.md) — frontend vs backend vs database, and why the split keeps everyone independent
3. [**02-frontend-to-backend.md**](guidelines/02-frontend-to-backend.md) — APIs, `GET`, JSON, `fetch`, and the Quote card round trip, step by step
4. [**03-git-basics.md**](guidelines/03-git-basics.md) — the exact branch → commit → push → PR workflow, with copy-paste commands
5. [**04-running-the-project.md**](guidelines/04-running-the-project.md) — install & run steps, plus the all-important `BASE_URL` gotcha
6. [**05-assignments.md**](guidelines/05-assignments.md) — find your member number, your two files, your endpoint shape, and your checklist

## For Members #1–#11: where do I start?

1. Find your row in the table in [`guidelines/05-assignments.md`](guidelines/05-assignments.md)
2. Open your two stub files — they have a written guide in the comments at the top:
   - `backend/routes/<your-file>.routes.js`
   - `frontend/components/<YourCard>.js`
3. Open the reference pair side-by-side and mirror the *pattern*:
   - [`backend/routes/quote.routes.js`](backend/routes/quote.routes.js)
   - [`frontend/components/QuoteCard.js`](frontend/components/QuoteCard.js)
4. Branch, build, commit, push, and open one Pull Request — see
   [`guidelines/03-git-basics.md`](guidelines/03-git-basics.md)

**Golden rule:** only edit your own two files. That's what keeps 11 people
working at once from ever causing a merge conflict.
