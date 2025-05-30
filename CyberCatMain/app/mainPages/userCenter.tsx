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
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     setuserInfo(user.uid);
//     getDoc(doc(collectionRef, user.uid)).then( (doc) => {
//       if (doc.exists()) {
//         console.log("OK");
//       }else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//       }
//     }).catch((error) => {
//     console.log("Error getting document:", error);
//   });
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// }); 
  getUserInfo("username", setuserInfo);
  return  (
  <View>
     <Text style = {{color: 'white', fontSize: 20}}> This is to test the user Id function: {userInfo}</Text>
      
  <button title = "signout" onClick = {() => {signOut(auth).then(() => {console.log("signed out successfully")})}} />
  </View>

);
}

