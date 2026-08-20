import React from 'react';
import { Reveal } from '../../../components/motion/Reveal';
import { Globe, ArrowRight } from 'lucide-react';

export const Chapter07Edge: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] bg-graphite flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(16,185,129,0.06),transparent)]" />
        <div className="absolute inset-0 technical-grid-dense opacity-15" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32 space-y-16">
        <div className="text-center max-w-5xl mx-auto space-y-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-emerald bg-emerald/10 border border-emerald/25 px-3 py-1 rounded-full">
              <Globe className="w-3.5 h-3.5" />
              <span>06 / INFRASTRUCTURE — ZENUXS EDGE</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
              DNS SHOULD NOT FEEL LIKE A WAITING ROOM.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Reveal direction="left">
            <div className="rounded-2xl border border-border bg-carbon shadow-2xl p-8 space-y-5">
              <div className="flex items-center justify-between text-steel font-mono text-[10px] border-b border-border/70 pb-4">
                <span className="text-white font-bold">Global Edge Network</span>
                <span className="text-emerald">LIVE</span>
              </div>
              <div className="space-y-2">
                {[{ loc: 'Mumbai (BOM)', ip: '103.21.126.1', latency: '3ms', status: 'PRIMARY' },
                  { loc: 'Frankfurt (FRA)', ip: '185.199.108.153', latency: '12ms', status: 'READY' },
                  { loc: 'Singapore (SIN)', ip: '140.83.54.87', latency: '8ms', status: 'READY' },
                  { loc: 'N. Virginia (IAD)', ip: '52.84.125.37', latency: '45ms', status: 'READY' },
                  { loc: 'Tokyo (NRT)', ip: '172.64.35.1', latency: '22ms', status: 'READY' },
                ].map((node) => (
                  <div key={node.loc} className="flex items-center justify-between p-3 rounded-xl bg-void border border-border/50">
                    <div><span className="text-white font-semibold text-[11px] block">{node.loc}</span><span className="text-steel text-[10px]">{node.ip}</span></div>
                    <div className="text-right"><span className="text-ash text-[10px] block">{node.latency}</span>
                      <span className={`text-[9px] font-bold ${node.status === 'PRIMARY' ? 'text-emerald' : 'text-steel'}`}>{node.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <p className="font-sans text-fog text-base leading-relaxed">
                Built-in DNS hosting, managed certificates, and edge deployment with anycast routing and sub-25ms global resolution.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[{ metric: '30+', label: 'Edge Locations' }, { metric: '<25ms', label: 'Global Resolution' },
                  { metric: '100%', label: 'Free Wildcard' }, { metric: '<2s', label: 'Cert Issue' }
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-carbon border border-border text-center">
                    <span className="text-emerald font-mono text-xl font-bold block">{stat.metric}</span>
                    <span className="text-steel text-[10px] uppercase font-mono">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <a href="https://zenuxs.in" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald hover:bg-emerald/90 text-black text-sm font-bold shadow-lg transition-all">
                Access Dashboard <ArrowRight className="w-4 h-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
