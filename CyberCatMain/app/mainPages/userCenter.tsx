import React from "react";
import {Text, View} from "react-native"
import { app } from "../../firebasecConfig.js"
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Maybe } from "@/data/Maybe.js"; 
export default function userCenter({userId} : {userId: string}) {
  const db = getFirestore(app);
  const docRef = doc(db, "users/" + userId, "profile");
  let userData = null;
  const docSnap =  getDoc(docRef).then( (doc) => {
      if (doc.exists()) {
        console.log("Document data:", doc.data());
        userData = doc.data();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
  }
  ).catch((error) => {
    console.log("Error getting document:", error);
});

  return  (
  <Text> This is to test the user Id function: {userData}</Text>
);
}

