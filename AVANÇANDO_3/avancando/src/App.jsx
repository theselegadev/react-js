import { useState } from 'react'
import './App.css'
import logo from "./assets/logo_js.png" 
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Avançando em react</h1>

      <div>
         {/* Imagem em public */}
         <img src="/logo_react.png" alt="" />
      </div>  
      {/* Imagem em assets */}
      <div>
        <img src={logo} alt="" />
      </div>
      <ManageData/>
      <ListRender/>
    </>
  )
}

export default App
