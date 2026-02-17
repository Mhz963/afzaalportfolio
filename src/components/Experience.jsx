import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    title: 'Video Editor',
    company: 'Zeetech Pvt. Ltd.',
    period: 'Dec 2022 – Present',
    description: [
      'Created high-quality Cash Cow videos for YouTube automation channels.',
      'Produced daily short-form content (YouTube Shorts, Reels, TikTok).',
      'Maintained consistent upload schedules with engaging editing styles.',
    ],
    current: true,
  },
  {
    title: 'Media Content Creator',
    company: 'Roysons International',
    period: 'Nov 2021 – Nov 2022',
    description: [
      'Produced company ads, product commercials, and animated explainers.',
      'Designed daily social media graphics and short-form video content.',
      'Managed end-to-end content production pipeline.',
    ],
    current: false,
  },
  {
    title: 'Video Editor',
    company: 'Maya Marketing',
    period: 'Jan 2021 – Oct 2021',
    description: [
      'Edited promotional and corporate content for marketing campaigns.',
      'Created visually appealing ad videos for Facebook, Instagram, and YouTube.',
      'Assisted in storyboarding and concept development.',
    ],
    current: false,
  },
  {
    title: 'Freelance Video Editor',
    company: 'Wedding & Song Editing',
    period: 'Jan 2020 – Dec 2020',
    description: [
      'Edited cinematic wedding highlights and traditional event videos.',
      'Created engaging music video edits with smooth transitions and effects.',
      'Built client relationships through quality delivery and communication.',
    ],
    current: false,
  },
];

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="section experience">
      <div className="glow-blob glow-pink" style={{ width: 350, height: 350, top: '20%', right: '-10%' }} />
      <div className="glow-blob glow-blue" style={{ width: 300, height: 300, bottom: '10%', left: '-8%' }} />
      
      <div className="section-container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-subtitle">My Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <div className="section-line" />
        </motion.div>

        <div className="timeline">
          <div className="timeline-line" />
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <div className="timeline-dot-wrapper">
                <div className={`timeline-dot ${exp.current ? 'active' : ''}`}>
                  <FaBriefcase />
                </div>
              </div>
              <div className="timeline-card hoverable">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  <span className={`timeline-period ${exp.current ? 'current' : ''}`}>
                    {exp.period}
                  </span>
                </div>
                <ul className="timeline-tasks">
                  {exp.description.map((task, j) => (
                    <li key={j}>{task}</li>
                  ))}
                </ul>
                {exp.current && <span className="current-badge">Current</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
