
import {getUserInfo} from '../app/account/userInfo.js'
// This function returns a promise
const StatusCheck = (attribute) => (predicate) => async () => {
   return getUserInfo(attribute).then((info) => predicate(info));
} 

export const achievementList = [
    {
        id: 0,
        title: 'un petit pas en avant',
        description: 'Complete a total of 1 focus session',
        hidden: false,
        criteria: StatusCheck("focusSessionCount")(x => x >= 1),
      
    },
    {
        id: 1,
        title: 'High Five!',
        description: 'Complete a total of 5 focus session',
        hidden: false,
        criteria: StatusCheck("focusSessionCount")(x => x >= 5),
     
    },
    {
        id: 2,
        title: 'Paw-sitive progress',
        hidden: false,
        description: 'Complete a total of 10 focus sessions',
        criteria:  StatusCheck("focusSessionCount")(x => x >= 10),
     
    },
    {
        id: 3,
        title: 'Focus-lust',
        hidden: false,
        description: 'complete a total of 50 focus sessions',
        criteria:  StatusCheck("focusSessionCount")(x => x >= 50),
     
    },
    {
        id: 4,
        title: 'Joyeux de vie',
        hidden: false,
        description: 'complete a total of 100 focus sessions',
        criteria:  StatusCheck("focusSessionCount")(x => x >= 100),
     
    },
      {
        id: 5,
        title: 'Nihilism',
        hidden: true,
        description: 'complete a total of 250 focus sessions',
        criteria:  StatusCheck("focusSessionCount")(x => x >= 200),
     
    },
      {
        id: 6,
        title: 'Unos!',
        hidden: false,
        description: 'The first hour you have spent on focus sessions',
        criteria:  StatusCheck("totalFocus")(x => x >= 3600),
    },
    {
        id: 7,
        title: 'Triple Shot Purr-fect',
        hidden: false,
        description: 'You have spent 3 hours in total on focus',
        criteria:  StatusCheck("totalFocus")(x => x >= 3600 * 3),
    },
    {
        id: 8,
        title: 'High Five?',
        hidden: false,
        description: 'You have spent 5 hours in total on focus',
        criteria:  StatusCheck("totalFocus")(x => x >= 3600 * 5),
    },
    {
        id: 9,
        title: 'Deca-dance in time',
        hidden: false,
        description: 'You have spent 10 hours in total on focus',
        criteria:  StatusCheck("totalFocus")(x => x >= 3600 * 10),
    },
    {
        id: 10,
        title: 'Want vingt',
        hidden: false,
        description: 'You have spent 20 hours in total on focus',
        criteria:  StatusCheck("totalFocus")(x => x >= 3600 * 20),
    },
    {
        id: 11,
        title: '42',
        hidden: false,
        description: 'The ultimate anwser to the universe',
        criteria:  StatusCheck("totalFocus")(x => x >= 3600 * 42),
    },
     {
        id: 12,
        title: 'Decillion encounters',
        hidden: true,
        description: 'Not exponential in hour but exponential in effort. Deepest gratitude from the dev.',
        criteria:  StatusCheck("totalFocus")(x => x >= 3600 * 330),
    },
     {
        id: 13,
        title: 'All perfect +',
        hidden: false,
        description: 'We should not be satisfied with 100 but always strive for more.',
        criteria:  StatusCheck("totalFocus")(x => x >= 3600 * 101),
    },
    {
        id: 14,
        title: 'Patience!',
        hidden: true,
        description: 'Spent the maximum possible time in a single focus session',
        criteria:  StatusCheck("totalFocus")(x => x >= 36000),
    },

]