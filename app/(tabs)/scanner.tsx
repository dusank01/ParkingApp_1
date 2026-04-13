import { StyleSheet, View } from "react-native";

export default function ScannerScreen() {
  return <View></View>;
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column", justifyContent: "center" },
  bottomContainer: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  customButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
