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
          Indulge in our delectable treats with a special discount. Treat yourself or surprise a loved one with
          our luxurious pastries today.
        </p>
        <button className="offer-button">Order Now</button>
      </div>
    </section>
  );
};

export default OfferSection;