import { useState, useEffect } from "react";

//  custom hook
export const useFetch = (url)=>{
    const [data,setData] = useState(null)
    // refatorando o post
    const [method,setMethod] = useState(null)
    const [config,setConfig] = useState(null)
    const [callFetch,setCallFetch] = useState(false)

    const httpConfig = (data, method)=>{
        if(method === 'POST'){
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        }
    }

    useEffect(()=>{
        const fetchData = async () =>{
            const response = await fetch(url)
            const responseJson = await response.json()

            setData(responseJson)
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

                setCallFetch(json)
            }

            requestHttp()
        }
    },[config, method, url])

    return {data, httpConfig}
}