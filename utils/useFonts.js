import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

const useFonts = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function cacheFonts() {
      try {
        await Font.loadAsync({
          "DMSans-Bold": require("../assets/fonts/DMSans-Bold.ttf"),
          "DMSans-Medium": require("../assets/fonts/DMSans-Medium.ttf"),
          "DMSans-Regular": require("../assets/fonts/DMSans-Regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    cacheFonts();
  }, [appIsReady]);

  return appIsReady;
};

export default useFonts;
