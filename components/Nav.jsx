import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { Entypo } from "@expo/vector-icons";
const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <TouchableNativeFeedback>
        <Entypo name="menu" size={24} color="white" />
      </TouchableNativeFeedback>
      <Text style={styles.text}>Where in the world?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  text: {
    fontSize: 24,
    padding: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default Navbar;
