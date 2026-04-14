import { StyleSheet, View } from "react-native";
//🚗
//import { useFocusEffect } from "expo-router";
//import { useCallback, useState } from "react";
/*import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";*/
//import { supabase } from "../../lib/supabase";

export default function ParkingGrid() {
  return <View></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050A1E",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  parkingArea: {
    flex: 1,
    position: "relative",
  },
  middleLine: {
    position: "absolute",
    left: "50%",
    top: 0,
    bottom: 0,
    width: 2,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#333", // Suptilnija boja za put
    zIndex: 1,
  },
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  spot: {
    width: "42%",
    height: 110,
    backgroundColor: "#0A0E21",
    marginVertical: 12,
    borderRadius: 15,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  freeBorder: { borderColor: "#27AE60" },
  occupiedBorder: { borderColor: "#1D2136", opacity: 0.8 },
  spotName: {
    color: "#8E8E93",
    fontSize: 13,
    marginTop: 8,
    fontWeight: "600",
  },
});
