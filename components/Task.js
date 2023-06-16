import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Fonts } from "../constants/fonts";
import { Colors } from "../constants/colors";

const Task = ({ imgUrl, status, title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: 250,
        marginTop: 10,
      }}
    >
      <Image
        source={imgUrl}
        style={{ width: 63, height: 64, marginRight: 5 }}
      />
      <View style={{ justifyContent: "space-between" }}>
        <Text style={{ fontFamily: Fonts.Medium, color: Colors.bodyBlack }}>
          {title}
        </Text>
        <Text style={{ fontFamily: Fonts.Regular, color: Colors.shadesGreen2 }}>
          {status === 1 ? "Yet to be completed" : "Completed"}
        </Text>
      </View>
    </View>
  );
};

export default Task;
