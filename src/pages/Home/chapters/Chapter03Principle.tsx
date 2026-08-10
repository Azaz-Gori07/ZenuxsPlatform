import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollScene } from '../../../components/motion/ScrollScene';
import TextMorph from '../../../components/originkit/ui/textmorph';
import ShinyPill from '../../../components/originkit/ui/shiny-pill';
import { Cpu, ShieldCheck, Box, Network, CheckCircle2 } from 'lucide-react';

export const Chapter03Principle: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState(0);

  const pillars = [
    {
      id: 'modular',
      title: 'MODULAR & STANDALONE',
      badge: 'Zero Coupling',
      desc: 'Every tool solves one problem well and operates autonomously. You can adopt Easy-Mongoo without using Zenuxs Accounts, or deploy HMAX-SECURE anywhere.',
      icon: Box,
      metric: '0 Mandatory Ties'
    },
    {
      id: 'cryptographic',
      title: 'CRYPTOGRAPHIC RIGOR',
      badge: 'Audited RFCs',
      desc: 'Security is engineered into the foundation. We enforce RFC 7636 PKCE for public clients and RFC 8628 for device-flow authentication.',
      icon: ShieldCheck,
      metric: 'RFC 7636 / RFC 8628'
    },
    {
      id: 'open',
      title: 'OPEN SOURCE FIRST',
      badge: 'Permissive MIT',
      desc: 'No closed-box vendor lock-in. All core libraries, CLI tooling, and Minecraft bridges are published on GitHub and npm with permissive licensing.',
      icon: Cpu,
      metric: '100% Inspectable'
    }
  ];

  return (
    <ScrollScene id="principle" minHeight="min-h-[100svh]" className="py-24 border-b border-border/60">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-indigo uppercase tracking-widest bg-indigo/10 border border-indigo/25 px-3 py-1 rounded">
            <Network className="w-3.5 h-3.5 text-indigo" />
            <ShinyPill
              text="02 / THE CORE PRINCIPLE"
              textColor="#6798ff"
              shineColor="#ffffff"
              speed={2.4}
              font={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 'bold' }}
            />
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white leading-tight">
            BUILD THE SYSTEM. NOT THE SAME SYSTEM TWICE.
          </h2>

          <div className="pt-2">
            <TextMorph
              words={['MODULAR ARCHITECTURE', 'CRYPTOGRAPHIC RIGOR', 'PERMISSIVE OPEN SOURCE', 'ZERO BOILERPLATE']}
              color="#da5c2c"
              font={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'Space Grotesk' }}
              transition={{ duration: 0.8, delay: 2.2 }}
            />
          </div>

          <p className="font-sans text-fog text-base sm:text-lg leading-relaxed font-normal">
            Zenuxs turns repeated engineering challenges into standardized, battle-tested open-source primitives.
          </p>
        </div>

        {/* Interactive Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = selectedPillar === idx;
            return (
              <motion.div
                key={pillar.id}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedPillar(idx)}
                className={`p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-carbon border-ember shadow-2xl shadow-ember/15'
                    : 'bg-graphite border-border hover:border-border-hover'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-lg ${isSelected ? 'bg-ember/20 text-ember' : 'bg-iron text-steel'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] bg-void px-2 py-0.5 rounded border border-border text-steel">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white">
                    {pillar.title}
                  </h3>

                  <p className="font-sans text-fog text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border/60 flex items-center justify-between text-ash">
                  <span className="text-[10px] uppercase font-bold text-steel">Spec:</span>
                  <span className="text-white font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald" />
                    {pillar.metric}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ScrollScene>
  );
};
