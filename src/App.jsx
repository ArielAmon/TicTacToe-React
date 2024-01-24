import Player from './components/Player';
import GameBoard from './components/GameBoard';

function App() {
	return (
		<main>
			<div id="game-container">
				<ol id="players">
					<Player initialName="Player 1" synmol="X" />
					<Player initialName="Player 2" synmol="O" />
				</ol>
				<GameBoard />
			</div>
		</main>
	);
}

export default App;
