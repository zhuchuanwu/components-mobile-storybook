import React from "react";
import { View, Image } from "react-native";
import { t } from "react-native-tailwindcss";

import { Button } from "../index";
import { ButtonProps } from "../src/components/Button/Button";
import ErrorScreen, {
  ErrorScreenProps,
} from "../src/components/ErrorScreen/ErrorScreen";
import ThemeProvider from "../src/components/ThemeProvider";

export default {
  title: "components/Common/ErrorScreen",
  component: ErrorScreen,
  argTypes: {
    onPress: { action: "pressed" },
  },
};

export const OverView = (args: ErrorScreenProps) => (
  <ThemeProvider>
    <ErrorScreen {...args} />
  </ThemeProvider>
);

OverView.args = {
  title: "Title",
  buttonLabel: "Button",
  onButtonPress: () => {},
} as ErrorScreenProps;
