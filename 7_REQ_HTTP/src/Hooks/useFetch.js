import { useState, useEffect } from "react";

//  custom hook
export const useFetch = (url)=>{
    const [data,setData] = useState(null)

    useEffect(()=>{
        const fetchData = async () =>{
            const response = await fetch(url)
            const responseJson = await response.json()

            setData(responseJson)
        }

        fetchData()
    },[url])

    return {data}
}