import { useState } from "react";
export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, serIsEditing] = useState(false);

  function handleEditClick() {
    serIsEditing((editing) => !editing);
    if (isEditing) onChangeName(symbol, playerName);
  }

  function HandleChange(event) {
    setPlayerName(event.target.value);
  }

  let playerNameElem = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameElem = (
      <input
        type="text"
        required
        className="player"
        value={playerName}
        onChange={HandleChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameElem}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
