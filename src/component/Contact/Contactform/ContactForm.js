import React from 'react';
import GetInTouchImg from '../../../assests/image/getinTouch.jpg';
import './ContactForm.css';

function ContactForm() {
 


  return (
    <div className="container-from">
      <main className="main-form">
      <div className="contact-form">
      <h2>Get in touch</h2>
     <p>Our friendly team would love to hear from you.</p>
      <form>
      <div className="form-group">
       <label htmlFor="firstName">First Name:</label>
       <input
         type="text"
          
          />
       </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
         <input
           type="text"
            
          />
      </div>      
       <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
           type="email"
            
           />
         </div>
     <div className="form-group">
       <label htmlFor="phoneNumber">Phone Number:</label>
         <input
          type="tel"
           
        />
      </div>
       <div className="form-group">
        <label htmlFor="message">Message:</label>
          <textarea
            id="message"
              
          />
       </div>
    <div className="form-group">
      <input
         type="checkbox"
        
      />
      <label htmlFor="privacyPolicy">You agree to our friendly privacy policy.</label>
      </div>
      <button type="submit" >Send message</button>
      </form>
    </div>

     <div className="image-container">
       <img src={GetInTouchImg} alt="Phone with interface" />
      </div>
    </main>
  </div>
  );
}

export default ContactForm;
