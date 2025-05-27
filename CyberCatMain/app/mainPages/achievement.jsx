import { View, Text, Button, StyleSheet, FlatList, Dimensions } from 'react-native'
import React, { useRef } from 'react'
const screenWidth = Dimensions.get('window').width

export default function Achievement() {
    const completed = useRef(false);

    const completedAch = achievementList.filter(item => item.completed);
    const incompleteAch = achievementList.filter(item => !item.completed);
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

const achievementList = [
    {
        id: '1',
        title: 'one cat a day',
        description: 'one cat a day, keeps the doctor away!',
        completed: false,
    },
    {
        id: '2',
        title: 'kitty patty',
        description: 'pat the kitty and feel better',
        completed: true,
    },
    {
        id: '3',
        title: 'paw-sitive progress',
        description: 'completed at least one focus session for 3 consecutive days',
        completed: false,
    },
]
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


