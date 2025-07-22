import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { IconList } from "../constants/IconList.js";
import React from "react";

export const IconButton = ({iconName, action, style = {}}) => {
  const IconComponent = iconName in IconList ? IconList[iconName] : <Text>NOT FOUND</Text>;
  return (
    <View>
      <TouchableOpacity
        style={[defaultStyle.button, style]}
        onPress={action}>   
        <IconComponent/>
        </TouchableOpacity>
    </View>
  )
}

const defaultStyle = StyleSheet.create({
  button: { 
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "rgb(255, 255, 255)",
  },
  icon: {
    color: "rgb(0, 0, 0)",
  },
})
