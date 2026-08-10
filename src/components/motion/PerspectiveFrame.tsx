import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PerspectiveFrameProps {
  children: React.ReactNode;
  className?: string;
  maxRotate?: number;
  glowColor?: string;
}

export const PerspectiveFrame: React.FC<PerspectiveFrameProps> = ({
  children,
  className = '',
  maxRotate = 10,
  glowColor = 'rgba(218, 92, 44, 0.15)'
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -maxRotate;
    const rY = ((x - centerX) / centerX) * maxRotate;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      style={{ perspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full h-full rounded-xl border border-border/80 bg-graphite/90 shadow-2xl relative overflow-hidden transition-shadow duration-300"
      >
        {/* Subtle Ambient Glow */}
        <div
          className="absolute -inset-1 pointer-events-none opacity-40 blur-xl transition-opacity duration-300"
          style={{ background: glowColor }}
        />
        <div className="relative z-10 w-full h-full">{children}</div>
      </motion.div>
    </div>
  );
};
