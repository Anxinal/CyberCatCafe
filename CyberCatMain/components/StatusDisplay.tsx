   
import { View, Text } from "react-native"
import { getUserInfo } from "@/app/account/userInfo"
import { accountStyles } from "@/constants/AccountStyles"
import { useState } from 'react';

   export const StatusDisplay = ({attribute,text = "NONE", 
                                  Child, 
                                  mapFunction = (x) => (x), 
                                  viewStyle = {},
                                  fontSize = 0,
                                  value = -1}: 
                                 {attribute: string, 
                                  Child: any
                                  viewStyle: any
                                  text: string
                                  fontSize: number
                                  mapFunction: (arg0: any) => string
                                  value: number
                                }) => {
    const [userVar, setUserVar] = useState(value + "");
    // value is only positive number
    if(value == -1) getUserInfo(attribute, setUserVar);
    return  (
      <View style = {[accountStyles.StatusView, viewStyle]}>
        {Child && <Child/>}
        {text != "NONE" && <Text style = {[accountStyles.infoText, 
                                          {paddingTop: 4},  
                                           fontSize ? {fontSize: fontSize} : {}]}> {text} </Text>}
        <Text style = {[accountStyles.infoText, 
                       {paddingTop: 3},   
                        fontSize ? {fontSize: fontSize} : {}]}>{mapFunction(userVar)}</Text>
      </View>
    );


  }
 