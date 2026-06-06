// ============================================================
// MEMBER #9 — LinksCard
// FILE: frontend/components/LinksCard.js
// ------------------------------------------------------------
// GOAL: fetch GET /api/links and display it — shape: [{ id, label, url }] (§7).
//
// STEPS (mirror QuoteCard.js, do NOT copy blindly):
//   1. useState for data, loading, error
//   2. useEffect(() => { get('/api/links').then(setData)... }, [])
//   3. while loading -> <Text>Loading…</Text>
//   4. on error -> <Text>Could not load</Text>
//   5. render the data — RN concept to practice: Pressable + Linking.openURL
//      (e.g. import { Linking } from "react-native", then for each link render
//      a <Pressable onPress={() => Linking.openURL(link.url)}><Text>{link.label}</Text></Pressable>)
//   6. style with a local StyleSheet (copy the Card style from QuoteCard)
// REFERENCE: frontend/components/QuoteCard.js
// ============================================================

import { View, Text, StyleSheet } from "react-native";

export default function LinksCard() {
  // TODO Member #9: build this card. Placeholder below keeps the app running.
  return (
    <View style={styles.placeholder}>
      <Text>Member #9: build me 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: { padding: 16, margin: 8, backgroundColor: "#eee", borderRadius: 12 },
});
