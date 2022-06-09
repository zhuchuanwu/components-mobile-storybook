import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import * as Font from "expo-font";
import theme from "../theme";
// import EStyleSheet from "react-native-extended-stylesheet";

const ThemeProvider: React.FC = ({ children }) => {
  const [loaded, error] = Font.useFonts({
    Mont: require("../../assets/customFonts/Mont-Regular.ttf"),
    MontBold: require("../../assets/customFonts/Mont-SemiBold.ttf"),
    MontBoldHeavy: require("../../assets/customFonts/Mont-Bold.ttf"),
  });
  // app entry

  // EStyleSheet.build({
  //   $rem: 16,
  // });
  return loaded ? (
    <PaperProvider theme={theme}>{children}</PaperProvider>
  ) : null;
};
export default ThemeProvider;
