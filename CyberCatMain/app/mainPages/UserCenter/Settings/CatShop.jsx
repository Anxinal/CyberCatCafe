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
                <View key={item.id} style={styles.item}>
                    <Text>{item.name} {item.price} coins</Text>
                    <TouchableOpacity style={styles.button} onPress={() => purchaseItem(item.id, item.price)}>
                        <Text>Buy</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    itemRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 },
    button: { backgroundColor: 'gold', paddingHorizontal: 10, borderRadius: 5 },
});