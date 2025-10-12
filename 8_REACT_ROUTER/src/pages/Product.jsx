import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useEffect, useState } from "react"

const Product = () => {
    const {id} = useParams()
    const url = `http://localhost:3000/products/${id}`
    const [data,setData] = useState("")

    useEffect(()=>{
        const requestApi = async () => {
            const response = await fetch(url)
            const responseJson = await response.json()
            setData(responseJson)
        }

        requestApi()
    },[])

  return (
    <>
        <p>ID do produto: {id}</p>
        <p>Nome: {data.name}</p>
        <p>Preço: {data.price}</p> 
    </>
  )
}

export default Product