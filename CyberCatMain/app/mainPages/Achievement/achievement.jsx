import { View, Text, Button, StyleSheet, FlatList, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import achievementList from './achievementList'

const screenWidth = Dimensions.get('window').width

export function updateAchievementStatus() {
    const updatedList = [];

    achievementList.forEach(a => maybe(a.hidden)
        .forEach(() => { if (a.completed) { updatedList.push(a); } })
        .orElse(() => updatedList.push(a)));
    return updatedList;
}

export default function Achievement() {
    const completedAch = updatedList.filter(item => item.completed);
    const incompleteAch = updatedList.filter(item => !item.completed);
    const orderedAch = [...completedAch, ...incompleteAch];

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Achievements</Text>
            <FlatList
                data={orderedAch}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.card, item.completed ? styles.cardCompleted : styles.cardIncomplete]}>
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
    cardCompleted: {
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


