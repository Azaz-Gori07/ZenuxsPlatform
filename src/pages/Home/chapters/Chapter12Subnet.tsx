import React from 'react';
import { Reveal } from '../../../components/motion/Reveal';
import { Network, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../../../components/ui/Icons';

export const Chapter12Subnet: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] bg-void flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(16,185,129,0.05),transparent)]" />
        <div className="absolute inset-0 technical-grid-dense opacity-15" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal direction="left">
              <div className="rounded-2xl border border-border bg-carbon shadow-2xl p-8 space-y-5">
                <div className="flex items-center justify-between border-b border-border/70 pb-4 font-mono text-[10px] text-steel">
                  <span className="text-white font-bold">zenuxs-subnet — Network Topology</span>
                  <span className="text-emerald">MESH ACTIVE</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[{ name: 'Node-01', region: 'Mumbai', ip: '10.0.1.1', status: 'PRIMARY', load: '23%' },
                    { name: 'Node-02', region: 'Frankfurt', ip: '10.0.2.1', status: 'ACTIVE', load: '18%' },
                    { name: 'Node-03', region: 'Singapore', ip: '10.0.3.1', status: 'ACTIVE', load: '31%' },
                    { name: 'Node-04', region: 'N. Virginia', ip: '10.0.4.1', status: 'STANDBY', load: '0%' },
                  ].map((node) => (
                    <div key={node.name} className="p-4 rounded-xl bg-void border border-border/50 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-bold text-[11px]">{node.name}</span>
                        <span className={`text-[9px] font-bold ${node.status === 'PRIMARY' ? 'text-emerald' : node.status === 'ACTIVE' ? 'text-indigo' : 'text-steel'}`}>{node.status}</span>
                      </div>
                      <span className="text-steel text-[10px] block">{node.region}</span>
                      <span className="text-ash font-mono text-[10px] block">{node.ip}</span>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 rounded-full bg-graphite">
                          <div className={`h-full rounded-full ${Number(node.load) > 25 ? 'bg-ember' : 'bg-emerald'}`} style={{ width: node.load }} />
                        </div>
                        <span className="text-steel text-[10px]">{node.load}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-emerald bg-emerald/10 border border-emerald/25 px-3 py-1 rounded-full">
                <Network className="w-3.5 h-3.5" />
                <span>11 / MINECRAFT — ZENUXS SUBNET</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
                YOUR NETWORK SHOULD NOT BE A BLACK BOX.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-sans text-fog text-base leading-relaxed">
                Subnet bridges multiple Minecraft servers under one network. Cross-server chat, permissions, and real-time state sync.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-carbon border border-border">
                  <span className="text-emerald font-bold font-mono text-xs block mb-1">CROSS-SERVER CHAT</span>
                  <p className="text-fog font-sans text-sm">Unified chat across all connected servers.</p>
                </div>
                <div className="p-4 rounded-xl bg-carbon border border-border">
                  <span className="text-white font-bold font-mono text-xs block mb-1">ZERO-CONFIG PEERING</span>
                  <p className="text-fog font-sans text-sm">Auto-discovery and encrypted node-to-node communication.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <a href="https://github.com/zenuxs-dev/zenuxs-subnet" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald hover:bg-emerald/90 text-black text-sm font-bold shadow-lg transition-all">
                <GithubIcon className="w-4 h-4" /> View on GitHub <ArrowRight className="w-4 h-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
