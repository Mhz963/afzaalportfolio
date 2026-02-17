import { motion } from "framer-motion";
import { FaPlay, FaDownload } from "react-icons/fa";
import ParticleBackground from "./ParticleBackground";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <ParticleBackground />

      {/* Decorative blurred orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="hero-content container">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="greeting-line" />
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Muhammad Afzaal
            <span className="hero-name-accent"> Rasheed</span>
          </motion.h1>

          <motion.div
            className="hero-title-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="hero-title-badge">
              <FaPlay className="badge-icon" />
              Professional Video Editor
            </span>
            <span className="hero-title-divider">&</span>
            <span className="hero-title-badge secondary">
              Graphic Designer
            </span>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Crafting visually stunning stories through cinematic edits, 
            dynamic motion graphics, and captivating design — with 5+ years 
            of professional experience.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a href="#contact" className="hero-btn primary">
              <span>Let&apos;s Work Together</span>
            </a>
            <a href="#experience" className="hero-btn secondary">
              <FaDownload />
              <span>View My Work</span>
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
