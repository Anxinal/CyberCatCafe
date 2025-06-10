import { ImageBackground } from 'expo-image';
import {Text, View} from 'react-native';
import React from 'react';
import { timerStyles } from '@/constants/TimerStyles';
import catImage from '../../../assets/images/timer-frame.png'
import { getMinView, getSecView } from '@/data/TimerConvert';

const timeColor = ({stopped}:{stopped: boolean;}) => (stopped ? 'red' : 'green');

//TODO: Update the timer cat animation later
export const TimeView = ({currentTime, stopped}: 
    {
    currentTime: number
    stopped: boolean;}) =>
     (<View style = {timerStyles.countdownView}>
        <ImageBackground source={catImage} contentFit = "contain" style = {{width: 400, height: 350}}>
            <Text style = {[timerStyles.countdownText, {color: timeColor({stopped})}]}>
                {getMinView(currentTime)} : {getSecView(currentTime)}
            </Text> 
        </ImageBackground>
            
    </View>);


