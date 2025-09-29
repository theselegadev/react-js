import { useState, useEffect } from 'react'
import './App.css'
import { useFetch } from './Hooks/useFetch';

const endpoint = "http://localhost:3000/products"

function App() {
  const [products,setProducts] = useState([]);
  const [name,setName] = useState("");
  const [price,setPrice] = useState("")

  // - 1 resgatando dados

  // useEffect(()=>{
  //   async function fetchData() {
  //     const response = await fetch(endpoint)
  //     const data = await response.json()
  //     setProducts(data)
  //   }

  //   fetchData()
  // },[])
  // add produtos

  const {data: items, httpConfig, loading} = useFetch(endpoint)

  const handleSubmit = async (e)=>{
    e.preventDefault()

    const product = {
      name,
      price
    }

    // const response = await fetch(endpoint, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type":"application/json"
    //   },
    //   body: JSON.stringify(product)
    // })
    // const addedProduct = await response.json()

    // //3 - carregamento dinâmico
    // setProducts((prevPrducts) => [...prevPrducts,addedProduct])

    httpConfig(product, "POST")
  }
  return (
    <div className='App'>
      <h1>Lista produtos</h1>
      {/* loading */}
      {loading && <p>Carregando os dados...</p>}
      <ul>
        {items && items.map(item=>(
          <li key={item.id}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome do produto:
            <input type="text" value={name} onChange={(e)=>(setName(e.target.value))}/>
          </label>
          <label>
            Preço do produto:
            <input type="number" value={price} onChange={(e)=>(setPrice(e.target.value))}/>
          </label>
          {!loading && <input type="submit" value="criar"/>}
        </form>
      </div>
    </div>
  )
}

export default App
