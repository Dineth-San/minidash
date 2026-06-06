// ============================================================
// MiniDash app entry point
// ------------------------------------------------------------
// Expo boots the app by rendering whatever this file default-exports.
// MiniDash has exactly one screen, so all this does is render it.
// You should not need to edit this file for your assignment.
// ============================================================

import { StatusBar } from "expo-status-bar";
import DashboardScreen from "./screens/DashboardScreen";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <DashboardScreen />
    </>
  );
}
