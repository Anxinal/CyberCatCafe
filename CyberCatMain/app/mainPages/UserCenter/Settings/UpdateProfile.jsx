import { View, Text, TextInput} from 'react-native'
import React, { useState } from 'react'
import { TitleComp } from '../../../../components/TitleComp';
import { LoginButton } from '../../../account/AccountReusableComponents.tsx'
import { updateUserInfo } from '@/app/account/userInfo.js'
import { useRouter } from 'expo-router';
import {accountStyles } from '@/constants/AccountStyles.ts'
const UpdateProfile = () => {
const [username, setUsername] = useState("");

// Currently unsupported but will be implemented in the future
const [userBios, setuserBios] = useState("");

const updateInfo = () => {
   updateUserInfo("username", username);
}
  return (
    <View>
      <TitleComp content={"Update your BIOS here !"}/>
            <View style={accountStyles.inputContainer}>
            <Text style={accountStyles.infoText}> Username: </Text>
            <TextInput
                style = {accountStyles.inputStyle}
                onChangeText={setUsername}
                placeholder="enter Username"
                placeholderTextColor="grey"
                value = {username}
            />
           </View>
        <LoginButton action={updateInfo} buttonText={'Update your information'}/>
        <LoginButton action={() => {useRouter().push("/mainPages/UserCenter/screen")}} 
                     buttonText={'Back to usercenter'}/>
          

    </View>
  )
}

export default UpdateProfile