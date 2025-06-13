import {Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import {textFont, textColor} from '@/constants/ReusableStyles.ts'
import { useRouter } from 'expo-router'

export const HrefLink = ({href, text, isCentered = false}) => {
     const router = useRouter();
     return  (<TouchableOpacity onPress = {() => {router.push(href)}}> 
         <Text style ={[styles.link, isCentered && styles.link]}>{text}</Text>
       </TouchableOpacity>
  )
};

export const ActionLink = ({action, text, isCentered = false}) => (
      <TouchableOpacity onPress = {action}> 
         <Text style ={[styles.link, isCentered && styles.centered]}>{text}</Text>
       </TouchableOpacity>
  );


const styles = StyleSheet.create({

    content: {fontSize: textFont.small + 2, color: textColor.normal},
    link: {fontSize: textFont.small, color: textColor.link, marginTop: 20},
    centered: {marginHorizontal: 'auto'},

});