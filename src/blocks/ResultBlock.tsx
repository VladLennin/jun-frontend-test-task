import React, {FC} from 'react';
import ResultLine from "../components/ResultLine";
import {Result} from "../models/models";

interface ResultBlockProps{
    results:Result[];
}

const ResultBlock:FC<ResultBlockProps> = ({results}) => {
    return (
        <div className={"w-1/2  ml-4 mr-10 border border-2 border-gray-400 rounded px-5 py-2 text-center "}>
            <p className={"text-4xl font-bold"}>Result</p>
            <hr/>
            {results.map((res, index) => (
                    <ResultLine result={res} index={index}/>
                )
            )}
        </div>
    );
};

export default ResultBlock;