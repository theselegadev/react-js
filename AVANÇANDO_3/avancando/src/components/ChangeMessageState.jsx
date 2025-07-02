const ChangeMessageState = ({handleMessage}) => {
  return (
    <div>
        <button onClick={()=>(handleMessage("Hello world"))}>Mudar mensagem</button>
    </div>
  )
}

export default ChangeMessageState