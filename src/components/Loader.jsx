import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

const Loader = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loader-content">
          <motion.div
            className="loader-logo"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="loader-letter">M</span>
            <span className="loader-letter-accent">A</span>
            <span className="loader-letter">R</span>
          </motion.div>
          <motion.div
            className="loader-bar-container"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 200, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div
              className="loader-bar"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.p
            className="loader-text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Crafting Visuals...
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
