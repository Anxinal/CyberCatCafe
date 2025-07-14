import { StyleSheet } from "react-native";
import { textFont, textColor, componentColor } from "./ReusableStyles.ts"
import { StatusBar } from "expo-status-bar";
// This file is used to contain all the unified style settings in different pages.

export const accountStyles = StyleSheet.create({

  flexOne: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoText: {
    fontSize: textFont.large,
    fontWeight: 'bold',
    color: textColor.normal,
    marginBottom: 10,
  },

  loginInputContainer: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    width: '100%',
    minWidth: 300,
  },
  infoText: {
    flex: 3,
    fontSize: textFont.small,
    color: textColor.normal,
    marginRight: 10,
  },
  inputStyle: {
    flex: 7,
    borderWidth: 1,
    borderColor: componentColor.border,
    borderRadius: 4,
    height: 40,
    width: 300,
    color: textColor.normal,
    fontSize: 16,
    paddingHorizontal: 8,
  },

  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    width: '80%',
    height: 44,
    backgroundColor: componentColor.button,
    borderColor: componentColor.shade,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 8,
  },
  loginButtonText: {
    color: textColor.contrast,
    fontSize: textFont.small + 2,
    textAlign: 'center',
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


