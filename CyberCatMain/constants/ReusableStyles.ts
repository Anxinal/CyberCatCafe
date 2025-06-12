import { StyleSheet } from "react-native";
import { Colors } from "./Colors.ts";

// This file is used to contain all the unified style settings in different pages.
const currentTheme = Colors.light;

export const textFont = {
  XXL: 80,
  extraLarge: 60,
  large : 40,
  medium: 25,
  small: 20,
  extrasmall: 10,
} 

export const textColor = {
  normal: currentTheme.text,
  contrast: currentTheme.background,
  link: 'blue',
}

export const componentColor = {
  button: currentTheme.buttonColor,
  shade: currentTheme.tint,
  border: currentTheme.border,
}