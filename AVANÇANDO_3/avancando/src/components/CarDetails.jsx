const CarDetails = ({brand,km,color, novo}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Km: {km}</li>
            <li>Cor: {color}</li>
            {novo === true ? (<p>É novo</p>) : (<p>Não é novo</p>)}
        </ul>
    </div>
  )
}

export default CarDetails