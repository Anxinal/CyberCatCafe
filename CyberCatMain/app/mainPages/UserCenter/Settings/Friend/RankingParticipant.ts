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
        console.log(userID);
        const today = Date.now() 
        const converHourInRanking = (focusSessionList: any[]) =>{
              if(focusSessionList.length == 0) {return 0;}

                    return focusSessionList.toSorted((sessionA: any, sessionB: any) => sessionB.date - sessionA.date)
                         .filter((session: any) => (today - session.date <= RankingParticipant.countPeriod))
                         .reduce((previous:any, current:any) => previous + current.time, 0);   
        }

        return new RankingParticipant(userID, 
                                      await getUserInfo("username", () => {}, userID), 
                                      converHourInRanking(await getUserInfo("focusSession",()=>{}, userID)));
    }

  
}