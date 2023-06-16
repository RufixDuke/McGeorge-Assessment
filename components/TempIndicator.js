import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";
import routes from "../navigation/routes";

const TempIndicator = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstrow}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={require("../assets/icons/location.png")} />
          <Text style={{ fontFamily: Fonts.Regular, marginLeft: 5 }}>
            Ilorin, Nigeria
          </Text>
        </View>
        <Text
          style={{
            fontFamily: Fonts.Regular,
            textDecorationLine: "underline",
          }}
          onPress={() => navigation.navigate(routes.FORECAST_SCREEN)}
        >
          Forecast
        </Text>
      </View>
      <View>
        <View style={[styles.firstrow, { marginBottom: 10 }]}>
          <Text style={{ fontSize: 32 }}>
            <Text style={{ fontFamily: Fonts.Bold, fontSize: 32 }}>29 </Text>
            &deg;C
          </Text>
          <Image source={require("../assets/icons/sunlight.png")} />
        </View>

        <View style={styles.underline} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 12 }}>Humidity</Text>
            <Text style={styles.value}>30%</Text>
          </View>
          <View>
            <Text style={{ fontSize: 12 }}>Precipitation</Text>
            <Text style={styles.value}>30%</Text>
          </View>
          <View>
            <Text style={{ fontSize: 12 }}>Pressure</Text>
            <Text style={styles.value}>450kPa</Text>
          </View>
          <View>
            <Text style={{ fontSize: 12 }}>Wind</Text>
            <Text style={styles.value}>2km/h</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TempIndicator;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.borderWhite,
    padding: 20,
    borderRadius: 8,
    marginTop: 30,
  },
  firstrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13,
  },
  underline: {
    height: 1,
    backgroundColor: Colors.shadeGray2,
    marginBottom: 20,
  },
  value: { fontSize: 14, fontFamily: Fonts.Bold, marginTop: 5 },
});
