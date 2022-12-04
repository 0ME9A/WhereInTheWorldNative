import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputComponent,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";

const Search = ({ search }) => {
  const [country, setCountry] = useState("");

  const AlertNow = () => {
    search(country);
  };

  return (
    <View style={style.searchContainer}>
      <View style={style.searchWrapper}>
        <TextInput
          placeholder="Search a Country..."
          keyboardType="default"
          style={style.input}
          onChangeText={(cnt) => {
            setCountry(cnt);
          }}
          returnKeyType="search"
          onSubmitEditing={()=>AlertNow()}
        />
        <TouchableNativeFeedback
          onPress={() => {
            AlertNow();
            Keyboard.dismiss();
          }}
        >
          <View style={[style.input, style.inputBtn]}>
            <FontAwesome5 name="search" size={24} color="black" />
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  searchContainer: {
    padding: 20,
    position: "absolute",
    bottom: 0,
  },
  searchWrapper: {
    backgroundColor: "#2B3743",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 2,
    borderBottomColor: '#202D36',
  },
  input: {
    width: "80%",
    padding: 15,
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#2B3743",
  },
  inputBtn: {
    width: "20%",
    padding: 15,
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2B3743",
  },
});

export default Search;
