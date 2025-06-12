import { useState } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';
import { registerNewUser } from './userInfo'; 
import { useRouter } from 'expo-router'; 
import Toast from 'react-native-toast-message';
import { LoginButton, CatLogoImage } from './AccountReusableComponents.tsx';

import { accountStyles } from '../../constants/AccountStyles.ts'

const register = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
       registerNewUser(email, password, username)
  };


  const navigateToLogin = () => {useRouter().push("/")};

  return (
    <View>
      <View style={accountStyles.logoContainer}>
        <Text style={accountStyles.logoText}>Your meow journey starts soon</Text>
        <CatLogoImage/>
      </View>

       <View style={accountStyles.loginInputContainer}>

      <View style={accountStyles.inputContainer}>
        <Text style={accountStyles.infoText}> Username: </Text>
        <TextInput
          style = {accountStyles.inputStyle}
          onChangeText={setUsername}
          placeholder="enter Username"
          placeholderTextColor="grey"
          value = {username}
        />
     </View>
      
      <View style={accountStyles.inputContainer}>
        <Text style={accountStyles.infoText}> Email: </Text>
        <TextInput
          style = {accountStyles.inputStyle}
          onChangeText={setEmail}
          placeholder="enter email"
          placeholderTextColor="grey"
          value = {email}
        />
      </View>

      <View style={accountStyles.inputContainer}>
        <Text style={accountStyles.infoText}>password:</Text>
        <TextInput
        style = {accountStyles.inputStyle}
        onChangeText={setPassword}
        placeholder= "enter password"
        secureTextEntry
        placeholderTextColor="grey"
        value = {password}
      />
      </View>
      </View> 
      <View style={accountStyles.buttonsContainer}>
          <LoginButton action = {handleRegister} buttonText = "Register account" />
          <LoginButton action = {navigateToLogin} buttonText = "Back to login page" />
      </View>
      <Toast/>
    </View>
  );
};

export default register;