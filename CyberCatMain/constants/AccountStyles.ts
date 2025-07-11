import { StyleSheet } from "react-native";
import { textFont, textColor, componentColor } from "./ReusableStyles.ts"
import { StatusBar } from "expo-status-bar";
// This file is used to contain all the unified style settings in different pages.

export const accountStyles = StyleSheet.create({

  logoContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logoText: {
    fontSize: textFont.large,
    fontWeight: 'bold',
    color: textColor.normal,
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
    fontSize: textFont.small,
    color: textColor.normal,
    marginHorizontal: 'auto',

  },

  infoTitle: {
    fontWeight: 'bold',
    fontSize: textFont.large,
    color: textColor.normal,
    marginHorizontal: 'auto',
  },

  inputStyle: {
    flex: 7,
    borderWidth: 1,
    borderColor: componentColor.border,
    borderRadius: 4,
    height: 40,
    color: textColor.normal,
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
    color: textColor.contrast,
    fontSize: textFont.small + 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4
  },
  loginButton: {
    width: 300,
    height: 40,
    marginHorizontal: 'auto',
    backgroundColor: componentColor.button,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    borderColor: componentColor.shade,
    borderWidth: 1,
    borderRadius: 10,
  },
  logoImage: { 
    height: 250, 
    width: 250,
    marginTop: 20, 
    marginBottom: 40},

  listSeperator: {
    marginTop: 10,
    backgroundColor: 'grey', 
    height: 1, 
    width: '70%', 
    justifyContent: 'center', 
    marginHorizontal:'auto'},

  optionText: {
    flex: 3,
    fontSize: textFont.medium,
    color: textColor.normal,
    marginLeft: 30,
  },
  optionView: {
    marginTop: 10,
    marginBottom: 10,

  },
  StatusView: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    width: 180,
    shadowColor: componentColor.shade,
    shadowOffset: {height: 2, width: 2},
    padding: 4,
  }
});

