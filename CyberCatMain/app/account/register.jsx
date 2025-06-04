import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
import { registerNewUser } from './userInfo'; 
import { useRouter } from 'expo-router'; 
import Toast from 'react-native-toast-message';
import { LoginButton } from './AccountReusableComponents';
import {Colors} from '../../constants/Colors.ts'
const register = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const handleRegister = () => {
       registerNewUser(email, password, userName).then(console.log).then(() => useRouter().push(""));
  };

  return (
    <View>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Your meow journey starts soon</Text>
      </View>

      <View style={styles.loginInputContainer}>

      <View style={styles.inputContainer}>
        <Text style={styles.infoText}> Username: </Text>
        <TextInput
          style = {styles.inputStyle}
          onChangeText={setUsername}
          placeholder="enter Username"
          placeholderTextColor="grey"
          value = {userName}
        />
     </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.infoText}> Email: </Text>
        <TextInput
          style = {styles.inputStyle}
          onChangeText={setEmail}
          placeholder="enter email"
          placeholderTextColor="grey"
          value = {email}
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
          <LoginButton action = {handleRegister} buttonText = "Register account" />
      </View>
      <Toast/>
    </View>
  );
};

export default register;

const styles = StyleSheet.create({

  logoContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    fontSize: 24,
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
    color: '#333'
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
    marginBottom:10,
    marginHorizontal: 'auto',
    justifyConten: 'center'
  },

});


