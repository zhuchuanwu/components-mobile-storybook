import React from "react";
import { View, Image, useWindowDimensions } from "react-native";
import { t } from "react-native-tailwindcss";

import { Button } from "../index";
import { ButtonProps } from "../src/components/Button/Button";
import { ErrorScreen } from "../index";
import ThemeProvider from "../src/components/ThemeProvider";
import { ErrorScreenProps } from "../src/components/ErrorScreen/ErrorScreen";

export default {
  title: "components/Common/ErrorScreen",
  component: ErrorScreen,
  argTypes: {
    onPress: { action: "pressed" },
  },
};

export const OverView = (args: ErrorScreenProps) => {
  return (
    <ThemeProvider>
      <ErrorScreen {...args} />
    </ThemeProvider>
  );
};

OverView.args = {
  title: "Title",
  buttonLabel: "Button",
  description: "Sample description describing the error will be here.",
  onButtonPress: () => {},
  logo: "the-pi-lab",
  illustration: require("../assets/InsufficientCredentials.png"),
} as ErrorScreenProps;
