import { StyleSheet } from "react-native";
import { Colors } from "./Colors.ts";


export const timerStyles = StyleSheet.create({

   TimeSet: {
    color: Colors.light.text,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginHorizontal:'auto',
    width:"100%",
    height: 40,
    borderColor: Colors.light.text,
    borderWidth: 1,
    fontSize: 20,
  },

  Buttons: {
    width: 90,
    height: 60, 
    marginLeft: 0,
    backgroundColor: 'brown',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 4,

  },

  ButtonView: {
    width: '100%',
    maxWidth: 500,
    flex: 5,
    maxHeight: 500,
    flexDirection: 'row',
    justifyContent:'space-between',
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 40,
    padding: 4, 
  },

  TimeButtonText: {
    fontSize: 25, 
    fontWeight: 'bold', 
    color: 'white',
  },

  TimerTitleText: {
    fontSize: 20,
    color: Colors.light.text,
  },
  TimerTitleView: {
    marginBottom: 30,
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 5,
  },
  TimerContainer: {
    flexDirection:'column', 
    justifyContent: 'space-between',
    padding: 4,
  }
 
});