import React from 'react';
import { Reveal } from '../../../components/motion/Reveal';
import { Blocks, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../../../components/ui/Icons';

export const Chapter11Bridge: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] bg-graphite flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_50%,rgba(103,152,255,0.06),transparent)]" />
        <div className="absolute inset-0 technical-grid opacity-15" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-indigo bg-indigo/10 border border-indigo/25 px-3 py-1 rounded-full">
                <Blocks className="w-3.5 h-3.5" />
                <span>10 / MINECRAFT — ZENUXS BRIDGE</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
                WHAT IF YOUR MINECRAFT SERVER HAD AN API?
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-sans text-fog text-base leading-relaxed">
                Real-time communication between Minecraft servers and web apps via Redis pub/sub.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-carbon border border-border">
                  <span className="text-indigo font-bold font-mono text-xs block mb-1">REDIS PUB/SUB</span>
                  <p className="text-fog font-sans text-sm">WebSocket connections subscribe to Redis channels.</p>
                </div>
                <div className="p-4 rounded-xl bg-carbon border border-border">
                  <span className="text-white font-bold font-mono text-xs block mb-1">SPONGE/VELOCITY/FABRIC</span>
                  <p className="text-fog font-sans text-sm">Supports 1.8 through 1.21.4. Zero config required.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <a href="https://github.com/zenuxs-dev/zenuxs-bridge" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo hover:bg-indigo/90 text-white text-sm font-bold shadow-lg transition-all">
                <GithubIcon className="w-4 h-4" /> View on GitHub <ArrowRight className="w-4 h-4" />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal direction="right" delay={0.15}>
              <div className="rounded-2xl border border-border bg-carbon shadow-2xl p-8 space-y-5">
                <div className="flex items-center justify-between border-b border-border/70 pb-4 font-mono text-[10px] text-steel">
                  <span className="text-white font-bold">Bridge Channel Diagram</span>
                  <span className="text-indigo">LIVE SYNC</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-void border border-indigo/30 text-center space-y-2">
                    <span className="text-2xl font-bold text-indigo block">MC</span>
                    <span className="text-steel text-[10px]">Minecraft Server</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="space-y-1 text-center">
                      <span className="text-indigo font-bold text-xs block">REDIS</span>
                      <span className="text-steel text-[10px] block">pub/sub</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-void border border-emerald/30 text-center space-y-2">
                    <span className="text-2xl font-bold text-emerald block">WEB</span>
                    <span className="text-steel text-[10px]">Web Application</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {['player:join', 'player:chat', 'player:command', 'server:status'].map((ev, i) => (
                    <div key={ev} className="flex items-center gap-3 p-2 rounded-lg bg-void border border-border/50">
                      <span className="text-indigo font-bold text-[10px]">#{i + 1}</span>
                      <span className="text-ember font-mono text-[11px]">{ev}</span>
                      <span className="ml-auto text-steel text-[10px]">broadcast</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
