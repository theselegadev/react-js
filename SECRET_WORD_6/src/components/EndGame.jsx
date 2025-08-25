import "./EndGame.css"

const EndGame = ({retry}) => {
  return (
    <div className="endGame">
        <h2>EndGame</h2>
        <button onClick={retry}>Jogar novamente</button>
    </div>
  )
}

export default EndGame