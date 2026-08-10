import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>['offset'];

interface ScrollScaleProps {
  children: React.ReactNode;
  className?: string;
  from?: number;
  to?: number;
  scaleFrom?: number;
  offset?: ScrollOffset;
}

export const ScrollScale: React.FC<ScrollScaleProps> = ({
  children,
  className = '',
  from = 0.15,
  to = 0.85,
  scaleFrom = 0.6,
  offset = ['start start', 'end end']
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset
  });

  const scale: MotionValue<number> = useTransform(scrollYProgress, [from, to], [scaleFrom, 1]);
  const opacity: MotionValue<number> = useTransform(scrollYProgress, [from, to], [0.4, 1]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reducedMotion ? undefined : { scale, opacity }} className="h-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
};
