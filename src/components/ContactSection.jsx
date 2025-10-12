import React from 'react';
import './ContactSection.css'; 
// Note: In a real app, you would import the image:
// import macaronsImage from './assets/macarons-display.jpg';
import ContactSec from "../assets/contact-section.png"

const ContactSection = () => {
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
            <img src={ContactSec} alt="Display of macarons in a case" className="contact-macarons-image" />
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-column">
          <form className="contact-form">
            
            <label htmlFor="firstName">First name *</label>
            <input type="text" id="firstName" name="firstName" required />
            
            <label htmlFor="lastName">Last name *</label>
            <input type="text" id="lastName" name="lastName" required />
            
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />
            
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