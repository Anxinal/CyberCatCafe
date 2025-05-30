import React, { useState } from "react";
import {Text, View } from "react-native"
import { app } from "../../firebasecConfig.js"
import { getFirestore, doc, getDoc, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Maybe } from "@/data/Maybe.js"; 
export default function userCenter() {
  const db = getFirestore(app);
  const collectionRef = collection(db, "users");
  const [userId, setuserId] = useState("nothing");

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    setuserId(user.uid);
    console.log(user.uid);
    getDoc(doc(collectionRef, userId)).then( (doc) => {
      if (doc.exists()) {
        console.log("OK");
      }else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch((error) => {
    console.log("Error getting document:", error);
  });
    // ...
  } else {
    // User is signed out
    // ...
  }
});
  
  

  return  (
  <Text style = {{color: 'white', fontSize: 20}}> This is to test the user Id function: {userId}</Text>
);
}

