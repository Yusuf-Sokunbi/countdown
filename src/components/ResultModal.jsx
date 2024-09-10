import { forwardRef,  useImperativeHandle, useRef} from "react";

 const ResultModal = forwardRef(function ResultModal(
    {  targetTime, remainingTime, onRest}, ref) {
 const dialog = useRef();

 const userLost =remainingTime <= 0;
 const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
 const score = Math.round((1- remainingTime / (targetTime * 1000)) * 100)
  useImperativeHandle(ref, () => {
    return {
        open() {
            dialog.current.showModal();
        }
    };
  });
// console.log(targrtTime);
    return (
       <dialog ref={dialog} className="result-modal">
        {userLost && <h2>You lost</h2>}
        {!userLost && <h2>Your Score: {score}</h2>}
        <p>The target time was<strong>{targetTime} seconds.</strong></p>
        <p>You stoped the timer with<strong>{formattedRemainingTime} second left</strong></p>
        <form method="dialog" onSubmit={onRest} >
        <button>Close</button>
        </form>
       </dialog>
    )
})


export default ResultModal;