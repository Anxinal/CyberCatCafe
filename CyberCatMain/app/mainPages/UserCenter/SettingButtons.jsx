import { View, TouchableOpacity, Text} from "react-native";
import { accountStyles } from "@/constants/AccountStyles";
import { settings } from "./settingsConfig.js" 
  const ToSettingButton = ({action, label}) => (
    <View>
      <TouchableOpacity onPress={action}>
        <Text style = {accountStyles.optionText}> {label} </Text>
      </TouchableOpacity>
      <View style = {accountStyles.listSeperator}></View>
      
    </View>
  
   );
   export const SettingButtons = () =>  (
    <View>
        {settings.map(item => ToSettingButton({action: item[1],label: item[0]}))}
    </View>
);