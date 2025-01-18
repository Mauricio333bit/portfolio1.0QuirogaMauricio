import React from 'react';
import { motion } from 'framer-motion';

const SlideIn = ({ 
  children, 
  delay = 0, 
  direction = 'left'
}) => {
  const initialX = direction === 'left' ? -100 : 100;
  
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        scale: 0.8,
        filter: 'blur(10px)',
        x: initialX
      }}
      whileInView={{ 
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        x: 0
      }}
      viewport={{
        once: true // La animación solo ocurrirá una vez
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

export default SlideIn;