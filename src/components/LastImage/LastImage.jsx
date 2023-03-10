import { useState } from 'react'
import './LastImage.css'

const LastImage = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='LastImage'>
            <img src="https://duckduckgo.com/assets/onboarding/bathroomguy/1-monster-v2--pre-animation.svg"></img>
        </div>
    )
}

export default LastImage