
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'

// These parameters represent the position of the cat food can
const FOOD_TOP = 420;
const FOOD_LEFT = 130;
let isFull = useRef(false);

export const UnfillCan = () => {
    isFull.current = false;
}

export const CatFoodCan = () =>  {
 

 let [addFoodvisible, setAddFoodVisible] = useState(false);
 
 const FilledCan = () => (<Text>Filled</Text>);
 const UnfilledCan = () => (<Text>Unfilled</Text>);

 const FillCan = () => {
    isFull.current = true;
    setAddFoodVisible(false);
 }
 const AddFoodComp = () => {
    return (
        <View style = {[styles.emptyOptionBoard, 
                        styles.VisibleOptionBoard]}>
            <Text> Add more cat Food?</Text>
            <Text> Current cat food in possession: 10</Text>
            <View style = {{flexDirection: 'row'}}>
                  <TouchableOpacity onPress={FillCan} 
                              style = {styles.buttonStyle}>
                    <Text>YES</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.buttonStyle} 
                              onPress={() => setAddFoodVisible(!addFoodvisible)}>
                    <Text>NO</Text>
                </TouchableOpacity>
            </View>
          
        </View>);
}
    return (
    <View style = {styles.catFoodPanel}>
      {addFoodvisible ? <AddFoodComp/> : <View style = {styles.emptyOptionBoard}/>}
      <TouchableOpacity onPress={() =>setAddFoodVisible(true)}> 
       {isFull.current ? <FilledCan/> : <UnfilledCan/>} 
      </TouchableOpacity>
   
    </View>
  )
}


const styles= StyleSheet.create({
  VisibleOptionBoard: {
    backgroundColor: 'white',
    borderColor: 'rgb(108, 62, 6)',
    borderWidth: 1,
  },
  emptyOptionBoard: {
    height: 100,
    width:  210,
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
    marginHorizontal:'auto',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'rgb(228, 156, 3)',
    
  }
  
});
