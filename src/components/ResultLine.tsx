import React, {FC} from 'react';
import {Result} from "../models/models";

interface ResultLineProps{
    result:Result;
    index:number;
}

const ResultLine:FC<ResultLineProps> = ({result, index}) => {
    return (
        <div className={"flex justify-between mx-5"}>
            <p>{index+1}.{result.horse.name}</p>
            <p>{result.time.minutes}:{result.time.seconds}</p>
        </div>
    );
};

export default ResultLine;