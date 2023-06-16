import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";

const AppBackButton = ({ onPress }) => {
  return (
    <Pressable style={styles.back} onPress={() => onPress.goBack()}>
      <Image source={require("../assets/icons/left-arrow.png")} />
    </Pressable>
  );
};

export default AppBackButton;

const styles = StyleSheet.create({
  back: {
    borderWidth: 1,
    borderColor: Colors.shadeGreen3,
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 30,
  },
});
