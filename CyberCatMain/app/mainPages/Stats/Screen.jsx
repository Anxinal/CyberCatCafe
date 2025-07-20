import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import {UserStats} from '../../../data/FocusStats'
import {CalendarDisplay} from './CalendarDisplay';
import {BarChartDisplay} from './BarChartDisplay';
// REFER TO USERSTATS for backend implementation

const Screen = () => {

  const [isCalendar, setIsCalendar] = useState(false);
  const [userStats, setUserStats] = useState(null);
  async function initialise(){
    setUserStats(await UserStats.createUserStats());
  }
  useEffect(() => {
    initialise();
  })
  return (
    <View>
      {userStats !== null && 
       <View>
         {isCalendar ? <CalendarDisplay userStats={userStats} /> : <BarChartDisplay userStats={userStats} />}
      </View>
      }
    </View> 
  )
}

export default Screen

const styles = StyleSheet.create({})