import React from 'react';
import './ContactSection.css'; 
// Note: In a real app, you would import the image:
// import macaronsImage from './assets/macarons-display.jpg';
import ContactSec from "../assets/contact-section.png"
import emailjs from "@emailjs/browser"
const ContactSection = () => {

  const sendEmail = async(e) =>{
    e.preventDefault();
    try {
      await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,  import.meta.env.VITE_TEMPLATE_ID, e.target, {
         publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      });
      e.target.reset();
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <section className="contact-section">
    

      {/* Main Title */}
      <div className="contact-header">
        <h1 className="contact-title">CONTACT</h1>
      </div>

      {/* Main Content Area: Split into two columns */}
      <div className="contact-content-grid">
        
        {/* Left Column: Intro Text and Image */}
        <div className="contact-info-column">
          <h2 className="contact-subtitle">Get in Touch</h2>
          <p className="contact-description">
            Have a question or want to learn more about our patisserie? Feel free to reach 
            out to us. We'd love to hear from you.
          </p>
          
          {/* Macarons Image Placeholder */}
          <div className="contact-image-container">
            <img src={ContactSec} alt="Display of macarons in a case" className="contact-macarons-image" loading="lazy"  />
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-column">
          <form className="contact-form" onSubmit={sendEmail}>
            
            <label htmlFor="firstName">First name *</label>
            <input type="text" id="firstName" name="first_name" required />
            
            <label htmlFor="lastName">Last name *</label>
            <input type="text" id="lastName" name="last_name" required />
            
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="from_email" required />
            
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5"></textarea>
            
            <button type="submit" className="contact-submit-button">Submit</button>
            
          </form>
        </div>
      </div>
      
    </section>
  );
};

export default ContactSection;