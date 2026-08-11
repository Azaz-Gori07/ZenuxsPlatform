import React from 'react';
import { Reveal } from '../../../components/motion/Reveal';
import { Box, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../../../components/ui/Icons';

export const Chapter13SMP: React.FC = () => {
  return (
    <section className="relative w-full h-full min-h-[100svh] bg-graphite flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_60%_40%,rgba(218,92,44,0.05),transparent)]" />
        <div className="absolute inset-0 technical-dots opacity-20" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32 space-y-16">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ember bg-ember/10 border border-ember/25 px-3 py-1 rounded-full">
              <Box className="w-3.5 h-3.5" />
              <span>12 / GAME — ZENUXS SMP</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
              A SURVIVAL MULTIPLAYER SERVER IS NOT A CHAT ROOM.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { tag: 'SMP', title: 'Survival Multiplayer', desc: 'Vanilla survival with anti-grief, land claiming, and economy.', color: 'text-ember', version: '1.21.4 | Paper' },
            { tag: 'CREATIVE', title: 'Creative Plotworld', desc: 'Individual plots with WorldEdit and region-protected builds.', color: 'text-indigo', version: '1.21.4 | Fabric' },
            { tag: 'MINI', title: 'Minigames Hub', desc: 'Skywars, Bedwars, and custom arenas with matchmaking.', color: 'text-emerald', version: '1.21.4 | Velocity' },
          ].map((item) => (
            <Reveal key={item.tag} delay={0.1}>
              <div className="p-8 rounded-2xl border border-border bg-carbon/60 min-h-[220px] flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className={`text-2xl font-bold ${item.color} block`}>{item.tag}</span>
                  <h3 className="font-display font-bold text-lg text-white">{item.title}</h3>
                  <p className="font-sans text-fog text-sm leading-relaxed">{item.desc}</p>
                </div>
                <span className="text-steel font-mono text-[10px]">Version {item.version}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="text-center">
            <a href="https://github.com/zenuxs-dev" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-ember hover:bg-ember-hover text-white text-sm font-semibold shadow-lg transition-all">
              <GithubIcon className="w-4 h-4" /> Explore Server Plugins <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
