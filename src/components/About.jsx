import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFilm, FaPaintBrush, FaYoutube, FaBullhorn } from 'react-icons/fa';
import './About.css';

const services = [
  {
    icon: <FaFilm />,
    title: 'Video Editing',
    desc: 'Professional editing for YouTube, commercials, and social media with cinematic quality.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Graphic Design',
    desc: 'Eye-catching thumbnails, branding materials, and social media graphics that stand out.',
  },
  {
    icon: <FaYoutube />,
    title: 'YouTube Content',
    desc: 'Cash Cow videos, Shorts, and automation channel content with engaging storytelling.',
  },
  {
    icon: <FaBullhorn />,
    title: 'Ad & Marketing',
    desc: 'Compelling promotional videos and ads for Facebook, Instagram, and YouTube campaigns.',
  },
];

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="section about">
      <div className="glow-blob glow-purple" style={{ width: 350, height: 350, top: '10%', left: '-10%' }} />
      <div className="section-container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-subtitle">Get to know me</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line" />
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="about-heading">
              I bring ideas to life through <span className="gradient-text">visual storytelling</span>
            </h3>
            <p className="about-paragraph">
              I am a passionate and skilled Video Editor and Graphic Designer with over 
              <strong> 5 years</strong> of hands-on experience in the creative industry. I specialize 
              in crafting visually engaging content for YouTube, social media, and commercial use, 
              using industry-standard tools like Adobe Premiere Pro, After Effects, Photoshop, 
              CapCut, and Filmora.
            </p>
            <p className="about-paragraph">
              My strength lies in telling stories through visuals — from dynamic video cuts and smooth 
              transitions to eye-catching thumbnails and branding designs. I have collaborated with 
              various clients and teams to bring ideas to life, always meeting deadlines and exceeding 
              expectations.
            </p>
            <div className="about-info-grid">
              <div className="info-item">
                <span className="info-label">Name</span>
                <span className="info-value">Muhammad Afzaal Rasheed</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">Lahore, Pakistan</span>
              </div>
              <div className="info-item">
                <span className="info-label">Experience</span>
                <span className="info-value">5+ Years</span>
              </div>
              <div className="info-item">
                <span className="info-label">Available</span>
                <span className="info-value available">For Freelance</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-services"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="service-card hoverable"
                variants={itemVariants}
              >
                <div className="service-icon">{service.icon}</div>
                <div className="service-info">
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
