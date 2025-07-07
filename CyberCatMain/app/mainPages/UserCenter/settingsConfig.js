import { useRouter } from "expo-router";
import { signOutUser } from "@/app/account/userInfo";

//Tested
const signOut = () => {
     signOutUser();
     useRouter().push("/");
}

const toPage = (pageName) => () => {useRouter().push("/mainPages/UserCenter/Settings/" + pageName)}


export const settings = [ 
                   ["Display settings", toPage("DisplaySettings"), "laptop"],
                   ["Update Profiles", toPage("UpdateProfile"), "user"],
                   ["Friend", toPage("Friend/Screen"), "team" ],
                   ["Cat Shops", () => {}, "shoppingcart"],
                   ["About", toPage("About"), "hearto"], 
                   ["Sign out", signOut, "home"],
                   ];

