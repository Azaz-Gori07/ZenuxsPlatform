import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface LineRevealProps {
  lines: string[];
  className?: string;
  delay?: number;
  lineClassName?: string;
}

export const LineReveal: React.FC<LineRevealProps> = ({
  lines,
  className = '',
  delay = 0,
  lineClassName = ''
}) => {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <span className={className}>
        {lines.map((line, i) => (
          <span key={i} className={`block ${lineClassName}`}>
            {line || '\u00A0'}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={`block ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className={`block overflow-hidden ${lineClassName}`}>
          <motion.span
            initial={{ y: '110%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.08
            }}
            className="block"
          >
            {line || '\u00A0'}
          </motion.span>
        </span>
      ))}
    </span>
  );
};
