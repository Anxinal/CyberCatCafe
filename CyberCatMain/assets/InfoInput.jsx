import {View, StyleSheet, TextInput, Text} from 'react-native'
 

export const Info = ({label, setFunction}) => {
    return (
        <View>
          <Text style = {styles.infoText}>{label} : </Text>
          <TextInput style = {styles.inputStyle} onChangeText={ text => setFunction(text)} placeholder={label} placeholderTextColor={'grey'}/>
        </View>
    );
};
Info.defaultprops = {
    label: 'input',
    setFunction: (() => {})
};
const styles = StyleSheet.create({
    infoText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 'auto',
        flex: 3,
    },
    inputStyle: {
         marginHorizontal: 'auto',
         flex: 7,
         marginLeft: 10,
         marginRight: 10,
         marginTop: 10,
         marginBottom: 10,       
    },
    inputContainer: {
        flexDirection: 'row',
        width: '100%',
        maxWidth: 600,
        justifyContent: 'center',
        height: 60,
    }

});