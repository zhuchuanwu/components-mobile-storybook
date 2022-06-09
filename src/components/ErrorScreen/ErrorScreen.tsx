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
    return;
  }, []);
  return (
    <View style={[t.wFull, t.justifyCenter, t.itemsCenter]}>
      <View style={[isLandscape ? t.w2_5 : t.wFull, t.itemsCenter]}>
        {logoElement}
        <Image
          source={illustration ?? { uri: "" }}
          resizeMode="contain"
          style={[
            t.mT6,
            t.mB4,
            {
              width: isLandscape ? (1 / 5) * width : (1 / 2) * width,
              height: isLandscape ? (1 / 5) * width : (1 / 2) * width,
            },
          ]}
        />
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
