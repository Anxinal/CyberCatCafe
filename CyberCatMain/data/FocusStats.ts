
import { getCurrentUserID, getUserInfo } from "@/app/account/userInfo";
export class UserStats {
    userId: string;
    focusSessionData: any[] = [];
    startTimestamp: number = 0;

    // For canlender display purposes
    startDate: string = "";
    currentDate: string = UserStats.formatDate(Date.now());

    constructor(userId: string = getCurrentUserID()) {
        this.userId = userId;
    }

    public static readonly MAX_DAY_RANGE = 180; // Maximum number of days to display in the stats
    days: Day[] = [];
    public static async createUserStats(userId: string = getCurrentUserID()): Promise<UserStats> {
        const userStats = new UserStats(userId);
        await userStats.loadFocusSessionData();
        return userStats;
    }

    async loadFocusSessionData() {
        console.log("Loading focus session data for user:", this.userId);
        this.focusSessionData = await getUserInfo("focusSession", () => { }, this.userId);
        if (!this.focusSessionData || this.focusSessionData.length === 0) return;
        console.log("Focus session data loaded:", this.focusSessionData);
        console.log(this.focusSessionData.map(session => new Date(session.date).getDate()));


        // Filter and sort focus session data to recent 180 days
        this.focusSessionData = this.focusSessionData.slice().sort((a, b) => a.date - b.date)
            .filter(session => session.date >= Date.now() - UserStats.MAX_DAY_RANGE * Day.range);

        this.startTimestamp = Day.toStartOfDay(this.focusSessionData[0].date);
        this.startDate = UserStats.formatDate(this.startTimestamp);
        const dayPassed = (Day.toStartOfDay(Date.now()) - this.startTimestamp) / Day.range + 1;

        // Create days from the start date to today, each day contains the focus session data for that day

        this.days = Array.from({ length: dayPassed }, (_, i) => i).map(dayCount =>
            Day.createDayFromDate(Date.now() - dayCount * Day.range, this.focusSessionData));
        // Offset is adjusted in Day.createDayFromDate
    }
    getFocusTimeBarChartData() {
        //For a week by default to be rendered in bar chart
        if (this.days.length < 7) {
            for (let i = this.days.length; i < 7; i++) {
                this.days.push(new Day(Date.now() - i * Day.range, 0, 0));
            }
        }
        return this.days.slice(0, 7).map(day => day.toBarChartTimeElement());
    }
    getDistractionBarChartData() {
        //For a week by default to be rendered in bar chart
        if (this.days.length < 7) {
            for (let i = this.days.length; i < 7; i++) {
                this.days.push(new Day(Date.now() - i * Day.range, 0, 0));
            }
        }
        return this.days.slice(0, 7).map(day => day.toBarChartDistractionElement());
    }

    static formatDate(time: number): string {
        const date = new Date(time);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
    toString(): string {
        return `UserStats for ${this.userId}, Start Date: ${this.startDate}, Current Date: ${this.currentDate},
        Days: ${this.days.map(day => day.print()).join('\n')}`;
    }

    getSuggestionMessage(): string[] {
        const suggestions: string[] = [];
        if (!this.days || this.days.length === 0) {
            suggestions.push("No paw-sitive focus sessions yet! Start one to make your kitty proud");
        }

        if (this.days.length >= 14) {
            const thisWeek = this.days.slice(0, 7);
            const lastWeek = this.days.slice(7, 14);
            const avgThis = thisWeek.reduce((sum: number, a) => sum + a.focusTime, 0) / 7;
            const avgLast = lastWeek.reduce((sum: number, a) => sum + a.focusTime, 0) / 7;
            console.log("averages:", avgThis, avgLast);

            const percentageChange = ((avgThis - avgLast) / avgLast) * 100;
            if (percentageChange > 0) {
                suggestions.push(`Me-wow! Your focus time increased by ${percentageChange.toFixed(2)}% compared to last week. 
                                  Keep it up!`);
            } else if (percentageChange < 0) {
                suggestions.push(`Your focus time dropped by ${Math.abs(percentageChange).toFixed(2)}%. 
                                  Maybe your cat took too many naps. Let's bounce back tomorrow! `);
            }
        }

        if (this.focusSessionData && this.focusSessionData.length > 0) {
            const hourMap = Array(24).fill(0);

            this.focusSessionData.forEach(session => {
                const hour = new Date(session.date).getHours();
                hourMap[hour] += session.time;
            })
            const peakHour = hourMap.indexOf(Math.max(...hourMap));
            if (hourMap[peakHour] > 0) {
                suggestions.push(`Your best hour is around ${peakHour}:00, the purr-fect time to do hard works.`);
            }
        }

        return suggestions;
    }
}

class Day {
    startTimestamp: number;
    focusTime: number = 0;
    totalDistractionCount: number = 0;
    public static readonly range: number = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    constructor(startTimestamp: number, focusTime: number, totalDistractionCount: number) {
        this.startTimestamp = startTimestamp;
        this.focusTime = focusTime;
        this.totalDistractionCount = totalDistractionCount;
        console.log("Days created with start timestamp:", this.startTimestamp, "Focus Time:", this.focusTime, "Distractions:", this.totalDistractionCount);
    }
    static createDayFromDate(date: number, focusSessionData: any[]): Day {
        const start = this.toStartOfDay(date);
        const focusList = focusSessionData.filter(session => session.date >= start && session.date < start + Day.range);
        const focusTime = focusList.reduce((total, session) => total + session.time, 0);
        const totalDistractionCount = focusList.reduce((total, session) => total + session.distraction, 0);
        return new Day(start, focusTime, totalDistractionCount);
    }

    toString(): string {
        const date = new Date(this.startTimestamp);
        return `${date.getMonth() + 1}-${date.getDate()}`;
    }
    print(): string {
        return `Day: ${this.toString()}, Focus Time: ${this.focusTime}, Distractions: ${this.totalDistractionCount}`;
    }
    toBarChartTimeElement(): { value: number, label: string } {
        // Focus time is recorded in seconds !!!!!!! Remeber to convert it to minutes if needed
        return {
            value: this.focusTime,
            label: this.toString()
        };
    }

    toBarChartDistractionElement(): { value: number, label: string } {
        return {
            value: this.totalDistractionCount,
            label: this.toString()
        };
    }

    static toStartOfDay(timestamp: number): number {
        return timestamp - (timestamp % Day.range);
    }
}