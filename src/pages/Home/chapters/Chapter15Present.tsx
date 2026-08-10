import React from 'react';
import { motion } from 'framer-motion';
import { ScrollScene } from '../../../components/motion/ScrollScene';
import ShinyPill from '../../../components/originkit/ui/shiny-pill';
import { Activity, CheckCircle2, ArrowRight } from 'lucide-react';

export const Chapter15Present: React.FC = () => {
  const evolutionPhases = [
    {
      phase: 'STAGE 01',
      title: 'PAIN POINT & SCRIPTS',
      desc: 'Encountering repetitive boilerplate across projects and creating zero-dependency micro-scripts.',
      badge: 'Completed'
    },
    {
      phase: 'STAGE 02',
      title: 'OPEN SOURCE PACKAGES',
      desc: 'Publishing packages to npm and GitHub with strictly typed APIs (Easy-Mongoo, HMAX-SECURE, CLI).',
      badge: 'Completed'
    },
    {
      phase: 'STAGE 03',
      title: 'DEDICATED SYSTEMS',
      desc: 'Launching dedicated standalone platforms like Zenuxs Accounts, AdvancedAuth, and DNS Anycast.',
      badge: 'Completed'
    },
    {
      phase: 'STAGE 04',
      title: 'COHESIVE ECOSYSTEM',
      desc: 'Unifying identity, cryptographic security, data, and developer tooling into one interoperable platform.',
      badge: 'Current Stage'
    }
  ];

  return (
    <ScrollScene minHeight="min-h-[100svh]" className="py-24 border-b border-border/60">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-fog uppercase tracking-widest bg-iron border border-border px-3 py-1 rounded">
            <Activity className="w-3.5 h-3.5 text-ember" />
            <ShinyPill
              text="14 / THE CURRENT EVOLUTIONARY STATE"
              textColor="#b4b4b4"
              shineColor="#da5c2c"
              speed={2.2}
              font={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 'bold' }}
            />
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white leading-tight">
            THIS IS ONLY THE CURRENT STATE.
          </h2>

          <p className="font-sans text-fog text-base sm:text-lg leading-relaxed font-normal">
            Zenuxs is continuously evolving. New tools emerge. Existing libraries mature. Projects become infrastructure. Infrastructure becomes an ecosystem.
          </p>
        </div>

        {/* Evolutionary Phase Progress Track */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 font-mono text-xs">
          {evolutionPhases.map((phase, idx) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-6 rounded-xl border border-border bg-carbon space-y-4 relative overflow-hidden flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-ember font-bold text-[10px]">
                  <span>{phase.phase}</span>
                  <span className="text-[9px] bg-void px-2 py-0.5 rounded border border-border text-emerald flex items-center gap-1 font-mono">
                    <CheckCircle2 className="w-3 h-3 text-emerald" />
                    {phase.badge}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-white">
                  {phase.title}
                </h3>
                <p className="text-fog font-sans text-xs leading-relaxed">
                  {phase.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-border/40 text-[10px] text-steel">
                Status: Production Verified
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollScene>
  );
};
