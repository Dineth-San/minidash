// ============================================================
// MEMBER #8 — MembersCard
// FILE: frontend/components/MembersCard.js
// ------------------------------------------------------------
// GOAL: fetch GET /api/members and display it — shape: [{ id, name, role }] (§7).
//
// STEPS (mirror QuoteCard.js, do NOT copy blindly):
//   1. useState for data, loading, error
//   2. useEffect(() => { get('/api/members').then(setData)... }, [])
//   3. while loading -> <Text>Loading…</Text>
//   4. on error -> <Text>Could not load</Text>
//   5. render the data — RN concept to practice: FlatList two-line rows
//      (e.g. <FlatList data={data} renderItem={...} />, each row showing the
//      member's name on one line and their role in smaller, muted text below it)
//   6. style with a local StyleSheet (copy the Card style from QuoteCard)
// REFERENCE: frontend/components/QuoteCard.js
// ============================================================

import { View, Text, StyleSheet } from "react-native";

export default function MembersCard() {
  // TODO Member #8: build this card. Placeholder below keeps the app running.
  return (
    <View style={styles.placeholder}>
      <Text>Member #8: build me 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: { padding: 16, margin: 8, backgroundColor: "#eee", borderRadius: 12 },
});
