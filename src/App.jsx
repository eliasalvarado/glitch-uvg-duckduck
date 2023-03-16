import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App'
import LastImage from './components/LastImage/LastImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
      <LastImage></LastImage>
      </div>
    </div>
  )
}

export default App
