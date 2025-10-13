import { useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
    const [searchParams] = useSearchParams()

    const url = `http://localhost:3000/products?`+ searchParams

    const {data: items, loading, error} = useFetch(url)

    return (
    <div>
        <h1>Resultados disponíveis</h1>
        <p>{url}</p>
        <p>{searchParams}</p>
        {error && <p>{error}</p>}
        {loading && <p>Carregando dados ...</p>}
        {items && items.map(item=>(
            <li key={item.id}>{item.name}</li>
        ))}
    </div>
  )
}

export default Search