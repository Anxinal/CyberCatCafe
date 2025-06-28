import { Text, View } from 'react-native';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Animated, PanResponder } from 'react-native';
import { Image } from 'react-native';

const WALL_BOTTOM = 600;
const WALL_TOP = 320;

export const Cat = forwardRef<{ walkToCan: () => void }, { x: number; y: number }>(
  ({ x, y }, ref) => {
    const catRef = useRef(null);
    const canRef = useRef(null);

    const pan = useRef(new Animated.ValueXY({ x, y })).current;

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // push current value into offset and reset value to 0
        pan.extractOffset();
      },
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        // add offset back to the value
        pan.flattenOffset();
      },
    });

    const walkToCan = () => {
      Animated.timing(pan, {
        toValue: { x: 130, y: 420 },
        duration: 1000,
        useNativeDriver: false,
      }).start(() => console.log('Cat walks to the can'));
    };

    useImperativeHandle(ref, () => ({ walkToCan }));

    return (
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          {
            position: 'absolute', zIndex: 10,
            transform: pan.getTranslateTransform(),
          }
        ]}
      >
        <Image
          source={require('@/assets/images/CatGif.gif')}
          style={{ width: 100, height: 100 }}
        />
      </Animated.View>
    );
  }
);