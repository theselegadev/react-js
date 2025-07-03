import { useState } from 'react'
import './App.css'
import CarDetails from './Components/CarDetails'

function App() {
  const [cars, setCars] = useState([
    {id: 1, brand: "BMW",color: "cinza", isNew: true},
    {id: 2, brand: "Volkswagen",color: "white", isNew: false},
    {id: 3, brand: "Audi",color: "azul", isNew: true}
  ])

  return (
    <>
      <h1 className='title'>Desafio</h1>
      {cars.map((car)=>(
        <CarDetails key={car.id} brand={car.brand} color={car.color} isNew={car.isNew}/>
      ))}
    </>
  )
}

export default App
