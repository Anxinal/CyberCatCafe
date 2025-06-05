import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import catLogo from '../../assets/images/cat-logo.png';
import { Accountstyles } from '@/constants/ReusableStyles.js';

export const LoginButton = ({buttonText, action}: {buttonText:string, action: () => any}) => {
  
  return (
     <TouchableOpacity style ={Accountstyles.loginButton}  onPress = {action} > 
         <Text style = {Accountstyles.loginButtonText}> {buttonText} </Text>
      </TouchableOpacity>
  )
}

export const CatLogoImage = () => (<Image source={catLogo} style = {Accountstyles.logoImage} />);

const styles = StyleSheet.create({

});