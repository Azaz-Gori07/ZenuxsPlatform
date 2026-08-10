import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

type SceneVariant = 'fade' | 'rise' | 'zoom';

interface ScrollSceneProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  minHeight?: string;
  hasGrid?: boolean;
  hasDots?: boolean;
  variant?: SceneVariant;
}

export const ScrollScene: React.FC<ScrollSceneProps> = ({
  id,
  className = '',
  children,
  minHeight = 'min-h-[100svh]',
  hasGrid = false,
  hasDots = false,
  variant = 'rise'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const isRise = variant === 'rise' && !reducedMotion;
  const isZoom = variant === 'zoom' && !reducedMotion;

  const baseOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.4, 1, 1, 0.4]);
  const riseY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [40, 0, 0, -30]);
  const riseFilter = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], ['blur(6px)', 'blur(0px)', 'blur(0px)', 'blur(4px)']);
  const zoomScale = useTransform(scrollYProgress, [0, 0.3, 1], [0.92, 1, 1.04]);

  const style = isRise
    ? { opacity: baseOpacity, y: riseY, filter: riseFilter }
    : isZoom
      ? { opacity: baseOpacity, scale: zoomScale }
      : { opacity: baseOpacity };

  return (
    <section
      id={id}
      ref={ref}
      className={`relative w-full ${minHeight} flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-12 border-b border-border/40 overflow-hidden ${
        hasGrid ? 'technical-grid' : ''
      } ${hasDots ? 'technical-dots' : ''} ${className}`}
    >
      <motion.div style={style} className="relative z-10 w-full max-w-[1320px] mx-auto">
        {children}
      </motion.div>
    </section>
  );
};
