import React from "react";
import StorybookUIRoot from "./.ondevice/Storybook";
import { Platform, StatusBar, View } from "react-native";
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { color } from "react-native-tailwindcss";
import * as Font from "expo-font";

let theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: color.primary,
    accent: "yellow",
    text: color.black,
    background: color.white,
  },
  fonts: configureFonts(fontConfig),
};

export default () => {
  const [loaded, error] = Font.useFonts({
    Mont: require("./assets/customFonts/Mont-Regular.ttf"),
    MontBold: require("./assets/customFonts/Mont-SemiBold.ttf"),
    MontBoldHeavy: require("./assets/customFonts/Mont-Bold.ttf"),
  });
  return  <PaperProvider theme={theme}>
    <View>
     <StorybookUIRoot />
   </View>
</PaperProvider>
}
 

