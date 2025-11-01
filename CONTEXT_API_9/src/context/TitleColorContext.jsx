import { createContext, useReducer } from "react";

export const TitleColorContext = createContext()

export const titleColorReducer = (state,action) => {
    switch(action){
        case "BLUE":
            return {...state,color:"blue"}
        case "RED":
            return {...state,color:"red"}
        default: 
            return state
    }
}

export const TitleColorContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(titleColorReducer,{color: "purple"})

    console.log(state)

    return(
        <TitleColorContext.Provider value={{...state,dispatch}}>
            {children}
        </TitleColorContext.Provider>
    )
}