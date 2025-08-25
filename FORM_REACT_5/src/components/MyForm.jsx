import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // gerenciamento de dados
    const [name,setName] = useState(user ? user.name : '')
    const [email,setEmail] = useState(user ? user.email : '')
    // alteração de state inline
    const [senha,setSenha] = useState(user ? user.senha : '')
    const [bio,setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    function handleName(event){
        setName(event.target.value)
    }
    function handleEmail(event){
        setEmail(event.target.value)
    }
    function handleSubmit(event){
        event.preventDefault()
        console.log("Dados enviados: ", name, email, senha, bio, role)
        setName('')
        setEmail('')
        setSenha('')
        setBio('')
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
            {/* textarea */}
            <label>
                <span>Bio:</span>
                <textarea placeholder='Biografia do usuário:' onChange={(e)=>setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/* select */}
            <label>
                <span>Funções:</span>
                <select name="role" onChange={(e)=>setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="adm">Administrador</option>
                </select>
            </label>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default MyForm