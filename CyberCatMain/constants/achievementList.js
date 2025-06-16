
import {getUserInfo} from '../app/account/userInfo.js'
// This function returns a promise
const StatusCheck = (attribute) => (predicate) => async () => {
   return getUserInfo(attribute).then((info) => predicate(info));
} 

export const achievementList = [
    {
        id: 0,
        title: 'one cat a day',
        description: 'one cat a day, keeps the doctor away!',
        hidden: false,
        criteria: StatusCheck("focusSessionCount")(x => x >= 1),
      
    },
    {
        id: 1,
        title: 'kitty patty',
        description: 'pat the kitty and feel better',
        hidden: false,
        criteria: StatusCheck("focusSessionCount")(x => x >= 5),
     
    },
    {
        id: 2,
        title: 'paw-sitive progress',
        hidden: false,
        description: 'completed at least one focus session for 3 consecutive days',
        criteria:  StatusCheck("focusSessionCount")(x => x >= 10),
     
    },
]