export class Horse{
    name:string;
    distance:number;

    constructor(horse:Horse) {
        this.name = horse.name;
        this.distance = horse.distance;
    }
}

export class Timer{
    minutes:number;
    seconds:number;

    constructor(minutes: number, seconds: number) {
        this.minutes = minutes;
        this.seconds = seconds;
    }
}
export class Result{
    horse:Horse;
    time:Timer;

    constructor(horse: Horse, time: Timer) {
        this.horse = horse;
        this.time = time;
    }
}