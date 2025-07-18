import { StyleSheet, TextInput, View, SafeAreaView } from 'react-native'
import { SearchList } from './SearchList';
import { FriendList } from './FriendList';
import React, { useEffect, useState, useRef } from 'react';
import {IconButton} from '@/components/IconButton.jsx';
import Toast from 'react-native-toast-message';
import { useRouter } from 'expo-router';
import { getUserInfo } from '../../../../account/userInfo';
import { useIsFocused } from '@react-navigation/native';
import { displayToast } from '../../../../../components/ToastMessage';
const Friend = () => {
  let [search, setSearch] = useState("");
  let searched = useRef(false);
  let [allread, setAllread] = useState(true);
  const focused = useIsFocused();

  const toInbox = () => {
    const router= useRouter();
    router.push("./FriendInbox");
  }
  const toRanking = () => {
    const router = useRouter();
    router.push("./FriendRanking");
  }

  const checkIfAllRequestsRead = async () => {
      const requestList = await getUserInfo("friendRequestList");
      setAllread(requestList.filter(req => !req.read).length == 0);
  }

  useEffect(() => {
    checkIfAllRequestsRead();
    if(!allread) displayToast("You have new unread notification(s)");
  },[focused]);

  const resetSearch = () => {
    searched.current = false;
    setSearch("");
  }

  const searchFriend = () => {
    searched.current = true;
    // Some actions to search for friends by username
    setSearch("Search User: " + search);
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style = {styles.search}>
                <TextInput
                    style = {styles.searchText}
                    onChangeText={setSearch}
                    placeholder="Find your new friends by username..."
                    placeholderTextColor="grey"
                    editable = {!searched.current}
                    value = {search}
                />
                {!searched.current ? <IconButton  iconName="Search" action={searchFriend} style={{width: 50}}/>      
                                  : <IconButton iconName = "QuitSearch" action ={resetSearch} style = {{width: 50}}/>}
                <IconButton iconName = {allread ? "MailAllRead" : "MailUnread"} action = {toInbox} style = {{width: 50}}/>
                <IconButton iconName = "Ranking" action = {toRanking} style = {{width: 50}}/>
            </View>
        {searched.current ? <SearchList keyword = {search}/> : <FriendList />}
        <Toast/>
    </SafeAreaView>
  )
}


export default Friend;

const styles = StyleSheet.create({
// Add or update in Screen.jsx StyleSheet.create({ ... })
container: {
  flex: 1,
  backgroundColor: "#f6f6f6",
  paddingTop: 25,
},
search: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  margin: 16,
  backgroundColor: "#fff",
  borderRadius: 8,
  paddingHorizontal: 12,
  paddingVertical: 6,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.05,
  shadowRadius: 2,
  elevation: 2,
},
searchText: {
  flex: 1,
  height: 40,
  borderWidth: 0,
  borderRadius: 5,
  paddingHorizontal: 10,
  backgroundColor: "transparent",
  fontSize: 16,
  color: "#222",
},
})