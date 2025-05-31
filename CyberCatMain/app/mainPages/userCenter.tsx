import React, { useState } from "react";
import {Text, View, Button } from "react-native"
import { app } from "../../firebasecConfig.js"
import { getFirestore, doc, getDoc, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getUserInfo } from "../account/userInfo.js"
export default function userCenter() {
  const db = getFirestore(app);
  const collectionRef = collection(db, "users");
  const [userInfo, setuserInfo] = useState("nothing");

const auth = getAuth();

  getUserInfo("username", setuserInfo);
  return  (
  <View>
     <Text style = {{color: 'white', fontSize: 20}}> This is to test the user Id function: {userInfo}</Text>
      
  <button title = "signout" onClick = {() => {signOut(auth).then(() => {console.log("signed out successfully")})}} />
  </View>

);
}

