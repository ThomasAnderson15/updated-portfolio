import React from 'react'
import './About.css'

function About() {
    return (
        <div className='container'>
            <div className='skills-box'>
                <h3 className='skill-title'>Skills</h3>
                <h3 className='title'>Front-end:</h3>
                <p> HTML, CSS, JavaScript, React.js</p>
                <h3 className='title'>Back-end:</h3>
                <p> Node.js, Express.js</p>
                <h3 className='title'>Databases:</h3>
                <p>SQL, DBeaver</p>
                <h3 className='title'>Misc:</h3>
                <p> Mocha, Chai, Git, Github, jQuery</p>
            </div>
            <div className='about-box'>
                <h3 className='skill-title'>About</h3>
                <p>Hi! My name is Thomas Anderson, but most people call me Tommy. I’m a full-stack developer with experience in team counseling
                    and mechanical engineering. I leverage my technical skills, human-centric problem solving abilities, and my out of the box
                    thinking to provide effective and transformative user experiences and code. I believe in the power of user experience to better
                    our world, and want to team up with a mission-driven organization to dream big and do good. Please feel free to reach out anytime!
                    
                </p>


            </div>
            <div className='image-box'
            >
                <img src='images/me.png' alt='Thomas Anderson'
                />
                <h3 className='skill-title'>Thomas Anderson</h3>
                <a className='click' href="https://docs.google.com/document/d/1heqamYPwOvQLATOiB7usO86D47DwYkltR6fEggtqA6g/edit?usp=sharing" rel="noreferrer" target="_blank">Click To View My Resume!</a>

            </div>
        </div>
    )
}

export default About
