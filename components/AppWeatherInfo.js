import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";

const AppWeatherInfo = ({ title, value, details, num }) => {
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        padding: 10,
        width: "30%",
        height: 110,
        borderRadius: 8,
      }}
    >
      <Text style={{ fontSize: 12, marginBottom: 5 }}>{title}</Text>
      <Text
        style={{
          fontFamily: Fonts.Medium,
          color: num === 1 ? Colors.warning : Colors.primary,
          marginBottom: 5,
        }}
      >
        {value}
        {num === 3 ? "km/h" : "%"}
      </Text>
      <Text style={{ color: Colors.shadesGreen2, fontSize: 12 }}>
        {details}
      </Text>
    </View>
  );
};

export default AppWeatherInfo;

const styles = StyleSheet.create({});
