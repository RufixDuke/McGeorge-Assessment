import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";

const AppRainValue = ({ onPress, time, num, activeBg, value }) => {
  return (
    <View
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        marginRight: 10,
        height: 120,
      }}
    >
      <Pressable
        style={[
          styles.bar,
          {
            backgroundColor:
              activeBg === num ? Colors.secondary : Colors.shadeGray2,
            height: value,
          },
        ]}
        onPress={onPress}
      />
      <Text style={{ fontSize: 12, color: Colors.bodyBlack }}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    width: 10,
    borderTopLeftRadius: 11.221,
    borderTopRightRadius: 11.2,
    borderBottomLeftRadius: 11.2,
    borderBottomRightRadius: 11.2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppRainValue;
