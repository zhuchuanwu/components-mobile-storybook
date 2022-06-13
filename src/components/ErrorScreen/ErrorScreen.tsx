import React, { useMemo } from "react";
import {
  Image,
  ImageSourcePropType,
  useWindowDimensions,
  View,
} from "react-native";
import { t } from "react-native-tailwindcss";
import Button from "../Button/Button";

import { SvgXml } from "react-native-svg";
import LogoTPL from "../LogoTPL/LogoTPL";
import InsufficientCredentials from "../InsufficientCredentials";
import { Text } from "react-native-paper";
import LogoPiLab from "../LogoPiLab/LogoPiLab";

export interface ErrorScreenProps {
  logo?: "the-pique-lab" | "the-pi-lab" | React.ReactNode;
  title: string;
  description?: string;
  illustration?: ImageSourcePropType;
  buttonLabel: string;
  onButtonPress?: () => void;
}

function ErrorScreen({
  logo,
  title,
  description,
  illustration,
  buttonLabel,
  onButtonPress,
}: ErrorScreenProps) {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const logoElement = useMemo(() => {
    if (logo === "the-pique-lab") {
      return <LogoTPL style={[t.wFull, t.w2_3]} />;
    }
    if (logo === "the-pi-lab") {
      return (
        <Image
          source={require("../../../assets/pilab-logo.png")}
          resizeMode="contain"
          style={[
            {
              width: isLandscape ? (1 / 2) * width : 0.8 * width,
              height: isLandscape ? (1 / 4) * width : 0.5 * width,
            },
          ]}
        />
      );
    }

    return logo;
  }, []);
  return (
    <View style={[{ width, height }, t.justifyCenter, t.itemsCenter]}>
      <View style={[isLandscape ? t.w2_5 : t.wFull, t.itemsCenter]}>
        {logoElement}
        <Image
          source={illustration ?? { uri: "" }}
          resizeMode="contain"
          style={[
            t.mT8,
            t.mB4,
            {
              width: isLandscape ? (1 / 5) * width : (1 / 2) * width,
              height: isLandscape ? (1 / 5) * width : (1 / 2) * width,
            },
          ]}
        />
        <Text
          style={[
            t.wFull,
            t.pX4,
            t.mT4,
            t.fontPrimaryBold,
            t.text2xl,
            t.textPrimaryNavyLight,
            t.textCenter,
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            t.wFull,
            t.pX4,
            { color: "#A7A9BD", fontSize: 14 },
            t.textCenter,
            t.mT2,
            t.mB6,
            t.minH10,
          ]}
        >
          {description}
        </Text>
        <View style={[t.wFull]}>
          <Button variant="contained" onPress={onButtonPress}>
            {buttonLabel}
          </Button>
        </View>
      </View>
    </View>
  );
}

export default ErrorScreen;
