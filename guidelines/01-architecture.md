# 01 — Architecture: Frontend, Backend, Database

This doc explains the three "layers" of MiniDash in plain words, and — more
importantly — *why* the project is organized the way it is. Understanding
this will save you a lot of confusion later.

## The three layers

Think of MiniDash as three separate little programs that talk to each other:

1. **Frontend** — the app on your phone (built with React Native + Expo).
   This is the part people *see and tap*. It draws the screen, shows cards,
   and asks the backend for data.

2. **Backend** — a small web server (built with Node.js + Express) running on
   a laptop. It doesn't draw anything. Its only job is to listen for requests
   like "hey, give me the weather" and answer with data as JSON.

3. **Database** — a single file (`minidash.db`, SQLite) that actually stores
   the data: the tasks, the team roster, the quotes, and so on. Only the
   backend ever talks to it.

> 💡 **You will never touch the database directly.** That's owned entirely by
> Claude Code (Member #12). You'll see why in a moment.

## The picture

```
 [ Phone / Expo app ]                 [ Node + Express server ]            [ SQLite file ]
  DashboardScreen                       server.js (mounts routes)            minidash.db
     ├─ ProfileCard  ──fetch GET──►  /api/profile  ──calls──►  queries.getProfile()  ──►  reads table
     ├─ TasksCard    ──fetch GET──►  /api/tasks    ──calls──►  queries.getTasks()    ──►  reads table
     └─ ...12 cards                  ...12 routes              ...12 query functions
```

Read it left to right: **a card asks an endpoint, the endpoint asks a query
function, the query function reads a table** — and the answer flows all the
way back to the screen.

## Why this exact split? (the important bit)

Notice that every row above is a clean, independent line from a *card* to an
*endpoint* to a *query function*. That's not an accident — it's the whole
trick that lets **12 people build at the same time without stepping on each
other's toes**.

- **Your card only ever calls your endpoint.** Nobody else's card touches it,
  and your card touches nobody else's endpoint. No shared state, no shared
  screens (besides the one list in `DashboardScreen`, which Claude Code
  already wrote and you won't need to change).

- **Your endpoint only ever calls one ready-made query function.** You don't
  write any SQL, you don't open the database, you don't worry about whether
  your table design will clash with someone else's. You just call a function
  like `getStats()` that already returns exactly the data you need, in exactly
  the shape documented in the endpoint contracts (see the table in
  [05-assignments.md](05-assignments.md)).

- **The database is a black box that "just works."** Claude Code designed the
  tables, wrote the seed data, and wrote every query function up front. This
  means none of you have to learn SQL just to finish your card — one less
  thing to learn this week, and one less way to break something for everyone
  else.

The result: **you can build, break, and fix your own card and endpoint all day
long, and it is structurally impossible for that to affect anyone else's
work.** That's also exactly what keeps your Git history clean — see
[03-git-basics.md](03-git-basics.md) for why "only touch your own two files"
is the golden rule.

## Where to go next

Curious exactly *how* a card fetches data from an endpoint, line by line? Head
to [02-frontend-to-backend.md](02-frontend-to-backend.md) — it walks through
the reference Quote card end to end.
