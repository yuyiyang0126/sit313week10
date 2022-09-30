import React, { useRef } from 'react';
import emailjs from "emailjs-com";

const Subscribe = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4kny6lw', 'template_xug6etu', form.current, '2V-2yPPskamQtDpoN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <form ref={form} onSubmit={sendEmail}>
        <input style={{padding:'14px 20px', margin:'8px 0',display:'inline-block', borderstyle:'solid', boxsizing:'border-box', marginleft:'15%', borderradius:'0.1em'}} placeholder='enter your email' type="email" name="user_email" />
        <input style={{width: 'auto', backgroundColor:'black', color:'white',padding:'14px 20px', border:'none', borderradius:'0.1em'}} type="submit" value="Subscribe" />
      </form>
    )
  }

  export default Subscribe
