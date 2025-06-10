import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import catLogo from '../../assets/images/cat-logo.png';
import { accountStyles } from '@/constants/AccountStyles';

export const LoginButton = ({buttonText, action}: {buttonText:string, action: () => any}) => {
  
  return (
     <TouchableOpacity style ={accountStyles.loginButton}  onPress = {action} > 
         <Text style = {accountStyles.loginButtonText}> {buttonText} </Text>
      </TouchableOpacity>
  )
}

export const CatLogoImage = () => (<Image source={catLogo} style = {accountStyles.logoImage} />);

const styles = StyleSheet.create({

});