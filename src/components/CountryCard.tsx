import React, { FC, useContext } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Country } from "../types/country";
import { StackParamList } from "../types/navigation";
import { ThemeContext } from "../contexts/ThemeContext";

interface CardProps {
  country: Country;
}

const CountryCard: FC<CardProps> = ({ country }) => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const { theme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme === "light" ? "#FFFFFF" : "#444444",
      borderRadius: 12,
      margin: 10,
      shadowColor: "#A9A9A9",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
      overflow: "hidden",
    },
    flag: {
      width: "100%",
      height: 200,
      resizeMode: "cover",
    },
    textContainer: {
      padding: 16,
      alignItems: "center",
    },
    name: {
      color: theme === "light" ? "#333333" : "#FFFFFF",
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
    },
    info: {
      color: theme === "light" ? "#333333" : "#DDDDDD",
      fontSize: 16,
    },
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Details", { country })}
    >
      <Image style={styles.flag} source={{ uri: country.flags.png }} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{country.name.common}</Text>
        <Text style={styles.info}>Population: {country.population.toLocaleString()}</Text>
        <Text style={styles.info}>Region: {country.region}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CountryCard;
