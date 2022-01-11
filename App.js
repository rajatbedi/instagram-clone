import React from "react";
import {
  SourceSansPro_300Light,
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
  SourceSansPro_700Bold,
  useFonts,
} from "@expo-google-fonts/source-sans-pro";
import AppLoading from "expo-app-loading";
import MainNavigation from "./src/navigation/main.navigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  const [fontLoaded] = useFonts({
    SourceSansPro400: SourceSansPro_400Regular,
    SourceSansPro600: SourceSansPro_600SemiBold,
    SourceSansPro700: SourceSansPro_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  }
}