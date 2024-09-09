import { useState, useRef } from "react";
//    let timer;


export default function TimerChallenge({title, targetTimer}){
 const [timerExpired, seTimerExpired] = useState(false);
 const [timerstarted, seTimerStarted] = useState(false);
 const timer = useRef();

    function handleStart(){
       timer.current = setTimeout(() => {
            seTimerExpired(true)
        }, targetTimer * 1000);
        seTimerStarted(true);
    };
     function handleStop(){
       clearTimeout(timer.current)
     }

    return ( 
    <section className="challenge">
        <h2>{title}</h2>
        { timerExpired && <p>You lose</p>}
        <p className="challenge-time">
            {targetTimer}second {targetTimer > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerstarted ? handleStop : handleStart}>
                {timerstarted ? 'Stop': 'Start'} Challenge
                </button>
            </p>
            <p className={timerstarted ? 'active' : undefined }>
              { timerstarted? 'Time is running ...': 'Timer inactive'}
            </p>
         </section>
    )
}