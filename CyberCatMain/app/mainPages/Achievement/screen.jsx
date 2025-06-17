import { View, Text, StyleSheet, FlatList, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import {StatusDisplay} from '@/components/StatusDisplay';
import { updateAchievementStatus, processList, AchievementView, countAttainedAchievements } from './achievement'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IconList } from '../../../constants/IconList';
const screenWidth = Dimensions.get('window').width;


export default function screen() {
    
    let [orderedAch, setOrderedAch] = useState([]);
    let [search, setSearch] = useState("");
    const AchievementCountComp = () => (
        <View style = {{flexDirection: 'row', marginHorizontal:'auto', justifyContent: 'space-around', marginBottom: 20}}>
            <StatusDisplay attribute = {''} 
                           text = {'   '} 
                           value = {countAttainedAchievements(orderedAch)} 
                           Child = {IconList.unlocked} />
            <StatusDisplay attribute = {''} 
                           text = {'   '} 
                           value = {orderedAch.length - countAttainedAchievements(orderedAch)} 
                           Child = {IconList.locked} />
        </View>);
    
    const searchItem = (content) => {
        console.log(content);
    };


  
    useEffect( () => {
        console.log("called");
        updateAchievementStatus()
       .then((newList) => { 
        const processed = processList(newList, (item) => true, (a,b) => (b.completed - a.completed));
        setOrderedAch(processed);
        console.log(processed);
         });
         },[]);
  
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Achievements</Text>
                <View style = {styles.search}>
                <TextInput
                    style = {styles.searchText}
                    onChangeText={setSearch}
                    placeholder="Search Achievements..."
                    placeholderTextColor="grey"
                    value = {search}
                  />
                <TouchableOpacity onPress={() => searchItem(search)} style={{width: 50}}>
                    <IconList.Search/>
                </TouchableOpacity>
              </View>
            <AchievementCountComp />
            <FlatList
                data={orderedAch}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <AchievementView item={item} />
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        width: screenWidth,
        height: 100,
        fontSize: 20,
        marginBottom: 20,
        alignContent: 'center',
        fontWeight: 'bold',
        backgroundColor: 'rgb(179, 179, 16)',
    },
    card: {
        flexDirection: 'row',
        padding: 30,
        width: '100%',
        margin: 20,
        
    },
    cardComplete: {
        backgroundColor: 'pink',
    },
    cardIncomplete: {
        backgroundColor: 'grey',
    },
    box: {
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        color: 'white',
        fontSize: 18,
    },
    description: {
        color: 'black',
        fontSize: 15,
    },
    search: {flexDirection:'row', width: '100%', maxWidth: 500, marginHorizontal: 'auto', 
                                justifyContent:'center',
                                marginLeft: 20, marginRight: 10, marginBottom: 10
        },
    searchText: {width: 300, height: 40, fontSize: 20}
}
);


