import "./Game.css"

const Game = ({verifyLetter}) => {
  return (
    <div className="game">
        <h2>Game</h2>
        <button onClick={verifyLetter}>Passar stage</button>
    </div>
  )
}

export default Game