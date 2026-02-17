import { motion } from 'framer-motion';
import { FaHeart, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo hoverable">
              <span className="logo-text">M</span>
              <span className="logo-accent">A</span>
            </a>
            <p className="footer-tagline">
              Crafting visual stories that leave a lasting impression.
            </p>
          </div>

          <div className="footer-links-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#home" className="hoverable">Home</a>
              <a href="#about" className="hoverable">About</a>
              <a href="#experience" className="hoverable">Experience</a>
              <a href="#skills" className="hoverable">Skills</a>
              <a href="#contact" className="hoverable">Contact</a>
            </div>
          </div>

          <div className="footer-contact-section">
            <h4>Contact</h4>
            <div className="footer-contact-links">
              <a href="mailto:muhammadafzaalr@gmail.com" className="hoverable">
                <FaEnvelope /> muhammadafzaalr@gmail.com
              </a>
              <a href="tel:+923075252169" className="hoverable">
                <FaPhone /> +92 307 525 2169
              </a>
              <a href="https://wa.me/923075252169" target="_blank" rel="noopener noreferrer" className="hoverable">
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>
            © {currentYear} Muhammad Afzaal Rasheed. All rights reserved.
          </p>
          <p className="footer-credit">
            Made with <FaHeart className="heart-icon" /> by Afzaal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
