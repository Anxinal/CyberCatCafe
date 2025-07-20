import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { BarChart } from 'react-native-gifted-charts'
import { useState } from 'react'

import { UserStats } from '@/data/FocusStats'

export function BarChartDisplay({userStats}: {readonly userStats: UserStats}) {
    const [data, setData] = useState([])

    useEffect(() => {
      setData(userStats.getFocusTimeBarChartData() as any)},[]);
  
    return (
    <View>
      <BarChart data={data}/>
    </View>
  )
}
const styles = StyleSheet.create({})

