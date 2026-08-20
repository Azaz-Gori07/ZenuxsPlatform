import React from 'react';
import { Reveal } from '../../../components/motion/Reveal';
import { Terminal, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../../../components/ui/Icons';

export const Chapter05DevTools: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] bg-graphite flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-emerald/5 to-transparent" />
        <div className="absolute inset-0 technical-dots opacity-20" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-emerald bg-emerald/10 border border-emerald/25 px-3 py-1 rounded-full">
                <Terminal className="w-3.5 h-3.5" />
                <span>04 / DEVELOPER TOOLING — ZENUXS CLI</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
                THE TERMINAL SHOULD NOT FIGHT BACK.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-sans text-fog text-base leading-relaxed">
                Developer-facing tools that bring platform capabilities closer to where developers already work.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-carbon border border-border">
                  <span className="text-emerald font-bold font-mono text-xs block mb-1">PROJECT SCAFFOLDING</span>
                  <p className="text-fog font-sans text-sm">Full-stack TypeScript setups with ODM models, auth, and crypto in one line.</p>
                </div>
                <div className="p-4 rounded-xl bg-carbon border border-border">
                  <span className="text-white font-bold font-mono text-xs block mb-1">RFC 8628 DEVICE FLOW</span>
                  <p className="text-fog font-sans text-sm">Secure browser login without manually copying tokens.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="flex flex-wrap items-center gap-3 font-mono text-sm">
                <a href="https://github.com/zenuxs-dev/zenuxs-cli" target="_blank" rel="noopener noreferrer"
                   className="px-5 py-2.5 rounded-lg bg-emerald hover:bg-emerald/90 text-black font-bold shadow-lg transition-all flex items-center gap-2">
                  <GithubIcon className="w-4 h-4" /> Install Zenuxs CLI
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal direction="right" delay={0.15}>
              <div className="rounded-2xl border border-border bg-carbon shadow-2xl overflow-hidden font-mono text-xs">
                <div className="flex items-center justify-between px-5 py-3 bg-graphite border-b border-border/80 text-steel">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-white font-bold pl-2">Terminal</span>
                  </div>
                  <span className="text-emerald text-[10px]">zenuxs-cli v2.4</span>
                </div>
                <div className="p-6 bg-void space-y-3 min-h-[280px]">
                  <div className="text-fog"><span className="text-emerald font-bold">~ &gt;</span> npm i -g zenuxs-cli</div>
                  <div className="text-steel">added 1 package in 0.8s</div>
                  <div className="text-fog pt-2"><span className="text-emerald font-bold">~ &gt;</span> zenuxs init my-app --template=fullstack-auth</div>
                  <div className="text-steel space-y-1">
                    <div className="flex items-center gap-2"><span className="text-emerald">[1/5]</span><span>Scaffolding...</span><span className="text-emerald ml-auto">done</span></div>
                    <div className="flex items-center gap-2"><span className="text-emerald">[2/5]</span><span>Installing @zenuxs/oauth...</span><span className="text-emerald ml-auto">done</span></div>
                    <div className="flex items-center gap-2"><span className="text-emerald">[3/5]</span><span>Installing easy-mongoo...</span><span className="text-emerald ml-auto">done</span></div>
                    <div className="flex items-center gap-2"><span className="text-emerald">[4/5]</span><span>Configuring HMAX pepper...</span><span className="text-emerald ml-auto">done</span></div>
                    <div className="flex items-center gap-2"><span className="text-emerald">[5/5]</span><span>Initializing git...</span><span className="text-emerald ml-auto">done</span></div>
                  </div>
                  <div className="pt-3 text-fog"><span className="text-emerald font-bold">~ &gt;</span> <span className="text-emerald font-bold">cd my-app && npm run dev</span></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
