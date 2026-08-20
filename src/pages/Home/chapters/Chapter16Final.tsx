import React from 'react';
import { Reveal } from '../../../components/motion/Reveal';
import { ArrowRight, Rocket } from 'lucide-react';

export const Chapter16Final: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] bg-carbon flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(218,92,44,0.04),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_30%_70%,rgba(103,152,255,0.03),transparent)]" />
        <div className="absolute inset-0 technical-grid opacity-20" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32 space-y-16">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ember bg-ember/10 border border-ember/25 px-3 py-1 rounded-full">
              <Rocket className="w-3.5 h-3.5" />
              <span>15 / THE ROADMAP</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
              WE ARE NOT DONE. WE ARE JUST GETTING STARTED.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-sans text-fog text-base leading-relaxed max-w-2xl mx-auto">
              From single-purpose tools to a unified ecosystem. Every product launched is a building block for the next.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { q: 'Q1 2026', title: 'Foundation', items: ['HMAX v3', 'Easy-Mongoo', 'CLI v2', 'OAuth PKCE'] },
              { q: 'Q2 2026', title: 'Expansion', items: ['Edge v2', 'Hyperlink', 'Subnet', 'Bridge v2'] },
              { q: 'Q3 2026', title: 'Platform', items: ['Code Beta', 'Codebase', 'SMP', 'API v3'] },
              { q: 'Q4 2026', title: 'Ecosystem', items: ['SDKs', 'Plugins', 'Enterprise', 'Edge GA'] },
            ].map((phase, idx) => (
              <div key={phase.q} className="p-6 rounded-2xl border border-border bg-void space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-ember font-mono font-bold text-sm">{phase.q}</span>
                  <span className="text-steel text-[10px] font-mono">PHASE {idx + 1}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-white">{phase.title}</h3>
                <ul className="space-y-1.5">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-fog text-sm font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-ember shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="text-center space-y-6 pt-6">
            <h3 className="font-serif text-3xl sm:text-4xl text-white">
              BUILD FAST. SHIP FASTER. STAY SECURE.
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-sm">
              <a href="https://github.com/Azaz-Gori07/ZenuxsPlatform" target="_blank" rel="noopener noreferrer"
                 className="px-6 py-3 rounded-xl bg-ember hover:bg-ember-hover text-white font-bold shadow-2xl shadow-ember/20 transition-all flex items-center gap-2">
                Start Building <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://zenuxs.in" target="_blank" rel="noopener noreferrer"
                 className="px-6 py-3 rounded-xl bg-void hover:bg-graphite text-white font-bold border border-border transition-all">
                zenuxs.in
              </a>
            </div>
            <p className="text-steel font-mono text-xs">
              &copy; 2026 Zenuxs Platform. Open Source. No Vendor Lock-in.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
