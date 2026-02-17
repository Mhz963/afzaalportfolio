import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
  { name: 'Portfolio', href: 'https://drive.google.com/drive/folders/1kCnoBJgzff7OOBS1AkPzMJJ4yBMNi3aB?usp=sharing', external: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        <a href="#home" className="navbar-logo hoverable" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
          <span className="logo-text">M</span>
          <span className="logo-accent">A</span>
          <span className="logo-text">R</span>
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                className="nav-link hoverable"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link hoverable ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.div className="nav-active-dot" layoutId="navDot" />
                )}
              </a>
            )
          ))}
        </div>

        <a
          href="#contact"
          className="navbar-cta hoverable"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
        >
          Let's Talk
        </a>

        <button
          className="mobile-toggle hoverable"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              link.external ? (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="mobile-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ) : (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`mobile-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.name}
                </motion.a>
              )
            ))}
            <motion.a
              href="#contact"
              className="mobile-cta"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
