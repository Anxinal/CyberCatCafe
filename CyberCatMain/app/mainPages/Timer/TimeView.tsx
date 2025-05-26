import { ImageBackground } from 'expo-image';
import {Text, View} from 'react-native';
import React from 'react';
import catImage from '../../../assets/images/cat-on-circle-temp.png'


const timeColor = ({stopped}:{stopped: boolean;}) => (stopped ? 'red' : 'green');
const adjustTimeView = ({n}:{n: number;}) : string => (n < 10 ? "0" + n : n + "");
export const TimeView = ({min, sec, stopped}: 
    {min: number; 
    sec: number;
    stopped: boolean;}) =>
     (<View style = {{justifyContent: 'center', width: '100%', 
                      marginHorizontal:'auto',
                      marginBottom: 20,}}>
        <ImageBackground source={catImage} contentFit = "contain" style = {{width: '120%', height:'120%'}}>
            <Text style = {{fontSize: 60,
                            fontWeight: 'bold',
                            paddingLeft: '25%',
                            paddingTop: '25%',
                            color: timeColor({stopped})}}>{adjustTimeView({n :min})} : {adjustTimeView({n: sec})} </Text> 
        </ImageBackground>
            
    </View>);

