import React from "react";
import {Text, View} from "react-native"
import { app } from "../../firebasecConfig.js"
import { getFirestore, doc, getDoc, collection } from "firebase/firestore";
import { Maybe } from "@/data/Maybe.js"; 
export default function userCenter({userId} : {userId: string}) {
  const db = getFirestore(app);
  const collectionRef = collection(db, "users");
  const docRef = doc(collectionRef, userId);
  let userData = null;
  const docSnap =  getDoc(docRef).then( (doc) => {
      if (doc.exists()) {
        console.log("Document data:", doc.data()?.username);
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

