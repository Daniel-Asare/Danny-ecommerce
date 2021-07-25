import React from 'react'
import '../css/contact.css'
import { useForm, ValidationError } from '@formspree/react';

const Contact =()=> {
  const [state, handleSubmit] = useForm("xpzkjbnw");
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
      <label htmlFor="email">
        Email :
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Enter your email..."
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        </div>
  
      <div className="form-group">
        <label htmlFor="message">Message :</label>
        <textarea
        id="message"
        name="message"
        placeholder="Leave a message..."
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        </div>
        <div className="form-group">
      <button className="input-btn" type="submit" disabled={state.submitting}>
        Submit
       </button>
        </div>

    </form>
      
    </div>
  )
}

export default Contact
