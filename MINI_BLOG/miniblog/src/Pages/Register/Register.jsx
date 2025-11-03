import styles from "./Register.module.css"
import { useState,useEffect } from "react"

const Register = () => {
    const [displayName,setDisplayName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()

        setError("")

        const user = {
            displayName,
            email,
            password
        }

        console.log(user)
    }

  return (
    <div className={styles.register}>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas histórias</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input type="text" name="displayName" required placeholder="Nome do usuário" value={displayName} onChange={(e)=>setDisplayName(e.target.value)}/>
            </label>
            <label>
                <span>Email:</span>
                <input type="email" name="email" required placeholder="E-mail do usuário" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <label>
                <span>Senha:</span>
                <input type="password" name="password" required placeholder="Senha" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <button type="submit" className="btn">Cadastrar</button>
        </form>
    </div>
  )
}

export default Register