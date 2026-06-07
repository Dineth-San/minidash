// ============================================================
// MEMBER #10 — ActivityCard
// FILE: frontend/components/ActivityCard.js
// ------------------------------------------------------------
// GOAL: fetch GET /api/activity and display it — shape: [{ id, who, action, time }] (§7).
//
// STEPS (mirror QuoteCard.js, do NOT copy blindly):
//   1. useState for data, loading, error
//   2. useEffect(() => { get('/api/activity').then(setData)... }, [])
//   3. while loading -> <Text>Loading…</Text>
//   4. on error -> <Text>Could not load</Text>
//   5. render the data — RN concept to practice: FlatList feed
//      (e.g. <FlatList data={data} renderItem={...} />, each row reading like
//      a feed item: "<who> <action>" with the <time> shown in smaller, muted text)
//   6. style with a local StyleSheet (copy the Card style from QuoteCard)
// REFERENCE: frontend/components/QuoteCard.js
// ============================================================

import { View, Text, StyleSheet, FlatList } from "react-native";
import {useState, useEffect} from "react";
import { get } from "../api/client";

export default function ActivityCard() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    get("/api/activity")
      .then((activity) => setData(activity))
      .catch((err) => {
        console.warn("ActivityCard failed to load:", err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.card}>

      <Text style={styles.heading}>📋 Activity Feed</Text>

      {/*Loading State */}
      {loading && <Text style ={styles.muted}>Loading...</Text>}

      {/*Error State */}
      {!loading && error && <Text style ={styles.muted}>Could not load the activity</Text>}

      {/*Show Data */}
      {!loading && !error && ( 
        <FlatList
          scrollEnabled = {false}
          data = {data}
          keyExtractor = {(item) => item.id.toString()}
          renderItem = {({item}) => (
            <View style = {styles.row}>
              <Text style = {styles.activityText}> {item.who} {item.action} </Text>
              <Text style = {styles.timeText}> {item.time} </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
  row: { 
    marginBottom: 10, 
  }, 
  activityText: { 
    fontSize: 14, 
  }, 
  timeText: { 
    fontSize: 12, 
    color: "#777", 
  },
});
