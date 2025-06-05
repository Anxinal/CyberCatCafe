import { StyleSheet } from "react-native";
import { Colors } from "./Colors.ts";

// This file is used to contain all the unified style settings in different pages.

export const Accountstyles = StyleSheet.create({

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
    marginVertical: 8,
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

  loginButtonText: {
    color: "rgb(83, 11, 179)",
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4
  },
  loginButton: {
    width: 250,
    height: 30,
    marginHorizontal: 'auto',
    backgroundColor: 'rgb(178, 157, 231)',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    borderColor: 'rgb(102, 76, 232)',
    borderWidth: 1,
    borderRadius: 10,
  },
  logoImage: { height: 250, width: 250, marginTop: 20, marginBottom: 40},
});

