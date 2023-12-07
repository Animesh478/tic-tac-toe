import { useState } from "react";

export default function Player({ initialName, symbol, isActive, nameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName)

  function handleClick() {
    setIsEditing(editing => !editing);

    if(isEditing){
      nameChange(symbol, playerName)
    }
  }

  function handleChange(e){ 
    setPlayerName(e.target.value)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if(isEditing){
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
  }
  return (
    <li className={isActive ? 'active':undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing?'Save':'Edit'}</button>
    </li>
  );
}
