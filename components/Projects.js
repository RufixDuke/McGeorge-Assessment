import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import { Fonts } from "../constants/fonts";
import { Colors } from "../constants/colors";
import routes from "../navigation/routes";

const Projects = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontFamily: Fonts.Bold, fontSize: 16 }}>
            My Projects
          </Text>
          <Pressable
            onPress={() => navigation.navigate(routes.PROJECTS_SCREEN)}
          >
            <Image source={require("../assets/icons/rightarrow.png")} />
          </Pressable>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/images/cocoa.png")}
            style={{ marginRight: 5 }}
          />
          <View style={{ justifyContent: "space-between" }}>
            <View>
              <Text style={{ fontFamily: Fonts.Medium }}>Cocoa Project</Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: Fonts.Regular,
                  marginTop: 2,
                }}
              >
                08 May 2023
              </Text>
            </View>
            <View>
              <Progress.Bar
                progress={0.4}
                width={200}
                color={Colors.primary}
                style={{
                  borderRadius: 1,
                  borderWidth: 0,
                  backgroundColor: "#D9D9D9",
                }}
              />
              <View style={styles.progress}>
                <Text style={{ fontSize: 12, fontFamily: Fonts.Regular }}>
                  40%
                </Text>
                <Text>in progress</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <Pressable
        style={{ backgroundColor: Colors.primary, paddingVertical: 15 }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: Fonts.Bold,
            color: Colors.white,
          }}
        >
          Create New Project
        </Text>
      </Pressable>
    </View>
  );
};

export default Projects;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.borderWhite,
    padding: 20,
    borderRadius: 8,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  progress: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
});
