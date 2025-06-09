import {TouchableOpacity, View, Text} from 'react-native'
import { totalTime } from '../../../constants/TimerTotalTimeStages';
import AntDesign from '@expo/vector-icons/AntDesign';
import { timerStyles } from '@/constants/TimerStyles';

const positiveMod = (x: number, y:number) => (x % y + y) % y;
function updateNextTotalTime(state: number, setTotalTime: (newTime: number) => void, 
                             currentTotal: number){

  const originalLen = totalTime.length;  
  const currentTotalIndex =  totalTime.filter(x => x <= currentTotal).length - 1;
  setTotalTime(totalTime[positiveMod((currentTotalIndex + 1 * state), originalLen)]);

}

export const RestTotalTimeComp = ({setTotalTime, currentTotal}: {
    setTotalTime: (newTime: number) => void
    currentTotal: number,
}) => (
    <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style = {timerStyles.Buttons} 
                          onPress={() => updateNextTotalTime(1,setTotalTime,currentTotal)}>
            <AntDesign name="upcircle" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style = {timerStyles.Buttons} 
                          onPress={() => updateNextTotalTime(-1,setTotalTime,currentTotal)}>
            <AntDesign name="downcircle" size={24} color="black" />
        </TouchableOpacity>

    </View>
);