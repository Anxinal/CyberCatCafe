import React, { useState } from "react";
import {Text, View, Button, TouchableOpacity } from "react-native"
import { getAuth } from "firebase/auth";
import { getUserInfo } from "../account/userInfo.js"
import {UserPanel} from "../account/UserPanel.jsx"
export default function userCenter() {

const auth = getAuth();

  return  (
  <View>
  <UserPanel/>  
  <TouchableOpacity  onPress = {() => {}}  style = {{height: 50, maxWidth: 200, flex: 1, marginTop: 10, backgroundColor: 'white'}}> 
    <Text>Update user information</Text>
  </TouchableOpacity>
  </View>

);
}

