const achievementList = [
    {
        id: '1',
        title: 'one cat a day',
        description: 'one cat a day, keeps the doctor away!',
        criteria: (userStats) => userStats.focusSessions >= 1,
    },
    {
        id: '2',
        title: 'kitty patty',
        description: 'pat the kitty and feel better',
        criteria: (userStats) => userStats.focusSessions >= 5,
    },
    {
        id: '3',
        title: 'paw-sitive progress',
        description: 'completed at least one focus session for 3 consecutive days',
        criteria: (userStats) => userStats.focusSessions >= 10,
    },
]