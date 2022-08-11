import React, {FC} from 'react';

// @ts-ignore
import horseGif from "../assets/CaringAppropriateIndianpangolin-max-1mb.gif";
import {Horse} from "../models/models";

interface HorseRoadProps{
    horse:Horse;
}

const HorseRoad:FC<HorseRoadProps> = ({horse}) => {
    return (
        <div className={"flex items-center mt-4"}>
            <div style={{width: horse.distance / 13 + "%"}}
                 className={"h-[5px] bg-red-700 duration-1000 rounded"}></div>
            <img src={horseGif} className={"w-[90px]"} alt=""/>
            <div className={"text-center w-1/12"}>
                <p>{horse.name}</p>
                <p> {horse.distance}m</p>
            </div>
        </div>
    );
};

export default HorseRoad;