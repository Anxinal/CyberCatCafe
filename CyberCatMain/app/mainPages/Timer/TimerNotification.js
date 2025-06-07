import PushNotification from "react-native-push-notification";

// when user starts or resumes the timer:
export const scheduleTimerNotification = (id, message, timeRemained) => {
  PushNotification.localNotificationSchedule({
    channelId: "timer-channel",
    id,                 
    message,             
    date: new Date(Date.now() + timeRemained), 
    });
};

// when user pauses or cancels:
export const cancelTimerNotification = (id) => {
  PushNotification.cancelLocalNotifications({ id: `${id}` });
};
