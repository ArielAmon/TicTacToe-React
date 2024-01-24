import { useState } from 'react';
export default function Player({ initialName, symbol }) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, serIsEditing] = useState(false);

	function handleEditClick() {
		serIsEditing((editing) => !editing);
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
		<li>
			<span className="player">
				{playerNameElem}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	);
}
