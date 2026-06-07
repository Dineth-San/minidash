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

import { View, Text, StyleSheet, Pressable, Linking } from "react-native";
import { useState, useEffect } from "react";
import {get} from "../api/client";


export default function LinksCard() {
  const[data,setData] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] =useState(null);

  useEffect(() => {
    get("/api/links") 
    .then(setData)
    .catch(() =>setError ("Could not load links"))
    .finally (() => setLoading(false));
  },[]);
  
  if (loading) return <View style={styles.card}><Text>Loading...</Text></View>;
  if (error) return <View style={styles.card}><Text>{error}</Text></View>;

  return (
    <View style={styles.card}>
      <Text style ={styles.title}>Links</Text>
      {data.map(item => (
        <Pressable
          key={item.id}
          onPress={() => Linking.openURL(item.url)}
          style={styles.link}
        >
          <Text style={styles.linkText}>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, margin: 8, backgroundColor: "#eee", borderRadius: 12 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  link: {paddingVertical: 8 , borderBottomWidth: 1, borderBottomColor: "red"},
  linkText:{ color:"black", fontSize:14},
  
});
