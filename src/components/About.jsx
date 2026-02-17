import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaFilm,
  FaPaintBrush,
  FaYoutube,
  FaMagic,
} from "react-icons/fa";
import "./About.css";

const services = [
  {
    icon: <FaFilm />,
    title: "Video Editing",
    description:
      "Professional video editing for YouTube, commercials, wedding highlights, and corporate content.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphic Design",
    description:
      "Eye-catching thumbnails, social media graphics, branding materials, and visual content creation.",
  },
  {
    icon: <FaYoutube />,
    title: "YouTube Content",
    description:
      "Cash Cow automation, YouTube Shorts, engaging long-form content, and channel optimization.",
  },
  {
    icon: <FaMagic />,
    title: "Motion Graphics",
    description:
      "Dynamic animations, smooth transitions, animated explainers, and visual effects using After Effects.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="section about-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="glow-line" />
          <p className="section-subtitle">
            Turning creative visions into visual masterpieces
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text-card"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="about-card-inner">
              <h3 className="about-card-title">Who I Am</h3>
              <p>
                I am a passionate and skilled <strong>Video Editor</strong> and{" "}
                <strong>Graphic Designer</strong> with over{" "}
                <span className="highlight">5 years</span> of hands-on experience
                in the creative industry.
              </p>
              <p>
                I specialize in crafting visually engaging content for YouTube,
                social media, and commercial use, using industry-standard tools
                like <strong>Adobe Premiere Pro</strong>,{" "}
                <strong>After Effects</strong>, <strong>Photoshop</strong>,{" "}
                <strong>CapCut</strong>, and <strong>Filmora</strong>.
              </p>
              <p>
                My strength lies in telling stories through visuals — from dynamic
                video cuts and smooth transitions to eye-catching thumbnails and
                branding designs. I have collaborated with various clients and
                teams to bring ideas to life, always meeting deadlines and
                exceeding expectations.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-number">5+</span>
                  <span className="highlight-label">Years in Industry</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">4</span>
                  <span className="highlight-label">Companies Worked</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">6+</span>
                  <span className="highlight-label">Tools Mastered</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-services"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="services-heading">What I Do</h3>
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="service-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
