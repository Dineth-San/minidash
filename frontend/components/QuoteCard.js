// ============================================================
// MEMBER #12 — QuoteCard  ⭐ REFERENCE IMPLEMENTATION
// FILE: frontend/components/QuoteCard.js
// ------------------------------------------------------------
// This is the file every other member's card should mirror. The pattern:
//
//   1. useState for `data`, `loading`, `error`.
//   2. useEffect(() => { ...fetch on mount... }, []) — empty array = "once".
//   3. While loading      -> show "Loading…"
//   4. If it errored      -> show "Could not load…"
//   5. Otherwise          -> render the real data inside a styled <Card>.
//   6. A small "🔄 Refresh" button that re-runs the same fetch function.
//
// Open this side-by-side with your own stub and copy this *shape* —
// then swap in your endpoint and your own JSX for the data in §7.
// ============================================================

import { useState, useEffect, useCallback } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { get } from "../api/client";

export default function QuoteCard() {
  // 1. Three little pieces of state are all most cards ever need:
  //    the data itself, whether we're waiting on it, and whether it broke.
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Wrapped in useCallback so the same function reference can be used by
  // both useEffect (on mount) and the Refresh button (on tap).
  const loadQuote = useCallback(() => {
    setLoading(true);
    setError(false);

    get("/api/quote")
      .then((quote) => setData(quote))
      .catch((err) => {
        console.warn("QuoteCard failed to load:", err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  // 2. Empty dependency array [] means "run this once, when the card first appears".
  useEffect(() => {
    loadQuote();
  }, [loadQuote]);

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>💬 Quote of the moment</Text>

      {/* 3. Loading state: render something instead of a blank gap. */}
      {loading && <Text style={styles.muted}>Loading…</Text>}

      {/* 4. Error state: keep it short and friendly, never show a stack trace. */}
      {!loading && error && <Text style={styles.muted}>Could not load the quote.</Text>}

      {/* 5. Happy path: we have data, render the real thing. */}
      {!loading && !error && data && (
        <View>
          <Text style={styles.quoteText}>“{data.text}”</Text>
          <Text style={styles.author}>— {data.author}</Text>
        </View>
      )}

      {/* 6. A tiny refresh control — re-runs the exact same loader function. */}
      <Pressable style={styles.refreshButton} onPress={loadQuote}>
        <Text style={styles.refreshLabel}>🔄 Refresh</Text>
      </Pressable>
    </View>
  );
}

// A local StyleSheet keeps every card visually consistent and self-contained —
// copy this `card` style into your own card so the dashboard looks uniform.
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
