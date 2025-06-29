import { View, Text, SafeAreaView, ImageBackground, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import catBackground from '@/assets/images/cafe-background.jpg'
import { Cat } from './Cat.tsx'
import { CatFoodCan } from './catFoodCan.jsx'
import { levelToExp, updateLevel, getPetStats } from '../../account/petInfo.js'
import * as Progress from 'react-native-progress'

const WALL_BOTTOM = 320;

export function Cafe() {
  const catRef = useRef(null);
  const canRef = useRef(null);
  const [eatState, setEatState] = useState(false);
  const [catLevel, setCatLevel] = useState(1);
  const [catEXP, setCatEXP] = useState(0);

  const feedCat = () => {
    if (CatFoodCan.current?.isFull()) {
      setEatState(true);
      catRef.current?.walkToCan();
      canRef.current?.UnfillCan();

      updateLevel(5);

      setTimeout(() => setEatState(false), 1200);
    } else {
      setEatState(false);
      console.log("Can is empty!")
    }
  }

  useEffect(() => {
    async function fetchStats() {
      const { level, exp } = getPetStats();
      setCatLevel(level);
      setCatEXP(exp);
    }

    fetchStats();
  }, []);

  return (
    <SafeAreaView>
      <ImageBackground source={catBackground} contentFit="contain" style={{ width: '100%', height: 600 }}>
        <Cat ref={catRef} x={50} y={400} eatState={eatState} />
        <CatFoodCan ref={canRef} />
        {/* <Button title="Feed Cat" onPress={feedCat} /> */}
        <TouchableOpacity style={styles.feedCatButton} onPress={feedCat}>
          <Text>Feed Cat!</Text>
        </TouchableOpacity>
        <Progress.Bar progress={catEXP / levelToExp(catLevel)} width={200}></Progress.Bar>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  feedCatButton: {
    height: 30,
    width: 80,
    position: 'absolute',
    top: 550,
    left: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'rgb(228, 156, 3)',
  }
});