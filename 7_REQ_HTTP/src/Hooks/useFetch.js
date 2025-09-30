import { useState, useEffect} from "react";

//  custom hook
export const useFetch = (url)=>{
    const [data,setData] = useState(null)
    // refatorando o post
    const [method,setMethod] = useState(null)
    const [config,setConfig] = useState(null)
    const [callFetch,setCallFetch] = useState(false)

    // loading
    const [loading,setLoading] = useState(false)

    // tratando erros
    const [error,setError] = useState(null)
    // desafio
    const [itemId,setItemId] = useState("")

    const httpConfig = (data, method)=>{
        if(method === 'POST'){
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

        }else if(method === 'DELETE'){
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }

        setMethod(method)
        setItemId(data)
    }

    useEffect(()=>{
        const fetchData = async () =>{
            // loading
            setLoading(true)
            try{
                const response = await fetch(url)
                const responseJson = await response.json()
                setData(responseJson)
            }catch(error){
                console.log(error.message)
                setError("Houve algum erro ao carregar os dados")
            }

            setLoading(false)
        }

        fetchData()
    },[url, callFetch])

    // refatorando o post
    useEffect(()=>{
        if(method === "POST"){
            const requestHttp = async ()=>{
                let fetchOptions = [url, config]

                const response = await fetch(...fetchOptions)
                const json = await response.json()

                setCallFetch(prev => !prev)
            }

            requestHttp()
        }else if(method ===  'DELETE'){
            const requestHttp = async ()=>{
                const endpoint = url + `/${itemId}`

                const response = await fetch(endpoint,config)

                setCallFetch(prev => !prev)
            }

            requestHttp()
        }
    },[config, method, url])

    return {data, httpConfig, loading, error}
}