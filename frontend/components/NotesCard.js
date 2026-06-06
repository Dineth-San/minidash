// ============================================================
// MEMBER #7 — NotesCard
// FILE: frontend/components/NotesCard.js
// ------------------------------------------------------------
// GOAL: fetch GET /api/notes and display it — shape: [{ id, text }] (§7).
//
// STEPS (mirror QuoteCard.js, do NOT copy blindly):
//   1. useState for data, loading, error
//   2. useEffect(() => { get('/api/notes').then(setData)... }, [])
//   3. while loading -> <Text>Loading…</Text>
//   4. on error -> <Text>Could not load</Text>
//   5. render the data — RN concept to practice: list rendering
//      (e.g. data.map(note => <Text key={note.id}>• {note.text}</Text>) —
//      a plain View + map is enough here, you don't need FlatList for a short list)
//   6. style with a local StyleSheet (copy the Card style from QuoteCard)
// REFERENCE: frontend/components/QuoteCard.js
// ============================================================

import { View, Text, StyleSheet } from "react-native";

export default function NotesCard() {
  // TODO Member #7: build this card. Placeholder below keeps the app running.
  return (
    <View style={styles.placeholder}>
      <Text>Member #7: build me 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: { padding: 16, margin: 8, backgroundColor: "#eee", borderRadius: 12 },
});
