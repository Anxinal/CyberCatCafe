import {Text, View} from "react-native";
import { timerStyles } from "../../../constants/TimerStyles.ts"

const pausedText = "Taking a break? No worries!";
const startText = "No, it's not the time for conversation! Go to Focus!";

export const TimerTitle = ({paused}) => (
    <View style = {timerStyles.TimerTitleView}>
         <Text style={timerStyles.TimerTitleText}>
            {paused ? pausedText : startText}
         </Text>
    </View>
   
);