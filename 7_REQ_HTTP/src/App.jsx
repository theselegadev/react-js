import { useState} from 'react'
import './App.css'
import { useFetch } from './Hooks/useFetch';

const endpoint = "http://localhost:3000/products"

function App() {
  const [name,setName] = useState("");
  const [price,setPrice] = useState("")

  const {data: items, httpConfig, loading, error} = useFetch(endpoint)

  const handleSubmit = async (e)=>{
    e.preventDefault()

    const product = {
      name,
      price
    }

    httpConfig(product, "POST")
  }

  const handleDelete = async (id) => {
    httpConfig(id,"DELETE")
  }
  return (
    <div className='App'>
      <h1>Lista produtos</h1>
      {/* loading */}
      {loading && <p>Carregando os dados...</p>}
      {error && <p>Aconteceu algum erro</p>}
      <ul>
        {items && items.map(item=>(
          <li key={item.id}>{item.name} - {item.price} <button onClick={()=>(handleDelete(item.id))}>Deletar</button></li>
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
