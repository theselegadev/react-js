import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const n = 9
  return (
    <>
      {/* Css global */}
      <h1>React com css</h1>

      {/* Css de component */}
      <MyComponent/>
      <p>Este parágrafo é do App.jsx</p>

      {/* Inline CSS */}
      <p style={{color: "blue", padding: "25px", borderTop: "5px solid purple"}}>Este elemento foi estilizado de forma inline</p>

      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? {color: "blue", backgroundColor: "pink"} : {color: "yellow", backgroundColor: "gray"}}>Css inline dinâmico</h2>
      
      {/* Classe dinâmica */}
      <h2 className={n<10 ? "redTitle" : "greenTitle"}>Esse título vai ter classe dinâmica</h2>

      {/* Css Modules */}
      <Title/>
      <h2 className='title'>Testando</h2>
    </>
  )
}

export default App
