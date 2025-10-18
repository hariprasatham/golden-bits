import React from 'react';
import './Footer.css';
// Note: In a real app, you would use actual icons (SVGs or an icon library)
// instead of the simple text placeholders.

import Instagram from "../assets/instagram.avif"
import Facebook from "../assets/facebook.avif"

const Footer = () => {
  return (
    <footer className="site-footer">

      {/* Top Border */}
      <div className="footer-top-border"></div>

      <div className="footer-content-grid">

        {/* Left Column: Branding and Tagline */}
        <div className="footer-branding-column">
          <p className="footer-brand-name">Giordano Chiasa</p>
          <p className="footer-tagline">
            Taste of Luxury
            <br />
            and Elegance
          </p>
        </div>

        {/* Right Column: Contact, Address, and Links */}
        <div className="footer-contact-column">


          <div className="footer-content-bottom">

            <div className='footer-contact-info-container-left'>
              <div className="footer-contact-info-container">
                <div className="footer-contact-info">
                  <p className="footer-phone">+91 80569 83589</p>
                  <p className="footer-phone">+91 95145 30300</p>
                  <p className="footer-phone">+91 80566 91007</p>
                  <p className="footer-email">Email: greenprises.cbe@gmail.com</p>
                </div>
                <div className="footer-social-links">
                  {/* Social Media Icons */}
                  <a href="#" className="social-icon"><img src={Instagram} alt="Instagram" /></a>
                  <a href="#" className="social-icon"><img src={Facebook} alt="Facebook" /></a>
                </div>
              </div>
              <div className="footer-address-section">
                <p className="footer-address">
                  500 Terry Francine St.
                  <br />
                  San Francisco, CA 94158
                </p>
              </div>
            </div>

            <div className="footer-legal-section">
              <div className="footer-legal-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Accessibility Statement</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Refund Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="footer-bottom-strip">
        <p className="footer-copyright">
          © 2035 by Giordano Chiasa. Powered and secured by <span className="wix-link">Wix</span>
        </p>
      </div>

    </footer>
  );
};

export default Footer;