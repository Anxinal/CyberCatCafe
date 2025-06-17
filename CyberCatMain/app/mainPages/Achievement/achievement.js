
import { achievementList } from '../../../constants/achievementList.js';
import { StyleSheet, Dimensions ,View ,Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import { IconList } from '../../../constants/IconList.js';


const LockedIcon = IconList.locked; 
const UnlockedIcon =  IconList.unlocked;
const CollapseIcon = IconList.collapse;



const screenWidth = Dimensions.get('window').width;

export async function updateAchievementStatus() {
  // Kick off one promise per achievement:
  const checks = achievementList.map(async achievement => {
    const condition = await achievement.criteria();
    return { ...achievement, completed: condition };
  });

  // Wait here until *all* those criteria() calls have finished:
  const updatedList = await Promise.all(checks);

  return updatedList;  // now a proper [ {…}, {…}, … ] array
}


export const processList = (newlist, filterFunc, sortFunc) => {   
    console.log("1234");
    console.log(newlist);
 
    // need further debugging for the filter function
    return newlist.filter(item => !(item.hidden && !item.completed) && filterFunc).sort(sortFunc);
    
 }
 export const countAttainedAchievements = (achList) => achList.filter(item => item.completed).length;

 export const AchievementView = ({item}) => {
    let [collasped, setCollapsed] = useState(true);
    return  (<View style={[styles.card, item.completed ? styles.cardComplete : styles.cardIncomplete]}>
                            {item.completed ?
                                (<UnlockedIcon/>) : (<LockedIcon/>)
                            }
                            <View style={styles.box}>
                                <Text style={[styles.title, item.completed && styles.titleComplete]}>{item.title}</Text>
                               {!collasped && <Text style={styles.description}>{item.description}</Text> } 
                            </View>
                            <TouchableOpacity onPress={() => setCollapsed(!collasped)}>
                                <CollapseIcon />
                            </TouchableOpacity>
                        </View>);
 }

 const styles = StyleSheet.create({

     card: {
         flexDirection: 'row',
         padding: 30,
         width: screenWidth - 15,
         margin: 10,
         marginLeft: 10,
         marginRight: 10,
         borderRadius: 5,
         marginHorizontal: 'auto',
     },
     cardComplete: {
         backgroundColor: 'rgb(196, 137, 19)',
         borderWidth: 3,
         borderColor: 'rgb(245, 237, 14)',
         shadowColor: 'orange',
         shadowOffset: {height: 3, width: 3,},
         shadowOpacity: 10
     },
     cardIncomplete: {
         backgroundColor: 'rgb(60, 55, 55)',
     },
     box: {
         flex: 1,
         marginLeft: 20,
         flexDirection: 'column',
     },
     title: {
         color: 'white',
         fontSize: 20,
         fontWeight: 'bold',
         
     },
     titleComplete: {
        color: 'rgb(255, 255, 0)',
        textShadowColor: 'orange',
        textShadowOffset: {height: 2, width: 2,},
        textShadowRadius: 2,
     },
     description: {
         color: 'orange',
         fontSize: 15,

     },
 }
 );