import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { formattedDate } from "../utils/date";
import { Fonts } from "../constants/fonts";

const AppWeather = ({ status, temp }) => {
  return (
    <View style={{ marginTop: 30 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/icons/sunlight-black.png")}
          style={{ marginRight: 10 }}
        />
        <View>
          <Text style={{ fontFamily: Fonts.Medium, fontSize: 16 }}>Today</Text>
          <Text style={{ fontSize: 12, fontFamily: Fonts.Regular }}>
            {formattedDate(new Date())}
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Text style={{ fontSize: 32 }}>
          <Text style={{ fontFamily: Fonts.Bold, fontSize: 36 }}>{temp}</Text>
          &deg;C
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/icons/yellow-sun.png")}
            style={{ marginRight: 5 }}
          />
          <Text>{status}</Text>
        </View>
      </View>
    </View>
  );
};

export default AppWeather;

const styles = StyleSheet.create({});
