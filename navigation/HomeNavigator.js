import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ForecastScreen from "../screens/ForecastScreen";
import FieldScreen from "../screens/FieldScreen";
import TaskScreen from "../screens/TaskScreen";
import HomeScreen from "../screens/HomeScreen";
import NextSevenScreen from "../screens/NextSevenScreen";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Forecast" component={ForecastScreen} />
      <Stack.Screen name="Field" component={FieldScreen} />
      <Stack.Screen name="Task" component={TaskScreen} />
      <Stack.Screen name="Next" component={NextSevenScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
