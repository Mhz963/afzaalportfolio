import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
} from "react-icons/fa";
import "./Experience.css";

const experiences = [
  {
    title: "Freelance Video Editor",
    company: "Wedding & Song Editing",
    period: "Jan 2020 – Dec 2020",
    points: [
      "Edited cinematic wedding highlights and traditional event videos.",
      "Created engaging music video edits with smooth transitions and effects.",
    ],
    color: "#00d4ff",
  },
  {
    title: "Video Editor",
    company: "Maya Marketing",
    period: "Jan 2021 – Oct 2021",
    points: [
      "Edited promotional and corporate content for marketing campaigns.",
      "Created visually appealing ad videos for Facebook, Instagram, and YouTube.",
      "Assisted in storyboarding and concept development.",
    ],
    color: "#7b2ff7",
  },
  {
    title: "Media Content Creator",
    company: "Roysons International",
    period: "Nov 2021 – Nov 2022",
    points: [
      "Produced company ads, product commercials, and animated explainers.",
      "Designed daily social media graphics and short-form video content.",
    ],
    color: "#a855f7",
  },
  {
    title: "Video Editor",
    company: "Zeetech Pvt. Ltd.",
    period: "Dec 2022 – Present",
    points: [
      "Created high-quality Cash Cow videos for YouTube automation channels.",
      "Produced daily short-form content (YouTube Shorts, Reels, TikTok).",
    ],
    current: true,
    color: "#00d4ff",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="section experience-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Work Experience</h2>
          <div className="glow-line" />
          <p className="section-subtitle">
            My professional journey through the creative industry
          </p>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line" />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              <div
                className="timeline-dot"
                style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}40` }}
              />
              <div className="timeline-card">
                {exp.current && <span className="current-badge">Current</span>}
                <div className="card-header">
                  <div className="card-icon" style={{ background: `${exp.color}15`, color: exp.color }}>
                    <FaBriefcase />
                  </div>
                  <div>
                    <h3 className="card-title">{exp.title}</h3>
                    <p className="card-company">{exp.company}</p>
                  </div>
                </div>
                <div className="card-period">
                  <FaCalendarAlt />
                  <span>{exp.period}</span>
                </div>
                <ul className="card-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>
                      <span className="point-dot" style={{ background: exp.color }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
