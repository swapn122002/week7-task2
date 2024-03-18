import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className='form-container'>
      <h1>Send a messsage to us!</h1>
      <form>
        <input placeholder='Name'/>
        <input placeholder='Email'/>
        <input placeholder='Subject'/>
        <textarea placeholder='Message' rows="10"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm