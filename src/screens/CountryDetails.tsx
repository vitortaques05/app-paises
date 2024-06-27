import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Country } from "../types/country";
import { useRoute } from "@react-navigation/native";

const CountryDetails = () => {
  const route = useRoute<any>();

  console.log("Params recebidos:", route.params);

  if (!route.params || !route.params.country) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro ao carregar detalhes do país</Text>
      </View>
    );
  }

  const { name, flags, population, region, subregion, capital } = route.params.country as Country;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name.common}</Text>
      <Image style={styles.flag} source={{ uri: flags.png }} />
      <Text style={styles.detail}>Capital: {capital}</Text>
      <Text style={styles.detail}>População: {population.toLocaleString()}</Text>
      <Text style={styles.detail}>Região: {region}</Text>
      <Text style={styles.detail}>Sub-região: {subregion}</Text>
    </View>
  );
};

export default CountryDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#252525",
    padding: 20,
  },
  flag: {
    width: 300,
    height: 200,
    borderRadius: 5,
    marginVertical: 20,
    resizeMode: "cover",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  detail: {
    color: "#FFFFFF",
    fontSize: 20,
    marginVertical: 8,
  },
  errorText: {
    color: "red",
    fontSize: 18,
  },
});
