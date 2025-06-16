
import { achievementList } from '../../../constants/achievementList.js';
import { StyleSheet, Dimensions ,View ,Text} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const LockedIcon = () => <FontAwesome5 name="question" size={30} color="black" />;
const UnlockedIcon = () => <FontAwesome5 name="star" size={30} color="rgb(245, 237, 14)" />;
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
    return  (<View style={[styles.card, item.completed ? styles.cardComplete : styles.cardIncomplete]}>
                            {item.completed ?
                                (<UnlockedIcon/>) : (<LockedIcon/>)
                            }
                            <View style={styles.box}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>
                        </View>);
 }

 const styles = StyleSheet.create({

     card: {
         flexDirection: 'row',
         padding: 30,
         width: screenWidth,
         marginBottom: 10,
         marginTop: 10,
         borderRadius: 10,
         marginHorizontal: 'auto',
     },
     cardComplete: {
         backgroundColor: 'pink',
         borderWidth: 3,
         borderColor: 'rgb(245, 237, 14)'
     },
     cardIncomplete: {
         backgroundColor: 'grey',
     },
     box: {
         flex: 1,
         marginLeft: 20,
         flexDirection: 'column',
     },
     title: {
         color: 'white',
         fontSize: 20,
         fontWeight: 'bold'
     },
     description: {
         color: 'black',
         fontSize: 15,
     },
 }
 );