const Events = ()=>{
    const handleMyEvent = (e)=>{
        console.log("Você clicou no botão")
        console.log(e)
    }

    const isBigger = (age)=>{
        if(age >= 18){
            return <p>Você é maior de idade</p>
        }else{
            return <p>Você não maior de idade</p>
        }
    }

    return(
        <div>
            <div>
                {/* Evento de clique */}
                <button onClick={handleMyEvent}>Clique em mim!</button>
            </div>
            <div>
                {/* Função no evento */}
                <button onClick={()=>console.log("Clicou")}>Clique</button>
                <button onClick={()=>{
                    if(true){
                        console.log("Isso aqui não é recomendavel")
                    }
                }}>Clique em mim também</button>
            </div>
            {isBigger(18)}
        </div>
    )
}

export default Events