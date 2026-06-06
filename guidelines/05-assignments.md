# 05 — Assignments: Find Your Card

This is the page you actually need to *act on*. Find your member number,
note your two files, and get going.

## The Master Assignment Table

Each member owns **exactly one backend route file + one frontend card file**.
They are completely independent — see [01-architecture.md](01-architecture.md)
for why that's possible.

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
| **#12 (Claude Code)** | `quote.routes.js` → `GET /api/quote` | `QuoteCard.js` | **full reference for all of the above** ⭐ |

## The endpoint contracts (what your JSON should look like)

Every endpoint is a `GET` that replies with JSON, by calling **one** ready-made
function from `backend/db/queries.js` (you never write SQL — see
[01-architecture.md](01-architecture.md)).

| Endpoint | Query function (already written for you) | Response shape |
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

## Your per-member checklist

Whichever number you are, the steps are identical — only the file names and
shapes change:

1. **Read the guide comments** at the top of your two stub files:
   - `backend/routes/<your-file>.routes.js`
   - `frontend/components/<YourCard>.js`

   They restate your goal, your query function, and your response shape, plus
   numbered steps to follow (not the answer — that's for you to write!).

2. **Open the reference files side by side with yours:**
   - [`backend/routes/quote.routes.js`](../backend/routes/quote.routes.js)
   - [`frontend/components/QuoteCard.js`](../frontend/components/QuoteCard.js)

   Mirror their *pattern* — Router → handler → try/catch → `res.json` on the
   backend; `useState` → `useEffect` → loading/error/data on the frontend.
   Don't copy-paste blindly; the goal is to understand each line as you write
   your version of it.

3. **Branch, edit, commit, push, PR** — following the exact workflow in
   [03-git-basics.md](03-git-basics.md):
   - `git checkout -b member-<N>`
   - **Edit only your two files** — nothing else, ever. (This is the rule
     that keeps 11 people from colliding. See [03-git-basics.md](03-git-basics.md).)
   - `git add` your two files by name, `git commit` with a clear message
   - `git push origin member-<N>`
   - Open **one Pull Request**: base = `main`, compare = `member-<N>`

4. **Test it for real** — run both apps (see
   [04-running-the-project.md](04-running-the-project.md)), find your card on
   the dashboard, and confirm it shows real data instead of the gray
   "build me 👋" placeholder or a `501` error.

That's the whole assignment. Good luck — and have fun watching your card come
to life on the screen! 🎉
