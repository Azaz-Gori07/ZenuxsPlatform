import React, { useRef, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { ScrollStep } from '../../types/motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface StickyStoryProps {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  steps: ScrollStep[];
  activeStep: number;
  onStepChange: (index: number) => void;
  children: React.ReactNode;
  className?: string;
  showSteps?: boolean;
}

export const StickyStory: React.FC<StickyStoryProps> = ({
  id,
  eyebrow,
  title,
  subtitle,
  steps,
  activeStep,
  onStepChange,
  children,
  className = '',
  showSteps = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const stepCount = steps.length;
      if (stepCount <= 1) return;
      const stepIndex = Math.min(
        stepCount - 1,
        Math.max(0, Math.floor(latest * stepCount))
      );
      if (stepIndex !== activeStep) {
        onStepChange(stepIndex);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, steps.length, activeStep, onStepChange]);

  const jumpToStep = (idx: number) => {
    const el = containerRef.current;
    if (!el) return;
    const stepCount = steps.length;
    const sectionHeight = (Math.max(200, stepCount * 100) / 100) * window.innerHeight;
    const scrollable = sectionHeight - window.innerHeight;
    const target = el.getBoundingClientRect().top + window.scrollY + ((idx + 0.5) / stepCount) * scrollable;
    window.scrollTo({ top: Math.max(0, target), behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <div id={id} ref={containerRef} className={`relative w-full ${className}`}>
      {/* Outer sticky wrapper with proportional scroll length */}
      <div
        className="w-full"
        style={{ height: `${Math.max(200, steps.length * 100)}vh` }}
      >
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden py-12 px-4 sm:px-6 lg:px-12">
          <div className="w-full max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6 z-20">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-ember bg-ember/10 px-2.5 py-1 rounded border border-ember/20 inline-block">
                  {eyebrow}
                </span>
                <h2 className="font-grotesk text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                  {title}
                </h2>
                {subtitle && (
                  <p className="text-fog text-sm sm:text-base leading-relaxed">
                    {subtitle}
                  </p>
                )}
              </div>

              {/* Steps Progress Indicator */}
              {showSteps && (
                <div className="space-y-3 pt-2">
                  {steps.map((step, idx) => {
                    const isActive = idx === activeStep;
                    return (
                      <div
                        key={step.id}
                        onClick={() => jumpToStep(idx)}
                        className={`cursor-pointer p-3.5 rounded-lg border transition-all duration-300 ${
                          isActive
                            ? 'bg-graphite border-border-hover shadow-lg'
                            : 'bg-transparent border-transparent opacity-40 hover:opacity-75'
                        }`}
                      >
                        <div className="flex items-center space-x-3 mb-1">
                          <span
                            className={`font-mono text-xs px-2 py-0.5 rounded transition-colors ${
                              isActive
                                ? 'bg-ember text-white font-bold'
                                : 'bg-iron text-ash'
                            }`}
                          >
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <h3 className="font-grotesk font-medium text-sm sm:text-base text-white">
                            {step.title}
                          </h3>
                          {step.badge && (
                            <span className="font-mono text-[10px] uppercase tracking-wider text-indigo bg-indigo/10 px-2 py-0.5 rounded border border-indigo/20 ml-auto">
                              {step.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-ash pl-9 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right Sticky Visual Canvas */}
            <div className="lg:col-span-7 w-full flex items-center justify-center relative z-10 min-h-[380px] sm:min-h-[460px]">
              {reducedMotion ? (
                <div className="w-full flex justify-center">{children}</div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.96, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex justify-center"
                  >
                    {children}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
