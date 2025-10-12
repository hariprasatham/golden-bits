import React, { useEffect, useState } from 'react';
import './ScrollingImageSectionHome.css';
import SimpleParallax from "simple-parallax-js";

// Import your actual image
import bakeryInteriorImage from '../assets/scrolling-image-home.png';

const ScrollingImageSectionHome = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile (screen width <= 768px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Render without parallax on mobile for better performance
  if (isMobile) {
    return (
      <div className="my-parallax-container">
        <img src={bakeryInteriorImage} alt="Luxury bakery interior with display cases" />
      </div>
    );
  }

  // Render with parallax on desktop
  return (
    <SimpleParallax orientation="up right" scale={1.1} delay={1} className="my-parallax-container">
      <img src={bakeryInteriorImage} alt="Luxury bakery interior with display cases" />
    </SimpleParallax>
  );
};

export default ScrollingImageSectionHome;