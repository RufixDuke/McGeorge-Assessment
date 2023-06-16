import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Screen from "../components/Screen";
import { Colors } from "../constants/colors";
import { Forecast, Rain } from "../constants/dummyData";
import routes from "../navigation/routes";
import AppWeather from "../components/AppWeather";
import AppWeatherInfo from "../components/AppWeatherInfo";
import AppRainValue from "../components/AppRainValue";
import AppCustomTab from "../components/AppCustomTab";
import AppHeader from "../components/AppHeader";

const ForecastScreen = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState("Today");
  const [activeBg, setActiveBg] = useState(1);
  const data = Forecast[active.toLowerCase()];
  return (
    <Screen
      style={{
        backgroundColor: Colors.shadeWhite,
        marginTop: 10,
      }}
    >
      <AppHeader navigation={navigation} title={"Weather Forecast"} />

      <AppWeather temp={29} status={"Sunny"} />

      <View style={styles.tabs}>
        <AppCustomTab
          label="Today"
          active={active === "Today"}
          onPress={() => setActive("Today")}
        />

        <AppCustomTab
          label="Tomorrow"
          active={active === "Tomorrow"}
          onPress={() => setActive("Tomorrow")}
        />

        <AppCustomTab
          label="Next 7 Days"
          active={false}
          onPress={() => navigation.navigate(routes.NEXT_SEVEN_SCREEN)}
          icon
        />
      </View>

      <View style={styles.weather}>
        {data.map((data) => (
          <AppWeatherInfo
            title={data.title}
            value={data.value}
            details={data.details}
            key={data.id}
            num={data.id}
          />
        ))}
      </View>

      <View style={styles.info}>
        <Image
          source={require("../assets/icons/info.png")}
          style={{ marginRight: 10 }}
        />
        <Text style={{ fontSize: 12 }}>
          Tomorrow’s weather will be cooler and more humid than today
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text>Chance of rain</Text>
        <ScrollView
          horizontal
          style={{ marginTop: 10 }}
          showsHorizontalScrollIndicator={false}
        >
          {Rain.map((data) => (
            <AppRainValue
              time={data.time}
              activeBg={activeBg}
              onPress={() => setActiveBg(data.id)}
              value={data.value}
              num={data.id}
              key={data.id}
            />
          ))}
        </ScrollView>
      </View>
    </Screen>
  );
};

export default ForecastScreen;

const styles = StyleSheet.create({
  underline: {
    height: 1,
    backgroundColor: Colors.shadeGray2,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.info,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 4,
    marginTop: 20,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLine,
    marginTop: 40,
  },
  weather: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
});
