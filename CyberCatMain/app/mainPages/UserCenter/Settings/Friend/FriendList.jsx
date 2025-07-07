import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getUserInfo } from '../../../../account/userInfo.js';
import { IconButton } from '@/components/IconButton.jsx';


const FriendCard = (userID) => {

    const [username, setUsername] = React.useState("");
    getUserInfo("username", setUsername, userID);
    return (
        <View>
        <Text>{username}</Text>
        <Text>This user is your friend</Text>
        <ButtonPanels/>
        </View>
    );
};

const ButtonPanels = () => {
    return (
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <IconButton iconName="Delete" action={() => console.log("Remove Friend")}/>
                <IconButton iconName="Nudge" action={() => console.log("Nudge your friend to focus")}/>
                <IconButton iconName="Gift" action={() => console.log("Send gifts")}/>  
        </View>
    );
};

export function FriendList(listOfFriendIDs) {
  if (listOfFriendIDs.length === 0) {
        return () => (<Text>You have no friends yet. Add some!</Text>);
  }
  return () => listOfFriendIDs.map((friend) =>  (
      <FriendCard key = {friend} userID = {friend}/>
    ));
};

const styles = StyleSheet.create({})