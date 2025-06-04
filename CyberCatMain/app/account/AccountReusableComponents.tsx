import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export const LoginButton = ({buttonText, action}: {buttonText:string, action: () => any}) => {
  
  return (
     <TouchableOpacity style ={styles.button}  onPress = {action} > 
         <Text style = {styles.buttonText}> {buttonText} </Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonText: {
    color: "rgb(83, 11, 179)",
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4
  },
  button: {
    width: 250,
    height: 30,
    marginHorizontal: 'auto',
    backgroundColor: 'rgb(178, 157, 231)',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    borderColor: 'rgb(102, 76, 232)',
    borderWidth: 1,
    borderRadius: 10,
  }
});