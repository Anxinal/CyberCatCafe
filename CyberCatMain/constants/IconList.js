import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';  
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; 
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export const IconList = {
   time : () => (<Ionicons name="timer-sharp" size={40} color="black" />),
   coin : () => (<AntDesign name="pay-circle1" size={24} color="black" />),
   User : () => (<AntDesign name="user" size={24} color="black" />),
   locked : () => (<FontAwesome5 name="question" size={30} color="rgb(109, 109, 109)" />),
   unlocked : () => (<AntDesign name="star" size={30} color="rgb(232, 244, 11)" />),
   collapse : () => (<Ionicons name="chevron-expand" size={24} color="rgb(255, 255, 255)" />),
   Search : () => (<FontAwesome5 name="search" size={28} color="black" />),
   QuitSearch: () => (<AntDesign name="back" size={28} color="black" />),
   Delete : () => (<MaterialCommunityIcons name="delete" size={28} color="red" />),
   Gift: () => (<FontAwesome5 name="gifts" size={28} color="green" />),
   AddFriend : () => (<AntDesign name="adduser" size={28} color="black" />),
   RejectFriend : () => (<AntDesign name="close" size={28} color="black" />),
   Nudge : () => (<AntDesign name="notification" size={29} color="green" />),
   MailAllRead: () => (<Ionicons name="mail-sharp" size={28} color="black" />),
   MailUnread: () => (<Ionicons name="mail-unread-sharp" size={28} color="black" />),
   Ranking: () => (<FontAwesome6 name="ranking-star" size={24} color="black" />),
   Laptop: () => (<AntDesign name = "laptop" size = {28} color = "black"/>),
   Team: () => (<AntDesign name = "team" size = {28} color = "black" />),
   ShoppingCart: () => (<FontAwesome5 name="shopping-cart" size={28} color="black" />),
   About: () => (<AntDesign name="heart" size={28} color="black" />),
   BarChart: () => (<FontAwesome5 name="chart-bar" size={28} color="black" />),
   Calendar: () => (<FontAwesome5 name="calendar-alt" size={28} color="black" />),
   Refresh: () => (<Ionicons name="refresh" size={28} color="black" />),
}