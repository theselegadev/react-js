import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Avançando em react</h1>

      <div>
         {/* Imagem em public */}
         <img src="/logo_react.png" alt="" />
      </div>  
    </>
  )
}

export default App
