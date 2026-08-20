import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Reveal } from '../../../components/motion/Reveal';
import Vortex from '../../../components/originkit/ui/tornado';
import { ArrowRight, Shield, Zap, Terminal, Code2, Network, Database, CheckCircle2, Copy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Chapter01Opening: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('azazgori786@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.hero-module-card', {
        y: 20, opacity: 0, duration: 0.5, stagger: 0.08, delay: 0.5,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const heroModules = [
    { name: 'Zenuxs Accounts', desc: 'OAuth 2.0 + PKCE', icon: Shield, accent: 'text-ember' },
    { name: 'Zenuxs AI', desc: 'Persistent Memory', icon: Zap, accent: 'text-indigo' },
    { name: 'Easy-Mongoo', desc: 'MongoDB Wrapper', icon: Database, accent: 'text-emerald' },
    { name: 'Zenuxs CLI', desc: 'Terminal Tooling', icon: Terminal, accent: 'text-amber-400' },
    { name: 'Zenuxs.Code', desc: 'AI Workspace', icon: Code2, accent: 'text-indigo' },
    { name: 'HMAX-SECURE', desc: 'Crypto Primitives', icon: Shield, accent: 'text-ember' },
  ];

  return (
    <div ref={containerRef} className="relative w-full">
      {/* HERO SECTION */}
      <section className="relative w-full h-[100vh] flex items-center">
        {/* Tornado — centered on mobile, nudged right on desktop */}
        <div className="absolute inset-0 pointer-events-none lg:translate-x-1/6" aria-hidden="true">
          <Vortex
            background="transparent"
            topRadius={280}
            waistRadius={40}
            bottomRadius={800}
            twist={2.5}
            zoom={75}
            speed={10}
            lineOptions={{ count: 160, color: '#6798ff', glow: 8 }}
            dots
            dotOptions={{ count: 4000, size: 16, color: '#da5c2c', glow: 8, flicker: 8 }}
            comets
            cometOptions={{ count: 8, speed: 5, color: '#F9731A', glow: 6, tail: 16, delay: 6, collide: 6 }}
          />
        </div>

        {/* Hero Content — centered on mobile, left-aligned on desktop */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-20">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl mx-auto lg:mx-0 lg:max-w-3xl space-y-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ember bg-transparent border border-ember/25 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Unified Developer Ecosystem</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight">
                BUILD THE SYSTEM.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ember to-ember/60">
                  NOT THE SAME SYSTEM TWICE.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="font-sans text-fog text-base sm:text-lg leading-relaxed max-w-xl">
                A developer-first ecosystem built on cryptographic rigor, modularity, and open-source transparency.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 font-mono text-sm">
                <a href="https://zenuxs.in" target="_blank" rel="noopener noreferrer"
                   className="px-6 py-3 rounded-lg bg-transparent hover:bg-ember/10 border border-ember/40 text-ember hover:text-white font-semibold transition-all flex items-center gap-2">
                  Start Building <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://github.com/zenuxs-dev" target="_blank" rel="noopener noreferrer"
                   className="px-5 py-3 rounded-lg bg-transparent hover:bg-white/5 text-fog hover:text-white border border-border transition-colors flex items-center gap-2">
                  GitHub
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
                <span className="text-steel font-mono text-xs">Founder: Azaz Ahmad</span>
                <span className="text-border">|</span>
                <span className="text-steel font-mono text-xs">azazgori786@gmail.com</span>
                <button onClick={copyEmail}
                        className="p-1 rounded bg-transparent hover:bg-white/5 border border-border text-ash hover:text-white transition-colors cursor-pointer"
                        title="Copy email">
                  {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MODULE CARDS — outside hero, right after it */}
      <section className="relative w-full bg-void py-14 sm:py-16">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {heroModules.map((mod) => {
              const Icon = mod.icon;
              return (
                <div key={mod.name} className="hero-module-card p-4 rounded-xl bg-transparent border border-white/5 hover:border-ember/40 transition-all">
                  <Icon className={`w-5 h-5 ${mod.accent} mb-2`} />
                  <span className="text-white font-display font-bold text-xs block">{mod.name}</span>
                  <span className="text-steel font-mono text-[10px]">{mod.desc}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
