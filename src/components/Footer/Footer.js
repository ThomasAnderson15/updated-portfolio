import React from 'react'
import './Footer.css'
import { useHistory } from "react-router-dom";

function Footer() {

    let history = useHistory();

    function handleContactClick() {
        history.push("/contact");
    }

    function handleProjectClick() {
        history.push("/projects");
    }
    return (
        <div className='footer-container'>
            <div className='footer-box1' >

            <div className='footer-contact'
                    onClick={handleContactClick}>
                    Contact
                </div>

                <div className='footer-contact'
                    onClick={handleProjectClick}>
                    Projects
                </div>

            </div>
            <div className='footer-box2'> Thomas Anderson
            </div>
            <div className='footer-box3'>
                <a className='social1' href="https://www.linkedin.com/in/thomas-anderson-b65061209/" rel="noreferrer" target="_blank">LinkedIn</a>

                <a className='social2' href="https://github.com/ThomasAnderson15" rel="noreferrer" target="_blank">GitHub</a>


            </div>

        </div>
    )
}

export default Footer
