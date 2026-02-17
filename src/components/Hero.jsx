import { motion } from 'framer-motion';
import { FaPlay, FaEnvelope, FaFolderOpen } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div className="hero-badge">
          <FaPlay className="badge-icon" />
          <span>Video Editor & Graphic Designer</span>
        </div>

        <div className="hero-name">
          <div className="hero-name-line">
            <span className="hero-letter">M</span>
            <span className="hero-letter">U</span>
            <span className="hero-letter">H</span>
            <span className="hero-letter">A</span>
            <span className="hero-letter">M</span>
            <span className="hero-letter">M</span>
            <span className="hero-letter">A</span>
            <span className="hero-letter">D</span>
            <span className="hero-letter space">&nbsp;</span>
            <span className="hero-letter">A</span>
            <span className="hero-letter">F</span>
            <span className="hero-letter">Z</span>
            <span className="hero-letter">A</span>
            <span className="hero-letter">A</span>
            <span className="hero-letter">L</span>
          </div>
          <div className="hero-name-line accent-line">
            <span className="hero-letter accent">R</span>
            <span className="hero-letter accent">A</span>
            <span className="hero-letter accent">S</span>
            <span className="hero-letter accent">H</span>
            <span className="hero-letter accent">E</span>
            <span className="hero-letter accent">E</span>
            <span className="hero-letter accent">D</span>
          </div>
        </div>

        <p className="hero-description">
          Crafting visually stunning content that captivates audiences. 
          5+ years of experience in video editing and graphic design for 
          YouTube, social media, and commercial brands.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary hoverable">
            <FaEnvelope />
            Get In Touch
          </a>
          <a href="https://drive.google.com/drive/folders/1kCnoBJgzff7OOBS1AkPzMJJ4yBMNi3aB?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-outline hoverable">
            <FaFolderOpen />
            View My Portfolio
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Projects Done</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">30+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
