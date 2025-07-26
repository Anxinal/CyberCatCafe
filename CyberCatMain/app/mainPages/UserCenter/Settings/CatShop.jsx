import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { addInventoryItem } from '../../../../data/Inventory';
import { InventoryList } from '../../../../constants/InventoryList';
import { getUserInfo, updateUserInfo } from '../../../account/userInfo';

export default function CatShop() {
    const [userCoins, setCoins] = useState(0);
    useEffect(() => {
        async function getCoins() {
            const coins = await getUserInfo("coins");
            setCoins(coins || 0);
        }
        getCoins();
    });

    const getShoppableCatFood = () => {
        return InventoryList.filter(item => item.shoppable && item.name === 'Cat Food');
    };

    const purchaseItem = async (itemId, price) => {
        if (userCoins >= price) {
            addInventoryItem(itemId, 1);
            const newCoins = userCoins - price;
            setCoins(newCoins);
            await updateUserInfo("coins", newCoins);
            console.log('Purchase successful');
        } else {
            console.log('Not enough coins');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cat Shop</Text>
            <Text>Your Coins: {userCoins}</Text>
            {getShoppableCatFood().map(item => (
                <View key={item.id} style={styles.itemCard}>
                    <View>
                        <Text styles={styles.text}>{item.name}</Text>
                        <Text styles={styles.text}>{item.price} coins</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => purchaseItem(item.id, item.price)}>
                        <Text styles={styles.text}>Buy</Text>
                    </TouchableOpacity>
                </View>
            ))
            }
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    itemCard: {
        backgroundColor: '#FFF4E1',
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    button: {
        backgroundColor: '#F2C5E0',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },

    text: {
        fontWeight: 'bold',
        fontSize: 14,
    }
});