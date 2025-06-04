const Events = ()=>{
    const handleMyEvent = (e)=>{
        console.log("Você clicou no botão")
        console.log(e)
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
        </div>
    )
}

export default Events