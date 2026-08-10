import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollScene } from '../../../components/motion/ScrollScene';
import ShinyPill from '../../../components/originkit/ui/shiny-pill';
import { AlertCircle, Layers, ArrowRight, ShieldAlert, Database, KeyRound, Server } from 'lucide-react';

export const Chapter02Problem: React.FC = () => {
  const [activeProblem, setActiveProblem] = useState(0);

  const problems = [
    {
      title: 'IDENTITY & AUTHENTICATION',
      icon: KeyRound,
      symptom: 'Rewriting OAuth 2.0 PKCE, session management, and refresh token rotation on every single project.',
      penalty: 'Security vulnerabilities, token leakage, weeks wasted on boilerplate.',
      solution: 'Zenuxs Accounts provides ready-to-plug RFC 7636 compliant SSO.'
    },
    {
      title: 'DATABASE & ODM OVERHEAD',
      icon: Database,
      symptom: 'Complex ORMs that introduce runtime bloat, sluggish type-inference, and manual soft-delete implementations.',
      penalty: 'Accidental data loss, brittle migration scripts, slow iteration speed.',
      solution: 'Easy-Mongoo provides zero-boilerplate declarative TypeScript schemas with built-in soft-delete.'
    },
    {
      title: 'CRYPTOGRAPHY & SECRETS',
      icon: ShieldAlert,
      symptom: 'Plain bcrypt with no pepper sealing, leaving database dumps vulnerable to offline GPU hash cracking.',
      penalty: 'Catastrophic password breaches if database leaks.',
      solution: 'HMAX-SECURE combines HMAC-SHA512 pepper sealing with Argon2id memory-hard KDF.'
    },
    {
      title: 'EDGE INFRASTRUCTURE & DNS',
      icon: Server,
      symptom: 'Juggling multiple cloud providers, complex CDN cache rules, and inconsistent DNS propagation.',
      penalty: 'High cold starts, unpredictable latency for global users.',
      solution: 'Zenuxs Hosting & Anycast DNS routes traffic to the nearest edge point in <20ms.'
    }
  ];

  return (
    <ScrollScene id="problem" minHeight="min-h-[100svh]" className="py-24 border-b border-border/60">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-ember uppercase tracking-widest bg-ember/10 border border-ember/25 px-3 py-1 rounded">
            <AlertCircle className="w-3.5 h-3.5 text-ember" />
            <ShinyPill
              text="01 / THE PROBLEM — FRAGMENTED TOOLCHAINS"
              textColor="#da5c2c"
              shineColor="#ffffff"
              speed={2.2}
              font={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 'bold' }}
            />
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white leading-tight">
            SOFTWARE IS NEVER JUST ONE PROBLEM.
          </h2>

          <p className="font-sans text-fog text-base sm:text-lg leading-relaxed font-normal">
            Every software project starts with building the same foundational scaffolding from scratch: authentication, database layers, cryptographic security, and hosting.
          </p>
        </div>

        {/* Interactive Problem Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Problem Selector List */}
          <div className="lg:col-span-5 space-y-3 font-mono text-xs">
            <div className="text-[10px] uppercase tracking-widest text-steel font-bold px-1">
              Repeated Engineering Bottlenecks:
            </div>
            {problems.map((prob, idx) => {
              const Icon = prob.icon;
              const isSelected = activeProblem === idx;
              return (
                <button
                  key={prob.title}
                  onClick={() => setActiveProblem(idx)}
                  className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-carbon border-ember text-white shadow-xl shadow-ember/10'
                      : 'bg-graphite/60 border-border text-ash hover:text-fog hover:border-border-hover'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-ember/20 text-ember' : 'bg-iron text-steel'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold block text-white text-xs">{prob.title}</span>
                      <span className="text-[11px] text-steel line-clamp-1 font-sans mt-0.5">{prob.symptom}</span>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-ember translate-x-1' : 'text-steel'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Deep-Dive Card */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeProblem}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 rounded-xl border border-border bg-carbon space-y-6 font-mono text-xs shadow-2xl relative overflow-hidden"
            >
              {/* Top Accent Stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ember via-indigo to-emerald" />

              <div className="flex items-center justify-between border-b border-border/80 pb-4">
                <div className="flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-ember" />
                  <span className="font-display font-bold text-white text-base sm:text-lg">
                    {problems[activeProblem].title}
                  </span>
                </div>
                <span className="text-[10px] text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 uppercase font-bold">
                  Critical Drag
                </span>
              </div>

              <div className="space-y-4 font-sans text-sm">
                <div>
                  <span className="text-[10px] font-mono text-steel uppercase tracking-wider block mb-1">
                    The Pain Point:
                  </span>
                  <p className="text-fog leading-relaxed">
                    {problems[activeProblem].symptom}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-void border border-rose-500/20 text-rose-300 text-xs">
                  <span className="font-mono font-bold block mb-1">⚠️ SYSTEM PENALTY:</span>
                  <span className="text-ash">{problems[activeProblem].penalty}</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-emerald uppercase tracking-wider block mb-1">
                    The Zenuxs Architecture Answer:
                  </span>
                  <p className="text-white font-medium leading-relaxed">
                    {problems[activeProblem].solution}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between font-mono text-xs text-steel">
                <span>Ecosystem Layer: Modular Standalone</span>
                <span className="text-emerald font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald"></span> Solved by Zenuxs
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </ScrollScene>
  );
};
