import { FriendNotiCard } from "../../../../../components/FriendNoti.tsx";
import { Request } from "../../../../../data/SendFriendRequest";
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCurrentUserID, getUserInfo, collectionRef } from "../../../../account/userInfo";
import { HrefLink } from "@/components/TextLink.jsx"
import { onSnapshot, doc} from "firebase/firestore";





const FriendNotiList = () => {

  let [friendNotiData, setFriendNoti] = useState([]);

  onSnapshot(doc(collectionRef, getCurrentUserID()), (doc) => {
    setFriendNoti(doc.data().friendRequestList)
  });

  useEffect(
    
    async () => {
      setFriendNoti(await getUserInfo("friendRequestList"))
    },[]);

  return(
          <View style={styles.list}>
            {friendNotiData && friendNotiData.length > 0
              ? friendNotiData.map(json => FriendNotiCard({rq: Request.createFromJSON(json)}))
              : <EmptyComp/>}
         </View>);
}

const EmptyComp = () => (<Text>You have no new messages.</Text>);

const FriendInbox = () => {

  return (
    <View style={styles.container}>

      <Text style={styles.header}>Friend Inbox</Text>
      <HrefLink  href="./Screen" text="Go back to friends page"/>
      {
      <FriendNotiList/>
      }

    </View>)

}


export default FriendInbox;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
    textAlign: "center",
  },
  link: {
    color: "#4a90e2",
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
  },
  list: {
    marginTop: 8,
  }
});
