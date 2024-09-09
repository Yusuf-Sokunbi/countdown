import { useState} from "react";


export default function Player() {
  // const playerName = useRef();
  const [enterPlayerName, setEnterPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(input){
    setSubmitted(false)
    setEnterPlayerName(input.target.value);
    
  }

  function handleClick(){
    setSubmitted(true);
    // input.target.value ="";
  }
  return (
    <section id="player">
      <h2>Welcome { submitted ? enterPlayerName : 'unknown entity'}</h2>
      <p>
        <input onChange={handleChange} value={enterPlayerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
