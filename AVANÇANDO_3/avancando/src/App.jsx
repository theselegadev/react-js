import {useState } from 'react'
import './App.css'
import logo from "./assets/logo_js.png" 
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'

function App() {
  const [name, setName] = useState("Matheus")
  const [cars] = useState([
    {id: 1, brand: "Ferrari", color: "vermelho", novo: true, km: 0},
    {id: 2, brand: "Lamborghini", color: "amarelo", novo: true, km: 0},
    {id: 3, brand: "Chevrolet", color: "preto", novo: false, km: 2000}
  ])


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
      {/* props */}
      <ShowUserName name={name} />
      <button onClick={()=>(setName("Gabriel"))}>Mudar nome:</button>
      {/* desestruturação com props */}
      <CarDetails brand="BMW" km={12} color="Cinza" novo={true}/>
      {/* Reaproveitamento */}
      <CarDetails brand="Ford" km={300} color="Azul" novo={false}/>
      <CarDetails brand="Citroen" km={1000} color="Preto" novo={true} />
      {/* Renderização de lista em componente */}
      {cars.map((car)=>(
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} novo={car.novo}/>
      ))}
      {/* fragment */}
      <Fragment/>
    </>
  )
}

export default App
