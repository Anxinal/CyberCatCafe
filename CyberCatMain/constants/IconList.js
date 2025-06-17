import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';  
  

export const IconList = {
   time : () => (<Ionicons name="timer-sharp" size={40} color="black" />),
   coin : () => (<AntDesign name="pay-circle1" size={24} color="black" />),
   user : () => (<AntDesign name="user" size={24} color="black" />),
   locked : () => (<FontAwesome5 name="question" size={30} color="rgb(109, 109, 109)" />),
   unlocked : () => (<AntDesign name="star" size={30} color="rgb(232, 244, 11)" />),
   collapse : () => (<Ionicons name="chevron-expand" size={24} color="rgb(255, 255, 255)" />),
   Search : () => (<FontAwesome5 name="search" size={28} color="black" />)
}