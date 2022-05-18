import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, StyleProp, TextStyle, ViewStyle } from "react-native";
import { Button as ButtonBase, IconButton } from "react-native-paper";
import { color, t } from "react-native-tailwindcss";

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  mode?: "text" | "outlined" | "contained" | undefined;
  onPress?: () => void;
  labelStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  icon?: {
    image: React.ReactNode;
    direction?: "rtl" | "ltr" | "auto";
    size?: "lg" | "md";
  };
  size?: "lg" | "md";
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  style,
  mode = "contained",
  onPress,
  disabled,
  size = "lg",
  icon,
  children,
  loading,
  labelStyle,
}) => {
  let defaultStyle: StyleProp<ViewStyle>[] = [t.roundedLg];
  let defaultLabelStyle: StyleProp<ViewStyle>[] = [];
  switch (mode) {
    case "outlined":
      defaultStyle = [...defaultStyle, t.borderPrimary, t.bgWhite];
      defaultLabelStyle = [t.textBlack];
      break;
    case "contained":
      defaultStyle = [...defaultStyle];
      defaultLabelStyle = [t.textWhite];
      break;
    case "text":
      defaultStyle = [...defaultStyle, t.bgNeutralsGrey];
      defaultLabelStyle = [t.textBlack];
      break;
    default:
      break;
  }

  return (
    <ButtonBase
      uppercase={false}
      mode={mode}
      style={[...defaultStyle, style]}
      labelStyle={[t.fontSemibold, ...defaultLabelStyle, labelStyle]}
      onPress={onPress}
      color={color.primary}
      icon={({ size, color, direction }) => icon?.image ?? null}
      contentStyle={[size === "lg" ? t.h12 : t.h8]}
      // contentStyle={{flexDirection: 'row-reverse'}}
      disabled={disabled}
      children={children}
      loading={loading}
    />
  );
};
export default Button;
