import { View, Text, SafeAreaView, ImageBackground, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import catBackground from '@/assets/images/cafe-background.jpg'
import { Cat } from './Cat.tsx'
import { CatFoodCan } from './catFoodCan.jsx'
import { levelToExp, updateLevel, getPetStats } from '../../account/petInfo.js'
import heartIcon from '@/assets/images/heartIcon.png'
import * as Progress from 'react-native-progress'

const WALL_BOTTOM = 320;

export function Cafe() {
  const catRef = useRef(null);
  const canRef = useRef(null);
  const [eatState, setEatState] = useState(false);
  const [catLevel, setCatLevel] = useState(1);
  const [catEXP, setCatEXP] = useState(0);

  const feedCat = async () => {
    if (CatFoodCan.current?.isFull()) {
      setEatState(true);
      const animationDuration = catRef.current.walkToCan();
      canRef.current?.UnfillCan();

      await updateLevel(5);
      const { level, EXP } = await getPetStats();
      setCatLevel(level);
      setCatEXP(EXP);

      setTimeout(() => setEatState(false), animationDuration + 200);
    } else {
      setEatState(false);
      console.log("Can is empty!")
    }
  }

  useEffect(() => {
    async function fetchStats() {
      const { level, EXP } = await getPetStats();
      setCatLevel(level);
      setCatEXP(EXP);
    }
    fetchStats();
  }, []);

  return (
    <SafeAreaView>
      <ImageBackground source={catBackground} contentFit="contain" style={{ width: '100%', height: 600 }}>
        <Cat ref={catRef} x={50} y={400} eatState={eatState} />
        <CatFoodCan ref={canRef} />
        <TouchableOpacity style={styles.feedCatButton} onPress={feedCat}>
          <Text>Feed Cat!</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.icon}>
            <ImageBackground source={heartIcon} style={styles.heart}></ImageBackground>
            <Text style={styles.text}>Level {String(catLevel)}</Text>
          </View>

          <Progress.Bar progress={catEXP / levelToExp(catLevel) || 0}
            height={30}
            width={150}
            style={styles.EXPbar}
            animated={true}
            unfilledColor={'rgba(255, 255, 255, 0.5)'}
            color={'rgb(255, 143, 177)'}
          ></Progress.Bar>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -25,
    zIndex: 2,
    top: 190,
    left: 240,
  },
  heart: {
    width: 70,
    height: 70,
    position: 'absolute',
    zIndex: 0,
  },
  text: {
    fontSize: 10,
    fontweight: 'bold',
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    zIndex: 1,
  },
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
  },
  EXPbar: {
    position: 'absolute',
    top: 200,
    left: 250,
    borderRadius: 20,
    borderColor: 'rgb(212, 83, 128)',
    borderWidth: 2,
  }
});