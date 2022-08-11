import React, {useEffect, useRef, useState} from 'react';
import {io} from "socket.io-client";
import {Horse, Result, Timer} from "./models/models";
import TimerComponent from "./components/TimerComponent";
import ResultBlock from "./blocks/ResultBlock";
import HorseRoadsBlock from "./blocks/HorseRoadsBlock";

function App() {
    const [horses, setHorses] = useState<Horse[]>([])
    const socketInstance: any = useRef(null);
    const [timer, setTimer] = useState<Timer>(new Timer(0, 0));
    const [results, setResults] = useState<Result[]>([]);


    let interval: any;
    useEffect(() => {
        const socket = io("localhost:3002");
        socketInstance.current = socket;
        socket.emit("start");
        interval = setInterval(() => {
            timer.seconds += 1
            if (timer.seconds === 60) {
                timer.seconds -= 60;
                timer.minutes += 1;
            }
            setTimer(timer)
        }, 1000)

        socket.on('ticker', function (response) {
            let res: Horse[] = Array.isArray(response) ? response : [response]
            console.log(res)
            setHorses(res)
        })

        return () => {
            socket.disconnect();
        }
    }, [])



    horses.map(horse => {
        if (horse.distance === 1000 && results.filter(res => res.horse.name === horse.name).length === 0) {
            results.push(new Result(horse, new Timer(timer.minutes, timer.seconds)))
            setResults(results)
        }
    })

    useEffect(() => {
        if (horses.filter(horse => horse.distance === 1000).length === horses.length && horses.length !== 0) {
            socketInstance.current.removeListener('ticker')
            console.log("Listener removed")
            clearInterval(interval)
        }

    }, [horses])

    return (
        <div className={"flex flex-col justify-center items-center"}>
            <TimerComponent timer={timer}/>
            <div className={"flex justify-between w-full"}>
                <HorseRoadsBlock horses={horses}/>
                <ResultBlock results={results}/>
            </div>
            <button
                onClick={() => {
                    window.location.reload()
                }}
                className={"text-3xl mt-5 ml-5 p-2 border rounded hover:scale-110 duration-300 hover:bg-gray-600 hover:text-white"}>
                Start new race!
            </button>
        </div>
    );

}

export default App;
