import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { textFont, textColor} from '@/constants/ReusableStyles.ts'
import { TitleComp } from '../../../../components/TitleComp';
import { HrefLink } from '@/components/TextLink.jsx'
const About = () =>  (
    <View>
      <TitleComp content={'About Cyber Cat Cafe'} /> 
      <Text style ={styles.content}>
        Never expected that you have arrived here. Let me just finish my job first.
      </Text>
       <Text style ={styles.content}>The Cyber Cat Cafe application is developed by AnXiousgrassHoppeR
        With special thanks to XXX who has showcased his/her artistic talent in the design of the cats.
        </Text> 
         <Text style ={styles.content}>Additionally, Mr. Anonymous, who does not want to disclose his true identity,
           is keen to showcase his muscial virtuosity as a member of the team. His passion in the feline sound has 
           transmorgrified the simple combination of string instruments into a perfect composition for our CyberCatCafe.
        </Text> 
        <Text style ={styles.content}> That's all so far, have a nice day! XD
        </Text> 
      <HrefLink href = {"/mainPages/UserCenter/screen"} text= {"Back to User Center"}/>
    </View>

  );


export default About;

const styles = StyleSheet.create({
    content: {fontSize: textFont.small + 2, color: textColor.normal, marginBottom: 20,},
});