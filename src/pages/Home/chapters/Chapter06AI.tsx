import React from 'react';
import { Reveal } from '../../../components/motion/Reveal';
import { Sparkles, Zap } from 'lucide-react';
import { ContinueChat } from '../../../components/ai/ContinueChat';

export const Chapter06AI: React.FC = () => {
  return (
    <section className="relative w-full h-full min-h-[100svh] bg-carbon flex items-center overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_30%_50%,rgba(103,152,255,0.08),transparent)]" />
        <div className="absolute inset-0 technical-grid opacity-20" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Left */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-indigo bg-indigo/10 border border-indigo/25 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>05 / INTELLIGENCE — AI & WORKSPACES</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl sm:text-6xl text-white leading-[1.1] tracking-tight">
                LET THE TOOL MOVE AT THE SPEED OF THE BUILDER.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-sans text-fog text-base leading-relaxed">
                Intelligent tools that understand your full project graph, maintain persistent session memory, and automate repetitive tasks.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-void border border-border">
                  <span className="text-indigo font-bold font-mono text-xs block mb-1">CONTINUOUS RESPONSE LIFECYCLE</span>
                  <p className="text-fog font-sans text-sm">Instant user message + thinking state with zero blank waiting time.</p>
                </div>
                <div className="p-4 rounded-xl bg-void border border-border">
                  <span className="text-white font-bold font-mono text-xs block mb-1">ZENUXS.CODE WORKSPACE</span>
                  <p className="text-fog font-sans text-sm">Browser-based coding with zero-setup dev containers.</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Interactive Continue Chat Component Right */}
          <div className="lg:col-span-7">
            <Reveal direction="right" delay={0.15}>
              <ContinueChat embedded={true} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
