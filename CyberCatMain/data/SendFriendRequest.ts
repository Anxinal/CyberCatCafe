import { Alert } from 'react-native';
import { getUserInfo, mapUserInfo,getCurrentUserID } from '../app/account/userInfo';
import { displayToast,displayError } from '@/components/ToastMessage'; 
import { getApproximateView } from './TimerConvert';
// The following represent different types of friend notifications
export enum FriendRequestType {
  NEWFRIEND_REQUEST = 0,
  FRIEND_REQUEST_ACCEPTED = 1,
  FRIEND_REQUEST_REJECTED = 2,
  FRIEND_GIFT = 3,
  FRIEND_NUDGE = 4,
  FRIEND_DELETE = 5,
}



const MAX_REQUESTS = 20;


type actionButton = {
    icon: string;
    onPress: any;
}

export class Request {

    name: string; // Name of the sender
    fromID: string = getCurrentUserID(); // ID of the sender, default to current user
    timestamp: number; // Timestamp of when the request was sent
    targetID: string = ""; // Target user ID for the request
    actions: actionButton[] = []; // Actions that can be performed on the request
    type: number = 0; // Type of the request
    requestID: string; // Unique ID for the request, can be used to identify it in the system
    message: string = ""; // Message associated with the request, can be used for notifications
    read: boolean = false;
    coolDownTime: number = 0;

    // Combined constructor to handle both creation and loading from data
    constructor(
      targetID: string, 
      name: string, 
      fromID?: string, 
      timestamp?: number, 
      requestID?: string,
      read: boolean = false,
    ) {
        this.name = name;
        this.fromID = fromID ?? getCurrentUserID();
        this.timestamp = timestamp ?? Date.now();
        this.targetID = targetID;
        this.requestID = requestID ?? `${this.name}-${this.timestamp}`;
        this.read = read;
        console.log("Request created with ID:", this.requestID);
    }

    // Two separate factory methods for creating requests
    public static create(type: number,targetID: string, username: string): Request { 

        switch(type) {
            case FriendRequestType.NEWFRIEND_REQUEST:
                return new FriendRequest(targetID, username);
            case FriendRequestType.FRIEND_REQUEST_ACCEPTED:
                return new AcceptRequest(targetID, username);
            case FriendRequestType.FRIEND_REQUEST_REJECTED:
                return new RejectRequest(targetID, username);
            case FriendRequestType.FRIEND_GIFT:
                return new GiftRequest(targetID, username);
            case FriendRequestType.FRIEND_NUDGE:
                return new NudgeRequest(targetID, username);
            default:
                throw new Error("Unknown request type");
        }
    }
  
  //For connection with firebase
  public static createFromJSON(json: any): Request {
      console.log("Creating request from JSON:", json);
      switch(json.type) {
            case FriendRequestType.NEWFRIEND_REQUEST:
                return new FriendRequest(json.targetID, json.name, json.fromID, json.timestamp, json.requestID, json.read);
            case FriendRequestType.FRIEND_REQUEST_ACCEPTED:
                return new AcceptRequest(json.targetID, json.name, json.fromID, json.timestamp, json.requestID, json.read);
            case FriendRequestType.FRIEND_REQUEST_REJECTED:
                return new RejectRequest(json.targetID, json.name, json.fromID, json.timestamp, json.requestID, json.read);
            case FriendRequestType.FRIEND_GIFT:
                return new GiftRequest(json.targetID, json.name, json.fromID, json.timestamp, json.requestID, json.read);
            case FriendRequestType.FRIEND_NUDGE:
                return new NudgeRequest(json.targetID, json.name, json.fromID, json.timestamp, json.requestID, json.read);
            default:
                throw new Error("Unknown request type");
        }
    
  }

  //Issue request happens only when the request is sent to the target user
   public async issueRequest(){
    try{
      const nameTemp = await getUserInfo("username");
      this.name = nameTemp;
      await this.checkCoolDown();
      mapUserInfo("friendRequestList", (requestList: any[]) => {
        requestList.push(Request.tojson(this));
     // Limit the number of requests to MAX_REQUESTS
      return requestList.slice(0, MAX_REQUESTS); 
      }, this.targetID).then(() => {displayToast("Your Request is sent successfully")})
      .catch((err) => {
        displayError("Request Upload Failed")(err)
        console.error("Error uploading request:", err);
      });
    }catch(err){
      displayError("Request Upload Failed")(err);
      console.error("Error uploading request:", err);
    }
    
  }

  public async checkCoolDown(): Promise<void>{
    console.log("Checking cool down for the object", this);
    if(this.coolDownTime <= 0) return;
    const requests: any[] = await getUserInfo("friendRequestList", ()=> {}, this.targetID);
 
    const temp = requests.map(Request.createFromJSON)
                         .filter((req: Request) => req.type == this.type && req.fromID == getCurrentUserID());
    console.log("Filtered requests for the user", temp);

    if(temp){
      const mostRecentTime =temp.map((req: Request) => req.timestamp).reduce((pre, cur) => Math.max(pre, cur), 0);
      console.log("Most recent time for the request", mostRecentTime);
      console.log("Current time", Date.now());
      console.log("Cool down time", this.coolDownTime);
      if (Date.now() - mostRecentTime  < this.coolDownTime) {
        const timeLeft = (mostRecentTime + this.coolDownTime - Date.now()) / 1000; //to seconds
        throw new Error("The request is in cool down. You need to wait for " + getApproximateView(timeLeft));
      }
    }
   
  }


