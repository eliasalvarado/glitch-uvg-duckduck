import React, { useState } from "react"
import "./SocialMedia.css"

function SocialMedia() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    return (
        <div className="social-media">
            <button className="socialButton" onClick={toggleDropdown} type="button">
                <img src='src/assets/loudspeaker.png' className='horn' alt='loudspeacker' />
                <img src='src/assets/flechaAbajo.png' className='horn' alt="flechaAbajo" />
            </button>
            {isDropdownOpen && (
                <div className="social-media-dropdown">
                    <ul className="social-media-list">
                        <li><img src='src/assets/Twitter.png' className='imageList' alt="twitterlogo"/>Twitter</li>
                        <li><img src='src/assets/reddit.png' className='imageList' alt="redditlogo"/>Reddit</li>
                        <li><img src='src/assets/blog.png' className='imageList' alt="bloglogo"/>Blog</li>
                        <li><img src='src/assets/newsletter.png' className='imageList' alt="newsletterlogo"/>
                          Newsletter
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SocialMedia
