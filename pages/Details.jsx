import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from "react-native";
import Detail from "../components/Detail";
import { useCallback, useEffect,  useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Details = ({ route, navigation }) => {
  const [countryId, setCountryId] = useState(route.params.id);
  const [country, setCountry] = useState("IND");
  const [apiStatus, setapiStatus] = useState(404);
  const [refressing, setRefressing] = useState(false);

  const fetchCountry = (countryId) => {
    const url = "https://restcountries.com/v3.1/alpha/" + countryId;
    axios
      .get(url)
      .then((response) => {
        setCountry(response.data);
        setapiStatus(200);
      })
      .catch((error) => {
        setapiStatus(404);
        console.log(error);
      });
  };
  const onRefress = useCallback(() => {
    setRefressing(true);
    setapiStatus(404);
    wait(2000).then(() => {
      fetchCountry(countryId);
      setRefressing(false);
    });
  });

  useEffect(() => {
    fetchCountry(countryId);
  }, [countryId]);

  return (
    <View
      style={{
        position: "relative",
        height: "100%",
        backgroundColor: "#202D36",
      }}
    >
      <ScrollView
        style={styles.homeView}
        refreshControl={
          <RefreshControl refreshing={refressing} onRefresh={onRefress} />
        }
      >
        {apiStatus === 200 ? (
          <Detail countryData={country} setCountryId={setCountryId} />
        ) : (
          <Loading />
        )}
        <View>
          <Text
            title="goback"
            style={styles.btn}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            Home
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeView: {
    height: "100%",
    color: "white",
    flexDirection: "column",
  },
  btn: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    textAlign: "center",
    margin: 20,
    marginTop: 0,
    backgroundColor: "rgb(100, 100, 255)",
    color: "rgb(255, 255, 255)",
    borderRadius: 10,
  },
});

export default Details;
