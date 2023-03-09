import { useState } from 'react'
import ListadoDeAnuncios from '../ListadoDeAnuncios/ListadoDeAnuncios'
import './Anuncios.css'

const Anuncios = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="Anuncios">
        <button className='botonAnuncios'>Anuncios V</button>
        <ListadoDeAnuncios></ListadoDeAnuncios>
    </div>
  )
}

export default Anuncios
