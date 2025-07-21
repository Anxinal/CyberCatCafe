import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import {UserStats} from '../../../data/FocusStats'
import {CalendarDisplay} from './CalendarDisplay';
import {BarChartDisplay} from './BarChartDisplay';
import { useIsFocused } from '@react-navigation/native';
import {IconButton} from '../../../components/IconButton';
// REFER TO USERSTATS for backend implementation



const Screen = () => {

  const [isCalendar, setIsCalendar] = useState(false);
  const [userStats, setUserStats] = useState(null);
  const isFocused = useIsFocused();
 
  async function initialise(){
    const stats = await UserStats.createUserStats();
    console.log("User Stats: ", stats.toString());
    setUserStats(stats);
  }
  useEffect(() => {
    initialise();
  },[isFocused])
  // Refreshed each time the screen gains focus


  const ButtonPanels = () => {
    return (
        <View style={styles.buttonRow}>
                <IconButton iconName="BarChart" action={() => {
                    setIsCalendar(false);
                    }}/>
                <IconButton iconName= "Calendar" action={() => {
                   setIsCalendar(true);
                }}/>
        </View>
    );
};

  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.text}>User Statistics</Text>
      <ButtonPanels/>
      {userStats !== null && 
       <View>
         {isCalendar ? <CalendarDisplay userStats={userStats} /> : <BarChartDisplay userStats={userStats} />}
      </View>
      }
    </SafeAreaView> 
  )
}

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
  buttonRow: {
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: 12,
  marginTop: 8,
},
})