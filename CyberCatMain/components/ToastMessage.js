
import Toast from 'react-native-toast-message';


export const displayToast = ( message, type = 'success', subMessage = "") => {
  Toast.show({
      type: type,
      text1: message,
      text2: subMessage
  });
}

export const displayError = (mainErrorMsg) => (err) => displayToast(mainErrorMsg ,"error", err.message);

// Use when there is an empty field
export const displayNull = (msg) => displayToast("Meompty?", "error", "Empty Field unfilled"); 

//TODO: update achievement attainment message here
export const displayAchievedAchievement = (achievement) => displayToast(achievement.id);