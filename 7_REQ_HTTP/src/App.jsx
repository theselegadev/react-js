import { useState, useEffect } from 'react'
import './App.css'

const endpoint = "http://localhost:3000/products"

function App() {
  const [products,setProducts] = useState([]);
  // - 1 resgatando dados

  useEffect(()=>{
    async function fetchData() {
      const response = await fetch(endpoint)
      const data = await response.json()
      setProducts(data)
    }

    fetchData()
  },[])

  return (
    <div className='App'>
      <h1>Lista produtos</h1>
      <ul>
        {products.map(item=>(
          <li key={item.id}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
