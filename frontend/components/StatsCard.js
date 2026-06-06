// ============================================================
// MEMBER #3 — StatsCard
// FILE: frontend/components/StatsCard.js
// ------------------------------------------------------------
// GOAL: fetch GET /api/stats and display it — shape: { totalTasks, completed, pending, members } (§7).
//
// STEPS (mirror QuoteCard.js, do NOT copy blindly):
//   1. useState for data, loading, error
//   2. useEffect(() => { get('/api/stats').then(setData)... }, [])
//   3. while loading -> <Text>Loading…</Text>
//   4. on error -> <Text>Could not load</Text>
//   5. render the data — RN concept to practice: flex row of mini-boxes
//      (e.g. four little boxes side by side, each with a number and a label,
//      laid out with `flexDirection: "row"` and `justifyContent: "space-between"`)
//   6. style with a local StyleSheet (copy the Card style from QuoteCard)
// REFERENCE: frontend/components/QuoteCard.js
// ============================================================

import { View, Text, StyleSheet } from "react-native";

export default function StatsCard() {
  // TODO Member #3: build this card. Placeholder below keeps the app running.
  return (
    <View style={styles.placeholder}>
      <Text>Member #3: build me 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: { padding: 16, margin: 8, backgroundColor: "#eee", borderRadius: 12 },
});
