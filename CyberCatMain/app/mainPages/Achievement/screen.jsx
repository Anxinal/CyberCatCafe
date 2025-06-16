import { View, Text, Button, StyleSheet, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { achievementList } from '../../../constants/achievementList'
import { updateAchievementStatus, processList } from './achievement'
import { SafeAreaView } from 'react-native-safe-area-context'

const screenWidth = Dimensions.get('window').width

export default function screen() {

    
    let [orderedAch, setOrderedAch] = useState([]);
    console.log("rendered");
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
            <FlatList
                data={orderedAch}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.card, item.completed ? styles.cardComplete : styles.cardIncomplete]}>
                        {item.completed ?
                            (<Text>icon</Text>) : (<Text>question</Text>)
                        }
                        <View style={styles.box}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    </View>
                )}
            />
            <Text>navigationBar</Text>
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
)


