import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Fonts } from "../constants/fonts";
import AppBackButton from "./AppBackButton";

const AppHeader = ({ navigation, title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <AppBackButton onPress={navigation} />

      <Text style={{ fontSize: 20, fontFamily: Fonts.Medium, marginRight: 20 }}>
        {title}
      </Text>
      <Text></Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({});
