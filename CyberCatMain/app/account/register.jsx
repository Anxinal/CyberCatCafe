import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
import { registerNewUser } from './userInfo'; 
import { useRouter } from 'expo-router'; 

const register = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const handleRegister = () => {
       registerNewUser(email, password, userName).then(console.log).then(() => useRouter().push("/index"));
  };

  return (
    <View>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Logo goes here</Text>
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
          <Button style ={[styles.button, styles.buttonText]} title='Register new user' onPress = {handleRegister}/>
      </View>
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


