import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {IconButton} from './IconButton';
import { Request } from '../data/SendFriendRequest'
import { useRef } from 'react';
import { getUserInfo } from '@/app/account/userInfo';



export function FriendNotiCard({rq}: Readonly<{rq: Request}>) {

  return (
 <View style={styles.card}>
  <Text style={styles.message}>{rq.toMessage()}</Text>
  <Text style={styles.from}>From user {rq.name}</Text>
  <Text style={styles.time}>Time: {new Date(rq.timestamp).toLocaleString()}</Text>
  <View style={styles.actions}>
    {rq.actions.length > 0 && rq.actions.map((action) => (
      <IconButton
        key={action.icon}
        iconName={action.icon}
        action={() => action.onPress()}
        style={{margin: 5}}
      />
    ))}
  </View>
</View>
  )
}



const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  message: {
    fontSize: 16,
    color: "#222",
    marginBottom: 4,
    fontWeight: "500",
  },
  from: {
    fontSize: 14,
    color: "#888",
    marginBottom: 2,
  },
  time: {
    fontSize: 12,
    color: "#bbb",
    marginBottom: 8,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    marginTop: 6,
  },
});