import React from 'react';
import { Reveal } from '../../../components/motion/Reveal';
import { AlertTriangle } from 'lucide-react';

export const Chapter02Problem: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] bg-carbon flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(218,92,44,0.04),transparent)]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
        <div className="space-y-20">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ember bg-ember/10 border border-ember/25 px-3 py-1 rounded-full">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>01 / THE PROBLEM</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
                THE DEVELOPER TOOLCHAIN
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ember to-ember/60">
                  IS A LANDFILL.
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { penalty: '47%', desc: 'of developers rebuild authentication from scratch per project.', color: 'text-ember' },
              { penalty: '12x', desc: 'more code written for infrastructure than business logic.', color: 'text-ember' },
              { penalty: '$2.1M', desc: 'annual waste on redundant security implementations.', color: 'text-ember' },
              { penalty: '0%', desc: 'of toolchains share cryptographic primitives across teams.', color: 'text-ember' },
            ].map((item, idx) => (
              <Reveal key={idx} delay={0.1 + idx * 0.08}>
                <div className="p-6 rounded-xl bg-graphite border border-border space-y-3">
                  <span className={`font-mono text-2xl font-bold ${item.color}`}>{item.penalty}</span>
                  <p className="font-sans text-fog text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p className="text-center font-sans text-ash text-sm max-w-3xl mx-auto">
              Teams duplicate authentication, database schemas, security middleware, and deployment scripts — building the same walls in different rooms. Zenuxs was built to end that cycle.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
