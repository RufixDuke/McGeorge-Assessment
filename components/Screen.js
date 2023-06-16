import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import { Colors } from "../constants/colors";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: Colors.shadeWhite,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
