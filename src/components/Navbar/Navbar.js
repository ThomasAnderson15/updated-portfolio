import React from 'react'
import './Navbar.css'
import { useHistory } from "react-router-dom";

function Navbar() {

    let history = useHistory();

    function handleAboutClick() {
        history.push("/about");
      }

      function handleHomeClick() {
        history.push("/");
      }

      function handleProjectsClick() {
        history.push("/projects");
      }

      function handleContactClick() {
        history.push("/contact");
      }

    return (
        <nav className='nav-container'>

            <h3 className='nav-item'
            onClick={handleHomeClick}
            >
                Home
            </h3>

            <h3 className='nav-item'
            onClick={handleAboutClick}>
                About
            </h3>            
            
            <h3 className='nav-item'
            onClick={handleProjectsClick}>
                Projects
            </h3>

            <h3 className='nav-item'
            onClick={handleContactClick}>
                Contact
            </h3>
        </nav>

    )
}

export default Navbar
