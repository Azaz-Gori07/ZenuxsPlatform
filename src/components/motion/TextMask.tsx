import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface TextMaskProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  margin?: string;
}

export const TextMask: React.FC<TextMaskProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.04,
  once = true,
  margin = '-10%'
}) => {
  const reducedMotion = useReducedMotion();
  const words = text.split(' ');

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`inline-flex flex-wrap gap-x-2 overflow-hidden ${className}`}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden pb-1">
          <motion.span
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once, margin }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + index * stagger
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};
