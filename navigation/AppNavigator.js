import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MarketScreen from "../screens/MarketScreen";
import ReportScreen from "../screens/ReportScreen";
import MoreScreen from "../screens/MoreScreen";
import HomeNavigator from "./HomeNavigator";
import { Colors } from "../constants/colors";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? (
              <Image
                source={require("../assets/icons/home-filled.png")}
                // style={{ width: 50, height: 50 }}
              />
            ) : (
              <Image source={require("../assets/icons/home.png")} />
            );
          } else if (route.name === "Market") {
            iconName = focused ? (
              <Image source={require("../assets/icons/market.png")} />
            ) : (
              <Image source={require("../assets/icons/market.png")} />
            );
          } else if (route.name === "Report") {
            iconName = focused ? (
              <Image source={require("../assets/icons/report.png")} />
            ) : (
              <Image source={require("../assets/icons/report.png")} />
            );
          } else {
            iconName = focused ? (
              <Image source={require("../assets/icons/more.png")} />
            ) : (
              <Image source={require("../assets/icons/more.png")} />
            );
          }

          return iconName;
        },
        tabBarStyle: {
          height: 71,
          backgroundColor: Colors.shadeWhite,
          paddingHorizontal: 10,
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: Colors.bodyBlack,
        tabBarLabelStyle: { color: Colors.bodyBlack, paddingBottom: 10 },
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Market" component={MarketScreen} />
      <Tab.Screen name="Report" component={ReportScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
