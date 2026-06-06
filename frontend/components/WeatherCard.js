// ============================================================
// MEMBER #6 — WeatherCard
// FILE: frontend/components/WeatherCard.js
// ------------------------------------------------------------
// GOAL: fetch GET /api/weather and display it — shape: { city, tempC, condition } (§7).
//
// STEPS (mirror QuoteCard.js, do NOT copy blindly):
//   1. useState for data, loading, error
//   2. useEffect(() => { get('/api/weather').then(setData)... }, [])
//   3. while loading -> <Text>Loading…</Text>
//   4. on error -> <Text>Could not load</Text>
//   5. render the data — RN concept to practice: conditional rendering (emoji by condition)
//      (e.g. pick "☀️" for "sunny", "🌧️" for "rainy", "☁️" for "cloudy", else "🌤️",
//      then show the city and temperature next to your chosen emoji)
//   6. style with a local StyleSheet (copy the Card style from QuoteCard)
// REFERENCE: frontend/components/QuoteCard.js
// ============================================================

import { View, Text, StyleSheet } from "react-native";

export default function WeatherCard() {
  // TODO Member #6: build this card. Placeholder below keeps the app running.
  return (
    <View style={styles.placeholder}>
      <Text>Member #6: build me 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: { padding: 16, margin: 8, backgroundColor: "#eee", borderRadius: 12 },
});
