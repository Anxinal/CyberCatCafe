import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { getUserInfo, mapUserInfo } from '../../../../account/userInfo.js';
import { IconButton } from '@/components/IconButton.jsx';
import { Request, FriendRequestType, RequestwithAlert } from '../../../../../data/SendFriendRequest.ts';
import { useIsFocused } from '@react-navigation/native';





const FriendCard = ({userID}) => {
    
    const [username, setUsername] = useState("");
    getUserInfo("username", setUsername, userID);
    return (
        <View style={styles.card}>
        <Text style = {styles.cardTitle}> {username} </Text>
        <Text style = {styles.cardSubtitle}>This user is your friend</Text>
        <ButtonPanels userID={userID}/>
        </View>
    );
};

const ButtonPanels = ({userID}) => {
    return (
        <View style={styles.buttonRow}>
                <IconButton iconName="Delete" action={() => {
                  sendAlertRequest(userID, FriendRequestType.FRIEND_DELETE);
                    }}/>
                <IconButton iconName="Nudge" action={() => {
                  sendAlertRequest(userID, FriendRequestType.FRIEND_NUDGE);
                }}/>
                <IconButton iconName="Gift" action={() => {
                  sendAlertRequest(userID, FriendRequestType.FRIEND_GIFT);
                }}/>  
        </View>
    );
};

const sendAlertRequest = (userID, Type) => {
      const rq = RequestwithAlert.create(Type, userID);
      rq.showAlert(); // used in android
  
}
export function FriendList() {

  const isFocused = useIsFocused();
  const [friendIDs, setFriendIDs] = useState([]);

  useEffect(() => {
    getUserInfo("friendList", setFriendIDs);
  },[isFocused]);
  
  console.log(friendIDs);
  if (!friendIDs) {
        return  (<Text style={styles.emptyText}> You have no friends yet. Add some!</Text>);
  }
  return friendIDs.map((friend) =>  (
      <FriendCard key = {friend} userID = {friend}/>
    ));
};

const styles = StyleSheet.create({
    // Add or update in each file's StyleSheet.create({ ... })
card: {
  backgroundColor: "#fff",
  borderRadius: 12,
  padding: 16,
  marginVertical: 8,
  marginHorizontal: 12,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
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
  marginBottom: 8,
},
buttonRow: {
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: 12,
  marginTop: 8,
},
emptyText: {
  textAlign: "center",
  color: "#aaa",
  marginTop: 24,
  fontSize: 16,
},
})