import React from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import SkeletonLoader from './SkeletonLoader';

const LazyComponent = ({ 
  children, 
  skeletonType = 'card', 
  skeletonCount = 1,
  delay = 0,
  animationType = 'fadeUp'
}) => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  const [isReady, setIsReady] = React.useState(false);

  const animations = {
    fadeUp: {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.8, delay, ease: "easeOut" }
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.6, delay }
    },
    slideLeft: {
      initial: { x: 80, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.8, delay, ease: "easeOut" }
    },
    slideRight: {
      initial: { x: -80, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.8, delay, ease: "easeOut" }
    },
    scale: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0.7, delay, ease: "easeOut" }
    }
  };

  const animation = animations[animationType] || animations.fadeUp;

  // Add artificial delay for slower loading
  React.useEffect(() => {
    if (hasIntersected) {
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 800 + (delay * 1000)); // 800ms base delay + delay multiplier
      
      return () => clearTimeout(timer);
    }
  }, [hasIntersected, delay]);

  if (!hasIntersected || !isReady) {
    return (
      <div ref={ref}>
        <SkeletonLoader type={skeletonType} count={skeletonCount} />
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
      whileHover={{ 
        scale: 1.03, 
        transition: { duration: 0.3, ease: "easeOut" } 
      }}
    >
      {children}
    </motion.div>
  );
};

export default LazyComponent;
