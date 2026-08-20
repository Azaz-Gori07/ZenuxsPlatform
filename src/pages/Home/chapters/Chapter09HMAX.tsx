import React from 'react';
import { Reveal } from '../../../components/motion/Reveal';
import { ShieldCheck, Zap, KeyRound } from 'lucide-react';
import { GithubIcon } from '../../../components/ui/Icons';

export const Chapter09HMAX: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] bg-graphite flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-1/2 h-2/3 bg-gradient-to-tl from-emerald/5 to-transparent" />
        <div className="absolute inset-0 technical-grid opacity-20" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-emerald bg-emerald/10 border border-emerald/25 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>08 / SECURITY — HMAX</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
                THE SECURITY LAYER SHOULD NEVER BE THE SLOWEST PART.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-sans text-fog text-base leading-relaxed">
                Universal cryptographic security middleware — works in backend, frontend, edge, and Minecraft plugins.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-carbon border border-border flex items-start gap-3">
                  <KeyRound className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold font-mono text-xs block mb-1">HMAC PEPPER AUTH</span>
                    <p className="text-fog font-sans text-sm">Shared-secret pepper authentication. Zero database dependency.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-carbon border border-border flex items-start gap-3">
                  <Zap className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold font-mono text-xs block mb-1">ARGON2ID READY</span>
                    <p className="text-fog font-sans text-sm">Resistant to GPU brute-force and timing attacks.</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <a href="https://github.com/zenuxs-dev/hmax" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald hover:bg-emerald/90 text-black text-sm font-bold shadow-lg transition-all">
                <GithubIcon className="w-4 h-4" /> View HMAX Docs
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal direction="right" delay={0.15}>
              <div className="rounded-2xl border border-border bg-carbon shadow-2xl overflow-hidden font-mono text-xs">
                <div className="flex items-center justify-between px-5 py-3 bg-graphite border-b border-border/80">
                  <span className="text-white font-bold">hmax.middleware.ts</span>
                  <span className="text-emerald text-[10px]">TypeScript</span>
                </div>
                <div className="p-6 bg-void text-ash space-y-1 leading-relaxed">
                  <p><span className="text-steel italic">import {"{ HMACAuth }"} from '@zenuxs/hmax'</span></p>
                  <p />
                  <p><span className="text-ember">export const</span> <span className="text-indigo">pepperAuth</span> = HMACAuth.fromEnv()</p>
                  <p className="pl-4">.pepper(<span className="text-emerald">process.env.HMAC_PEPPER</span>)</p>
                  <p className="pl-4">.algorithm(<span className="text-emerald">'sha512'</span>)</p>
                  <p className="pl-4">.ttl(<span className="text-indigo">3600</span>)</p>
                  <p className="pl-4">.middleware()</p>
                  <p />
                  <p><span className="text-ember">export const</span> <span className="text-indigo">passwordHash</span> = {'{'}</p>
                  <p className="pl-4">hash: <span className="text-ember">async</span> (pw: <span className="text-indigo">string</span>) =&gt;</p>
                  <p className="pl-8">HMACAuth.argon2id(pw, {'{'} t: <span className="text-indigo">3</span>, m: <span className="text-indigo">65536</span>, p: <span className="text-indigo">4</span> {'}'}),</p>
                  <p className="pl-4">verify: <span className="text-ember">async</span> (pw: <span className="text-indigo">string</span>, hash: <span className="text-indigo">string</span>) =&gt;</p>
                  <p className="pl-8">HMACAuth.argon2idVerify(pw, hash),</p>
                  <p>{'}'}</p>
                  <p />
                  <p><span className="text-ember">export const</span> <span className="text-indigo">csrfProtect</span> = HMACAuth.<span className="text-indigo">csrfToken</span>({'{'}</p>
                  <p className="pl-4">cookie: <span className="text-emerald">'_zenuxs_csrf'</span>,</p>
                  <p className="pl-4">header: <span className="text-emerald">'x-csrf-token'</span>,</p>
                  <p className="pl-4">sameSite: <span className="text-emerald">'lax'</span>,</p>
                  <p className="pl-4">secure: <span className="text-ember">true</span>,</p>
                  <p>{'})'})</p>
                </div>
                <div className="px-5 py-3 bg-graphite border-t border-border/80 text-[10px] text-steel flex justify-between">
                  <span>@zenuxs/hmax v3.2.0</span>
                  <span className="text-emerald font-bold">AUDITED — 0 VULNERABILITIES</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
