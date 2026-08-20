import React, { useLayoutEffect, useEffect, useRef, useState, useCallback } from 'react';
import { Chapter01Opening } from './chapters/Chapter01Opening';
import { Chapter02Problem } from './chapters/Chapter02Problem';
import { Chapter03Principle } from './chapters/Chapter03Principle';
import { Chapter04Identity } from './chapters/Chapter04Identity';
import { Chapter05DevTools } from './chapters/Chapter05DevTools';
import { Chapter06AI } from './chapters/Chapter06AI';
import { Chapter07Edge } from './chapters/Chapter07Edge';
import { Chapter08Hyperlink } from './chapters/Chapter08Hyperlink';
import { Chapter09HMAX } from './chapters/Chapter09HMAX';
import { Chapter10API } from './chapters/Chapter10API';
import { Chapter11Bridge } from './chapters/Chapter11Bridge';
import { Chapter12Subnet } from './chapters/Chapter12Subnet';
import { Chapter13SMP } from './chapters/Chapter13SMP';
import { Chapter14Console } from './chapters/Chapter14Console';
import { Chapter15Codebase } from './chapters/Chapter15Codebase';
import { Chapter16Final } from './chapters/Chapter16Final';

const SECTIONS = [
  { Component: Chapter01Opening, z: 10 },
  { Component: Chapter02Problem, z: 20 },
  { Component: Chapter03Principle, z: 30 },
  { Component: Chapter04Identity, z: 40 },
  { Component: Chapter05DevTools, z: 50 },
  { Component: Chapter06AI, z: 60 },
  { Component: Chapter07Edge, z: 70 },
  { Component: Chapter08Hyperlink, z: 80 },
  { Component: Chapter09HMAX, z: 90 },
  { Component: Chapter10API, z: 100 },
  { Component: Chapter11Bridge, z: 110 },
  { Component: Chapter12Subnet, z: 120 },
  { Component: Chapter13SMP, z: 130 },
  { Component: Chapter14Console, z: 140 },
  { Component: Chapter15Codebase, z: 150 },
  { Component: Chapter16Final, z: 160 },
];

export const HomePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionHeights, setSectionHeights] = useState<Record<number, number>>({});
  const [baseline, setBaseline] = useState(0);

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }
  }, []);

  useEffect(() => {
    // Scroll reset after mount
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Measure each section's content height on mount
  useLayoutEffect(() => {
    const observeSections = () => {
      const container = containerRef.current;
      if (!container) return;

      // Only direct children — chapters contain their own nested <section>
      const sections = Array.from(container.children) as HTMLElement[];
      if (sections.length === 0) return;

      // Hero is exactly 100vh — use it as the true viewport baseline
      // (avoids window.innerHeight mismatch with CSS 100vh on mobile)
      const heroHeight = sections[0].getBoundingClientRect().height;

      const heights: Record<number, number> = {};
      sections.forEach((section, idx) => {
        heights[idx] = section.getBoundingClientRect().height;
      });

      setBaseline(heroHeight);
      setSectionHeights(heights);
    };

    observeSections();
    window.addEventListener('resize', observeSections);
    return () => window.removeEventListener('resize', observeSections);
  }, []);

  // Determine which sections should use sticky positioning
  const shouldUseSticky = useCallback((idx: number): boolean => {
    if (baseline === 0) return true; // default to sticky until measured
    const height = sectionHeights[idx];
    if (height === undefined) return true;
    return height <= baseline + 20; // 20px tolerance
  }, [sectionHeights, baseline]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
    >
      {SECTIONS.map(({ Component, z }, idx) => (
        <section
          key={z}
          id={idx === 0 ? 'hero-chapter' : `chapter-${idx}`}
          className="w-full min-h-[100vh] max-h-auto chapter-snap-section"
          style={{
            position: idx === 0 ? 'relative' : shouldUseSticky(idx) ? 'sticky' : 'relative',
            top: idx === 0 ? undefined : shouldUseSticky(idx) ? 0 : undefined,
            zIndex: z,
          }}
        >
          <Component />
        </section>
      ))}
    </div>
  );
};
