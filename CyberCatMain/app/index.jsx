import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Colors } from '../constants/Colors.ts';
import { useRouter } from 'expo-router'; // or from 'expo-router' if you’re using Expo Router
import { getAuth } from "firebase/auth";
import { signInUser } from './account/userInfo';
import Toast from 'react-native-toast-message';
import { LoginButton } from './account/AccountReusableComponents.tsx'

const auth = getAuth();

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
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Welcome !</Text>
      </View>

      <View style={styles.loginInputContainer}>
          <View style={styles.inputContainer}>
      <Text style={styles.infoText}> Email:</Text>
      <TextInput
        style = {styles.inputStyle}
        onChangeText={setUsername}
        placeholder="enter email"
        placeholderTextColor="grey"
        value = {username}
      />
    </View>
          <View style={styles.inputContainer}>
      <Text style={styles.infoText}>password:</Text>
      <TextInput
        style = {styles.inputStyle}
        onChangeText={setPassword}
        placeholder= "enter password"
        secureTextEntry
        placeholderTextColor="grey"
        value = {password}
      />
    </View>
      </View>

      <View style={styles.buttonsContainer}>
         { /* <TouchableOpacity style ={styles.button}  onPress = {loginPress}>
            <Text style = {styles.buttonText}> Login </Text>
          </TouchableOpacity> */}
          <LoginButton action={loginPress} buttonText='Login'/>
          <LoginButton action={registerPress} buttonText='Register a new account'/>
      </View>
      <Toast/>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({

  logoContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  loginInputContainer: {
    flex: 3,
    justifyContent: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8
  },
  infoText: {
    flex: 3,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginHorizontal: 'auto'
  },
  inputStyle: {
    flex: 7,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    height: 40,
    color: Colors.light.text,
    fontSize: 20,
    marginBottom: 10,
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 50,
    marginBottom:10,
    marginHorizontal: 'auto',
  },
});


