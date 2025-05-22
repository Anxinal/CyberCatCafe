import { useState, useRef} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native'
export default function Timer() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const [totalTime, setTotalTime] = useState(5000);
  const intervalRef = useRef(null);
  function handleStart() {
    // Start counting.
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      // Update the current time every 1000ms.
      setNow(Date.now());
    }, 500);
  
  }
  function handleStop(){
     clearInterval(intervalRef.current);
  }
  let remained = 0;
  let min = 0;
  let sec = 0;
  if (startTime != null && now != null) {
    remained = (totalTime - (now - startTime)) / 1000;
    if(remained <= 0){
        handleStop();
    }
    min = remained > 0 ? Math.round(remained / 60) : 0;
    sec = remained > 0 ? Math.round(remained % 60) : 0;
  }
  return (
    <View>
      <Text style ={{color:'white', fontSize: 30}}>Time passed: {min} minutes {sec} seconds</Text>
      <button onClick={handleStart} style = {{width: 200, height: 100, marginLeft: 20}}>
        Start
      </button>
      <button onClick = {handleStop} style = {{width: 200, height: 100, marginLeft: 20}}> 
        Stop
      </button>
    </View>  
);
  }
