import { useState } from 'react'
import './LastImage.css'


const LastImage = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='LastImage'>
            <img width="1200" height="460" src="https://duckduckgo.com/assets/onboarding/bathroomguy/1-monster-v2--pre-animation.svg"/>
        </div>
    )
}

export default LastImage