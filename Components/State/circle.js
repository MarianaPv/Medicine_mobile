import { View } from "native-base";
import React from "react";
import { Image } from "react-native";

export default function Circle(props) {
  const settingImageFocused = require("./circle.png");
  const settingImageUnfocused = require("./circle_colored.png");

  let settingImage = props.focused
    ? settingImageFocused
    : settingImageUnfocused;
  return (
    <View>
      <Image
        source={settingImage}
        style={{ width: 20, height: 20, marginTop: 7 }}
      />
    </View>
  );
}
