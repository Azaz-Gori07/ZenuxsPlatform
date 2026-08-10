import React from 'react';
import { ScrollScene } from '../../../components/motion/ScrollScene';
import { HmaxCryptoPipeline } from '../../../components/visualizers/HmaxCryptoPipeline';
import GlitchCharReveal from '../../../components/originkit/ui/scrambletext';
import { Shield, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../../../components/ui/Icons';

export const Chapter08Security: React.FC = () => {
  return (
    <ScrollScene id="hmax" minHeight="min-h-[100svh]" className="py-24 border-b border-border/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Narrative Side */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-ember uppercase tracking-widest bg-ember/10 border border-ember/25 px-3 py-1 rounded">
            <Shield className="w-3.5 h-3.5" />
            <span>07 / SECURITY — HMAX-SECURE</span>
          </div>

          <div className="space-y-1">
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
              SECURITY BELONGS UNDER THE FLOOR.
            </h2>
            <div className="pt-1 font-mono text-xs text-emerald">
              <GlitchCharReveal
                words="HMAC-SHA512 PEPPER + ARGON2id MEMORY-HARD KDF"
                color="#10b981"
                font={{ fontSize: '13px', fontWeight: 'bold', fontFamily: 'JetBrains Mono' }}
                enterAnimation={{ mode: 'oneLine', scrambleIntensity: 40 }}
                hoverAnimation={{ type: 'wave', lines: 'oneLine' }}
              />
            </div>
          </div>

          <p className="font-sans text-fog text-base sm:text-lg leading-relaxed font-normal">
            Security should not be a decorative layer added after the application is finished. Zenuxs builds cryptographic security as a fundamental infrastructure primitive.
          </p>

          <div className="space-y-2.5 font-mono text-xs text-ash">
            <div className="p-3.5 rounded-lg bg-carbon border border-border">
              <span className="text-ember font-bold block mb-1">HMAC-SHA512 + ARGON2id PEPPERING</span>
              <p className="text-fog font-sans text-xs">
                Two-stage key derivation ensures passwords remain impossible to crack offline even if your database is completely breached.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-carbon border border-border">
              <span className="text-white font-bold block mb-1">ZERO RUNTIME DEPENDENCIES</span>
              <p className="text-fog font-sans text-xs">
                Built strictly on Node.js and Web Crypto standards with zero third-party attack vectors.
              </p>
            </div>
          </div>

          <div className="pt-2 font-mono flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/zenuxs-dev/HMAX-SECURE"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-ember hover:bg-ember-hover text-white text-xs font-semibold shadow-lg shadow-ember/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>HMAX-SECURE Repo</span>
            </a>
            <a
              href="https://hmax.zenuxs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-carbon hover:bg-iron text-fog hover:text-white border border-border text-xs transition-colors"
            >
              Security Specs ↗
            </a>
          </div>
        </div>

        {/* Visualizer Canvas */}
        <div className="lg:col-span-7">
          <HmaxCryptoPipeline />
        </div>
      </div>
    </ScrollScene>
  );
};
