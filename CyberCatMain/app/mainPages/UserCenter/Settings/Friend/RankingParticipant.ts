import { getUserInfo } from "@/app/account/userInfo";

export class RankingParticipant {

    name: string;
    hrInRanking: number = -1;
    id: string;
    static readonly countPeriod: number = 7 * 24 * 60 * 60 * 1000; // a week
    
   constructor(id: string, name: string, hrInRanking: number){
        this.id = id;
        this.name = name;
        this.hrInRanking = hrInRanking;
    }

    public static async newCompetitor(userID: string){
        console.log("ID" + userID);
        const today = Date.now();

        const converHourInRanking = (focusSessionList: any[]) =>{
              if(!focusSessionList || focusSessionList.length == 0) {return 0;}
                    console.log(focusSessionList);
                    // sorted is not supported here
                    return focusSessionList.slice().sort((sessionA: any, sessionB: any) => sessionB.date - sessionA.date)
                         .filter((session: any) => (today - session.date <= RankingParticipant.countPeriod))
                         .reduce((previous:any, current:any) => previous + current.time, 0);   
        };
        const focusSessionList = await getUserInfo("focusSession", () => {}, userID);

        return new RankingParticipant(userID, 
                                      await getUserInfo("username", () => {}, userID), 
                                      converHourInRanking(focusSessionList));
    }

  
}