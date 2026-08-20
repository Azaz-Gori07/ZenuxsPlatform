import React from 'react';
import { Reveal } from '../../../components/motion/Reveal';
import { Link2, Shield, Zap } from 'lucide-react';

export const Chapter08Hyperlink: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] bg-void flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(218,92,44,0.06),transparent)]" />
        <div className="absolute inset-0 technical-dots opacity-20" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ember bg-ember/10 border border-ember/25 px-3 py-1 rounded-full">
                <Link2 className="w-3.5 h-3.5" />
                <span>07 / INFRASTRUCTURE — HYPERLINK</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
                A URL SHOULD NOT DECAY INTO A 404.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-sans text-fog text-base leading-relaxed">
                Shareable links, permanent storage, and cryptographic access controls — the opposite of disposable links.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-carbon border border-border flex items-start gap-3">
                  <Shield className="w-5 h-5 text-ember shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold font-mono text-xs block mb-1">PKCE PROTECTED</span>
                    <p className="text-fog font-sans text-sm">Cryptographic proof required for link access.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-carbon border border-border flex items-start gap-3">
                  <Zap className="w-5 h-5 text-ember shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold font-mono text-xs block mb-1">FILE DUMP</span>
                    <p className="text-fog font-sans text-sm">Permanent file storage. Upload: <code className="text-ember">zenuxs dump {'<file>'}</code></p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal direction="right" delay={0.15}>
              <div className="rounded-2xl border border-border bg-carbon shadow-2xl p-8 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-border/70 pb-4">
                  <span className="text-white font-bold">Hyperlink Vault</span>
                  <span className="text-ember text-[10px]">EXPIRES: NEVER</span>
                </div>
                <div className="p-5 rounded-xl bg-void border border-border space-y-3">
                  {[['Link ID', '#HL-7F3A2B', 'text-ember'], ['Original', 'https://cdn.zenuxs.in/files/v2/report-q3.pdf', 'text-fog'],
                    ['Short Link', 'https://x.zenuxs.in/7F3A2B', 'text-white'], ['Access', 'AUTHENTICATED ONLY (PKCE)', 'text-emerald'],
                    ['Storage', 'Permanently retained', 'text-white'], ['Downloads', 'No limit', 'text-white']
                  ].map(([label, val, cls]) => (
                    <div key={String(label)} className="flex justify-between items-center">
                      <span className="text-steel text-[10px]">{label}</span>
                      <span className={`${cls} font-bold text-[11px]`}>{val}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-ember/10 border border-ember/20">
                  <span className="text-ember font-bold text-[11px] block mb-1">PERMANENT REDIRECT</span>
                  <p className="text-fog font-sans text-[11px]">301 redirect to storage. No link rot. No expiration.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
