import { View, Text, StyleSheet, FlatList, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import {StatusDisplay} from '@/components/StatusDisplay';
import { updateAchievementStatus, processList, AchievementView, countAttainedAchievements, searchName, totalAchievementCount } from './achievement'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IconList } from '../../../constants/IconList';
const screenWidth = Dimensions.get('window').width;

export default function screen() {
    
    let [orderedAch, setOrderedAch] = useState([]);
    let [search, setSearch] = useState("");
    let totalcount = totalAchievementCount();
    let achievedcount = useRef(0);
    let searched = useRef(false);
    let loaded = useRef(false);

    if(achievedcount.current == 0) achievedcount.current = countAttainedAchievements(orderedAch);
    const AchievementCountComp = () => (
        <View style = {{flexDirection: 'row', marginHorizontal:'auto', justifyContent: 'space-around', marginBottom: 20}}>
            <StatusDisplay attribute = {''} 
                           text = {'   '} 
                           value = {achievedcount.current} 
                           Child = {IconList.unlocked} />
            <StatusDisplay attribute = {''} 
                           text = {'   '} 
                           value = {totalcount - achievedcount.current} 
                           Child = {IconList.locked} />
        </View>);
    
    const searchItem = (content) => {
        if(content.trim() == "") return;
        searched.current = true;
        setOrderedAch(processList(orderedAch, searchName(content), (a,b) => (b.completed - a.completed)));
    };

    const initialiseList = () => {
        searched.current = false;
          updateAchievementStatus()
         .then((newList) => { 
          const processed = processList(newList, (item) => true, (a,b) => (b.completed - a.completed));
          loaded.current = true;
          console.log("Ready");
          setOrderedAch(processed);       
          setSearch("");
  
    });     
    };

    useEffect(initialiseList,[]);
  
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Achievements</Text>
                <View style = {styles.search}>
                <TextInput
                    style = {styles.searchText}
                    onChangeText={setSearch}
                    placeholder="Search Achievements..."
                    placeholderTextColor="grey"
                    editable = {!searched.current}
                    value = {search}
                  />
               
                 <TouchableOpacity onPress={() => searchItem(search)} style={{width: 50}}>
                    <IconList.Search/>
                </TouchableOpacity>
                {searched.current && <TouchableOpacity onPress={initialiseList} style={{width: 50}}>
                    <IconList.QuitSearch/>
                </TouchableOpacity>}
              </View>
            <AchievementCountComp />
            {loaded.current && <FlatList
                data={orderedAch}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <AchievementView item={item} />
                )}
            />}
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
        height: 70,
        fontSize: 25,
        marginBottom: 20,
        alignContent: 'center',
        fontWeight: 'bold',
        backgroundColor: 'rgba(179, 179, 16, 0.8)',
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
                                marginLeft: 20, marginRight: 10, marginBottom: 10, height: 40, marginVertical: 10,
        },
    searchText: {width: 300, height: 45, fontSize: 18}
}
);


