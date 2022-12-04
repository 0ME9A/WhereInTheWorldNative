import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import { Dimensions } from "react-native";
import Image from "react-native-scalable-image";
import { bigNumber } from "../theFunctions/functions";

const Card = ({ countryData, navi }) => {
  const name = countryData.name.common;
  const population = countryData.population;
  const region = countryData.region;
  const capital = countryData.capital;
  const flags = countryData.flags.png;
  const countryId = countryData.cca3;

  return (
    <TouchableNativeFeedback
      onPress={() => navi("Details", { id: countryId, name: name })}
      key={countryId}
    >
      <View style={styles.cardView}>
        <Image
          source={{ uri: flags }}
          width={Dimensions.get("window").width}
        //   onError={(error) => console.error(error)}
        />
        <View style={styles.textBox}>
          <Text style={styles.titleText}>{name}</Text>
          <View style={styles.secondTextBox}>
            <Text style={styles.text}>
              Population:{" "}
              <Text style={{ color: "rgba(255,255,255,.7)" }}>
                {bigNumber(population)}
              </Text>
            </Text>
            <Text style={styles.text}>
              Region:{" "}
              <Text style={{ color: "rgba(255,255,255,.7)" }}>{region}</Text>
            </Text>
            <Text style={styles.text}>
              Capital:{" "}
              <Text style={{ color: "rgba(255,255,255,.7)" }}>{capital}</Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "#2B3743",
    overflow: "hidden",
    color: "white",
    paddingBottom: 30,
  },
  textBox: {
    padding: 20,
    paddingTop: 20,
  },
  secondTextBox: {
    padding: 20,
    paddingHorizontal: 0,
  },
  text: {
    color: "white",
    fontSize: 20,
    textTransform: "capitalize",
    marginTop: 10,
  },
  titleText: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  img: {
    width: "100%",
    height: "200",
    borderRadius: 15,
  },
});

export default Card;
