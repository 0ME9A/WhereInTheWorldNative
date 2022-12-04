import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  RefreshControl,
} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context"
import Card from "../components/card";
import Navbar from "../components/Nav";
import Search from "../components/Search";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Loading from "../components/Loading";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Home = ({ navigation }) => {
  const [country, setCountry] = useState([]);
  const [apiStatus, setApiStatus] = useState(404);
  const [search, setSearch] = useState("");
  const [refressing, setRefressing] = useState(false);

  const getCountry = (search) => {
    let url = "";
    search === ""
      ? (url = "https://restcountries.com/v3.1/all")
      : (url = "https://restcountries.com/v3.1/name/" + search);

    axios
      .get(url)
      .then((response) => {
        setCountry(response.data);
        setApiStatus(response.status);
      })
      .catch((error) => {
        setApiStatus(404);
      });
  };

  const onRefress = useCallback(() => {
    setRefressing(true);
    setApiStatus(404);
    wait(2000).then(() => {
      getCountry(search);
      setRefressing(false);
    });
  });

  useEffect(() => {
    getCountry(search);
  }, [search]);
  return (
    <View
      style={{
        position: "relative",
        height: "100%",
        backgroundColor: "#202D36",
      }}
    >
      <View>
        <Navbar />
      </View>
      <ScrollView
        style={styles.homeView}
        refreshControl={
          <RefreshControl refreshing={refressing} onRefresh={onRefress} />
        }
      >
        {apiStatus === 200 ? (
          country.map((item) => {
            return (
              <Card
                countryData={item}
                navi={navigation.navigate}
                key={item.name.common}
              />
            );
          })
        ) : (
          <Loading />
        )}
        <View style={{ height: 100 }}></View>
      </ScrollView>
      <Search search={setSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeView: {
    color: "white",
    flexDirection: "column",
  },
});

export default Home;
