const CarDetails = ({brand,km,color,novo}) => {
    return (
        <div>
            <h2>Detalhes do Carro</h2>
            <ul>
                <li>Marca: {brand}</li>
                <li>km: {km}</li>
                <li>cor: {color}</li>
            </ul>
            {novo && <p>Este carro é novo!</p>}
        </div>
    )
}

export default CarDetails