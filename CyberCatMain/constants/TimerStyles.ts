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
    width: 90,
    height: 60, 
    marginLeft: 0,
    backgroundColor: componentColor.button,
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: componentColor.shade,
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
    borderColor: componentColor.border,
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 40,
    padding: 4, 
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
  },
  TimerContainer: {
    flexDirection:'column', 
    justifyContent: 'space-between',
    padding: 4,
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