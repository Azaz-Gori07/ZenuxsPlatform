import React from 'react';
import { Reveal } from '../../../components/motion/Reveal';
import { Database, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../../../components/ui/Icons';

export const Chapter10API: React.FC = () => {
  return (
    <section className="relative w-full h-full min-h-[100svh] bg-carbon flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(218,92,44,0.05),transparent)]" />
        <div className="absolute inset-0 technical-dots opacity-20" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32 space-y-16">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ember bg-ember/10 border border-ember/25 px-3 py-1 rounded-full">
              <Database className="w-3.5 h-3.5" />
              <span>09 / DATA ACCESS — REST / GRAPHQL</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
              DATA MODELS SHOULD NOT OUTLIVE THE CODE THAT DEFINES THEM.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Reveal direction="left">
            <div className="rounded-2xl border border-border bg-void shadow-2xl overflow-hidden font-mono text-xs">
              <div className="flex items-center justify-between px-5 py-3 bg-graphite border-b border-border/80">
                <span className="text-white font-bold">GET /api/v1/users</span>
                <span className="text-emerald">200 OK</span>
              </div>
              <div className="p-6 text-ash space-y-2">
                <p><span className="text-steel italic">{"// Easy-Mongoo auto-generates:"}</span></p>
                <p><span className="text-ember">const</span> users = <span className="text-ember">await</span> api.<span className="text-indigo">get</span>(<span className="text-emerald">'/api/v1/users'</span>)</p>
                <p><span className="text-steel italic">{"// Response:"}</span></p>
                <p>{'{'} <span className="text-ember">"data"</span>: [</p>
                <p className="pl-4">{"{ "} <span className="text-ember">"id"</span>: <span className="text-emerald">"usr_7f3a"</span>, <span className="text-ember">"email"</span>: <span className="text-emerald">"alice@zenuxs.in"</span> {"}"},</p>
                <p>], <span className="text-ember">"meta"</span>: {'{'} <span className="text-ember">"page"</span>: <span className="text-indigo">1</span>, <span className="text-ember">"total"</span>: <span className="text-indigo">247</span> {'}'}</p>
                <p>{'}'}</p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <div className="space-y-6">
              <p className="font-sans text-fog text-base leading-relaxed">
                Easy-Mongoo generates REST and GraphQL endpoints automatically from schema definitions — including validation, pagination, and RBAC.
              </p>
              <div className="space-y-3">
                {[['SCHEMA-DRIVEN ROUTES', 'Define once, get CRUD + GraphQL for free.', 'text-ember'],
                  ['ARGON2ID BUILT IN', 'Password hashing and CSRF protection included.', 'text-white'],
                  ['SCALABLE TO 247+', 'Battle-tested across production deployments.', 'text-indigo']
                ].map(([title, desc, cls]) => (
                  <div key={String(title)} className="p-4 rounded-xl bg-void border border-border">
                    <span className={`${cls} font-bold font-mono text-xs block mb-1`}>{title}</span>
                    <p className="text-fog font-sans text-sm">{desc}</p>
                  </div>
                ))}
              </div>
              <a href="https://github.com/zenuxs-dev/easy-mongoo" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-ember hover:bg-ember-hover text-white text-sm font-semibold shadow-lg transition-all">
                <GithubIcon className="w-4 h-4" /> View Easy-Mongoo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
