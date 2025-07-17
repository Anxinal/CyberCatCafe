import { View, TouchableOpacity, Text} from "react-native";
import { accountStyles } from "@/constants/AccountStyles";
import { settings, SettingOption } from "./settingsConfig" 


  const SettingButton = ({option}: {option: SettingOption}) => (
    <View style = {accountStyles.optionView}>
     <View style = {{flexDirection:'row', marginHorizontal:'auto'}}>
      <SettingOption.Icon current = {option}/>
      <TouchableOpacity onPress={option.perform()}>
        <Text style = {accountStyles.optionText}> {option.name} </Text>
        <Text style = {accountStyles.optionDescription}>{option.description}</Text>
      </TouchableOpacity>
     </View>
      
    </View>
  
   );
   const SettingButtons = () => settings.map(item => <SettingButton option = {item} key = {item.name}/>);

   export const SettingButtonFrame = () =>  (
    <View style = {[accountStyles.container, {alignContent:'flex-start', 
                                                      flexDirection: 'column'}]}>
      <SettingButtons/>    
    </View>

);
