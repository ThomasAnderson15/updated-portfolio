import React from 'react'
import './Home.css'
function Home() {
    return (
        <div className='welcome'>
            <div class="bouncing-text">
                <div class="W">H</div>
                <div class="E">E</div>
                <div class="L">L</div>
                <div class="C">L</div>
                <div class="O">O</div>
                <div class="shadow"></div>
                <div class="shadow-two"></div>
            </div>
            <div className='intro-box'>
                <h1 className='intro1'>I'm Thomas Anderson. </h1>
                <h2 className='intro2'>Thanks for checking out my portfolio!</h2>
            </div>
        </div>
    )
}

export default Home
