import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useRouter } from "expo-router";
import {textFont, textColor, componentColor} from '@/constants/ReusableStyles.ts'
const About = () =>  (
    <View>
        <View style = {styles.titleContainer}>
            <Text style = {styles.title}>About Cyber Cat Cafe</Text>
        </View>   
      <Text style ={styles.content}>
        Never expected that you have arrived here. Let me just finish my job here.
      </Text>
       <Text style ={styles.content}>The Cyber Cat Cafe application is developed by AnXiousgrassHoppeR
        With special thanks to XXX who has showcased his/her artistic talent in the design of the cats.
        Oh That's all, have a nice day.
        </Text> 
      <TouchableOpacity onPress = {() => {useRouter().push("/mainPages/UserCenter/screen")}}> 
        <Text style ={styles.link}>Back to User Center</Text>
      </TouchableOpacity>
    </View>
  );


export default About;
const styles = StyleSheet.create({
    title: {fontSize: textFont.medium, color: textColor.normal, marginLeft: 10, marginRight: 10,},
    content: {fontSize: textFont.small + 2, color: textColor.normal},
    link: {fontSize: textFont.small, color: textColor.link, marginTop: 20},
    titleContainer: {marginTop: 10, borderWidth: 1, 
                     borderColor: componentColor.border, 
                     borderRadius: 15, marginHorizontal:'auto',
                     marginBottom: 25,},
});