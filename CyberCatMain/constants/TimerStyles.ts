import { StyleSheet } from "react-native";
import { textFont, textColor, componentColor } from "./ReusableStyles"

export const timerStyles = StyleSheet.create({

  TimeSet: {
    color: textColor.normal,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginHorizontal: 'auto',
    width: "100%",
    height: 40,
    borderColor: textColor.normal,
    borderWidth: 1,
    fontSize: textFont.medium,
  },

  Buttons: {
    width: 80,
    height: 40,
    marginHorizontal: 5,
    backgroundColor: '#A47551',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    padding: 4,
    elevation: 3,
  },

  ButtonView: {
    width: '100%',
    maxWidth: 500,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 70,
    borderRadius: 16,
    paddingTop: 12,
    backgroundColor: '#F5D7A1',
  },

  TimeButtonText: {
    fontSize: textFont.medium,
    fontWeight: 'bold',
    color: textColor.contrast,
  },

  TimerTitleText: {
    fontSize: textFont.small,
    color: '#5A4636',
    fontWeight: '600',
    textAlign: 'center',
  },
  TimerTitleView: {
    marginBottom: 20,
    marginTop: 20,
    borderColor: componentColor.border,
    borderWidth: 1,
    borderRadius: 12,
    shadowColor: '#CDB8A1',
    shadowOffset: { height: 2, width: 2 },
    shadowRadius: 6,
    backgroundColor: '#FFF4E1',
  },
  TimerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 16,
    flex: 1,
    backgroundColor: '#FFF1C9',
  },
  countdownText: {
    fontSize: textFont.XXL,
    fontWeight: 'bold',
    paddingLeft: '18%',
    paddingTop: '35%',
  },
  countdownView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginHorizontal: 'auto',
    marginBottom: 20,
  }

});