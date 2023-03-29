import { useState } from 'react'
import './FAQ.css'


const FAQ = () => {
    const [count, setCount] = useState(0)
    return (
        <article id="faq" className='faq' typeof='FAQPage'>
            <h2 property="name" className='faq_title'>
                Frequently Asked Questions
            </h2>
            <div className='faq_content'>
                <section className='faq_section'>
                    <header className='faq_header'>
                        <h3 className='faq_question'>
                            How does DuckDuckGo make money?
                        </h3>
                    </header>
                </section>
            </div>
        </article>
    )
}

export default FAQ