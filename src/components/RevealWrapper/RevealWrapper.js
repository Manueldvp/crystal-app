'use client';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

/**
 * RevealWrapper - A replacement for next-reveal's RevealWrapper
 * Uses framer-motion and react-intersection-observer for scroll animations
 */
export const RevealWrapper = ({ 
  children, 
  className = '',
  delay = 0,
  duration = 0.5,
  distance = '50px',
  origin = 'bottom',
  reset = false,
  ...props 
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: !reset,
  });

  // Calculate initial position based on origin
  const getInitialPosition = () => {
    switch (origin) {
      case 'top':
        return { y: `-${distance}` };
      case 'bottom':
        return { y: distance };
      case 'left':
        return { x: `-${distance}` };
      case 'right':
        return { x: distance };
      default:
        return { y: distance };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0,
        ...getInitialPosition()
      }}
      animate={inView ? {
        opacity: 1,
        x: 0,
        y: 0,
      } : {
        opacity: 0,
        ...getInitialPosition()
      }}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default RevealWrapper;

