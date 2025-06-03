import { useState } from 'react'
import FirstComponet from './components/FirstComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponet/>
    </>
  )
}

export default App
