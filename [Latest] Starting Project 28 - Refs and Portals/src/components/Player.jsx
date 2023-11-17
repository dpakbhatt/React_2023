import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [name, setName] = useState("");

  function submitHandler() {
    setName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {name ? name : "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={submitHandler}>Set Name</button>
      </p>
    </section>
  );
}
