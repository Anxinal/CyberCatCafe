import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { BarChart } from 'react-native-gifted-charts'
import { useState } from 'react'

import { UserStats } from '@/data/FocusStats'

export function BarChartDisplay({userStats}: {readonly userStats: UserStats}) {
    const [data, setData] = useState([])

    useEffect(() => {
      console.log("BarChartDisplay: ", userStats.getFocusTimeBarChartData());
      setData(userStats.getFocusTimeBarChartData() as any)},[]);
  
    return (
    <View>
      <Text>The Y-axis is in minutes</Text>
      <BarChart data={data}/>
    </View>
  )
}
const styles = StyleSheet.create({})

