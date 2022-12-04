import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

function Loading() {
  const [loadStatus, setLoadStatus] = useState("Loading...");

  setTimeout(() => {
    setLoadStatus("Please wait...");
  }, 2000);
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.text}>{loadStatus}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
    height: "100%",
  },
  text: {
    fontSize: 24,
    padding: 18,
    color: "rgba(255, 255, 255, 0.5)",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Loading;
