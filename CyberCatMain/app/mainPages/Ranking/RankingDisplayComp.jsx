import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { names} from '@/constants/RankingNames.js'


export const RankingDisplayComp = () => {
    const userLevel = 1;
  return (
    <View style = {styles.rankPanel}>
        <View>
            <Text>Icon</Text>
        </View>
      <Text>Current Rank Level :{names[userLevel]}</Text>
      <Text>Current ranking: </Text>
    </View>
  )
}



const styles = StyleSheet.create({
    rankPanel: {
        flexDirection: 'row',
        marginHorizontal: 'auto',
        marginTop: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'grey',
        shadowColor: 'grey',
        shadowOffset: {width: 2, height: 2},
    }
})