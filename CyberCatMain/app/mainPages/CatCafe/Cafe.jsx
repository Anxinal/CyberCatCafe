import { View, Text, SafeAreaView, ImageBackground, Button } from 'react-native'
import React, { useRef } from 'react'
import catBackground from '@/assets/images/cafe-background.jpg'
import { Cat } from './Cat.tsx'
import { CatFoodCan } from './catFoodCan.jsx'
// Some position information for future pinning
const WALL_BOTTOM = 320;

export function Cafe() {
  const catRef = useRef(null);
  const canRef = useRef(null);
  const feedCat = () => {
    // if (CatFoodCan.current?.isFull()) {
    catRef.current?.walkToCan();
    // canRef.current?.UnfillCan();
    // } else {
    //   console.log("Can is empty!")
    // }
  }
  return (
    <SafeAreaView>
      <ImageBackground source={catBackground} contentFit="contain" style={{ width: '100%', height: 600 }}>
        <Cat ref={catRef} x={50} y={400} />
        <CatFoodCan ref={canRef} />
        <Button title="Feed Cat" onPress={feedCat} />
      </ImageBackground>
    </SafeAreaView>
  )
}