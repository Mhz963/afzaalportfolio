import { motion } from "framer-motion";
import { FaHeart, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <a href="#home" className="footer-logo">
            <span className="logo-text">MA</span>
            <span className="logo-dot">.</span>
          </a>
          <p className="footer-tagline">
            Crafting Visual Stories That Inspire
          </p>
        </div>

        <div className="footer-links">
          {["Home", "About", "Experience", "Skills", "Contact"].map(
            (link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="footer-link">
                {link}
              </a>
            )
          )}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Muhammad Afzaal Rasheed. Made with{" "}
            <FaHeart className="heart-icon" /> All rights reserved.
          </p>
        </div>

        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
