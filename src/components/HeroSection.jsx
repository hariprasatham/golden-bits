import React from "react";
import "./HeroSection.css";
import leftImage from "../assets/hero-section-1.png";
import rightImage from "../assets/hero-section-2.png"; // circular macarons image

export default function HeroSection() {
  return (
    <section className="hero">
      {/* Left image */}
      <div className="hero-image">
        <img src={leftImage} alt="Chocolate Tart" />
      </div>

      {/* Right content */}
      <div className="hero-content">
        <h1 className="hero-title">
          GOLDEN <br /> BITES
        </h1>

        <div className="hero-links">
          <a href="#explore">Explore More</a>
          <img src={rightImage} alt="Macarons Circle" className="hero-circle flip-up" data-aos="flip-up" />

          <a href="#menu">View Menu</a>
        </div>
        <p className="hero-text">
          Experience a World <br /> of Delicate Flavors
        </p>
      </div>
    </section>
  );
}
