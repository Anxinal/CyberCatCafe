import {app} from '../firebaseConfig.js'
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
import { accountStyles } from '../constants/AccountStyles.ts'


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
      <View style={accountStyles.logoContainer}>
        <Text style={accountStyles.logoText}>Welcome !</Text>
         <CatLogoImage />
      </View>
      
      <View style={accountStyles.loginInputContainer}>
          <View style={accountStyles.inputContainer}>
      <Text style={accountStyles.infoText}> Email:</Text>
      <TextInput
        style = {accountStyles.inputStyle}
        onChangeText={setUsername}
        placeholder="enter email"
        placeholderTextColor="grey"
        value = {username}
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
          <LoginButton action={loginPress} buttonText='Login'/>
          <LoginButton action={registerPress} buttonText='Register a new account'/>
          <LoginButton action={() => useRouter().push("/mainPages/Timer/screen")} buttonText = 'GT timer'/>
      </View>
      <Toast/>
    </View>
  );
};

export default Login;


