// ============================================================
// MEMBER #11 — GoalsCard
// FILE: frontend/components/GoalsCard.js
// ------------------------------------------------------------
// GOAL: fetch GET /api/goals and display it — shape: [{ id, label, percent }] (§7).
//
// STEPS (mirror QuoteCard.js, do NOT copy blindly):
//   1. useState for data, loading, error
//   2. useEffect(() => { get('/api/goals').then(setData)... }, [])
//   3. while loading -> <Text>Loading…</Text>
//   4. on error -> <Text>Could not load</Text>
//   5. render the data — RN concept to practice: percentage-width progress bar
//      (e.g. for each goal, render a thin gray <View> "track", and inside it a
//      colored <View> whose `style={{ width: `${goal.percent}%` }}` makes the bar)
//   6. style with a local StyleSheet (copy the Card style from QuoteCard)
// REFERENCE: frontend/components/QuoteCard.js
// ============================================================

import { View, Text, StyleSheet } from "react-native";

export default function GoalsCard() {
  // TODO Member #11: build this card. Placeholder below keeps the app running.
  return (
    <View style={styles.placeholder}>
      <Text>Member #11: build me 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: { padding: 16, margin: 8, backgroundColor: "#eee", borderRadius: 12 },
});
