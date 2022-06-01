import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import * as Font from "expo-font";
import theme from "../theme";

const ThemeProvider: React.FC = ({ children }) => {
  const [loaded, error] = Font.useFonts({
    Mont: require("../../assets/customFonts/Mont-Regular.ttf"),
    MontBold: require("../../assets/customFonts/Mont-SemiBold.ttf"),
    MontBoldHeavy: require("../../assets/customFonts/Mont-Bold.ttf"),
  });

  return loaded ? (
    <PaperProvider theme={theme}>{children}</PaperProvider>
  ) : null;
};
export default ThemeProvider;
