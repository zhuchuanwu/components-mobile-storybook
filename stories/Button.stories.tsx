import React from "react";
import { View, Image } from "react-native";
import { t } from "react-native-tailwindcss";

import { Button } from "../index";
import { ButtonProps } from "../src/components/Button/Button";
import ThemeProvider from "../src/components/ThemeProvider";

export default {
  title: "components/Common/Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed" },
  },
};

export const Basic = (args: ButtonProps) => (
  <ThemeProvider>
    <Button {...args}>Button</Button>
  </ThemeProvider>
);

export const ButtonWithIcon = (args: ButtonProps) => (
  <ThemeProvider>
    <Button {...args}>Button</Button>
  </ThemeProvider>
);

export const ButtonOnlyWithIcon = (args: ButtonProps) => (
  <ThemeProvider>
    <Button {...args} />
  </ThemeProvider>
);
Basic.args = {
  onPress: () => {},
  variant: "contained",
  disabled: false,
  loading: false,
} as ButtonProps;

ButtonWithIcon.args = {
  onPress: () => {},
  variant: "contained",
  disabled: false,
  loading: false,
  icon: (
    <Image
      source={{
        uri: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png",
      }}
      style={{ width: 30, height: 30 }}
    />
  ),
} as ButtonProps;

ButtonOnlyWithIcon.args = {
  onPress: () => {},
  variant: "contained",
  disabled: false,
  loading: false,
  icon: (
    <Image
      source={{
        uri: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png",
      }}
      style={{ width: 30, height: 30 }}
    />
  ),
} as ButtonProps;
