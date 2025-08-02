import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';        
import { firebaseConfig } from "../firebaseConfig.js";
import { initializeApp } from "firebase/app";
import 'expo-router/entry';  
const config = firebaseConfig;
export const initapp = initializeApp(config);

import { getAuth } from 'firebase/auth';
export const auth = getAuth();

import { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
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
    <SafeAreaView style={accountStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={accountStyles.flexOne}
      >
        <ScrollView
          contentContainerStyle={accountStyles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={accountStyles.logoContainer}>
            <Text style={accountStyles.logoText}>Welcome!</Text>
            <CatLogoImage />
          </View>

          <View style={accountStyles.loginInputContainer}>
            <View style={accountStyles.inputContainer}>
              <Text style={accountStyles.infoText}>Email:</Text>
              <TextInput
                style={accountStyles.inputStyle}
                onChangeText={setUsername}
                placeholder="Enter email"
                placeholderTextColor="grey"
                value={username}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={accountStyles.inputContainer}>
              <Text style={accountStyles.infoText}>Password:</Text>
              <TextInput
                style={accountStyles.inputStyle}
                onChangeText={setPassword}
                placeholder="Enter password"
                placeholderTextColor="grey"
                secureTextEntry
                value={password}
              />
            </View>
          </View>

          <View style={accountStyles.buttonsContainer}>
            <LoginButton action={loginPress} buttonText="Login" />
            <LoginButton action={registerPress} buttonText="Register" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Toast />
    </SafeAreaView>
  );
}

export default Login;
