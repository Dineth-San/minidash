// ============================================================
// MiniDash API client — the ONE place that knows the server's address
// ------------------------------------------------------------
// Every card calls `get('/api/something')` from here instead of using
// `fetch` directly. That keeps the "where is the server?" question in
// exactly one spot.
//
// ⚠️ THE #1 GOTCHA: a phone (or emulator) cannot reach "localhost" —
// "localhost" on a phone means the phone itself, not your laptop!
//
//   • Physical phone running Expo Go:
//       Use your computer's LAN IP, e.g. "http://192.168.1.50:3000"
//       (run `ipconfig` on Windows / `ifconfig` or `ipconfig getifaddr en0`
//       on Mac to find it — ask a teammate if you're not sure).
//   • Android emulator:
//       Use "http://10.0.2.2:3000" (a special alias the emulator maps to
//       your computer's localhost).
//   • iOS simulator:
//       "http://localhost:3000" works fine, because the simulator shares
//       your Mac's network stack.
//
// Agree on ONE value as a team so all 12 cards work for everyone — see
// guidelines/04-running-the-project.md for the full walkthrough.
// ============================================================

export const BASE_URL = "http://192.168.1.7:3000";

// A tiny wrapper around fetch() for simple GET + JSON requests.
// Returns the parsed JSON body, or throws on a network/HTTP error so your
// component's try/catch (or .catch) can show an error state.
export async function get(path) {
  const response = await fetch(`${BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Request to ${path} failed with status ${response.status}`);
  }

  return response.json();
}
