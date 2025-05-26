import { useState, useRef} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native'
export default function Timer() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const [totalTime, setTotalTime] = useState(10000);
  const intervalRef = useRef(null);
  let remained = 0;
  let min = 0;
  let sec = 0;
  let paused = useRef(true);
  function handleStart() {
    // Start counting.
    paused.current = false;
    console.log(totalTime)
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
     setTotalTime(totalTime - (now - startTime));
  }

  function handleReset(){
    clearInterval(intervalRef.current);
    paused = true;
    remained = -1;
  }
  if (startTime != null && now != null) {
    if(remained >= 0){
      remained = (totalTime - (now - startTime)) / 1000;
      if (paused.current) {
        remained = totalTime / 1000;
      }
      console.log(paused)
    }

    if(!paused.current && remained < 0){
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
      <button onClick = {handleReset} style = {{width: 200, height: 100, marginLeft: 20}}> 
        Reset
      </button>
      <TextInput style = {styles.TimeSet}
                 onChangeText={x => setTotalTime(parseInt(x) * 1000)}
                 editable = {paused}
                  />
    </View>  
);
  }
const styles = StyleSheet.create({
  TimeSet: {
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginHorizontal:'auto',
    width:"70%",
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
  }
});