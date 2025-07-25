import { getUserInfo, updateUserInfo } from '../app/account/userInfo.js'
import { InventoryList } from '../constants/InventoryList.js';

let userInventory = [];

export async function initialiseInventory() {
    await Promise.resolve(getUserInfo('inventoryList').then((info) => {
        userInventory = info;
    }));

}

export const searchItemCount = (id) => {
    return userInventory.reduce((acc, cur) => cur.id == id ? acc + cur.count : acc, 0);
};

export const getUserInventoryList = () => userInventory;

export const addInventoryItem = (id, count) => {
    const index = userInventory.findIndex(item => item.id === id);
    if (index !== -1) {
        userInventory[index].count += count;
    } else {
        userInventory.push({ id, count });
    }
    updateUserInfo('inventoryList', userInventory);
}

export const deleteInventoryItem = (id, count) => {
    const itemCount = searchItemCount(id);

    if (itemCount - count >= 0) {
        addInventoryItem(id, -count);
    } else {
        throw new Error("Insufficient item count");
    }
}

