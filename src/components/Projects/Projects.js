import React from 'react'
import './Projects.css'
import { useHistory } from "react-router-dom";

function Projects() {
    let history = useHistory();

    function handleHomeClick() {
        history.push("/");
      }

    return (
        <div className='projects-container'>
            <div className='project-box1'>
                <div className='project1'>
                    <img className='project-img' src='images/project1.png' alt='Thomas Anderson' />
                    <h3 className='skill-title'>Flashcard-O-Matic</h3>
                    <a className='click' href='https://flashcard-project-nd6utw5wx-thomasanderson15.vercel.app/' rel="noreferrer" target="_blank">Click To View This Project!</a>
                    <p>This app allows the user to create decks of study cards. When the user is ready, they 
                       can flip through the cards showing the question and answer they wrote down.</p>

                </div>
                <div className='project2'>
                    <img className='project-img' src='images/project2.png' alt='Thomas Anderson' />
                    <h3 className='skill-title'>Todo App</h3>
                    <a className='click' href='https://react-todo-app-eight-amber.vercel.app/' rel="noreferrer" target="_blank">Click To View This Project!</a>
                    <p>This app allows the user to make a list of Todo's that need to get done. Once a task gets 
                       completed, the user can click on that task and it will be crossed out.</p>
                </div>
            </div>


            <div className='project-box2'>
                <div className='project3'>
                    <img className='project-img' src='images/project3.png' alt='Thomas Anderson' />
                    <h3 className='skill-title'>Pomodoro Timer</h3>
                    <a className='click' href='https://pomodoro-app-puce.vercel.app/' rel="noreferrer" target="_blank">Click To View This Project!</a>
                    <p>This app replicates a pomodoro timer. The user can set a study time, and a brake time. 
                        The timer will go off and immediately switch back and forth between study and break time.
                        Using the timer allows for more efficent work-load, and leaves the user less burnt out.</p>

                </div>
                <div className='project4'>
                    <img className='project-img' src='images/project5.png' alt='Thomas Anderson' />
                    <h3 className='skill-title'>Weather App</h3>
                    <a className='click' href='https://waether-react.vercel.app/' rel="noreferrer" target="_blank">Click To View This Project!</a>
                    <p>This app will show you the weather anywhere in the world. It is made using an API from 'openweathermap.org'. The background image will change based off of the temperature. 
                        
                    </p>

                </div>

            </div>
        </div>
    )
}

export default Projects
