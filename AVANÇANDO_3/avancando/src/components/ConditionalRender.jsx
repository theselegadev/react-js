import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false)
    const [name, setName] = useState("Matheus")

    function changedName(){
      if(name === "Matheus"){
        setName("marcos")
      }else{
        setName("Matheus")
      }
    }
  return (
    <div>
      {/* Renderização condicional */}
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso!</p>}
        {/* If ternário para renderização condicional */}
        {name == "Matheus" ? (
          <div>
            <p>
              O nome é Matheus
            </p>
          </div>
        ):(
          <div>
            <p>O nome não é Matheus</p>
          </div>
        ) }
        <button onClick={changedName}>Mudar Nome</button>
    </div>
  )
}

export default ConditionalRender