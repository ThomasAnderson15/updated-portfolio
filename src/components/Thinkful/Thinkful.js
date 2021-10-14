import React from 'react'
import './Thinkful.css'
function Thinkful() {
    return (
        <div className='thinkful-container'>

            <h3 className='thinkful-title'>Where my schooling comes from.</h3>
            <div className='thinkful-logo'>
                <a className='logo' href="https://www.thinkful.com/" rel="noreferrer" target="_blank">
                    <img className='logo' src='images/thinkful.png' alt='Thinkful' />
                </a>
            </div>
            <div className='thinkful-description'>
                At 
                <a className='thinkful' href="https://www.thinkful.com/" rel="noreferrer" target="_blank"> Thinkful </a>
                I learned industry best practices and software engineering standards with
                a focus on HTML5, CSS3, Javascript, jQuery, Node.js, React, algorithms, and data structures for 20 weeks. I
                created and deployed mobile-first applications while learning new languages and frameworks. On top of that, I spent
                several hours every week with senior web developers.
            </div>

        </div>
    )
}

export default Thinkful
