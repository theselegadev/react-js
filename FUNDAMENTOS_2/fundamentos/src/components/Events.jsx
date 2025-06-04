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

            </div>
        </div>
    )
}

export default Events