import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {IconButton} from '@/components/IconButton.jsx';
import { useState } from 'react';

   const SearchCard = (userID) => {
    
        const [username, setUsername] = useState("");
        getUserInfo("username", setUsername, userID);
        return (
            <View>
            <Text>{username}</Text>
            <Text>This user is not your friend yet</Text>
            <ButtonPanels/>
            </View>
        );
    };
    
    const ButtonPanels = () => {
        return (
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <IconButton iconName="AddFriend" action={() => console.log("Push Friend Request")}/>            
            </View>
        );
    };
export function SearchList({searchResults}) {
    if (searchResults.length === 0) {
          return () => (<Text>You have no friends yet. Add some!</Text>);
    }
    return () => listOfFriendIDs.map((friend) =>  (
        <SearchCard key = {friend} userID = {friend}/>
      ));
}

const styles = StyleSheet.create({

})