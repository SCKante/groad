import { useEffect, useCallback, useState } from "react";
import { useFonts } from "expo-font";
import * as NavigationBar from "expo-navigation-bar";
import { THEMES } from "./constants";
import { Onboarding } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import { Linking, Platform, Text, View } from "react-native";

const Stack = createStackNavigator();
const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Constants.manifest.sdkVersion}`;

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={THEMES.fonts.H1}>Home screen</Text>
    </View>
  );
};
const App = () => {
  const [fontsLoaded] = useFonts({
    SF_Regular: require("./assets/fonts/SF-Pro-Text-Regular.otf"),
    SF_Medium: require("./assets/fonts/SF-Pro-Text-Medium.otf"),
    SF_Semibold: require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  });
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("white");
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== "web" && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(
            NAVIGATION_STATE_KEY
          );
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };
    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  const onStateChange = useCallback(
    async (state) =>
      await AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state)),
    []
  );

  if (!fontsLoaded || !isReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Assets Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer {...{ onStateChange, initialState }}>
      <Stack.Navigator screenOptions={{ headerMode: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
