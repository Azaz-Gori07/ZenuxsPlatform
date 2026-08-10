import React from 'react';
import { motion, MotionProps, Variants } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
  }
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
  margin?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  stagger = 0.09,
  once = true,
  margin = '-8%'
}) => {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{ ...containerVariants, visible: { ...containerVariants.visible, transition: { staggerChildren: stagger, delayChildren: 0.05 } } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string } & MotionProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <motion.div className={className} variants={itemVariants} {...rest}>
      {children}
    </motion.div>
  );
};
