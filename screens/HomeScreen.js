import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { Colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";
import TempIndicator from "../components/TempIndicator";
import Projects from "../components/Projects";
import { Tasks } from "../constants/dummyData";
import { useNavigation } from "@react-navigation/native";
import Task from "../components/Task";
import routes from "../navigation/routes";

const HomeScreen = () => {
  const navigation = useNavigation();

  const Header = () => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: Colors.shadesGreen,
          padding: 10,
          borderRadius: 20,
        }}
      >
        <AppText styles={{ color: Colors.bodyBlack }}>AU</AppText>
      </View>
      <Image source={require("../assets/icons/Vector.png")} />
    </View>
  );

  return (
    <Screen
      style={{
        marginHorizontal: 15,
        backgroundColor: Colors.shadeWhite,
      }}
    >
      {Header()}
      <TempIndicator navigation={navigation} />

      <Projects navigation={navigation} />

      <View style={styles.Projects}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: Fonts.Bold, fontSize: 16 }}>
            Today's Tasks
          </Text>
          <Pressable onPress={() => navigation.navigate(routes.TASKS_SCREEN)}>
            <Image source={require("../assets/icons/rightarrow.png")} />
          </Pressable>
        </View>

        <ScrollView>
          {Tasks.map((task) => (
            <Task
              key={task.id}
              title={task.title}
              status={task.status}
              imgUrl={task.imgUrl}
            />
          ))}
        </ScrollView>
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  Projects: {
    borderWidth: 1,
    borderColor: Colors.borderBg2,
    padding: 20,
    borderRadius: 8,
    marginTop: 30,
    marginBottom: 10,
  },
});
