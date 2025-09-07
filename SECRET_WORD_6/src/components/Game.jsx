import "./Game.css"

const Game = ({verifyLetter}) => {
  return (
    <div className="game">
        <p className="points">
          <span>Pontuação: 000</span>
        </p>
        <h1>Adivinhe a palavra:</h1>
        <h3>
          Dica sobre a palavra: <span>Dica...</span>
        </h3>
        <div className="wordContainer">
          <span className="letter">A</span>
          <span className="blankSquare"></span>
        </div>
        <div className="letterContainer">
          <p>Adivinhe a letra:</p>
          <form>
            <input type="text" maxLength={1} name="letter" required/>
            <button>Jogar!</button>
          </form>
          <div className="wrongLettersContainer">
            <p>Letras já utilizadas:</p>
            <span>a,</span>
            <span>b,</span>
          </div>
        </div>
    </div>
  )
}

export default Game