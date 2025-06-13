        
        
        
        
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {textFont, textColor, componentColor} from '@/constants/ReusableStyles.ts'

export const TitleComp = ({content}) => {

  return (
 <View style = {styles.titleContainer}>
    <Text style = {styles.title}>{content}</Text>
 </View>   )
};

const styles = StyleSheet.create({
    title: {fontSize: textFont.medium, color: textColor.normal, marginLeft: 10, marginRight: 10,},
    content: {fontSize: textFont.small + 2, color: textColor.normal},
    link: {fontSize: textFont.small, color: textColor.link, marginTop: 20},
    titleContainer: {marginTop: 10, borderWidth: 1, 
                     borderColor: componentColor.border, 
                     borderRadius: 15, marginHorizontal:'auto',
                     marginBottom: 25,},
});