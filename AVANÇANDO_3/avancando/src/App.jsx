import { useState } from 'react'
import './App.css'
import logo from "./assets/logo_js.png" 
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'

function App() {
  const [name, setName] = useState("Matheus")


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
      <ConditionalRender/>
      <ShowUserName name={name} />
      <button onClick={()=>(setName("Gabriel"))}>Mudar nome:</button>
    </>
  )
}

export default App
