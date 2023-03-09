import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Anuncios from './components/Anuncios/Anuncios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Anuncios></Anuncios>
    </div>
  )
}

export default App
