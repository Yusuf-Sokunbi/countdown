import { useState } from "react";



export default function TimerChallenge({title, targetTimer}){
 const [timerExpired, seTimerExpired] = useState(false);
 const [timerstarted, seTimerStarted] = useState(false);

    function handleStart(){
        setTimeout(() => {
            seTimerExpired(true)

        seTimerStarted(true)
        }, targetTimer * 1000);
    }
    return ( 
    <section className="challenge">
        <h2>{title}</h2>
        {/* { timerExpired && <p>You lose</p>} */}
        <p className="challenge-time">
            {targetTimer}second {targetTimer > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={handleStart}>
                {timerstarted ? 'Stop': 'Start'}
                </button>
            </p>
            <p className={timerstarted ? 'active' : undefined }>
              { timerstarted? 'Time is running ...': 'Timer inactive'}
            </p>
         </section>
    )
}