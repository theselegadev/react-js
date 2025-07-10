import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <h2>Formulários no react js</h2>
      <MyForm user={{name: "Gabriel", email: "gabriel@email",senha: "1234"}}/>
    </>
  )
}

export default App
