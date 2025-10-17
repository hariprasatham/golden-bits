import React from 'react'
import "./AboutSection.css"

import About1 from "../assets/about-1.png"
import About2 from "../assets/about-2.png"
import AboutMarquee from './AboutMarquee'

const AboutSection = () => {
  return (
    <section className="about-section">
      {/* Title Area */}
      <div className="about-header">
        <h1 className="about-title">ABOUT GIORDANO CHIASA</h1>
        
        {/* Top Right Image - Placeholder */}
        <div className="about-image-top-right">
          <img src={About1} alt="Rich chocolate tart" className='about-1-img' />
          {/* Placeholder for the image of the tart */}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="about-content">
        
        {/* Left Chef Image - Placeholder */}
        <div className="about-image-left">
          <img src={About2} alt="Chef preparing macarons" loading="lazy"  />
          {/* Placeholder for the image of the chef */}
        </div>
        
        {/* Text and Button Area */}
        <div className="about-text-container">
          <p className="story-title">Our Story</p>
          <p className="story-description">
            Giordano Chiasa is a luxurious patisserie dedicated to crafting exquisite
            French pastries and confections. Each creation is meticulously prepared,
            from delicate macarons to rich chocolate tarts, offering a taste of
            elegance with every bite. Our sophisticated black and gold color scheme
            and sleek design elements reflect the artistry and luxury that define our
            brand.
          </p>
          <button className="explore-button">Explore more</button>
        </div>
      </div>

      {/* Footer-like strip for "Limited Time Indulgence" (as seen in the original image) */}
      <AboutMarquee />
    </section>
  )
}

export default AboutSection




