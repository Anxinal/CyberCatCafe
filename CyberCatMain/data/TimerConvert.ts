

const adjustTimeView = (n: number) : string => (n < 10 ? "0" + n : n + "");

 const getmin = (currentTime: number) => (currentTime > 0 ? Math.floor(currentTime / 60) : 0);
 const getsec = (currentTime: number) => (currentTime > 0 ? Math.floor(currentTime % 60) : 0);
 const gethour = (currentTime: number) => (currentTime > 0 ? Math.floor(currentTime / 3600) : 0);

export const getTimeView = (getFunc: (currentTime: number) => number) => 
                           (seconds: number): string => adjustTimeView(getFunc(seconds));

export const getMinView = getTimeView(getmin);
export const getSecView = getTimeView(getsec);
export const getHourView = getTimeView(gethour);