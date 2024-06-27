import { StyleSheet, Text, View, FlatList, Switch } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Country } from "../types/country";
import CountryCard from "../components/CountryCard";
import { ThemeContext } from "../contexts/ThemeContext";

const Home = () => {
  const [countryList, setCountryList] = useState<Country[]>([]);
  const { theme, toggleSwitch } = useContext(ThemeContext);
  const URL = "https://restcountries.com/v3.1/all";

  const getCountries = async () => {
    try {
      const response = await axios.get<Country[]>(URL);
      setCountryList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme === "light" ? "#FFFFFF" : "#252525",
      padding: 10,
    },
    text: {
      color: theme === "light" ? "#000000" : "#FFFFFF",
      fontSize: 22,
      marginBottom: 10,
    },
    switchContainer: {
      position: 'absolute',
      top: 40,
      right: 20,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={theme === "light" ? "#f4f3f4" : "#f5dd4b"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={theme === "dark"}
        />
      </View>
      <FlatList
        data={countryList}
        renderItem={({ item }) => <CountryCard country={item} />}
        keyExtractor={(item) => item.name.common}
      />
    </View>
  );
};

export default Home;
