export default function GameOver({ winner, onReset }) {
  return (
    <div id="game-over">
      <h2>Game Over !</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>I&apos;ts a draw!</p>}
      <button type="button" onClick={onReset}>
        Rematch!
      </button>
    </div>
  );
}
