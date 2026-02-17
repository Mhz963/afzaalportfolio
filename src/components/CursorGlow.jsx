import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./CursorGlow.css";

const CursorGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [visible]);

  return (
    <>
      {/* Outer glow */}
      <motion.div
        className="cursor-glow"
        animate={{
          x: mousePos.x - 200,
          y: mousePos.y - 200,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
      {/* Inner dot */}
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePos.x - 6,
          y: mousePos.y - 6,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 400 }}
      />
    </>
  );
};

export default CursorGlow;
