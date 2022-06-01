import {
    configureFonts,
    DefaultTheme,
    Provider as PaperProvider,
  } from "react-native-paper";
import { color } from "react-native-tailwindcss";
import fontConfig from "../fontConfig";
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
  
  export default theme;