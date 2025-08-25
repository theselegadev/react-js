import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <h2>Formulários no react js</h2>
      <MyForm user={{name: "Gabriel", email: "gabriel@email",senha: "1234", bio: "Analista de dados", role: "adm"}}/>
    </>
  )
}

export default App
