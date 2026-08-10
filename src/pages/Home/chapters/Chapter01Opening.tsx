import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DottedBg2 from '../../../components/originkit/ui/chromatic-waves';
import { MagneticButton } from '../../../components/motion/MagneticButton';
import { GithubIcon } from '../../../components/ui/Icons';
import {
  ArrowRight,
  Sparkles,
  KeyRound,
  Shield,
  Database,
  Terminal,
  Globe,
  Box,
  Copy,
  Check,
  Activity,
  Code2
} from 'lucide-react';

export const Chapter01Opening: React.FC = () => {
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [activeModule, setActiveModule] = useState(0);

  const heroModules = [
    {
      id: 'accounts',
      name: 'Zenuxs Accounts',
      category: 'Identity',
      desc: 'Universal OAuth 2.0 + PKCE with silent token rotation',
      badge: 'RFC 7636',
      icon: KeyRound,
      color: '#da5c2c',
      url: 'https://zenuxs.in'
    },
    {
      id: 'hmax',
      name: 'HMAX-SECURE',
      category: 'Security',
      desc: 'Layered HMAC-SHA512 pepper sealing & Argon2id KDF',
      badge: 'Zero Deps',
      icon: Shield,
      color: '#da5c2c',
      url: 'https://hmax.zenuxs.in'
    },
    {
      id: 'easy-mongoo',
      name: 'Easy-Mongoo',
      category: 'Data',
      desc: 'Ergonomic TypeScript MongoDB ODM with soft-delete',
      badge: 'npm active',
      icon: Database,
      color: '#10b981',
      url: 'https://easy-mongoo.zenuxs.in'
    },
    {
      id: 'code',
      name: 'Zenuxs.Code',
      category: 'AI / IDE',
      desc: 'The AI Operating System with unified memory graph',
      badge: 'Context Engine',
      icon: Code2,
      color: '#6798ff',
      url: 'https://code.zenuxs.in'
    }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install -g zenuxs-cli');
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-void border-b border-border/60">
      {/* 1. CHROMATIC WAVES BACKGROUND SHADER */}
      <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
        <DottedBg2
          frequency={1.5}
          speed={2.2}
          cellSize={30}
          gamma={5.5}
          paletteBias={-2.2}
          bgColor="#000000"
          colors={[
            '#0a0a0a',
            '#141414',
            '#da5c2c',
            '#2a2a2a',
            '#6798ff',
            '#10b981',
            '#ffffff'
          ]}
        />
      </div>

      {/* Atmospheric Vignette & Radial Light Mask */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-b from-void/40 via-transparent to-void/90" />
      <div className="absolute inset-0 z-1 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_20%,#000000_90%)]" />

      {/* Subtle Technical Grid Lines */}
      <div className="absolute inset-0 z-1 technical-grid opacity-30 pointer-events-none" />

      {/* Top Spacer to account for fixed navbar */}
      <div className="h-16 sm:h-20" />

      {/* 2. MAIN ASYMMETRIC HERO COMPOSITION */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Architectural Editorial Typography (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Eyebrow / System Pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ember bg-ember/10 border border-ember/25 px-3 py-1 rounded"
            >
              <span className="w-2 h-2 rounded-full bg-ember animate-pulse" />
              <span>ZENUXS PLATFORM</span>
              <span className="text-steel">•</span>
              <span className="text-fog">OPEN TECHNOLOGY ECOSYSTEM</span>
            </motion.div>

            {/* Massive Display Architectural Headline */}
            <div className="space-y-0.5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="block font-display font-bold text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-white tracking-tighter leading-[0.88]">
                  BUILD
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="block font-display font-bold text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-white tracking-tighter leading-[0.88] text-transparent bg-clip-text bg-gradient-to-r from-white via-paper to-ash">
                  BEYOND
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 sm:gap-5"
              >
                <span className="block font-display font-bold text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-white tracking-tighter leading-[0.88]">
                  THE TOOL.
                </span>
                <span className="hidden sm:inline-block w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-ember shadow-lg shadow-ember/50" />
              </motion.div>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="font-sans text-fog text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal"
            >
              Zenuxs is an open-source ecosystem of identity platforms, cryptographic security, database wrappers, AI operating systems, and developer infrastructure built to eliminate repeated boilerplate fatigue.
            </motion.p>

            {/* Actions & Terminal Quickstart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="flex flex-wrap items-center gap-4 pt-2 font-mono"
            >
              <MagneticButton>
                <a
                  href="#ecosystem"
                  className="px-6 py-3.5 rounded bg-ember hover:bg-ember-hover text-white text-xs sm:text-sm font-semibold shadow-2xl shadow-ember/25 border border-ember/40 flex items-center gap-2 transition-all cursor-pointer group"
                >
                  <span>Explore the ecosystem</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="https://github.com/zenuxs-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded bg-carbon hover:bg-iron text-paper hover:text-white text-xs sm:text-sm font-semibold border border-border flex items-center gap-2 transition-all cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span>View source ↗</span>
                </a>
              </MagneticButton>

              {/* Quick Terminal Copy Pill */}
              <div className="flex items-center gap-2 bg-void/80 border border-border/80 rounded-lg px-3 py-2 text-xs text-fog">
                <span className="text-ember font-bold">~ ❯</span>
                <span className="text-ash select-all">npm i -g zenuxs-cli</span>
                <button
                  onClick={handleCopy}
                  className="p-1 rounded hover:bg-iron text-steel hover:text-white transition-colors cursor-pointer"
                  title="Copy command"
                >
                  {copiedCmd ? <Check className="w-3.5 h-3.5 text-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Interactive Ecosystem Control Matrix (5 Cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-xl border border-border bg-graphite/90 backdrop-blur-xl p-5 sm:p-6 shadow-2xl space-y-4 font-mono text-xs relative overflow-hidden"
            >
              {/* Card Window Bar */}
              <div className="flex items-center justify-between border-b border-border/70 pb-3 text-steel">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-white font-bold pl-2 text-xs">
                    Ecosystem Matrix
                  </span>
                </div>
                <span className="flex items-center gap-1 text-[11px] text-emerald">
                  <Activity className="w-3 h-3 text-emerald animate-pulse" />
                  <span>Online (10/10)</span>
                </span>
              </div>

              {/* Module Selector Chips */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                {heroModules.map((mod, idx) => {
                  const Icon = mod.icon;
                  const isCurrent = activeModule === idx;
                  return (
                    <button
                      key={mod.id}
                      onClick={() => setActiveModule(idx)}
                      className={`p-3 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isCurrent
                          ? 'bg-carbon border-ember text-white shadow-lg'
                          : 'bg-void/60 border-border/60 text-ash hover:text-fog hover:border-border'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <Icon className="w-4 h-4" style={{ color: mod.color }} />
                        <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-iron border border-border/60 text-steel">
                          {mod.category}
                        </span>
                      </div>
                      <span className="font-display font-bold text-xs truncate block text-white">
                        {mod.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Module Live Display Frame */}
              <div className="p-4 rounded-lg bg-void border border-border/80 space-y-2.5">
                <div className="flex items-center justify-between text-[11px] text-steel">
                  <span className="text-ember font-bold font-mono uppercase">
                    ACTIVE INSPECTOR: {heroModules[activeModule].name}
                  </span>
                  <span className="text-indigo bg-indigo/10 px-2 py-0.5 rounded border border-indigo/20 text-[10px]">
                    {heroModules[activeModule].badge}
                  </span>
                </div>

                <p className="font-sans text-fog text-xs leading-relaxed">
                  {heroModules[activeModule].desc}
                </p>

                <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[11px]">
                  <span className="text-steel">Permissive License</span>
                  <a
                    href={heroModules[activeModule].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ember hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>Launch Subsystem</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Footer System Specs */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-ash pt-1">
                <div className="p-2 rounded bg-carbon border border-border/60">
                  <span className="text-white font-bold block">100%</span>
                  <span className="text-steel">TypeScript</span>
                </div>
                <div className="p-2 rounded bg-carbon border border-border/60">
                  <span className="text-white font-bold block">0 Deps</span>
                  <span className="text-steel">HMAX Crypto</span>
                </div>
                <div className="p-2 rounded bg-carbon border border-border/60">
                  <span className="text-white font-bold block">Anycast</span>
                  <span className="text-steel">Global DNS</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* 3. HERO FOOTER TELEMETRY STRIP */}
      <div className="relative z-10 w-full bg-void/80 backdrop-blur border-t border-border/60 py-3.5 px-4 sm:px-6 lg:px-12 font-mono text-[11px] text-steel">
        <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-fog">
              <Terminal className="w-3.5 h-3.5 text-ember" />
              <span>zenuxs-cli v2.4</span>
            </span>
            <span>•</span>
            <span className="text-emerald flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald animate-ping" />
              <span>Identity & Security: Live</span>
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-4 text-ash">
            <span>RFC 7636 (PKCE)</span>
            <span>•</span>
            <span>Argon2id + HMAC-512</span>
            <span>•</span>
            <span className="text-white font-bold">github.com/zenuxs-dev</span>
          </div>
        </div>
      </div>
    </section>
  );
};
