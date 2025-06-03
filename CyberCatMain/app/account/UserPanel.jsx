import {View, Text, StyleSheet } from "react-native";
import { getUserInfo } from "./userInfo";
import { Colors } from "../../constants/Colors";
import React, { useEffect, useState } from "react";



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
        <Text style = {styles.infoText}> UserCenter </Text>
        <Text style = {styles.infoText}> Username: {username}</Text>
        <Text style = {styles.infoText}> User total focus hour: {focusHour}</Text>
    </View>
  );
} 


const styles = StyleSheet.create({
    infoText : {
        color: colorTheme.text,
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 'auto',
        marginTop: 10,
        marginBottom: 10,
        alignContent: "center",
    }
});