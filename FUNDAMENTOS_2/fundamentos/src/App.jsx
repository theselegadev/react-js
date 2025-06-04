import { useState } from 'react'
import FirstComponet from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import './App.css'
import Events from './components/Events'
import Challege from './components/Challege'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponet/>
      <TemplateExpressions/>
      <Events/>
      <Challege/>
    </>
  )
}

export default App
