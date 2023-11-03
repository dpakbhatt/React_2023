import { useState } from "react";

function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [nameVal, setName] = useState(name);

  function clickHandler() {
    setIsEditing((prevState) => {
      return !prevState;
    });

    if (isEditing) {
      onChangeName(symbol, nameVal);
    }
  }

  function inputHandler(event) {
    setName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : ""}>
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
