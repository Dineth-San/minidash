# 02 — From Frontend to Backend: How a Card Gets Its Data

This doc explains the actual mechanics of "a card on your phone shows data
that lives on a server" — the part that feels like magic until you've traced
it through once. We'll use the finished **Quote card** as our worked example,
since it's the one piece of the app that's 100% complete already.

## First, three words you'll see everywhere

- **API** — short for "Application Programming Interface." In our case, it
  just means "the set of URLs our backend server understands and will answer."
  Think of it as a menu of questions you're allowed to ask the server.

- **Endpoint** — *one specific item* on that menu. `GET /api/quote` is an
  endpoint. So is `GET /api/weather`. Each endpoint answers exactly one kind
  of question.

- **GET** — the "I'm just looking, not changing anything" type of request.
  Every endpoint in MiniDash is a `GET`, because the whole app is read-only —
  nobody ever writes data back. (If you've heard of `POST`, `PUT`, `DELETE` —
  great, but you won't need them here.)

- **JSON** — "JavaScript Object Notation." It's just a text format for sending
  structured data around, and it looks exactly like a JavaScript object:
  `{ "text": "Stay curious.", "author": "Anon" }`. Every endpoint in MiniDash
  replies with JSON.

- **`fetch`** — the built-in JavaScript function for asking a server for
  something over the network. You hand it a URL, it goes and asks, and it
  comes back with a response (eventually — see "async" below).

## The round trip, step by step (using the Quote card)

Here's the full journey of "user opens the app and sees a quote", traced
through the actual files:

### 1. The card mounts and asks for data

[`frontend/components/QuoteCard.js`](../frontend/components/QuoteCard.js) is a
React component. When it first appears on screen, a `useEffect` with an empty
dependency array (`[]`, meaning "run this once") calls:

```js
get("/api/quote")
```

`get` is a tiny helper from
[`frontend/api/client.js`](../frontend/api/client.js). All it does is call
`fetch(BASE_URL + path)` and parse the JSON reply. Every card uses this same
helper — it's the one place that knows the server's address (more on that in
[04-running-the-project.md](04-running-the-project.md)).

### 2. The request crosses the network to the backend

That `fetch` call sends an HTTP `GET` request to something like
`http://192.168.1.50:3000/api/quote`. On the other end,
[`backend/server.js`](../backend/server.js) is running an Express server that's
been told: "anything starting with `/api/quote` — send it to the quote router."

### 3. The route handler runs

[`backend/routes/quote.routes.js`](../backend/routes/quote.routes.js) is that
router. It has one handler:

```js
router.get("/", (req, res) => {
  try {
    const quote = getQuote();
    res.json(quote);
  } catch (err) {
    res.status(500).json({ error: "Could not load the quote right now." });
  }
});
```

`req` is the incoming request (we don't need anything from it here — no params,
no query string). `res` is how we reply. The handler asks the database layer
for data, then replies with `res.json(...)`.

### 4. The database layer fetches the actual row

`getQuote` comes from [`backend/db/queries.js`](../backend/db/queries.js) — the
**only** file in the whole project that contains SQL. It runs one prepared
statement against the `quotes` table and returns a plain JavaScript object:
`{ text: "...", author: "..." }`. The route handler never sees any SQL — it
just gets back the answer.

### 5. The reply flows all the way back

Express turns that object into JSON text and sends it back over the network.
Back in `QuoteCard`, the `fetch` promise resolves, `get()` hands back the
parsed object, and the card calls `setData(quote)`. React re-renders the
component, and the quote appears on screen — loading spinner gone, real data
shown.

### 6. "Async" — why we use `.then()` / `await` at all

Network requests take time (milliseconds to seconds), and JavaScript doesn't
want to *freeze* while waiting. So `fetch` immediately returns a `Promise` — a
placeholder for "the answer, when it arrives" — and your code says "**when**
this resolves, do this": `.then(data => setData(data))`. That's why `QuoteCard`
keeps a `loading` flag in state: it starts `true`, and flips to `false` once
the promise resolves (whether it succeeded or failed).

## Your job: do the exact same six steps, with your own endpoint

Open `QuoteCard.js` and your own stub side by side. You'll be doing the same
six things:

1. `useState` for `data`, `loading`, `error`
2. `useEffect(() => { ... }, [])` to fetch once on mount
3. Show `Loading…` while waiting
4. Show a friendly message if it fails
5. Render the real data once it arrives (your own JSX, your own layout)
6. Style it with a local `StyleSheet`

Same shape, different data, different look. That's the whole assignment —
see [05-assignments.md](05-assignments.md) for your specific endpoint and
response shape.
