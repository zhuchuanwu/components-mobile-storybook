import { TextStyle, ViewStyle } from "react-native";

declare module "react-native-tailwindcss" {
  import {
    TailwindColors as DefaultTailwindColors,
    TailwindStyles as DefaultTailwindStyles,
  } from "react-native-tailwindcss";

  interface CustomColors {
    primary: ViewStyle | TextStyle;
    primaryBlue: ViewStyle | TextStyle;
    bgPrimary: ViewStyle;
    bgPrimaryBlue: ViewStyle;
    bgHalfTransparent: ViewStyle;
    textPrimary: TextStyle;
    textPrimaryBlue: TextStyle;
    borderPrimary: ViewStyle;
    borderPrimaryBlue: ViewStyle;
    bgLightGray: ViewStyle;
    shallowBlue: ViewStyle | TextStyle;
    lightBlue: ViewStyle | TextStyle;
    textPartialPaid: ViewStyle | TextStyle;

    neutralsGrey: string;

    bgNeutralsGrey: ViewStyle;
    textNeutralsGrey: TextStyle;

    primaryNavyLight: string;
    bgPrimaryNavyLight: ViewStyle;
    textPrimaryNavyLight: TextStyle;
    borderPrimaryNavyLight: TextStyle;

    primaryRedLight: string;
    bgPrimaryRedLight: ViewStyle;
    textPrimaryRedLight: TextStyle;
    borderPrimaryRedLight: TextStyle;

    lightBlack: string;
    bgLightBlack: ViewStyle;
    textLightBlack: TextStyle;
    borderLightBlack: TextStyle;

    bgNeutralsGrey: ViewStyle;

    roundedHalf: ViewStyle;
    textLightGray: TextStyle;

    unActive: string;

    fontPrimary: TextStyle;
    fontPrimaryBold: TextStyle;
    fontPrimaryBoldHeavy: TextStyle;
    textHeading6: TextStyle;
    textHeading5: TextStyle;
    textHeading4: TextStyle;
    textHeading3: TextStyle;
    textHeading2: TextStyle;
    textHeading1: TextStyle;
    textSubHeading1: TextStyle;

    leading6: TextStyle;
    leading5: TextStyle;
    leading4: TextStyle;
    leading3: TextStyle;
    leading2: TextStyle;
    leading1: TextStyle;

    primaryNavyLight: ViewStyle | TextStyle;

    shallowBlue: ViewStyle | TextStyle;
    lightBlue: ViewStyle | TextStyle;

    shallowYellow: ViewStyle | TextStyle;
    lightYellow: ViewStyle | TextStyle;

    shallowPurple: ViewStyle | TextStyle;
    lightPurple: ViewStyle | TextStyle;

    shallowCyan: ViewStyle | TextStyle;
    lightCyan: ViewStyle | TextStyle;

    shallowGreen: ViewStyle | TextStyle;
    lightGreen: ViewStyle | TextStyle;
  }

  export interface TailwindStyles extends DefaultTailwindStyles, CustomColors {
    text16: any;
    rounded16: any;
    rounded20: ViewStyle;
    roundedT20: ViewStyle;
    roundedB20: ViewStyle;
    rounded28: ViewStyle;
    roundedT28: ViewStyle;
  }
  export interface TailwindColors extends DefaultTailwindColors, CustomColors {}
}
