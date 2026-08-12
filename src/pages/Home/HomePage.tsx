import React, { useLayoutEffect, useEffect } from 'react';
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
  // Ensure page starts at Chapter 01 (Hero) on reload or mount
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Secondary scroll reset after DOM paint and animation setup
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full">
      {SECTIONS.map(({ Component, z }, idx) => (
        <section
          key={z}
          id={idx === 0 ? 'hero-chapter' : `chapter-${idx}`}
          className="min-h-[100svh] w-full"
          style={{
            zIndex: z,
            position: idx === 0 ? 'relative' : 'sticky',
            top: idx === 0 ? undefined : 0,
          }}
        >
          <Component />
        </section>
      ))}
    </div>
  );
};
