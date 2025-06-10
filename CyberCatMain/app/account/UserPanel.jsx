import {View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { getUserInfo } from "./userInfo";
import { Colors } from "../../constants/Colors";
import React, { useEffect, useState } from "react";
import { accountStyles } from "@/constants/AccountStyles"; 
import { getApporximateView } from "@/data/TimerConvert";
//TODO: Change this after the colors settings are updated
const colorTheme = Colors.dark;

export const UserPanel = () =>{

 

   const [username, setUsername] = useState("");
   const [focusHour, setFocusHour] = useState(0);

   useEffect(() => {
     getUserInfo("username", setUsername);
     getUserInfo("totalFocus", setFocusHour);
   }, [username, focusHour])

   return  (
      <View style = {{borderColor: 'grey', borderWidth: 2, borderRadius: 10, maxHeight: 300, maxWidth: 1024,
                    marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 20, marginHorizontal: 'auto',
                    flexDirection:"column"
    }}> 
        <Text style = {accountStyles.infoText}> UserCenter </Text>
        <Text style = {accountStyles.infoText}> Hi, {username}, want to start a new focus session ?</Text>
        <Text style = {accountStyles.infoText}> You have focused for {getApporximateView(focusHour)} seconds</Text>
    </View>
  );
} 


