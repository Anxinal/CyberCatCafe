import { Text, View } from 'react-native'
import { useRef } from 'react';
import {Animated, PanResponder} from 'react-native';

const WALL_BOTTOM = 600;
const WALL_TOP = 320;

export const Cat = ({x, y}:{x: number, y:number}) =>{

  const pan = useRef(new Animated.ValueXY()).current;
  const clampedX = Animated.diffClamp(pan.x, 0, 360);
  const clampedY = Animated.diffClamp(pan.y, WALL_TOP, WALL_BOTTOM);
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ]),
    onPanResponderRelease: () => {
      pan.extractOffset();
    },
  });

    return (
        <Animated.View
          {... panResponder.panHandlers}
           style={{
           transform: [
              { translateX: clampedX },
              { translateY: clampedY },
    ],
    zIndex: 10,
  }}
        >
          <Text style = {{fontSize: 60}}>Cat</Text>
          </Animated.View>   
    )
  }





