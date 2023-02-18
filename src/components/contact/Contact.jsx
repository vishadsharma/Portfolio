import React from 'react'
import './contact.css'
// import { useRef } from 'react';
// import emailjs from 'emailjs-com'
import {SiGmail} from 'react-icons/si'
// import {AiFillInstagram} from 'react-icons/ai'
import {RiWhatsappFill} from 'react-icons/ri'



const Contact = () => {
   
// const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };
  return (
            

        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
             <article className="contact__option">
                 <SiGmail className="contact__option-icon"/>
              <h4>Email</h4>
              <h6>vishadsharma96@gmail <br /><a href="https://gmail.com" target="_blank">Gmail.com</a></h6>
              <a>Send a Message</a>   
             </article>
             {/* <article className="contact__option"> */}
                 {/* <AiFillInstagram className="contact__option-icon"/> */}
              {/* <h4>Instagram</h4> */}
              {/* <h5>instaid</h5> */}
              {/* <a>Send a Message</a>    */}
             {/* </article> */}
             <article className="contact__option">
                 <RiWhatsappFill className="contact__option-icon"/>
              <h4><a href="https://Whatsapp.com" target="_blank">Whatsapp</a></h4>
              <h6>+91 6261551690</h6>
              <a>Send a Message</a>   
             </article>
                </div>
                {/* End of contact option */}
                <form >
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    
                    <textarea type="message"  rows="7" placeholder="Your Message" required/>
                    
                   <button type="submit" className="btn btn-primary">Send Message</button>
                    
                </form>
            </div>
        </section>
    )
}

export default Contact
