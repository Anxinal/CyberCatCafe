import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserRankingCard = (username, userRanking, userId, focusHour) => {
  return (
    <View>
        <Text>{userRanking}</Text>
        <View>
            <Text>{username}</Text>
            <Text>{focusHour}</Text>
        </View>
    </View>
  )
}

export default UserRankingCard

const styles = StyleSheet.create({
        rankPanel: {
        flexDirection: 'row',
        marginHorizontal: 'auto',
        marginTop: 15,
        marginBottom: 15,
    }
})