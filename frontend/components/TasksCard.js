// ============================================================
// MEMBER #4 — TasksCard
// FILE: frontend/components/TasksCard.js
// ------------------------------------------------------------
// GOAL: fetch GET /api/tasks and display it — shape: [{ id, title, status }] (§7).
//
// STEPS (mirror QuoteCard.js, do NOT copy blindly):
//   1. useState for data, loading, error
//   2. useEffect(() => { get('/api/tasks').then(setData)... }, [])
//   3. while loading -> <Text>Loading…</Text>
//   4. on error -> <Text>Could not load</Text>
//   5. render the data — RN concept to practice: FlatList, conditional badge style
//      (e.g. <FlatList data={data} renderItem={...} keyExtractor={...} />, with a
//      small colored badge that changes color depending on item.status)
//   6. style with a local StyleSheet (copy the Card style from QuoteCard)
// REFERENCE: frontend/components/QuoteCard.js
// ============================================================

import { View, Text, StyleSheet } from "react-native";

export default function TasksCard() {
  // TODO Member #4: build this card. Placeholder below keeps the app running.
  return (
    <View style={styles.placeholder}>
      <Text>Member #4: build me 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: { padding: 16, margin: 8, backgroundColor: "#eee", borderRadius: 12 },
});
