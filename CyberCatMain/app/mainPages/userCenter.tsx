import React, { useState } from "react";
import {Text, View, Button, TouchableOpacity } from "react-native"
import { getAuth } from "firebase/auth";
import { getUserInfo, updateUserInfo } from "../account/userInfo.js"
import { useRouter } from "expo-router";
export default function userCenter() {
  const [userInfo, setuserInfo] = useState("nothing");

const auth = getAuth();

  getUserInfo("username", setuserInfo);
  return  (
  <View>
     <Text style = {{color: 'white', fontSize: 20}}> This is to test the user Id function: {userInfo}</Text>
      
  <TouchableOpacity  onPress = {() => {updateUserInfo("username","fnxinal").then(setuserInfo)}}  style = {{height: 50, maxWidth: 200, flex: 1, marginTop: 10, backgroundColor: 'white'}}> 
    <Text>Update user information</Text>
  </TouchableOpacity>
  </View>

);
}

