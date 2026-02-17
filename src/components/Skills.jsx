import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiCanva,
} from "react-icons/si";
import { FaCut, FaFilm } from "react-icons/fa";
import "./Skills.css";

const skills = [
  {
    name: "Adobe Premiere Pro",
    icon: <SiAdobepremierepro />,
    level: 95,
    color: "#9999FF",
    category: "Video Editing",
  },
  {
    name: "Adobe After Effects",
    icon: <SiAdobeaftereffects />,
    level: 88,
    color: "#CF96FD",
    category: "Motion Graphics",
  },
  {
    name: "Adobe Photoshop",
    icon: <SiAdobephotoshop />,
    level: 90,
    color: "#31A8FF",
    category: "Graphic Design",
  },
  {
    name: "CapCut",
    icon: <FaCut />,
    level: 92,
    color: "#00d4ff",
    category: "Video Editing",
  },
  {
    name: "Filmora",
    icon: <FaFilm />,
    level: 85,
    color: "#7b2ff7",
    category: "Video Editing",
  },
  {
    name: "Canva",
    icon: <SiCanva />,
    level: 88,
    color: "#00C4CC",
    category: "Graphic Design",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Tools</h2>
          <div className="glow-line" />
          <p className="section-subtitle">
            Industry-standard tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="skill-card-top">
                <div
                  className="skill-icon"
                  style={{
                    background: `${skill.color}15`,
                    color: skill.color,
                  }}
                >
                  {skill.icon}
                </div>
                <span className="skill-category">{skill.category}</span>
              </div>

              <h3 className="skill-name">{skill.name}</h3>

              <div className="skill-bar-wrapper">
                <div className="skill-bar-bg">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.3 + index * 0.15, ease: "easeOut" }}
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
                      boxShadow: `0 0 12px ${skill.color}40`,
                    }}
                  />
                </div>
                <span className="skill-percent" style={{ color: skill.color }}>
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills tags */}
        <motion.div
          className="additional-skills"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="additional-title">Also Skilled In</h3>
          <div className="skill-tags">
            {[
              "Color Grading",
              "Sound Design",
              "Storyboarding",
              "Thumbnails",
              "Social Media Content",
              "Wedding Videos",
              "Corporate Videos",
              "YouTube Shorts",
              "Reels & TikTok",
              "Brand Design",
              "Logo Design",
              "Animated Explainers",
            ].map((tag, i) => (
              <motion.span
                key={tag}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1 + i * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
