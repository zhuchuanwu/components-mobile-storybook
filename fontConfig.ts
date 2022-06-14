import { Font } from "react-native-paper/lib/typescript/types";

const regularFont: Font = {
  fontFamily: "Mont",
  fontWeight: "normal",
};
const font = {
  regular: regularFont,
  medium: regularFont,
  light: regularFont,
  thin: regularFont,
};

const fontConfig = {
  web: font,
  ios: font,
  android: font,
};
export default fontConfig;
