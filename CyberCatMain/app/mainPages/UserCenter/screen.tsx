import React from "react";
import { View } from "react-native"
import { SettingButtons } from "./SettingButtons.jsx"
import { UserPanel } from "../../account/UserPanel.jsx"
import { SafeAreaView } from "react-native-safe-area-context";

export default function userCenter() {

  return  (
  <SafeAreaView>
  <UserPanel/>  
  <SettingButtons/>
  </SafeAreaView>
);
}
