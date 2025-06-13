import { View, TouchableOpacity, Text} from "react-native";
import { accountStyles } from "@/constants/AccountStyles";
import { settings } from "./settingsConfig.js" 
import AntDesign from '@expo/vector-icons/AntDesign';
  const ToSettingButton = ({action, label, iconName}) => (
    <View style = {accountStyles.optionView}>
     <View style = {[accountStyles.optionView, {flexDirection:'row', marginHorizontal:'auto'}]}>
      <AntDesign name= {iconName} size={30} color="black" />
      <TouchableOpacity onPress={action}>
        <Text style = {accountStyles.optionText}> {label} </Text>
      </TouchableOpacity>
     </View>
      
      <View style = {accountStyles.listSeperator}></View>
      
    </View>
  
   );
   export const SettingButtons = () =>  (
    <View>
        {settings.map(item => ToSettingButton({action: item[1],label: item[0], iconName: item[2]}))}
    </View>
);