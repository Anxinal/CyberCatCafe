
import { achievementList } from '../../../constants/achievementList.js';

// export const updateAchievementStatus = async () => {
//  const updatedList = [];
//  return Promise.resolve(
//     achievementList.forEach((achievement) => {
//         achievement.criteria().then((condition)=>{
//             return condition;
//         }).then((condition) => { 
//          updatedList.push({
//         ...achievement,
//         completed: condition
//       });
//     });
//     })).then(() => updatedList);
  
// }

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
