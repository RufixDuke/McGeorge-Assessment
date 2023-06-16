import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";

const AppCustomTab = ({ label, active, onPress, underline, icon }) => {
  return (
    <Pressable onPress={onPress} style={{ position: "relative" }}>
      <Text
        style={[
          {
            height: 35,
            color: icon ? Colors.primary : Colors.bodyBlack,
            fontFamily: icon ? Fonts.Medium : Fonts.Regular,
          },
        ]}
      >
        {label}{" "}
        {icon && (
          <Image source={require("../assets/icons/right-arrow-filled.png")} />
        )}
      </Text>
      {active ? <View style={[styles.underline, { top: 0 }]} /> : <View />}
    </Pressable>
  );
};

export default AppCustomTab;

const styles = StyleSheet.create({
  underline: {
    height: 1,
    backgroundColor: Colors.shadeGray2,
  },
});
