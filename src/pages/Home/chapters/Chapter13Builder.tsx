import React from 'react';
import { ScrollScene } from '../../../components/motion/ScrollScene';
import { SolutionFinder } from '../../../components/visualizers/SolutionFinder';
import ShinyPill from '../../../components/originkit/ui/shiny-pill';
import { Wrench } from 'lucide-react';

export const Chapter13Builder: React.FC = () => {
  return (
    <ScrollScene id="builder" minHeight="min-h-[100svh]" className="py-24 border-b border-border/60">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-ember uppercase tracking-widest bg-ember/10 border border-ember/25 px-3 py-1 rounded">
            <Wrench className="w-3.5 h-3.5 text-ember" />
            <ShinyPill
              text="12 / SOLUTION FINDER — WHAT WILL YOU BUILD?"
              textColor="#da5c2c"
              shineColor="#ffffff"
              speed={2.2}
              font={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 'bold' }}
            />
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white leading-tight">
            START WITH ONE. BUILD AROUND IT.
          </h2>

          <p className="font-sans text-fog text-base sm:text-lg leading-relaxed font-normal">
            You don't need to adopt the entire ecosystem upfront. Pick the specific tool that solves your immediate problem today, and let the rest connect when you need it.
          </p>
        </div>

        {/* Interactive Problem Solution Finder */}
        <SolutionFinder />
      </div>
    </ScrollScene>
  );
};
