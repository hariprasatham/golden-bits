import React from 'react';
import './OfferSection.css'; // Import the CSS for this component

// Note: In a real application, you would import the background image like this:
// import chocolateTexture from './assets/chocolate-texture.jpg';

const OfferSection = () => {
  return (
    <section className="offer-section">
      {/* Background image container - for a full-bleed background */}
      <div className="offer-background-image">
        {/*
          In a real app, you might use an <img> tag here for better SEO/accessibility
          <img src={chocolateTexture} alt="Rich chocolate texture background" className="offer-bg-img" />
          Or, as done in CSS, set it as a background-image property.
        */}
      </div>

      {/* Content box for the offer details */}
      <div className="offer-content-box" data-aos="fade-up">
        <h2 className="offer-title">SPECIAL OFFER</h2>
        <p className="offer-subtitle">Limited Time</p>
        <p className="offer-description">
         🎉 We Take Orders for Every Occasion! 🎉
         <br />
Make your celebrations extra special — we cater to Birthday Parties, Marriages, Corporate Events, and College Department Functions.
Delicious treats, perfect for every moment! 🍰✨
        </p>
        <button className="offer-button"
        onClick={() => window.location.href = "tel:+919514540300"}
        >Order Now</button>
      </div>
    </section>
  );
};

export default OfferSection;