import React from 'react'
import './NotFound.css'
import { useHistory } from "react-router-dom";


function NotFound() {
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
        <div className='notfound'>
            <h1>Yikes!</h1>
            <h2>Looks like you typed in the wrong URL...</h2>
            <h3>Did you mean to go to one of these?</h3>
            <hr/>
            <h3 className='linkto'
            onClick={handleHomeClick}
            >
                Home
            </h3>

            <h3 className='linkto'
            onClick={handleAboutClick}>
                About
            </h3>            
            
            <h3 className='linkto'
            onClick={handleProjectsClick}>
                Projects
            </h3>

            <h3 className='linkto'
            onClick={handleContactClick}>
                Contact
            </h3>





            
        </div>
    )
}

export default NotFound
