export const UserInitInfo = (username) => ( {
  
  totalFocus: 0,

  username: username,
  listOfAchievements: [1],
  focusSession: [],
  listOfCats: [
    {
        id: 0,
        growthStatus: 0,
    }
  ],
  
  focusSessionCount: 0,
  coins: 500,

  lastLoginDate: 0,
  ConsecutiveLoginDays: 0,
  TotalLoginDays: 0,
  
  friendList: [],
  friendRequestList: [],
});
// For totalFocus, it refers to total focus time which is recorded in seconds.