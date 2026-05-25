import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Wraps children in a scroll-triggered fade+slide animation.
 * Props:
 *   delay     – stagger delay in seconds  (default 0)
 *   direction – 'up' | 'left' | 'right'  (default 'up')
 *   style     – extra inline styles
 *   className – extra class names
 */
export default function Reveal({ children, delay = 0, direction = 'up', style = {}, className = '' }) {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-70px' });

  const hidden = {
    opacity: 0,
    filter:  'blur(6px)',
    y: direction === 'up'    ?  40 : 0,
    x: direction === 'left'  ? -40 : direction === 'right' ? 40 : 0,
  };
  const visible = { opacity: 1, filter: 'blur(0px)', y: 0, x: 0 };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ hidden, visible }}
      transition={{ duration: 0.65, delay, ease: [0.22, 0.4, 0.22, 1] }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}
