// ============================================================
// MEMBER #5 — AnnouncementsCard
// FILE: frontend/components/AnnouncementsCard.js
// ------------------------------------------------------------
// GOAL: fetch GET /api/announcements and display it — shape: [{ id, title, body, date }] (§7).
//
// STEPS (mirror QuoteCard.js, do NOT copy blindly):
//   1. useState for data, loading, error
//   2. useEffect(() => { get('/api/announcements').then(setData)... }, [])
//   3. while loading -> <Text>Loading…</Text>
//   4. on error -> <Text>Could not load</Text>
//   5. render the data — RN concept to practice: FlatList, multi-line text
//      (e.g. <FlatList data={data} renderItem={...} />, each row showing a bold
//      title, a multi-line body with `numberOfLines`, and a small date caption)
//   6. style with a local StyleSheet (copy the Card style from QuoteCard)
// REFERENCE: frontend/components/QuoteCard.js
// ============================================================

import { View, Text, StyleSheet } from "react-native";

export default function AnnouncementsCard() {
  // TODO Member #5: build this card. Placeholder below keeps the app running.
  return (
    <View style={styles.placeholder}>
      <Text>Member #5: build me 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: { padding: 16, margin: 8, backgroundColor: "#eee", borderRadius: 12 },
});
