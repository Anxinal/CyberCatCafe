import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { BarChart } from 'react-native-gifted-charts'
import { useState } from 'react'

import { UserStats } from '@/data/FocusStats'

export function BarChartDisplay({userStats}: {readonly userStats: UserStats}) {
    return (
    <View>
      <Text>The Y-axis is in minutes</Text>
      <BarChart data={userStats.getFocusTimeBarChartData()}/>
    </View>
  )
}
const styles = StyleSheet.create({})

