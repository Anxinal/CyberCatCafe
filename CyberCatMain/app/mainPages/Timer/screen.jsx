import { useState, useRef} from 'react';
import { Text, View, TextInput, TouchableOpacity} from 'react-native'
import { TimeView } from "./TimeView.tsx"
import { timerStyles } from "../../../constants/TimerStyles.ts"
import {TimerTitle} from "./TimerTitle.jsx"
import {useAudioPlayer} from "expo-audio"
import Toast from 'react-native-toast-message';
import { displayToast } from '@/components/ToastMessage.js';

const TimerButton = ({label, onPress}) => ( 
      <TouchableOpacity onPress={onPress} style = {timerStyles.Buttons}>
        <Text style ={timerStyles.TimeButtonText}>{label}</Text>
      </TouchableOpacity>);

const notificationSore = require('@/assets/audio/cat-ring01.mp3');

export default function Timer() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const [totalTime, setTotalTime] = useState(100);
  const [remained, setRemained] = useState(totalTime);
  const intervalRef = useRef(null);
  let currentTime = remained;
  let paused = useRef(true);
  const notifier = useAudioPlayer(notificationSore);
  function handleStart() {
    // Start counting.
    paused.current = false;
    console.log(totalTime)
    if(remained <= 0){
      setRemained(totalTime);
    }
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      // Update the current time every 500ms.
      setNow(Date.now());
    }, 500);
  }
  
  function handleStop(){
    paused.current = true;
    clearInterval(intervalRef.current);
    setRemained(currentTime);
  }

  function handleReset(){
    handleStop();
    setRemained(totalTime);
  }

  function notifyUser(){
    displayToast("Meow! Time for a break");
    notifier.seekTo(0);
    notifier.play();
  }

  if (startTime != null && now != null) {

    if(remained >= 0 && !paused.current){
      currentTime = remained - ((now - startTime) / 1000);
      console.log(paused.current)
    }
    if(!paused.current && currentTime < 0){
        notifyUser();
        handleStop();   
    }
  }

  return (
    <View style = {timerStyles.TimerContainer}>
      <TimerTitle paused = {paused.current}/>
      <TimeView currentTime= {currentTime}
                 stopped = {paused.current}/>
    <View style ={timerStyles.ButtonView}>    
      <TimerButton onPress={handleStart} label = "start" />
      <TimerButton onPress={handleStop} label = "stop" />
      <TimerButton onPress={handleReset} label = "reset" />
      </View> 
      <TextInput style = {timerStyles.TimeSet}
                 onChangeText={x => setTotalTime(parseInt(x))}
                 editable = {paused.current}
                  />
      <Toast/>
    </View>  
);

  }

