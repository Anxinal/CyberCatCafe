import { View, Text, Button, StyleSheet, FlatList, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import {achievementList} from '@/constants/achievementList.js'

const screenWidth = Dimensions.get('window').width

export function updateAchievementStatus() {
    return achievementList.map(achievement => ({
        ...achievement,
        complete: achievement.criteria
    }))
}

export default function screen() {
    const updatedList = updateAchievementStatus();
    const visibleList = updatedList.filter(item => !(item.hidden & !item.complete))
    const completeAch = visibleList.filter(item => item.complete);
    const incompleteAch = visibleList.filter(item => !item.complete);
    const orderedAch = [...completeAch, ...incompleteAch];

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Achievements</Text>
            <FlatList
                data={orderedAch}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.card, item.complete ? styles.cardComplete : styles.cardIncomplete]}>
                        {item.complete ?
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
        </View>
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


