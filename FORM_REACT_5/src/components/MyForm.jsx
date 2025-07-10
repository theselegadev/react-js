import './MyForm.css'

const MyForm = () => {
  return (
    <div>
        {/* Criação de formulários */}
        <form>
            <label htmlFor="name">Nome:</label>
            <input type="text"  name='name' placeholder='Digite o seu nome'/>
            <button type='submit' >Enviar</button>
        </form>
    </div>
  )
}

export default MyForm