import React from 'react';
import { Reveal } from '../../../components/motion/Reveal';
import { Network, Box, ShieldCheck, CheckCircle2 } from 'lucide-react';

const pillars = [
  { id: 'modular', title: 'MODULAR & STANDALONE', badge: 'Zero Coupling', desc: 'Every tool solves one problem well and operates autonomously.', icon: Box, metric: '0 Mandatory Ties' },
  { id: 'cryptographic', title: 'CRYPTOGRAPHIC RIGOR', badge: 'Audited RFCs', desc: 'Security is engineered into the foundation with RFC 7636 PKCE and RFC 8628.', icon: ShieldCheck, metric: 'RFC 7636 / RFC 8628' },
  { id: 'open', title: 'OPEN SOURCE FIRST', badge: 'Permissive MIT', desc: 'No vendor lock-in. Core libraries, CLI tooling, and Minecraft bridges are on GitHub.', icon: Network, metric: '100% Inspectable' },
];

export const Chapter03Principle: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] bg-graphite flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 technical-grid-dense opacity-15" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
        <div className="space-y-16">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-indigo bg-indigo/10 border border-indigo/25 px-3 py-1 rounded-full">
                <Network className="w-3.5 h-3.5" />
                <span>02 / THE CORE PRINCIPLE</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
                BUILD THE SYSTEM.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo to-indigo/60">
                  NOT THE SAME SYSTEM TWICE.
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.id} delay={0.15 + idx * 0.1}>
                  <div className="group p-8 rounded-2xl border border-border bg-carbon/60 hover:bg-carbon transition-all duration-300 flex flex-col justify-between space-y-6 min-h-[240px]">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="p-3 rounded-xl bg-indigo/10 text-indigo">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] bg-void px-2.5 py-0.5 rounded-full border border-border text-steel font-mono">{pillar.badge}</span>
                      </div>
                      <h3 className="font-display font-bold text-lg text-white">{pillar.title}</h3>
                      <p className="font-sans text-fog text-sm leading-relaxed">{pillar.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-border/50 flex items-center justify-between text-ash">
                      <span className="text-[10px] uppercase font-bold text-steel">Spec</span>
                      <span className="text-white font-mono text-xs font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald" /> {pillar.metric}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
