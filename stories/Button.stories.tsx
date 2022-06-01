import React from "react";
import { View } from "react-native";
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
    <Button {...args} />
  </ThemeProvider>
);
Basic.args = {
  disabled: true,
  onPress: () => {
    alert("sdds");
  },
};
