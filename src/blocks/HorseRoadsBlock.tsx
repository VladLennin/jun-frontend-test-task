import React, {FC} from 'react';
import HorseRoad from "../components/HorseRoad";
import {Horse} from "../models/models";

interface HorseRoadsBlockProps {
    horses: Horse[];
}

const HorseRoadsBlock: FC<HorseRoadsBlockProps> = ({horses}) => {
    return (
        <div className={"w-1/2 ml-10 mr-4 border border-2 border-gray-400 rounded px-5 py-2"}>
            {horses.map((horse, index) => (
                <HorseRoad horse={horse} key={index}/>
            ))}
        </div>
    );
};

export default HorseRoadsBlock;