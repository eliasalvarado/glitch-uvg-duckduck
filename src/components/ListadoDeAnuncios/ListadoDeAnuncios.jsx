import { useState } from 'react'
import './ListadoDeAnuncios.css'

const ListadoDeAnuncios = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='ListadoDeAnuncios'>
      <ul>
        <li>
          <a href='https://twitter.com/duckduckgo'>
          <img src='https://duckduckgo.com/assets/icons/header/twitter.svg'></img>
          <span >Twitter</span>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href='https://www.reddit.com/r/duckduckgo'>
          <img src='https://duckduckgo.com/assets/icons/header/reddit.svg'></img>
          <span >Reddit</span>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href='https://spreadprivacy.com/'>
          <img src='https://duckduckgo.com/assets/icons/header/blog.svg'></img>
          <span >Blog</span>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href='https://duckduckgo.com/newsletter'>
          <img src='https://duckduckgo.com/assets/icons/header/newsletter.svg'></img>
          <span >Newsletter</span>
          </a>
        </li>
      </ul>
    
    </div>
  )
}

export default ListadoDeAnuncios
