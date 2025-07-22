
import { getCurrentUserID, mapUserInfo } from "@/app/account/userInfo";

class SampleSession {
    timeStamp: number;
    distraction: number;
    time: number;
    constructor(day: number, month: number, offset: number, time: number, distraction: number = 1) {
        this.timeStamp = new Date(2025, month - 1, day).getTime() + offset * 1000; // offset in seconds, year by default is 2025
        this.distraction = distraction;
        this.time = time;
        this.distraction = distraction;
    }
    public toSessionData(): any {
        return {
            date: this.timeStamp,
            distraction: this.distraction,
            time: this.time
        };
    }
}
// Each set of data represents a day with the format [day, month, distraction count, focus time in minutes, distraction]
const dataForUpload = [[1,1,2,30,1],[2,1,3,45,1],[3,1,4,60,1],[4,1,5,90,1],[5,1,6,120,1],[6,1,7,150,1],[7,1,8,180,1]];
const Username = "0000"; // please replace with actual username

// Insert this in the useEffect or similar function to upload data, Don't run it directly
export async function uploadSampleData(){
    const toUpload = dataForUpload.map(data => new SampleSession(data[0], data[1], data[2],data[3], data[4]).toSessionData());
    await mapUserInfo("focusSessions", (focusSession: any[]) => focusSession.concat(toUpload));
}