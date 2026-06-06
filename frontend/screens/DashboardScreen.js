// ============================================================
// MiniDash — DashboardScreen
// ------------------------------------------------------------
// The whole app is one scrollable screen titled "MiniDash" that stacks
// all 12 cards vertically, in the order of the Master Assignment Table (§6).
//
// Each card is fully self-contained: it fetches its own data from its own
// endpoint and renders itself. This file just lists them in order — it does
// not pass any data down. That's what keeps every member independent: as
// soon as a member finishes their card, it "lights up" here automatically,
// with zero changes needed in this file.
//
// You should not need to edit this file for your assignment.
// ============================================================

import { SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";

import ProfileCard from "../components/ProfileCard"; // Member #1
import ClockCard from "../components/ClockCard"; // Member #2
import StatsCard from "../components/StatsCard"; // Member #3
import TasksCard from "../components/TasksCard"; // Member #4
import AnnouncementsCard from "../components/AnnouncementsCard"; // Member #5
import WeatherCard from "../components/WeatherCard"; // Member #6
import NotesCard from "../components/NotesCard"; // Member #7
import MembersCard from "../components/MembersCard"; // Member #8
import LinksCard from "../components/LinksCard"; // Member #9
import ActivityCard from "../components/ActivityCard"; // Member #10
import GoalsCard from "../components/GoalsCard"; // Member #11
import QuoteCard from "../components/QuoteCard"; // Member #12 ⭐ reference card

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>MiniDash</Text>

        <ProfileCard />
        <ClockCard />
        <StatsCard />
        <TasksCard />
        <AnnouncementsCard />
        <WeatherCard />
        <NotesCard />
        <MembersCard />
        <LinksCard />
        <ActivityCard />
        <GoalsCard />
        <QuoteCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  scrollContent: {
    paddingVertical: 16,
    paddingBottom: 48,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
});
