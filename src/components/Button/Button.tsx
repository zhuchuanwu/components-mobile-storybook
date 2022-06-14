import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Button as ButtonBase, IconButton } from "react-native-paper";
import { colors, t } from "react-native-tailwindcss";
import { isEmpty } from "lodash";
import theme from "../../theme";

export interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  variant?: "text" | "outlined" | "contained" | "secondary";
  onPress?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  style,
  variant = "contained",
  onPress,
  disabled,
  icon,
  children,
  loading,
}) => {
  let defaultStyle: StyleProp<ViewStyle>[] = [];
  let defaultLabelStyle: StyleProp<ViewStyle>[] = [];
  let defaultContentStyle: StyleProp<ViewStyle>[] = [{ height: 45 }];
  let mode: "text" | "outlined" | "contained" | undefined = "outlined";
  let color = colors.white;
  switch (variant) {
    case "outlined":
      defaultStyle = [...defaultStyle, t.borderPrimary, t.bgWhite];
      defaultLabelStyle = [t.textPrimary];
      mode = variant;
      break;
    case "contained":
      defaultStyle = [...defaultStyle, t.bgPrimary];
      defaultLabelStyle = [t.textWhite];
      mode = variant;
      break;
    case "text":
      defaultStyle = [...defaultStyle, t.bgTransparent];
      defaultLabelStyle = [t.textPrimary];
      mode = variant;
      break;
    case "secondary":
      mode = "text";
      defaultStyle = [...defaultStyle, t.bgNeutralsGrey];
      defaultLabelStyle = [t.textBlack];
      break;
    default:
      break;
  }
  if (disabled) {
    defaultStyle = [...defaultStyle, t.opacity50];
  }
  if (isEmpty(children)) {
    defaultStyle = [
      ...defaultStyle,
      { width: 45, height: 45, minWidth: 45 },
      t.justifyCenter,
      t.itemsCenter,
    ];

    defaultLabelStyle = [...defaultLabelStyle, t.w0, t.h0];
    defaultContentStyle = [...defaultContentStyle, { width: 45 }, t.pL4];
  }
  return (
    <ButtonBase
      theme={theme}
      uppercase={false}
      mode={mode}
      color={color}
      style={[...defaultStyle, style]}
      labelStyle={[t.fontSemibold, ...defaultLabelStyle]}
      onPress={onPress}
      contentStyle={[defaultContentStyle]}
      icon={({ size, color }) => {
        if (isEmpty(icon) || icon == undefined) {
          return null;
        }
        if (React.isValidElement(icon)) {
          return React.cloneElement(icon as React.ReactElement<any>, {
            style: {
              width: size,
              height: size,
              tintColor: color,
            },
          });
        }
        return null;
      }}
      // contentStyle={{flexDirection: 'row-reverse'}}
      disabled={disabled}
      children={children}
      loading={loading}
    />
  );
};
export default Button;
