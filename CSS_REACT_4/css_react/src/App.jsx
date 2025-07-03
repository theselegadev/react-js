import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  return (
    <>
      {/* Css global */}
      <h1>React com css</h1>

      {/* Css de component */}
      <MyComponent/>
      <p>Este parágrafo é do App.jsx</p>

      {/* Inline CSS */}
      <p style={{color: "blue", padding: "25px", borderTop: "5px solid purple"}}>Este elemento foi estilizado de forma inline</p>
    </>
  )
}

export default App
