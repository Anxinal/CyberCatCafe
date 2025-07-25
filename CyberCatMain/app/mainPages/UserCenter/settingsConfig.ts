import { useRouter } from "expo-router";
import { signOutUser } from "@/app/account/userInfo";
import { IconList } from "@/constants/IconList";
import React from "react";
//Tested
const signOut = () => {
     signOutUser();
     useRouter().push("/");
}

const toPage = (pageName: any) => () => {
     useRouter().push(("/mainPages/UserCenter/Settings/" + pageName) as any)
}

export class SettingOption {
     name: string = ""
     action: () => void | Promise<void>;
     description: string;
     icon: () => React.JSX.Element;

     constructor(name: string,
          action: () => void | Promise<void>,
          description: string,
          icon: any,
     ) {
          this.name = name;
          this.action = action;
          this.description = description;
          this.icon = icon;
     }
     public perform() {
          return this.action;
     }

     public static Icon({ current }: { current: SettingOption }): React.JSX.Element {
          return current.icon();
     }


}
export const settings = [
     new SettingOption("Update Profiles",
          toPage("UpdateProfile"),
          "You can change your username and bios here.",
          IconList.User),
     new SettingOption("Friend",
          toPage("Friend/Screen"),
          "You can add and interact with new friends here.",
          IconList.Team),
     new SettingOption("Cat Shops",
          () => { },
          "You can purchase items for your pet here.",
          IconList.ShoppingCart),
     new SettingOption("About",
          toPage("About"),
          "Why don't you press it?",
          IconList.About),
     new SettingOption("Sign out",
          signOut,
          "If you want to switch account.",
          IconList.Delete),
];

