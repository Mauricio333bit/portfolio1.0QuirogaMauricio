import React from 'react';
import { motion } from 'framer-motion';

const FadeScaleIn = ({ children, delay = 0, once = true, margin = "0px" }) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        scale: 0.8,
        filter: 'blur(10px)'
      }}
      whileInView={{ 
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)'
      }}
      viewport={{
        once, // Si es true, la animación solo ocurre la primera vez
        margin // Activa la animación antes de que el elemento sea completamente visible
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeScaleIn;