import React from "react";

import { Button } from "../index";

export default {
  title: "components/Common/Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed" },
  },
};

export const Basic = (args) => <Button {...args}>Button</Button>;

Basic.args = {
  text: "Hello World",
  color: "purple",
};
