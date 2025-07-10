import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {IconButton} from '@/components/IconButton.jsx';
import { useState, useRef } from 'react';
import { getSearchFriendResults,getUserInfo } from '../../../../account/userInfo';
import { Request, FriendRequestType } from '../../../../../data/SendFriendRequest.ts';

export function SearchList({keyword}) {

    console.log("SearchList component is mounted with keyword:", keyword);
    let [searchResults, setSearchResults] = useState([]);
    let currentUsername = useRef("");
    
    useEffect(
       async () =>{
           currentUsername.current = await getUserInfo("username");
           getSearchFriendResults(keyword, setSearchResults);
        }, [keyword]
    )

      const SearchCard = ({userID}) => {
        
        const [username, setUsername] = useState("");
        getUserInfo("username", setUsername, userID);
        return (
            <View style={styles.card}>
            <Text style = {styles.cardTitle}> User: {username}</Text>
            <Text style = {styles.cardSubtitle}>This user is not your friend yet</Text>
            <ButtonPanels userID={userID}/>
            </View>
        );
    };

      const ButtonPanels = ({userID}) => {
       
        return (
            <View style={styles.buttonRow}>
                    <IconButton iconName="AddFriend" 
                                action={ () => {
                                  const rq = Request.create(FriendRequestType.NEWFRIEND_REQUEST, 
                                                            userID, 
                                                            currentUsername.current);
                                   rq.issueRequest();
                                }}/>            
            </View>
        );
    };


    if (searchResults.length === 0) {
          return (<Text style = {styles.emptyText}>No result obtained</Text>);
    }
    return (
        <View >
        <Text>Search Result: </Text>

        {searchResults.map((friend) =>  (
        <SearchCard key={friend} userID={friend}/>))}   

        </View>
      );
    
}

const styles = StyleSheet.create({
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