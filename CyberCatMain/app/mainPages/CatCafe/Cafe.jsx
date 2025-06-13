import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import catBackground from '@/assets/images/cafe-background.jpg'
import {Cat} from './Cat.tsx'
// Some position information for future pinning
const WALL_BOTTOM = 320;

export function Cafe() {
  return (
    <SafeAreaView>
      <ImageBackground source={catBackground} contentFit = "contain" style = {{width: '100%', height: 600}}>
            <Cat x = {50} y= {400}/> 
      </ImageBackground>
    </SafeAreaView>
  )
}