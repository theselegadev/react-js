import './MyForm.css'

const MyForm = () => {
  return (
    <div>
        {/* Criação de formulários */}
        <form>
            <label htmlFor="name">Nome:</label>
            <input type="text"  name='name' placeholder='Digite o seu nome'/>
            {/* label envolvendo o input */}
            <label>
                <span>E-mail</span>
                <input type="email" name='email' placeholder='Digite o seu email'/>
            </label>
            <button type='submit' >Enviar</button>
        </form>
    </div>
  )
}

export default MyForm