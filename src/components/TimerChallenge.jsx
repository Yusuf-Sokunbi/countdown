import { useState, useRef } from "react";
import ResultModule from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime}){
  const timer = useRef();
  const dialog = useRef();

  const [timerStarted, seTimerStarted] = useState(false);
  const [timerExpired, seTimerExpired] = useState(false);
 

   function handleStart(){
       timer.current = setTimeout(() => {
            seTimerExpired(true);
            dialog.current.open();
        }, targetTime * 1000);
        seTimerStarted(true);
    };
     function handleStop(){
       clearTimeout(timer.current)
     }

    return ( 
      <>
      <ResultModule ref={dialog} targetTime={targetTime} result={'lose'}/> 
      <section className="challenge">
        <h2>{title}</h2>
        {/* { timerExpired && <p>You lose</p>} */}
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                {timerStarted ? 'Stop': 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined }>
              { timerStarted? 'Time is running ...': 'Timer inactive'}
            </p>
         </section>
         </>
    )
}