import { View, Text } from 'react-native'
import { RankingDisplayComp } from './RankingDisplayComp'
import { UserRankingCard } from './UserRankingCard'
import React from 'react'


const screen = () => {
  return (
    <View>
      <Text>
        <RankingDisplayComp/>
        
      </Text>
    </View>
  )
}

export default screen;