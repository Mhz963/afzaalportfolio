import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiCanva,
} from 'react-icons/si';
import { FaCut, FaFilm } from 'react-icons/fa';
import './Skills.css';

const skills = [
  {
    name: 'Adobe Premiere Pro',
    icon: <SiAdobepremierepro />,
    level: 95,
    color: '#9999FF',
    category: 'Video Editing',
  },
  {
    name: 'Adobe After Effects',
    icon: <SiAdobeaftereffects />,
    level: 85,
    color: '#CF96FD',
    category: 'Motion Graphics',
  },
  {
    name: 'Adobe Photoshop',
    icon: <SiAdobephotoshop />,
    level: 90,
    color: '#31A8FF',
    category: 'Graphic Design',
  },
  {
    name: 'CapCut',
    icon: <FaCut />,
    level: 92,
    color: '#00F0B5',
    category: 'Video Editing',
  },
  {
    name: 'Filmora',
    icon: <FaFilm />,
    level: 88,
    color: '#00D4AA',
    category: 'Video Editing',
  },
  {
    name: 'Canva',
    icon: <SiCanva />,
    level: 85,
    color: '#00C4CC',
    category: 'Graphic Design',
  },
];

const additionalSkills = [
  'Color Grading',
  'Motion Graphics',
  'Thumbnail Design',
  'Social Media Content',
  'YouTube Optimization',
  'Storyboarding',
  'Sound Design',
  'Video Transitions',
  'Brand Identity',
  'Short-form Content',
  'Wedding Videography',
  'Commercial Ads',
];

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section skills">
      <div className="glow-blob glow-purple" style={{ width: 300, height: 300, bottom: '10%', right: '-5%' }} />
      <div className="glow-blob glow-blue" style={{ width: 250, height: 250, top: '15%', left: '-5%' }} />

      <div className="section-container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-subtitle">What I Use</span>
          <h2 className="section-title">Tools & Skills</h2>
          <div className="section-line" />
        </motion.div>

        {/* Main Skills Grid */}
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="skill-card hoverable"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="skill-card-top">
                <div className="skill-icon" style={{ color: skill.color, background: `${skill.color}15` }}>
                  {skill.icon}
                </div>
                <span className="skill-category">{skill.category}</span>
              </div>
              <h4 className="skill-name">{skill.name}</h4>
              <div className="skill-bar-container">
                <motion.div
                  className="skill-bar"
                  style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                />
              </div>
              <div className="skill-bar-info">
                <span className="skill-level-text">Proficiency</span>
                <motion.span
                  className="skill-percentage"
                  style={{ color: skill.color }}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  {skill.level}%
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          className="additional-skills"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h3 className="additional-title">Additional Expertise</h3>
          <div className="tags-container">
            {additionalSkills.map((skill, i) => (
              <motion.span
                key={i}
                className="skill-tag hoverable"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + i * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
