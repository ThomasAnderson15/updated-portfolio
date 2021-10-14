import React from 'react'
import emailjs from 'emailjs-com';
import './Contact.css'



function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_wq7fqks', 'template_4a0vn1e', e.target, 'user_xA0BDo4u6wIvIX9B50mrU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        alert('Thank you for contacting me! I will reply as soon as possible.')

    };

    return (
        <div className='contact-container'>
            <form 
            onSubmit={sendEmail}
            >

                <div className='contact-name'>
                    <input className='contact-name-text' type='text' placeholder='Name' name='name' required/>
                </div>

                <div className='contact-email'>
                    <input className='contact-email-text' type='text' placeholder='Email Adress' name='email' required/>
                </div>

                <div className='contact-subject'>
                    <input className='contact-subject-text' type='text' placeholder='Subject' name='subject' required/>
                </div>

                <div className='contact-message'>
                    <textarea className='contact-message-text' type='text' placeholder='Your Message'  name='message' required/>
                </div>

                <div className='contact-submit-box'>
                    <input className='contact-submit' type='submit' value='Send Message'/>
                </div>

            </form>
        </div>
    )
}

export default Contact