  public toMessage(): string {
    return this.message + this.name;
  }

  public delete(): void {
    mapUserInfo("friendRequestList", (requestList: any) => {
      return requestList.filter((request: any) => request.requestID !== this.requestID);
    });
   
}


   static tojson(request: Request): any {
    return {
      type: request.type,
      name: request.name,
      targetID: request.targetID,
      fromID: getCurrentUserID(),
      timestamp: request.timestamp,
      requestID: request.requestID,
      read: request.read,
    };
  }
  

}

export class RequestwithAlert extends Request {

    alertMessage:string = "";

     showAlert(){
      console.log("Alert");
      Alert.alert("Confirmation", this.alertMessage, [{
        text: 'Yes',
        onPress: () => { 
          console.log(this)
          this.issueRequest(); },
      }],
     {cancelable: true}
    );

    }
    public static create(type: number, targetID: string, username: string): RequestwithAlert {
        switch(type){
          case FriendRequestType.FRIEND_GIFT:
                return new GiftRequest(targetID, username);
          case FriendRequestType.FRIEND_NUDGE:
                return new NudgeRequest(targetID, username);
          case FriendRequestType.FRIEND_DELETE:
                return new DeleteRequest(targetID, username);
          default:
                throw new Error("Unknown type of data");
        }       
    }
}
 
class FriendRequest extends Request { 
    type: number = FriendRequestType.NEWFRIEND_REQUEST;
    message: string = "You have a new friend request from ";
    actions: actionButton[] = [
      {icon: 'AddFriend', 
       onPress: async () =>{ 
        Request.create(
        FriendRequestType.FRIEND_REQUEST_ACCEPTED, 
        this.fromID, await getUserInfo("username")).issueRequest();
        this.delete();
    }},
      {icon: 'RejectFriend', onPress: async () => {
        Request.create(
        FriendRequestType.FRIEND_REQUEST_REJECTED, 
        this.fromID, await getUserInfo("username")).issueRequest();
        this.delete();
    }},
    ]

    public async issueRequest() {
      try {
        await this.checkIfAlreadyFriends();
        await this.checkIfRequestAlreadyExists();
        super.issueRequest();
      } catch (error) {
        console.log(error);
        displayError("Friend Request Failed")(error);
      }
    }



    public async checkIfAlreadyFriends(): Promise<void> {
       const currentFriendList = await getUserInfo("friendList");
       if(currentFriendList.includes(this.fromID)) throw new Error("You are already friends with this user!");
    }

    public async checkIfRequestAlreadyExists(): Promise<void> {
       const currentRequestList = await getUserInfo("friendRequestList", () => {}, this.targetID);
       if(currentRequestList.some((request: any) => request.fromID === this.fromID)) {
         throw new Error("You already have a pending friend request from this user!");
       }
    }
}

class AcceptRequest extends Request { 
    type: number = FriendRequestType.FRIEND_REQUEST_ACCEPTED;
    message: string = "Your friend request has been accepted by ";
    public async issueRequest() {
      mapUserInfo("friendList", (friendList: any) => {
        friendList.push(this.targetID);
        return friendList;
      });
      await mapUserInfo("friendList", (friendList: any) => {
        friendList.push(this.fromID);
        return friendList;
      }, this.targetID);
      super.issueRequest();
    }

}

class RejectRequest extends Request { 
    type: number = FriendRequestType.FRIEND_REQUEST_REJECTED;
    message: string = "Your friend request has been rejected by ";
}

class GiftRequest extends RequestwithAlert { 
    type: number = FriendRequestType.FRIEND_GIFT;
    message: string = "You have received a gift from ";
    alertMessage: string = "Are you sure that you want to send 10 coins to your friend ?"
    coolDownTime: number = 1800 * 1000;
     public async issueRequest() {
        try{
          const currentCoins = await getUserInfo("coins");
          if (currentCoins < 10) {
            throw new Error("Insufficient balance to send a gift!");
          }
          mapUserInfo("coins", (coins: number) => coins + 10, this.targetID);
          mapUserInfo("coins", (coins: number) => coins - 10);
          super.issueRequest();
        }
        catch (error) {
          displayError("Gift Request Failed")(error);
        }
        
    }
}

class NudgeRequest extends RequestwithAlert { 
    type: number = FriendRequestType.FRIEND_NUDGE;
    message: string = "You have received a nudge from ";
    alertMessage: string = "Are you sure you want to nudge your friend ?";
    needsCoolDown: boolean = true;
    coolDownTime: number = 24 * 3600 * 1000;
}

class DeleteRequest extends RequestwithAlert {
  type: number = FriendRequestType.FRIEND_DELETE;
  message: string = "";
  alertMessage: string = "Are you sure you want to delete your friend ?";
  
  public async issueRequest(): Promise<void> {
      mapUserInfo("friendList", (friendList: any[]) => {;
        return friendList.filter((id) => id !== this.targetID);
      });
      await mapUserInfo("friendList", (friendList: any[]) => {
        return friendList.filter((id) => id !== this.fromID);
      }, this.targetID);
  }
}




