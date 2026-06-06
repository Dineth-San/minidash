# 04 — Running the Project

Two apps, two terminals, running at the same time: the **backend** (the
server) and the **frontend** (the app on your phone). Start the backend
first — the frontend needs something to talk to.

## 1. Start the backend

In one terminal:

```bash
cd backend
npm install
npm run start            # boots Express on http://localhost:3000 and creates minidash.db
```

- `npm install` downloads the project's dependencies (Express, the SQLite
  driver, etc.) into a `node_modules` folder. You only need to do this once
  per machine (and again if `package.json` ever changes).
- `npm run start` boots the server. The very first time it runs, it also
  creates and fills `minidash.db` — the SQLite database file — with starter
  data. You should see a message like `🚀 MiniDash API listening on
  http://localhost:3000`.
- Leave this terminal running. Visit `http://localhost:3000/api/quote` in a
  browser on the same computer — you should see a little JSON quote pop up.
  That means your backend is alive and well.

## 2. Start the frontend

In a **second** terminal:

```bash
cd frontend
npm install
npx expo start           # scan QR with the Expo Go app, or press a for Android / i for iOS
```

- Again, `npm install` only needs to run once (or after `package.json`
  changes).
- `npx expo start` opens "Metro" — Expo's dev tool — usually showing a QR
  code in your terminal and a small web page.
- **On your phone:** install the free **Expo Go** app (App Store / Play
  Store), then scan the QR code. The MiniDash app opens right on your phone.
- **On your computer:** press `a` in the terminal for an Android emulator, or
  `i` for an iOS simulator (Mac only — needs Xcode installed).

## ⚠️ 3. The `BASE_URL` gotcha — read this carefully!

This trips up almost everyone the first time, so let's get ahead of it:

> **A phone (or emulator) cannot reach `localhost`.** On a phone, "localhost"
> means *the phone itself* — not the laptop running your server! If you leave
> `BASE_URL` set to `localhost`, every single card will fail to load, with no
> obvious explanation.

The fix lives in **one file**:
[`frontend/api/client.js`](../frontend/api/client.js), in the line:

```js
export const BASE_URL = "http://localhost:3000";
```

Change it depending on how you're running the app:

| You're running on...           | Set `BASE_URL` to...                                    |
|---------------------------------|---------------------------------------------------------|
| A physical phone (Expo Go)       | Your computer's **LAN IP**, e.g. `http://192.168.1.50:3000` |
| Android emulator                 | `http://10.0.2.2:3000` (a special alias for your computer's localhost) |
| iOS simulator (Mac)              | `http://localhost:3000` works — the simulator shares your Mac's network |

**Finding your computer's LAN IP:**
- Windows: open a terminal and run `ipconfig`, look for "IPv4 Address"
- Mac: run `ipconfig getifaddr en0` (or check System Settings → Wi-Fi → Details)
- Linux: run `ip addr` or `hostname -I`

> 🤝 **Team tip:** whoever is running the backend should share their LAN IP
> with the rest of the team (in chat, on a sticky note, however) so that
> *everyone's* `BASE_URL` points to the same running server. Otherwise some
> cards will load and others won't, and it'll look like a bug in someone's
> code when it's really just a mismatched IP.

## Quick checklist if something looks broken

- [ ] Is the backend terminal still running, with no red error text?
- [ ] Does `http://localhost:3000/api/quote` load in a browser on the
      *server* computer?
- [ ] Does `BASE_URL` in `client.js` match the **server computer's** LAN IP
      (not `localhost`, unless you're on an iOS simulator)?
- [ ] Are your phone and your computer on the **same Wi-Fi network**?
- [ ] Did you run `npm install` in *both* `backend/` and `frontend/`?

If all of those check out and a card still won't load, it's most likely that
specific endpoint returning a `501` — which is expected for any card that
hasn't been built yet (see [05-assignments.md](05-assignments.md))!
