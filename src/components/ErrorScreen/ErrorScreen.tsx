import React, { useMemo } from "react";
import { useWindowDimensions, View } from "react-native";
import { t } from "react-native-tailwindcss";
import Button from "../Button/Button";
import LogoTPL from "../../../assets/LogoTPL.svg";

export interface ErrorScreenProps {
  logo?: "the-pique-lab" | "the-pi-lab" | React.ReactNode;
  title: string;
  description?: string;
  illustration?: string;
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
      return;
    }
    return;
  }, []);
  return (
    <View style={[t.wFull, t.justifyCenter, t.itemsCenter]}>
      <View style={[isLandscape ? t.w2_5 : t.wFull]}>
        <LogoTPL />
        <Button variant="contained" onPress={onButtonPress}>
          {buttonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ErrorScreen;
