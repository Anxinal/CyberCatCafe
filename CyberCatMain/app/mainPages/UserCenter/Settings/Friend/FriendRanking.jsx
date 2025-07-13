
import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { getCurrentUserID, getUserInfo, mapUserInfo } from '../../../../account/userInfo.js';
import { useIsFocused } from '@react-navigation/native';
import {RankingParticipant} from './RankingParticipant.ts';
import { getApproximateView } from '@/data/TimerConvert.ts';
import { HrefLink } from "@/components/TextLink.jsx";

const FriendRankingCard = ({participant, rank}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.rankNumber}>{rank}</Text>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{participant.name}</Text>
        <Text style={styles.cardSubtitle}>{getApproximateView(participant.hrInRanking)}</Text>
      </View>
    </View>
  );
};



 function FriendRankingList() {

  const [friends, setFriends] = useState([]);

  const initialise = async () => {
    const idList = await getUserInfo("friendList");
    const participants = await Promise.all(idList.concat([getCurrentUserID()])
                                       .map(async (id) => await RankingParticipant.newCompetitor(id)));
    setFriends(participants.sort((a,b) => b.hrInRanking - a.hrInRanking));
  }
  
  const isFocused = useIsFocused();
  useEffect(() => {

    if(!isFocused) return;
    initialise();

  },[isFocused]);

  if (!friends) {
        return  (<Text style={styles.emptyText}> None of your friends joined the ranking system yet</Text>);
  }
  return friends.map((friend, index) =>  (
      <FriendRankingCard key = {friend.id} participant={friend} rank = {index + 1}/>
    ));
};


export default function FriendRanking() {
  return (<View>
    <HrefLink  href="./Screen" text="Go back to friends page"/>
    <FriendRankingList/>
    <Text style = {styles.emptyText}> focus sessions that are within a week from now will be counted. </Text>
  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rankNumber: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4a90e2",
    width: 36,
    textAlign: "center",
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
    flexDirection: "column",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#888",
    marginBottom: 2,
  },
  emptyText: {
    textAlign: "center",
    color: "#aaa",
    marginTop: 24,
    fontSize: 16,
  },
});