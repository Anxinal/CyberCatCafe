import { useState, useRef, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { TimeView } from "./TimeView.tsx"
import { timerStyles } from "../../../constants/TimerStyles.ts"
import { TimerTitle } from "./TimerTitle.jsx"
import { useAudioPlayer } from "expo-audio"
import Toast from 'react-native-toast-message';
import { displayToast } from '@/components/ToastMessage.js';
import BackgroundTimer from 'react-native-background-timer';
import { RestTotalTimeComp } from './ResetTotalTimeComp.tsx';
import { getUserInfo, mapUserInfo } from '@/app/account/userInfo.js';

const TimerButton = ({ label, onPress }) => (
  <TouchableOpacity onPress={onPress} style={timerStyles.Buttons} >
    <Text style={timerStyles.TimeButtonText}>{label}</Text>
  </TouchableOpacity>
);

const notificationSore = require('@/assets/audio/cat-ring01.mp3');

export default function Timer() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const [totalTime, setTotalTime] = useState(45 * 60);
  const [remained, setRemained] = useState(totalTime);
  const intervalRef = useRef(null);
  let distraction = useRef(0);
  const convertSessionToCoin = (t) => (50 + Math.floor(totalTime / 60) * 2);

  const countSession = () => {

    const newSession = {
      time: totalTime,
      distraction: distraction.current,
      date: Date.now(),
    };
    getUserInfo("focusSession").then((session) => {
      session.push(newSession);
      mapUserInfo("focusSession", (original) => session);
    });
    mapUserInfo("totalFocus", x => x + totalTime);
    mapUserInfo("focusSessionCount", x => x + 1);
    mapUserInfo("coins", x => x + convertSessionToCoin(totalTime));

  }

  let currentTime = remained;
  let paused = useRef(true);
  const notifier = useAudioPlayer(notificationSore);

  function handleStart() {
    // Start counting. The commented part is native code that only works after prebuild
    paused.current = false;
    console.log(totalTime);
    if (remained <= 0) {
      setRemained(totalTime);
      countSession();
    }

    //scheduleTimerNotification(NOTIFID, "Times Up!", remained);

    setStartTime(Date.now());
    setNow(Date.now());

    //if(BackgroundTimer) BackgroundTimer.stopBackgroundTimer();

    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      // Update the current time every 500ms.
      setNow(Date.now());
    }, 500);
  }

  function handleStop() {
    paused.current = true;

    // cancelTimerNotification(NOTIFID);
    distraction.current += 1;
    clearInterval(intervalRef.current);
    setRemained(currentTime);
  }

  function handleReset() {
    handleStop();
    setRemained(totalTime);
  }

  function notifyUser() {
    displayToast("Meow! Time for a break");
    notifier.seekTo(0);
    notifier.play();
  }

  if (startTime != null && now != null) {

    if (remained >= 0 && !paused.current) {
      currentTime = remained - ((now - startTime) / 1000);
      console.log(paused.current)
    }
    if (!paused.current && currentTime < 0) {
      notifyUser();
      countSession();
      distraction.current = 0;
      handleStop();
    }
  }
  useEffect(() => { setRemained(totalTime) }, [totalTime]);

  return (
    <View style={timerStyles.TimerContainer}>
      <TimerTitle paused={paused.current} />
      <TimeView currentTime={currentTime}
        stopped={paused.current} />
      <View style={timerStyles.ButtonView}>
        <TimerButton onPress={handleStart} label="start" />
        {paused.current && <RestTotalTimeComp setTotalTime={setTotalTime} currentTotal={totalTime} />}
        <TimerButton onPress={handleStop} label="stop" />
      </View>

      {/* <TextInput style={timerStyles.TimeSet}
        onChangeText={x => setTotalTime(parseInt(x))}
        editable={paused.current}
        placeholder="Enter focus time"
      /> */}

      <Toast />
    </View>
  );

}

