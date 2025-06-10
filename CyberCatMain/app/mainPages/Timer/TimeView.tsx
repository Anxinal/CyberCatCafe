import { ImageBackground } from 'expo-image';
import {Text, View} from 'react-native';
import React from 'react';
import { timerStyles } from '@/constants/TimerStyles';
import catImage from '../../../assets/images/timer-frame.png'


const timeColor = ({stopped}:{stopped: boolean;}) => (stopped ? 'red' : 'green');
const adjustTimeView = ({n}:{n: number;}) : string => (n < 10 ? "0" + n : n + "");

const getmin = (currentTime: number) => (currentTime > 0 ? Math.floor(currentTime / 60) : 0);
const getsec = (currentTime: number) => (currentTime > 0 ? Math.floor(currentTime % 60) : 0);

//TODO: Update the timer cat animation later
export const TimeView = ({currentTime, stopped}: 
    {
    currentTime: number
    stopped: boolean;}) =>
     (<View style = {timerStyles.countdownView}>
        <ImageBackground source={catImage} contentFit = "contain" style = {{width: 400, height: 350}}>
            <Text style = {[timerStyles.countdownText, {color: timeColor({stopped})}]}>
                {adjustTimeView({n :getmin(currentTime)})} : {adjustTimeView({n: getsec(currentTime)})}
            </Text> 
        </ImageBackground>
            
    </View>);


