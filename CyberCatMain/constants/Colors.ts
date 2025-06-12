/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    buttonColor: 'rgb(178, 157, 231)',
    border: 'grey'
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  brown: {
    text: 'rgb(183, 61, 17)',
    background: 'rgb(237, 102, 102)',
    tint: tintColorDark,
    icon: 'rgb(93, 30, 7)',
    tabIconDefault: 'rgb(93, 30, 7)', 
    tabIconSelected: tintColorDark,
  },
};