import React from "react";
import "./HeroSection.css";
import leftImage from "../assets/home_page.jpg";
import rightImage from "../assets/hero-section-2.png"; // circular macarons image
import phoneIcon from "../assets/CALL_1.png";
import logo from "../assets/logo-tree.png"

export default function HeroSection() {
  return (
    <section className="hero">
      {/* Left image */}
      <div className="hero-image">
        <img src={leftImage} alt="Chocolate Tart" loading="lazy" />
      </div>

      {/* Right content */}
      <div className="hero-content">
        <div className="hero-logo">
          <img src={logo} alt="Evergreen Logo" className="logo-img" />
          <div className="logo-text">
            <h3>Evergreen<br />Enterprises</h3>
          </div>
        </div>
        <h3 className="hero-title">
          Eggless Choco Lava
        </h3>
        <h3 className="hero-desc">
          With superior taste
        </h3>

        <h3 className="hero-desc-2">
          Grab your exclusive product samples!
        </h3>

        <a className="action-btn" href="tel:8056691007">
          <img src={phoneIcon} alt="Call" className="call-icon" />
          Call Now
        </a>


        {/* <div className="hero-links">
          <a href="#explore">Explore More</a>
          <img src={rightImage} alt="Macarons Circle" className="hero-circle flip-up" data-aos="flip-up" loading="lazy"  />

          <a href="#menu">View Menu</a>
          
        </div> */}
        {/* <p className="hero-text">
          Experience a World <br /> of Delicate Flavors
        </p> */}
      </div>
    </section>
  );
}
