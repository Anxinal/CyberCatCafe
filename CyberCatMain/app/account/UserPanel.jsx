import {View, Text } from "react-native";
import { getUserInfo } from "./userInfo";
import { Colors } from "../../constants/Colors";
import React, { useEffect, useState } from "react";
import { accountStyles } from "@/constants/AccountStyles"; 
import { getApproximateView } from "@/data/TimerConvert";
import { StatusDisplay } from "@/components/StatusDisplay";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
//TODO: Change this after the colors settings are updated
const colorTheme = Colors.dark;

export const UserPanel = () =>{

   const TimeIcon = () => (<Ionicons name="timer-sharp" size={40} color="black" />);
   const CoinIcon = () => (<AntDesign name="pay-circle1" size={24} color="black" />);
   const userIcon = () => (<AntDesign name="user" size={24} color="black" />);
   const [username, setUsername] = useState("");
   const [focusHour, setFocusHour] = useState(0);

   useEffect(() => {
     getUserInfo("username", setUsername);
     getUserInfo("totalFocus", setFocusHour);
   }, [username, focusHour])

   return  (
    <View style = {{marginBottom: 5, height: 200, backgroundColor: "#fff", marginTop:30}}>
      <View style = {{borderColor: 'grey', borderWidth: 2, borderRadius: 10,
                     height: 60, width: '95%',
                    flexDirection:"column", marginHorizontal: 'auto', marginVertical: 10,
    }}> 
        <Text style = {accountStyles.infoTitle}> UserCenter </Text>
       </View>
      <View style = {{flexDirection: 'row',  marginHorizontal: 20}}>
       <StatusDisplay attribute={"totalFocus"} 
                      text = {"  "} 
                      mapFunction={getApproximateView}
                      Child={TimeIcon}
                      viewStyle={{width: 150}}
                      fontSize={25}/>
        <View style = {{marginLeft: 15}}>
             <StatusDisplay attribute={"coins"} 
                      text = {"  "} 
                      mapFunction = {x => x}
                      Child={CoinIcon}/>
              <StatusDisplay attribute={"username"} 
                      text = {"  "} 
                      Child={userIcon}/>
        </View>
    </View>
    </View>
      
  );
} 


