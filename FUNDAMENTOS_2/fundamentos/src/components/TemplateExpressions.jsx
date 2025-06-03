const TemplateExpressions = ()=>{
    const name = "Matheus"
    const data = {
        age: 18,
        job: "Programmer"
    }
    
    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <h2>Você é {data.job}</h2>
            {/* Serve para executar js dentro do jsx */}
        </div>
    )
}

export default TemplateExpressions