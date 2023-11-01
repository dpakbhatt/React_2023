import { useState } from "react";

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [nameVal, setName] = useState(name);

  function clickHandler() {
    setIsEditing((prevState) => {
      return !prevState;
    });
  }

  function inputHandler(event) {
    setName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {!isEditing && <span className="player-name">{nameVal}</span>}
        {isEditing && (
          <input type="text" onInput={inputHandler} value={nameVal} required />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
