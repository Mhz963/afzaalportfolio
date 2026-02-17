import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .hoverable')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Hide custom cursor on touch devices
  const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window;
  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        className={`cursor-dot ${isHovering ? 'hover' : ''}`}
        animate={{
          x: mousePos.x - 5,
          y: mousePos.y - 5,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className={`cursor-ring ${isHovering ? 'hover' : ''}`}
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
        }}
        transition={{ type: 'spring', stiffness: 180, damping: 20, mass: 0.8 }}
      />
    </>
  );
};

export default CustomCursor;
