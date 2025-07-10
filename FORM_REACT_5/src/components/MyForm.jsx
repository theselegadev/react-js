import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {
    // gerenciamento de dados
    const [name,setName] = useState()
    const [email,setEmail] = useState()

    function handleName(event){
        setName(event.target.value)
    }
    function handleEmail(event){
        setEmail(event.target.value)
    }

    console.log(name,email)
  return (
    <div>
        {/* Criação de formulários */}
        <form>
            <label htmlFor="name">Nome:</label>
            <input onChange={handleName} type="text"  name='name' placeholder='Digite o seu nome'/>
            {/* label envolvendo o input */}
            <label>
                <span>E-mail</span>
                <input type="email" name='email' onChange={handleEmail} placeholder='Digite o seu email'/>
            </label>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default MyForm