import React from "react";
import { SettingButtonFrame } from "./SettingButtons"
import { UserPanel } from "../../account/UserPanel.jsx"
import {  SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

export default function userCenter() {

  return  (

    <View style = {{alignItems: 'center', 
                          flex: 1, 
                          flexDirection:'column', 
                          backgroundColor:"#fff"}}>
  <UserPanel/>  
  <SettingButtonFrame/>
  </View>
  
);
}
