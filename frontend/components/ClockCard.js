// ============================================================
// MEMBER #2 — ClockCard
// FILE: frontend/components/ClockCard.js
// ------------------------------------------------------------
// GOAL: fetch GET /api/time and display it — shape: { greeting, serverTime, date } (§7).
//
// STEPS (mirror QuoteCard.js, do NOT copy blindly):
//   1. useState for data, loading, error
//   2. useEffect(() => { get('/api/time').then(setData)... }, [])
//   3. while loading -> <Text>Loading…</Text>
//   4. on error -> <Text>Could not load</Text>
//   5. render the data — RN concept to practice: string formatting, greeting logic
//      (e.g. show the greeting big and bold, with the date and time underneath)
//   6. style with a local StyleSheet (copy the Card style from QuoteCard)
// REFERENCE: frontend/components/QuoteCard.js
// ============================================================

import { View, Text, StyleSheet } from "react-native";

export default function ClockCard() {
  // TODO Member #2: build this card. Placeholder below keeps the app running.
  return (
    <View style={styles.placeholder}>
      <Text>Member #2: build me 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: { padding: 16, margin: 8, backgroundColor: "#eee", borderRadius: 12 },
});
