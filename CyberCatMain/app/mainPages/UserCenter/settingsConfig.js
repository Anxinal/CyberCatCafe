import { useRouter } from "expo-router";
import { signOutUser } from "@/app/account/userInfo";

//Tested
const signOut = () => {
     signOutUser();
     useRouter().push("/");
}

const toAbout = () => {useRouter().push("/mainPages/UserCenter/Settings/About")}


export const  settings = [ 
                   ["Display settings", () => {}, "laptop"],
                   ["Update Profiles", () => {}, "user"],
                   ["Cat Shops", () => {}, "shoppingcart"],
                   ["About", toAbout, "hearto"], 
                   ["Sign out", signOut, "home"],
                   ];

