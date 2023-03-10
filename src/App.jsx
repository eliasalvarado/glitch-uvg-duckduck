import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Buscador from './components/Buscador/Buscador'
import './components/info_blocks/main_infoBlocks'
import MainInfoBlocks from './components/info_blocks/main_infoBlocks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
      <Buscador></Buscador>
      </div>
      <div>
      <MainInfoBlocks></MainInfoBlocks>
      </div>
      
      
    </div>
  )
}

export default App
