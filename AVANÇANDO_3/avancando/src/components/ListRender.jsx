import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Matheus","Gabriel","Josué"])
    const [users,setUsers] = useState([
    {
        id: 1,
        firstName: "Matheus",
        lastName: "Seleghin"
    },
    {
        id: 2,
        firstName: "Gabriel",
        lastName: "Seleghin"
    },
    {
        id: 3,
        firstName: "Lucas",
        lastName: "Seleghin"
    }
])

// Manipulando o previous state, estado anterior
    const deleteRandom = ()=>{
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers)=>{
            return prevUsers.filter((item)=> randomNumber != item.id)
        })
    }

  return (
    <div>
        <ul>
            {/* Utilizando o index do map com key */}
            {list.map((item, index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        <ul>
            {/* Utilizando o id do objeto como key*/}
            {users.map((item)=>(
                <li key={item.id}>{item.firstName + " " + item.lastName}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Deletar user aleatório</button>
    </div>
  )
}

export default ListRender