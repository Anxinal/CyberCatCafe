import { useState, useRef} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import { TimeView } from "./TimeView.tsx"
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
    <View style = {{flexDirection:'column', alignContent:'center', padding: 1}}>
      <Text style ={{color:'white', fontSize: 30}}>Time passed: </Text>
       <View><TimeView min = {currentTime > 0 ? Math.floor(currentTime / 60) : 0} 
                       sec = {currentTime > 0 ? Math.floor(currentTime % 60) : 0} 
                       stopped = {paused.current}/></View>
    <View style ={styles.ButtonView}>    
      <TouchableOpacity onPress={handleStart} style = {styles.Buttons}>
        <Text style ={{fontSize: 19, fontWeight: 'bold', color: 'white'}}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {handleStop} style = {styles.Buttons}> 
        <Text style ={{fontSize: 19, fontWeight: 'bold', color: 'white'}}>Stop</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {handleReset} style = {styles.Buttons}> 
        <Text style ={{fontSize: 19, fontWeight: 'bold', color: 'white'}}>Reset</Text>
      </TouchableOpacity>
      </View>
     
      <TextInput style = {styles.TimeSet}
                 onChangeText={x => setTotalTime(parseInt(x))}
                 editable = {paused.current}
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
  },
  Buttons: {
    width: 60,
    height: 40, 
    marginLeft: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'grey',
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
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 2,
    padding: 4, 

  }
 
});