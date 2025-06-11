import { useRouter } from "expo-router";
import { signOutUser } from "@/app/account/userInfo";

//Tested
const signOut = () => {
     signOutUser();
     useRouter().push("/");
}

const toAbout = () => {useRouter().push("/mainPages/UserCenter/Settings/About")}


export const  settings = [["sign out", signOut], 
                   ["Display settings", () => {}],
                   ["Update Profiles", () => {}],
                   ["Cat Shops", () => {}],
                   ["About", toAbout], 
                   ];

