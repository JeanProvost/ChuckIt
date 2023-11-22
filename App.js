import React from "react";
import { Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import colors from "../ChuckIt/app/config/colors";
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from "./app/components/AppText";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>PLaceholder Text</AppText>
    </View>
  );
}

