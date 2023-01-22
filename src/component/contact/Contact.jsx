import React , { useState } from 'react'
import './Contact.css'
import {FaEnvelope , FaFacebookMessenger , FaWhatsapp} from 'react-icons/fa'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const [to_name , setToName] = useState("");
  const [from_name , setToEmail] = useState("");
  const [message , setToMessage] = useState("");

const SendEmail = () =>{
  const infoContent = {
    to_name :to_name,
    from_name :from_name,
    message:message,
};

emailjs.send('service_t88j9s4', 'template_t9r2fx8', infoContent, 'Y7R4uLx4C3qB04dls')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
}




  return (
  <section id='mycontact'>

    <div className='container'>  
      
        <div className='header-section'>
          <h1> my Contact</h1>
          <h5>You can contact me through</h5>
        </div>

        <div className='main-content-contact'>

          <div className='child-content-contact'>

            <div className='contact-email'>
              <FaEnvelope className='icons'/>
              <h3>email</h3>
              <h5>01224384697m@gmail.com</h5>
              <a href=' mailto:01224384697m@gmail.com' target='_blank'>send a message</a>
            </div>
            
            <div className='contact-email'>
              <FaFacebookMessenger className='icons'/>
              <h3>messenger</h3>
              <h5>mohamed mubarak</h5>
              <a href=' https://www.facebook.com/profile.php?id=100024738793891' target='_blank'>send a message</a>
            </div>
            
            <div className='contact-email'>
              <FaWhatsapp className='icons' />
              <h3>whatsapp</h3>
              <h5>01224384697</h5>
              <a href=' https://web.whatsapp.com/' target='_blank'>send a message</a>
            </div>

          </div>

          <div className='child-content-contact'>
            
            <form>

              <div className='input'>
                
                <input
                 type="text" 
                 placeholder='Your Full Name'
                 required
                 autoFocus
                 onChange={(e) => {setToName(e.target.value)}} 
                  />
              </div>

              <div className='input'>
                
                <input
                 type="email" 
                 placeholder='Your Email' 
                 required
                 onChange={(e) =>{setToEmail(e.target.value)}}
                 />

              </div>

              <div className='textarea'>

                <textarea
                 cols="50"
                 rows="20" 
                 placeholder='Your message...' 
                 required
                 onChange={(e) =>{setToMessage(e.target.value)}}
                />
              
              </div>

              <div className='button-send'>
                <button type='submit'  className='btn' onClick={SendEmail}>send message</button>
              </div>

            </form>
          </div>


        </div>

    </div>
</section>
  )
}

export default Contact