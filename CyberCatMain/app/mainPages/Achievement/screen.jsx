import { View, Text, Button, StyleSheet, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { achievementList } from '../../../constants/achievementList'
import {StatusDisplay} from '@/components/StatusDisplay';
import { updateAchievementStatus, processList, AchievementView, countAttainedAchievements } from './achievement'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IconList } from '../../../constants/IconList';
const screenWidth = Dimensions.get('window').width;





export default function screen() {
    
    let [orderedAch, setOrderedAch] = useState([]);

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
        marginBottom: 10,
        alignContent: 'center',
        fontWeight: 'bold',
        backgroundColor: 'pink',
    },
    card: {
        flexDirection: 'row',
        padding: 30,
        width: screenWidth,
        marginBottom: 10,
        borderRadius: 10,
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
}
);


