import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const contactInfo = [
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+92 307 525 2169',
    href: 'tel:+923075252169',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'muhammadafzaalr@gmail.com',
    href: 'mailto:muhammadafzaalr@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Firdous Market, Gulberg 3, Lahore',
    href: null,
  },
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    value: '+92 307 525 2169',
    href: 'https://wa.me/923075252169',
  },
];

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="section contact">
      <div className="glow-blob glow-purple" style={{ width: 400, height: 400, top: '-10%', left: '30%' }} />
      <div className="glow-blob glow-pink" style={{ width: 300, height: 300, bottom: '5%', right: '-5%' }} />

      <div className="section-container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <div className="section-line" />
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="contact-heading">
              Have a project in mind? <span className="gradient-text">Let's talk!</span>
            </h3>
            <p className="contact-text">
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your vision. Whether you need a stunning 
              video edit, eye-catching graphics, or a complete content strategy — 
              I'm here to help.
            </p>

            <div className="contact-cards">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href || '#'}
                  className="contact-card hoverable"
                  target={info.href && info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href && info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                >
                  <div className="contact-card-icon">{info.icon}</div>
                  <div>
                    <span className="contact-card-label">{info.label}</span>
                    <span className="contact-card-value">{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get('name');
              const email = formData.get('email');
              const message = formData.get('message');
              window.open(
                `mailto:muhammadafzaalr@gmail.com?subject=Portfolio Inquiry from ${name}&body=${message}%0A%0AFrom: ${name} (${email})`,
                '_self'
              );
            }}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Discussion"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
              />
            </div>
            <button type="submit" className="btn-primary submit-btn hoverable">
              <FaPaperPlane />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
