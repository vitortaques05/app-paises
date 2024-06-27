import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import CountryDetails from "../screens/CountryDetails";
import { StackParamList } from "../types/navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Cart from "../screens/Cart";

const AppRoutes = () => {
  const Stack = createNativeStackNavigator<StackParamList>();
  const Tab = createBottomTabNavigator();

  const StackRoutes = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          statusBarColor: "#252525",
          headerTintColor: "#fff",
          title: "Lista de Países",
          headerStyle: {
            backgroundColor: "#252525",
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={CountryDetails} />
      </Stack.Navigator>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#252525",
        },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Country List"
        component={StackRoutes}
        options={{
          tabBarIcon: () => <Feather name="globe" size={32} color="#fff" />,
        }}
      />
      <Tab.Screen
        name="Sla mano"
        component={StackRoutes}
        options={{
          tabBarIcon: () => <Feather name="heart" size={32} color="#fff" />,
        }}
      />
      
    </Tab.Navigator>
  );
};

export default AppRoutes;
