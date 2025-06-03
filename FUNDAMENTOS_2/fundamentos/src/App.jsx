import { useState } from 'react'
import FirstComponet from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponet/>
      <TemplateExpressions/>
    </>
  )
}

export default App
