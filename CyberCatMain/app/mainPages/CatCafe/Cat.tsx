import { Text, View } from 'react-native';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Animated, PanResponder } from 'react-native';
import { Image } from 'react-native';

const WALL_BOTTOM = 600;
const WALL_TOP = 320;
const CAN_X = 130;
const CAN_Y = 420;

const catWalking = require('@/assets/images/CatWalking.gif');
const catGif = require('@/assets/images/CatGif.gif');

export const Cat = forwardRef<{ walkToCan: () => void }, { x: number; y: number; eatState: boolean }>(
  ({ x, y, eatState }, ref) => {
    const catRef = useRef(null);
    const canRef = useRef(null);

    const pan = useRef(new Animated.ValueXY({ x, y })).current;
    const currentPos = useRef({ x, y });

    useEffect(() => {
      const id = pan.addListener((value: { x: number; y: number }) => {
        currentPos.current = value;
      });
      return () => pan.removeListener(id);
    }, [pan]);

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // push current value into offset and reset value to 0
        pan.extractOffset(
        );
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

    const move = (newX: number, newY: number) => {
      const { x: currentX, y: currentY } = currentPos.current;
      const dx = newX - currentX;
      const dy = newY - currentY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const duration = distance * 5;

      Animated.timing(pan, {
        toValue: { x: newX, y: newY },
        duration,
        useNativeDriver: false,
      }).start(() => {
        currentPos.current = { x: newX, y: newY };
        console.log(`Cat moved to (${newX}, ${newY})`);
      });
    };

    const walkToCan = () => {
      move(CAN_X, CAN_Y);
      console.log("Cat walks to can");
    };

    useImperativeHandle(ref, () => ({ walkToCan }));

    const imageSource = eatState ? catWalking : catGif;

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
          source={imageSource}
          style={{ width: 100, height: 100 }}
        />
      </Animated.View>
    );
  }
);