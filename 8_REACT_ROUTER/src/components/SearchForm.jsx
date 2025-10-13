import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchForm = () => {
    const [search,setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()

        navigate("/search?q=" + search)
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>(setSearch(e.target.value))}/>
            <button type="submit">Buscar</button>
        </form>
    </>
  )
}

export default SearchForm