import { useState } from "react"

const ManageData = () => {
    let someData = 10

    const [number,setNumber] = useState(15);


  return (
    <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData=5)}>Mudar variável</button>
        {/* Manipulando state com o hook useState */}
        <p>Valor: {number}</p>
        <button onClick={()=>(setNumber(11))}>Mudar state</button>
    </div>
  )
}

export default ManageData