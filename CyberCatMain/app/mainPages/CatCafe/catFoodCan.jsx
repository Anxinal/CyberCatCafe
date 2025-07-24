import { View, Text, StyleSheet, Touchable, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState, useRef } from 'react'
import { searchItemCount, deleteInventoryItem } from '@/data/Inventory.js'
import { Image } from 'react-native';

const catBowl = require('@/assets/images/catBowl.png');

// These parameters represent the position of the cat food can
const FOOD_TOP = 400;
const FOOD_LEFT = 130;

export const UnfillCan = () => {
  isFull.current = false;
}

export const CatFoodCan = () => {

  let isFull = useRef(false);
  let [addFoodvisible, setAddFoodVisible] = useState(false);

  const FillCan = () => {
    const foodCount = searchItemCount(0);
    if (foodCount > 0) {
      setAddFoodVisible(false);
      try {
        deleteInventoryItem(0, 1);
      } catch (error) {
        console.log(error.message);
        isFull.current = false;
      }
      isFull.current = true;
    } else {
      console.log("No cat food left");
      isFull.current = false;
    }
  }

  const AddFoodComp = () => {
    const temp = searchItemCount(0);
    return (
      <View style={[styles.emptyOptionBoard,
      styles.VisibleOptionBoard]}>
        <Text> Add more cat Food?</Text>
        <Text> Current cat food in possession: {temp}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={FillCan}
            style={styles.buttonStyle}>
            <Text>YES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}
            onPress={() => setAddFoodVisible(!addFoodvisible)}>
            <Text>NO</Text>
          </TouchableOpacity>
        </View>

      </View>);
  }
  return (
    <View style={styles.catFoodPanel}>
      {addFoodvisible ? <AddFoodComp /> : <View style={styles.emptyOptionBoard} />}
      <TouchableOpacity onPress={() => setAddFoodVisible(true)}>
        <Image source={catBowl} style={styles.catBowl}></Image>
      </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  VisibleOptionBoard: {
    backgroundColor: 'white',
    borderColor: 'rgb(108, 62, 6)',
    borderWidth: 1,
  },
  emptyOptionBoard: {
    height: 100,
    width: 210,
    justifyContent: 'center',
  },
  catFoodPanel: {
    position: "absolute",
    top: FOOD_TOP,
    left: FOOD_LEFT,
  },
  buttonStyle: {
    height: 20,
    width: 45,
    marginHorizontal: 'auto',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'rgb(228, 156, 3)',

  },
  catBowl: {
    height: 80,
    width: 80,
    position: 'absolute',
    top: -10,
    left: 20,
  }

});
