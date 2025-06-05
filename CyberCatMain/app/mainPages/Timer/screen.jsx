import { useState, useRef} from 'react';
import { Text, View, TextInput, TouchableOpacity} from 'react-native'
import { TimeView } from "./TimeView.tsx"
import { timerStyles } from "../../../constants/TimerStyles.js"
import {TimerTitle} from "./TimerTitle.jsx"
const TimerButton = ({label, onPress}) => ( 
      <TouchableOpacity onPress={onPress} style = {timerStyles.Buttons}>
        <Text style ={timerStyles.TimeButtonText}>{label}</Text>
      </TouchableOpacity>);

export default function Timer() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const [totalTime, setTotalTime] = useState(100);
  const [remained, setRemained] = useState(totalTime);
  const intervalRef = useRef(null);
  let currentTime = remained;
  let paused = useRef(true);
  
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

  if (startTime != null && now != null) {

    if(remained >= 0 && !paused.current){
      currentTime = remained - ((now - startTime) / 1000);
      console.log(paused.current)
    }
    if(!paused.current && remained < 0){
        handleStop();
    }
  }

  return (
    <View style = {timerStyles.TimerContainer}>
       <TimerTitle paused = {paused.current}/>
       <View><TimeView min = {currentTime > 0 ? Math.floor(currentTime / 60) : 0} 
                       sec = {currentTime > 0 ? Math.floor(currentTime % 60) : 0} 
                       stopped = {paused.current}/></View>
    <View style ={timerStyles.ButtonView}>    
      <TimerButton onPress={handleStart} label = "start" />
      <TimerButton onPress={handleStop} label = "stop" />
      <TimerButton onPress={handleReset} label = "reset" />
      </View> 
      <TextInput style = {timerStyles.TimeSet}
                 onChangeText={x => setTotalTime(parseInt(x))}
                 editable = {paused.current}
                  />
    </View>  
);
  }

