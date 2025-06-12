import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { textFont, textColor} from '@/constants/ReusableStyles.ts'
import { TitleComp } from '../../../../components/TitleComp';
import { HrefLink } from '@/components/TextLink.jsx'
const About = () =>  (
    <View>
      <TitleComp content={'About Cyber Cat Cafe'} /> 
      <Text style ={styles.content}>
        Never expected that you have arrived here. Let me just finish my job here.
      </Text>
       <Text style ={styles.content}>The Cyber Cat Cafe application is developed by AnXiousgrassHoppeR
        With special thanks to XXX who has showcased his/her artistic talent in the design of the cats.
        Oh That's all, have a nice day.
        </Text> 
      <HrefLink href = {"/mainPages/UserCenter/screen"} text= {"Back to User Center"}/>
    </View>

  );


export default About;

const styles = StyleSheet.create({
    content: {fontSize: textFont.small + 2, color: textColor.normal},
});