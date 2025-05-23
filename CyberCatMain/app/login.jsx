import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
import { Link } from 'expo-router'; // or from 'expo-router' if you’re using Expo Router


const Login = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const loginPress = () => {
    console.log(`Username: ${userName}\nPassword: ${password}`);
  };
  const registerPress = () => {
    console.log('Register query accepted.');
  };

  return (
    <View>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Logo goes here</Text>
      </View>

      <View style={styles.loginInputContainer}>
          <View style={styles.inputContainer}>
      <Text style={styles.infoText}> Username:</Text>
      <TextInput
        style = {styles.inputStyle}
        onChangeText={setUsername}
        placeholder="enter Username"
        placeholderTextColor="grey"
        value = {userName}
      />
    </View>
          <View style={styles.inputContainer}>
      <Text style={styles.infoText}>password:</Text>
      <TextInput
        style = {styles.inputStyle}
        onChangeText={setPassword}
        placeholder= "enter password"
        placeholderTextColor="grey"
        value = {password}
      />
    </View>
      </View>

      <View style={styles.buttonsContainer}>

          <Button style ={[styles.button, styles.buttonText]} title ='login' onPress = {loginPress}/>
          <Button style ={[styles.button, styles.buttonText]} title='Register' onPress = {registerPress}/>
      </View>
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
    color: 'white',
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
    color: '#333'
  },
  inputStyle: {
    flex: 7,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    height: 40,
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
    marginBottom:10,
    marginHorizontal: 'auto',
    justifyConten: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4
  },
  button: {
    width: '100%',
    height: 60,
    marginHorizontal: 'auto',
    backgroundColor: 'blue',
    marginTop: 20,
    marginBottom: 10,
    marginleft: 10,
    marginRight: 20,
  }
});


