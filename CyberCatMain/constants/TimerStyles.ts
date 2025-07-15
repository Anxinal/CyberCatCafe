import { StyleSheet } from "react-native";
import { textFont, textColor, componentColor} from "./ReusableStyles.ts"

export const timerStyles = StyleSheet.create({

   TimeSet: {
    color: textColor.normal,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginHorizontal:'auto',
    width:"100%",
    height: 40,
    borderColor: textColor.normal,
    borderWidth: 1,
    fontSize: textFont.medium,
  },

  Buttons: {
    width: 80,
    height: 55, 
    marginHorizontal: 5,
    backgroundColor: "rgba(255, 126, 6, 0.92)",
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: componentColor.shade,
    borderWidth: 1,
    padding: 4,
    elevation: 3,
  },

  ButtonView: {
    width: '100%',
    maxWidth: 500,
    flexDirection: 'row',
    justifyContent:'space-between',
    borderColor: componentColor.border,
    height: 70,
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 20,
    padding: 5, 
  },

  TimeButtonText: {
    fontSize: textFont.medium, 
    fontWeight: 'bold', 
    color: textColor.contrast,
  },

  TimerTitleText: {
    fontSize: textFont.small,
    color: textColor.normal,
  },
  TimerTitleView: {
    marginBottom: 30,
    borderColor: componentColor.border,
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: "#aaa",
    shadowOffset: {height: 3, width: 3},
    shadowRadius: 4,
  },
  TimerContainer: {
    flexDirection:'column', 
    justifyContent: 'space-between',
    padding: 4,
    flex: 1,
  },
  countdownText: {
    fontSize: textFont.XXL,
    fontWeight: 'bold',
    paddingLeft: '18%',
    paddingTop: '35%',                         
  },
  countdownView: {
    justifyContent: 'space-between', 
    width: '100%', 
    marginHorizontal:'auto',
    marginBottom: 20,
  }

});