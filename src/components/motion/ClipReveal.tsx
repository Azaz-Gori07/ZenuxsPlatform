import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

type ClipFrom = 'bottom' | 'top' | 'left' | 'right';

interface ClipRevealProps {
  children: React.ReactNode;
  from?: ClipFrom;
  className?: string;
  innerClassName?: string;
}

const clipInset: Record<ClipFrom, (p: number) => string> = {
  bottom: (p) => `inset(0 0 ${(1 - p) * 100}% 0)`,
  top: (p) => `inset(${(1 - p) * 100}% 0 0 0)`,
  left: (p) => `inset(0 ${(1 - p) * 100}% 0 0)`,
  right: (p) => `inset(0 0 0 ${(1 - p) * 100}%)`
};

export const ClipReveal: React.FC<ClipRevealProps> = ({
  children,
  from = 'bottom',
  className = '',
  innerClassName = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const progress = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0, 1, 1, 1]);
  const clipPath = useTransform(progress, (p) => clipInset[from](p));
  const innerScale = useTransform(progress, [0, 1], [1.15, 1]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={reducedMotion ? undefined : { clipPath }}
        className="h-full"
      >
        <motion.div style={reducedMotion ? undefined : { scale: innerScale }} className={innerClassName}>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};
