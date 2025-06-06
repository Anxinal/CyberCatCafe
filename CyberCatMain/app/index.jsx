import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import { useRouter } from 'expo-router'; // or from 'expo-router' if you’re using Expo Router
import { signInUser } from './account/userInfo';
import Toast from 'react-native-toast-message';
import { LoginButton, CatLogoImage } from './account/AccountReusableComponents.tsx'
import { Accountstyles } from '../constants/AccountStyles.ts'


const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
 
  const loginPress = () => {
    signInUser(username, password, router)
  }
  const registerPress = () => {
    router.push('account/register');
  };

  return (
    <View>
      <View style={Accountstyles.logoContainer}>
        <Text style={Accountstyles.logoText}>Welcome !</Text>
         <CatLogoImage />
      </View>
      
      <View style={Accountstyles.loginInputContainer}>
          <View style={Accountstyles.inputContainer}>
      <Text style={Accountstyles.infoText}> Email:</Text>
      <TextInput
        style = {Accountstyles.inputStyle}
        onChangeText={setUsername}
        placeholder="enter email"
        placeholderTextColor="grey"
        value = {username}
      />
    </View>
          <View style={Accountstyles.inputContainer}>
      <Text style={Accountstyles.infoText}>password:</Text>
      <TextInput
        style = {Accountstyles.inputStyle}
        onChangeText={setPassword}
        placeholder= "enter password"
        secureTextEntry
        placeholderTextColor="grey"
        value = {password}
      />
    </View>
      </View>

      <View style={Accountstyles.buttonsContainer}>
          <LoginButton action={loginPress} buttonText='Login'/>
          <LoginButton action={registerPress} buttonText='Register a new account'/>
      </View>
      <Toast/>
    </View>
  );
};

export default Login;


