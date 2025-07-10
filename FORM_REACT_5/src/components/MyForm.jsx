import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // gerenciamento de dados
    const [name,setName] = useState(user ? user.name : '')
    const [email,setEmail] = useState(user ? user.email : '')
    // alteração de state inline
    const [senha,setSenha] = useState(user ? user.senha : '')

    function handleName(event){
        setName(event.target.value)
    }
    function handleEmail(event){
        setEmail(event.target.value)
    }
    function handleSubmit(event){
        event.preventDefault()
        console.log("Dados enviados: ", name, email, senha)
    }
    
  return (
    <div>
        {/* Criação de formulários */}
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input onChange={handleName} type="text"  name='name' placeholder='Digite o seu nome' value={name}/>
            {/* label envolvendo o input */}
            <label>
                <span>E-mail</span>
                <input type="email" name='email' onChange={handleEmail} placeholder='Digite o seu email' value={email}/>
            </label>
            {/* Alteração de state inline */}
            <label>
                <span>Senha</span>
                <input type="text" placeholder='senha' onChange={(event)=>(setSenha(event.target.value))} value={senha}/>
            </label>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default MyForm