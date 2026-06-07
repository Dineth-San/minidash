// ============================================================
// MEMBER #1 — ProfileCard
// FILE: frontend/components/ProfileCard.js
// ------------------------------------------------------------
// GOAL: fetch GET /api/profile and display it — shape: { name, role, initials } (§7).
//
// STEPS (mirror QuoteCard.js, do NOT copy blindly):
//   1. useState for data, loading, error
//   2. useEffect(() => { get('/api/profile').then(setData)... }, [])
//   3. while loading -> <Text>Loading…</Text>
//   4. on error -> <Text>Could not load</Text>
//   5. render the data — RN concept to practice: state + fetch, View/Text styling
//      (e.g. a circle showing the initials, the name, and the role underneath)
//   6. style with a local StyleSheet (copy the Card style from QuoteCard)
// REFERENCE: frontend/components/QuoteCard.js
// ============================================================

import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { get } from "../api/client";

export default function ProfileCard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    setLoading(true);
    setError(null);
    try {
      const json = await get("/api/profile");
      setData(json);
    } catch (err) {
      setError("Could not load profile.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>👤 Team Profile</Text>

      {loading && <Text style={styles.muted}>Loading…</Text>}
      {error && <Text style={styles.error}>{error}</Text>}

      {!loading && !error && data && (
        <View style={styles.row}>
          <View style={styles.avatar}>
            <Text style={styles.initials}>{data.initials}</Text>
          </View>
          <View>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.role}>{data.role}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  heading: {
    fontSize: 13,
    fontWeight: "600",
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#4f46e5",
    alignItems: "center",
    justifyContent: "center",
  },
  initials: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a2e",
  },
  role: {
    fontSize: 14,
    color: "#888",
    marginTop: 2,
  },
  muted: { color: "#aaa" },
  error: { color: "#e74c3c" },
});