import { ImageBackground } from 'expo-image';
import {Text, View} from 'react-native';
import React from 'react';
import { timerStyles } from '@/constants/TimerStyles';
import catImage from '../../../assets/images/cat-on-circle-temp.png'


const timeColor = ({stopped}:{stopped: boolean;}) => (stopped ? 'red' : 'green');
const adjustTimeView = ({n}:{n: number;}) : string => (n < 10 ? "0" + n : n + "");

const getmin = (currentTime: number) => (currentTime > 0 ? Math.floor(currentTime / 60) : 0);
const getsec = (currentTime: number) => (currentTime > 0 ? Math.floor(currentTime % 60) : 0);

export const TimeView = ({currentTime, stopped}: 
    {
    currentTime: number
    stopped: boolean;}) =>
     (<View style = {timerStyles.countdownView}>
        <ImageBackground source={catImage} contentFit = "contain" style = {{width: '120%', height:'120%'}}>
            <Text style = {[timerStyles.countdownText, {color: timeColor({stopped})}]}>
                {adjustTimeView({n :getmin(currentTime)})} : {adjustTimeView({n: getsec(currentTime)})}
            </Text> 
        </ImageBackground>
            
    </View>);


