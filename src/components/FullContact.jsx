import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Alert } from '@mui/material';

const FullContact = () => {
  const [emailSent, setEmailSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d5cn519', 'template_fklrsei', form.current, 'RJ4t9qdU2reE_hrTn')
      .then((result) => {
          console.log(result.text);
          setEmailSent(true)
            setTimeout(() => {
              setEmailSent(false)
            }, 3000)
          return;
      }, (error) => {
          console.log(error.text);
      });
      
      e.target.reset()
    }

  return (
    <div className='col-12 d-flex'>
        <div className='col-5 full-contact-text'>
           <h2 className='col-8'>Lorem ipsum is the dummy text of the simple</h2>
           <p className='my-5 col-9'>
              Lorem Ipsum has been the industry's standard dummy text ever since 
              the 1500s, when an unknown printer took a galley of type and 
              scrambled it to make a type specimen book. It has survived not only 
              five centuries
           </p>
        </div>
      
            <div>
                <form  ref={form} onSubmit={sendEmail} className='contactForm'>
                    <input type="text" placeholder='Name' name="name" required/>
                    <input type="text" placeholder='Surname' name="surname" required/>
                    <input type="email" placeholder='Email' name="email" required/>
                    <input type="text" placeholder='Phone Number' name="phone_number" required />
                    <textarea placeholder='Questions' name="message" required/>
                    <button className='d-block sendButton'>Send</button>
                </form>
                    {
                      emailSent && ( <Alert sx={alertStyle}>Email was sent successfully</Alert>)
                    }
            </div>
    </div>
  )
}

export default FullContact;

const alertStyle = {
  width:'250px',
  position: "absolute",
  top: "260%",
  left: "3%"
}