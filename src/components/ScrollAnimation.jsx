import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const ScrollAnimation = ({ children, variants, threshold = 0.1, className = '' }) => {
  const { ref, isInView } = useAnimateOnScroll(threshold);

  const defaultVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const animationVariants = variants || defaultVariants;

  return (
    <motion.div
      ref={ref}
      variants={animationVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;