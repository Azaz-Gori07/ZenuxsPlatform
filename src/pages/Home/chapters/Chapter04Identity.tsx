import React from 'react';
import { Reveal } from '../../../components/motion/Reveal';
import { KeyRound, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../../../components/ui/Icons';

export const Chapter04Identity: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] bg-void flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-ember/5 to-transparent" />
        <div className="absolute inset-0 technical-grid opacity-20" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* LEFT: Visualizer */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal direction="left">
              <div className="rounded-2xl border border-border bg-carbon shadow-2xl p-8 font-mono text-xs space-y-5">
                <div className="flex items-center justify-between border-b border-border/70 pb-4 text-steel">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-white font-bold">OAuth 2.0 PKCE Flow</span>
                  </div>
                  <span className="text-emerald text-[10px]">RFC 7636 Compliant</span>
                </div>

                <div className="space-y-3">
                  {[
                    { step: '01', label: 'Client generates code_verifier + code_challenge', status: 'complete' },
                    { step: '02', label: 'Authorization request with code_challenge (S256)', status: 'complete' },
                    { step: '03', label: 'User authenticates on Zenuxs Accounts', status: 'complete' },
                    { step: '04', label: 'Authorization code returned to callback', status: 'complete' },
                    { step: '05', label: 'Token exchange with code_verifier proof', status: 'active' },
                    { step: '06', label: 'Access + Refresh tokens issued (silent rotation)', status: 'pending' },
                  ].map((item) => (
                    <div key={item.step} className={`p-3 rounded-xl border flex items-center gap-3 ${
                      item.status === 'active' ? 'bg-ember/10 border-ember/30' : item.status === 'complete' ? 'bg-void border-border/60' : 'bg-graphite/30 border-border/30'
                    }`}>
                      <span className={`font-bold text-sm ${
                        item.status === 'active' ? 'text-ember' : item.status === 'complete' ? 'text-emerald' : 'text-steel'
                      }`}>{item.step}</span>
                      <p className={`font-sans text-xs ${
                        item.status === 'active' ? 'text-white font-medium' : item.status === 'complete' ? 'text-fog' : 'text-steel'
                      }`}>{item.label}</p>
                      {item.status === 'active' && <span className="ml-auto w-2 h-2 rounded-full bg-ember animate-pulse" />}
                      {item.status === 'complete' && <span className="ml-auto text-emerald text-[10px] font-bold">DONE</span>}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Copy */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ember bg-ember/10 border border-ember/25 px-3 py-1 rounded-full">
                <KeyRound className="w-3.5 h-3.5" />
                <span>03 / IDENTITY — ZENUXS ACCOUNTS</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
                EVERY PRODUCT STARTS WITH A USER.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-sans text-fog text-base leading-relaxed">
                Universal authentication, OAuth 2.0 PKCE, session management, and role-based access for the entire ecosystem.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-carbon border border-border">
                  <span className="text-ember font-bold font-mono text-xs block mb-1">RFC 7636 PKCE PROTECTED</span>
                  <p className="text-fog font-sans text-sm">Mitigates authorization code interception with SHA-256 challenges.</p>
                </div>
                <div className="p-4 rounded-xl bg-carbon border border-border">
                  <span className="text-white font-bold font-mono text-xs block mb-1">UNIVERSAL SSO</span>
                  <p className="text-fog font-sans text-sm">Seamless login across all Zenuxs platforms with background token refresh.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="flex flex-wrap items-center gap-3 font-mono text-sm">
                <a href="https://zenuxs.in" target="_blank" rel="noopener noreferrer"
                   className="px-5 py-2.5 rounded-lg bg-ember hover:bg-ember-hover text-white font-semibold shadow-lg shadow-ember/20 transition-all flex items-center gap-2">
                  Explore Accounts <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://github.com/zenuxs-dev/zenuxs-oauth" target="_blank" rel="noopener noreferrer"
                   className="px-4 py-2.5 rounded-lg bg-carbon hover:bg-iron text-fog hover:text-white border border-border transition-colors flex items-center gap-2">
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
