import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true)
    const [name, setName] = useState('Matheus')
    return (
        <div>
            <h1>Setá exibido?</h1>
            {x && <p>Se x for true,sim!</p>}
            {!x && <p>Se x for false,sim!</p>}
            {name === 'Vitor' ? (
                <div>
                    <h1>O nome é vitor</h1>
                </div>
            ) : (
                <div>
                    <h1>O nome não é vitor</h1>
                </div>
            )}
            <button onClick={() => setName('Vitor')}>mude o nome</button>
        </div>
    )
}

export default ConditionalRender