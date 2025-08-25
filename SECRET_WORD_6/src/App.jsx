import './App.css'
import { wordsList } from './data/word'
// components
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import EndGame from './components/EndGame'
// hooks
import { useState } from 'react'

// stages
const stages = [
  {id:1,name:"start"},
  {id:2,name:"game"},
  {id:3,name:"end"}
]

function App() {
  const [gameStage,setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  return (
    <div className='App'>
      {gameStage === "start" && <StartScreen/>}
      {gameStage === "game" && <Game/>}
      {gameStage === "end" && <EndGame/>}
    </div>
  )
}

export default App
