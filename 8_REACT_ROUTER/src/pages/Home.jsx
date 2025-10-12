import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

import "./Home.css"

const Home = () => {
  const url = "http://localhost:3000/products"

  const {data: items, loading, error} = useFetch(url)
  return (
    <div className="Home">
        <h1>Produtos</h1>
        {error && <p>{error}</p>}
        <ul className="products">
          {items && items.map((item)=>(
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
    </div>
  )
}

export default Home