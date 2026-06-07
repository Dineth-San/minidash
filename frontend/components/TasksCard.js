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

import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState, useEffect} from "react";
import {get} from "../api/client";

export default function TasksCard() {
  // TODO Member #4: build this card. Placeholder below keeps the app running.

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    setLoading(true);
    setError(false);

    get("/api/tasks")
      .then((tasks) => setData(tasks))
      .catch(err => {
        console.warn("Task failed to load: ", err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])

  
  const renderTaskRow = ({item}) => {

    const badgeColor = item.status === 'done' ? "green" : "orange";

    return (
      <View>
        <Text style={styles.heading}>
          {item.title}
        </Text>

        <View style={[styles.card, {backgroundColor: badgeColor}]}>
          <Text style={styles.quoteText}>
            {item.status}
          </Text>
        </View>
      </View>
    )

  } 

  return (
    <View style={styles.placeholder}>
      
      {loading && <Text style={styles.muted}>Loading...</Text>}

      {!loading && error && <Text style={styles.muted}>Could not load the data</Text>}

      {!loading && !error && data && (
        <FlatList
          data={data}
          keyExtractor={(item) => (item.id.toString())}
          renderItem={renderTaskRow}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: { padding: 16, margin: 8, backgroundColor: "#eee", borderRadius: 12 },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    margin: 8,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  heading: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  muted: {
    color: "#888",
    fontStyle: "italic",
  },
  quoteText: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 6,
  },
  author: {
    fontSize: 14,
    color: "#555",
    textAlign: "right",
  },
  refreshButton: {
    marginTop: 12,
    alignSelf: "flex-start",
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#eef2ff",
    borderRadius: 8,
  },
  refreshLabel: {
    color: "#3949ab",
    fontWeight: "600",
  },
});
