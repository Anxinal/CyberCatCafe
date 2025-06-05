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
import { AccountStyles } from '../../constants/ReusableStyles.ts'

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
      <View style={AccountStyles.logoContainer}>
        <Text style={AccountStyles.logoText}>Your meow journey starts soon</Text>
        <CatLogoImage/>
      </View>

       <View style={AccountStyles.loginInputContainer}>

      <View style={AccountStyles.inputContainer}>
        <Text style={AccountStyles.infoText}> Username: </Text>
        <TextInput
          style = {AccountStyles.inputStyle}
          onChangeText={setUsername}
          placeholder="enter Username"
          placeholderTextColor="grey"
          value = {username}
        />
     </View>
      
      <View style={AccountStyles.inputContainer}>
        <Text style={AccountStyles.infoText}> Email: </Text>
        <TextInput
          style = {AccountStyles.inputStyle}
          onChangeText={setEmail}
          placeholder="enter email"
          placeholderTextColor="grey"
          value = {email}
        />
      </View>

      <View style={AccountStyles.inputContainer}>
        <Text style={AccountStyles.infoText}>password:</Text>
        <TextInput
        style = {AccountStyles.inputStyle}
        onChangeText={setPassword}
        placeholder= "enter password"
        secureTextEntry
        placeholderTextColor="grey"
        value = {password}
      />
      </View>
      </View> 
      <View style={AccountStyles.buttonsContainer}>
          <LoginButton action = {handleRegister} buttonText = "Register account" />
          <LoginButton action = {navigateToLogin} buttonText = "Back to login page" />
      </View>
      <Toast/>
    </View>
  );
};

export default register;



