import "./AboutSection.css"
import About2 from "../assets/about_us.jpg"
import AboutMarquee from './AboutMarquee'

const AboutSection = () => {
  return (
    <section className="about-section">
      {/* Title Area */}
      <div className="about-header">
        <h1 className="about-title">ABOUT EVERGREEN ENTERPRISES</h1>
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
            Welcome to Evergreen enterprises bakery’s division, where passion meets the oven! Established in 2022, we're dedicated to crafting delicious bakery products and exclusive desserts like Choco lava, Brownies, Doughnuts, Muffins and more. We supply fresh baked goods to college canteens, cafes, and local eateries, focusing on quality ingredients and taste that delights.
            Our team bakes with love, ensuring every bite transports you to a moment of joy. Come taste the difference freshness makes!
          </p>
        </div>
      </div>

      {/* Footer-like strip for "Limited Time Indulgence" (as seen in the original image) */}
      <AboutMarquee />
    </section>
  )
}

export default AboutSection




