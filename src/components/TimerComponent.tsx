import React, {FC} from 'react';
import {Timer} from "../models/models";

interface TimerProps {
    timer: Timer;
}

const TimerComponent: FC<TimerProps> = ({timer}) => {
    return (
        <div className={"text-5xl mb-5"}>
            <p className={"font-bold"}>{timer.minutes}:{timer.seconds}</p>
        </div>
    );
};

export default TimerComponent;