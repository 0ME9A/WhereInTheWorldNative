import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Dimensions } from "react-native";
import Image from "react-native-scalable-image";
import {
  GetFullCountryName,
  bigNumber,
  objectDestructor,
} from "../theFunctions/functions";

const Detail = (props) => {
  const {
    name: { common: name },
    population,
    region,
    subregion,
    capital,
    flags: { png: flag },
    cca3,
    tld: domain,
    timezones,
    borders,
    currencies,
    languages,
    name: { nativeName },
  } = props.countryData[0];

  const _nativeName = Object.values(nativeName);

  return (
    <View style={styles.cardView}>
      <Image
        source={{ uri: flag }}
        width={Dimensions.get("window").width}
        // onError={(error) => console.error(error)}
      />
      <View style={styles.textBox}>
        <Text style={styles.titleText}>{name}</Text>
        <View style={styles.secondTextBox}>
          <Text style={styles.text}>
            Native Name:{" "}
            {_nativeName.map((nat) => {
              return (
                <Text
                  style={{ color: "rgba(255,255,255,.7)" }}
                  key={Math.random() * 500}
                >
                  {nat.common + ", "}
                </Text>
              );
            })}
          </Text>
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
            Sub Region:{" "}
            <Text style={{ color: "rgba(255,255,255,.7)" }}>{subregion}</Text>
          </Text>
          <Text style={styles.text}>
            Capital:{" "}
            <Text style={{ color: "rgba(255,255,255,.7)" }}>{capital}</Text>
          </Text>
          <Text style={styles.text}>
            Timezones:{" "}
            <Text style={{ color: "rgba(255,255,255,.7)" }}>{timezones}</Text>
          </Text>
        </View>
        <View style={styles.secondTextBox}>
          <Text style={styles.text}>
            Top Level Domain:{" "}
            <Text style={{ color: "rgba(255,255,255,.7)" }}>{domain}</Text>
          </Text>
          <Text style={styles.text}>
            Currnices:{" "}
            <Text style={{ color: "rgba(255,255,255,.7)" }}>
              {objectDestructor(currencies, "name") +
                " , " +
                objectDestructor(currencies, "symbol")}
            </Text>
          </Text>
          <Text style={styles.text}>
            Language:{" "}
            <Text style={{ color: "rgba(255,255,255,.7)" }}>
              {Object.values(languages) + ", ".replace(",", "")}
            </Text>
          </Text>
          <Text style={styles.text}>
            Country Code:{" "}
            <Text
              style={{
                color: "rgba(255,255,255,.7)",
                textTransform: "uppercase",
              }}
            >
              {cca3}
            </Text>
          </Text>
        </View>
        <View style={styles.secondTextBox}>
          <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
            Border Countris:
          </Text>
          <View
            style={{ flexDirection: "row", marginTop: 5, flexWrap: "wrap" }}
          >
            {borders !== undefined ? (
              borders.map((bdr) => {
                return (
                  <TouchableHighlight
                    style={styles.btn}
                    key={Math.random()*50}
                    onPress={() => props.setCountryId(bdr)}
                  >
                    <Text style={[styles.text, { marginTop: 0 }]}>
                      {GetFullCountryName(bdr)}
                    </Text>
                  </TouchableHighlight>
                );
              })
            ) : (
              <TouchableHighlight style={styles.btn}>
                <Text style={[styles.text, { marginTop: 0 }]}>No Borders</Text>
              </TouchableHighlight>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
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
    borderRadius: 15,
  },
  btn: {
    fontSize: 18,
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginTop: 10,
    marginRight: 10,
    backgroundColor: "#2B3743",
    borderRadius: 10,
  },
});

export default Detail;
