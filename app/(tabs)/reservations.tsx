import React from "react";
import { StyleSheet, View } from "react-native";
//import { useFocusEffect } from "expo-router";
//import React, { useCallback, useState } from "react";
/*import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";*/
//import { supabase } from "../../lib/supabase";

export default function ReservationsScreen() {
  return <View></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0E21",
    padding: 20,
    paddingTop: 50,
  },
  header: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#1D2136",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: "column",
  },
  spotName: { color: "white", fontSize: 18, fontWeight: "bold" },
  timeText: { color: "#27AE60", marginTop: 5 },
  actions: { flexDirection: "row", gap: 10, marginTop: 15 },
  btn: { flex: 1, padding: 12, borderRadius: 10, alignItems: "center" },
  extendBtn: { backgroundColor: "#27AE60" },
  cancelBtn: { backgroundColor: "#E74C3C" },
  btnText: { color: "white", fontWeight: "bold" },
});
