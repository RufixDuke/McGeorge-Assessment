import AppNavigator from "./navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import useFonts from "./utils/useFonts";

export default function App() {
  const appIsReady = useFonts();

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
