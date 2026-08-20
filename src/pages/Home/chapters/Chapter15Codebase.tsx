import React from 'react';
import { Reveal } from '../../../components/motion/Reveal';
import { Zap, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../../../components/ui/Icons';

export const Chapter15Codebase: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] bg-graphite flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(218,92,44,0.04),transparent)]" />
        <div className="absolute inset-0 technical-grid-dense opacity-15" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ember bg-ember/10 border border-ember/25 px-3 py-1 rounded-full">
                <Zap className="w-3.5 h-3.5" />
                <span>14 / PRODUCT — ZENUXS CODEBASE</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
                DOCUMENTATION SHOULD NOT BE ANOTHER PRODUCT.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-sans text-fog text-base leading-relaxed">
                Developer docs with version management, diff viewers, and interactive API playgrounds.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-carbon border border-border">
                  <span className="text-ember font-bold font-mono text-xs block mb-1">VERSION CONTROL</span>
                  <p className="text-fog font-sans text-sm">Branch-aware docs tracking API changes across releases.</p>
                </div>
                <div className="p-4 rounded-xl bg-carbon border border-border">
                  <span className="text-white font-bold font-mono text-xs block mb-1">INTERACTIVE PLAYGROUNDS</span>
                  <p className="text-fog font-sans text-sm">Try API endpoints directly from the documentation.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <a href="https://github.com/zenuxs-dev" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-ember hover:bg-ember-hover text-white text-sm font-semibold shadow-lg transition-all">
                <GithubIcon className="w-4 h-4" /> View Docs <ArrowRight className="w-4 h-4" />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal direction="right" delay={0.15}>
              <div className="rounded-2xl border border-border bg-carbon shadow-2xl p-8 space-y-5 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-border/70 pb-4">
                  <span className="text-white font-bold">API Documentation</span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald/10 text-emerald border border-emerald/20 text-[10px]">v3.2</span>
                    <span className="px-2 py-0.5 rounded bg-carbon text-steel border border-border text-[10px]">v3.1</span>
                    <span className="px-2 py-0.5 rounded bg-carbon text-steel border border-border text-[10px]">v3.0</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {[['GET', '/api/v1/users', 'List users', 'bg-emerald/10 text-emerald'],
                    ['POST', '/api/v1/users', 'Create user', 'bg-indigo/10 text-indigo'],
                    ['PUT', '/api/v1/users/:id', 'Update user', 'bg-amber-500/10 text-amber-400'],
                    ['DELETE', '/api/v1/users/:id', 'Remove user', 'bg-rose-500/10 text-rose-400']
                  ].map(([method, path, desc, cls]) => (
                    <div key={String(method)} className="flex items-center gap-3 p-3 rounded-xl bg-void border border-border/50">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold ${cls}`}>{method}</span>
                      <span className="text-ash">{path}</span>
                      <span className="ml-auto text-steel text-[10px]">{desc}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-ember/10 border border-ember/20">
                  <span className="text-ember font-bold text-[11px] block mb-1">DIFF VIEWER</span>
                  <p className="text-fog text-[11px]">v3.1 {"->"} v3.2: Added role-based filtering to GET /users.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
