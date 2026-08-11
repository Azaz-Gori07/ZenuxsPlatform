import React from 'react';
import { Reveal } from '../../../components/motion/Reveal';
import { Shield, Key, Users, Lock, ArrowRight } from 'lucide-react';

export const Chapter14Console: React.FC = () => {
  return (
    <section className="relative w-full h-full min-h-[100svh] bg-carbon flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(103,152,255,0.05),transparent)]" />
        <div className="absolute inset-0 technical-grid opacity-20" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-indigo bg-indigo/10 border border-indigo/25 px-3 py-1 rounded-full">
                <Shield className="w-3.5 h-3.5" />
                <span>13 / ACCESS — CONSOLE ACCESS</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
                AUTHENTICATION SHOULD NOT BE THE BOTTLENECK.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-sans text-fog text-base leading-relaxed">
                Device-flow authentication for CLI tools and Minecraft plugins — no browser redirect required.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-3">
                {[{ icon: Key, label: 'DEVICE FLOW', sub: 'RFC 8628' },
                  { icon: Users, label: 'ROLE-BASED', sub: 'RBAC GRANULAR' },
                  { icon: Lock, label: 'SESSION TOKENS', sub: 'AUTO REFRESH' },
                  { icon: Shield, label: 'ZERO BROWSER', sub: 'CLI FIRST' }
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="p-4 rounded-xl bg-void border border-border text-center space-y-2">
                    <Icon className="w-7 h-7 text-indigo mx-auto" />
                    <span className="text-white font-bold font-mono text-[11px] block">{label}</span>
                    <span className="text-steel text-[10px]">{sub}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <a href="https://zenuxs.in" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo hover:bg-indigo/90 text-white text-sm font-bold shadow-lg transition-all">
                Access Console <ArrowRight className="w-4 h-4" />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal direction="right" delay={0.15}>
              <div className="rounded-2xl border border-border bg-void shadow-2xl overflow-hidden font-mono text-xs">
                <div className="flex items-center justify-between px-5 py-3 bg-graphite border-b border-border/80">
                  <span className="text-white font-bold">zenuxs auth device-flow</span>
                  <span className="text-indigo text-[10px]">PENDING</span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="p-4 rounded-xl bg-indigo/10 border border-indigo/30 text-center space-y-2">
                    <span className="text-white font-bold text-sm block">Open in browser:</span>
                    <span className="text-indigo font-bold text-base block">https://auth.zenuxs.in/device</span>
                    <span className="text-steel text-[10px]">Expires in 900s</span>
                  </div>
                  <div className="p-4 rounded-xl bg-carbon border border-border space-y-2">
                    <span className="text-white font-bold text-[11px] block">Verification Code</span>
                    <div className="flex gap-2 justify-center">
                      {['D','7','F','3','A','2','B'].map((ch, i) => (
                        <div key={i} className="w-9 h-11 rounded-lg bg-void border border-indigo/30 flex items-center justify-center text-indigo font-bold text-base">{ch}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
