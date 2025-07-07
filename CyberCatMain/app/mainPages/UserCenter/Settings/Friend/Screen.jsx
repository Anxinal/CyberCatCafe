import { StyleSheet, Text, View } from 'react-native'
import { IconList } from '@/constants/IconList';
import { SearchList } from './SearchList';
import { FriendList } from './FriendList';
import { getUserInfo } from '../../../../account/userInfo';
import React, { useEffect, useState} from 'react';
import {IconButton} from '@/components/IconButton.jsx';
const Friend = () => {
  let [search, setSearch] = useState("");
  let [friendIDs, setFriendIDs] = useState([]);
  let searched = useRef(false);
  let [searchResults, setSearchResults] = useState([]);

  //Initialise friend list by fetching user info
  useEffect(() => {
  Promise.resolve(getUserInfo("friendList",setFriendIDs));
  }, []);

  const resetSearch = () => {
    searched.current = false;
    setSearch("");
  }

  const searchFriend = () => {
    searched.current = true;
    // Some actions to search for friends by username
    let result = [];
    setSearchResults(result);
  }
  return (
    <View>
        <View style = {styles.search}>
                <TextInput
                    style = {styles.searchText}
                    onChangeText={setSearch}
                    placeholder="Find your new friends by username..."
                    placeholderTextColor="grey"
                    editable = {!searched.current}
                    value = {search}
                />
                     
                <IconButton  iconName="Search" action={searchFriend} style={{width: 50}}/>
                    {searched.current && 
                <IconButton iconName = "QuitSearch" action ={resetSearch} style = {{width: 50}}/>}
            </View>
        {searched.current ? <SearchList result = {searchResults}/> : <FriendList listOfFriendIDs = {friendIDs}/>}
    </View>
  )
}


export default Friend;

const styles = StyleSheet.create({})