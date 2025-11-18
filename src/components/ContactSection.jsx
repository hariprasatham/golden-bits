import './ContactSection.css';
import emailIcon from "../assets/ICON-01.png"
import phoneIcon from "../assets/ICON-02.png"
import emailjs from "@emailjs/browser"
const ContactSection = () => {

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, {
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
        <h1 className="contact-title">CONTACT US</h1>
      </div>

      {/* Main Content Area: Split into two columns */}
      <div className="contact-content-grid">

        {/* Left Column: Intro Text and Image */}
        <div className="contact-info-column">
          <h2 className="contact-subtitle">Get in Touch</h2>
 {/*<p className="contact-description">
            Have a question or want to learn more about our patisserie? Feel free to reach
            out to us. We'd love to hear from you.
          </p>*/}

          <div className="contact-details">
            <h3 className="footer-brand-name">Evergreen Enterprises</h3>
            <p className="footer-tagline">
              Taste of Luxury and Elegance
            </p>

            <div className="contact-numbers">
              <p className="footer-phone">
                <img src={phoneIcon} alt="Call" className="call-icon" />
                <a href="tel:+919514530300" className="phone-link">+91 95145 30300</a>
              </p>
              {/* <p className="footer-phone">
                <img src={phoneIcon} alt="Call" className="call-icon" />
                <a href="tel:+918056691007" className="phone-link">+91 80566 91007</a>
              </p> */}
            </div>

            <p className="footer-email">
              <img src={emailIcon} alt="Call" className="call-icon" />
              <a href="mailto:greenprises.cbe@gmail.com" className="email-link">greenprises.cbe@gmail.com</a>
            </p>
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
      {/* Bottom Copyright Strip */}
      <div className="footer-bottom-strip">
        <p className="footer-copyright">
          © 2025 by <span className="wix-link">Evergreen Enterprises</span>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;