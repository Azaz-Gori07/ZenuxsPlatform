import React from 'react';
import { ContinueChat } from '../../components/ai/ContinueChat';
import { Reveal } from '../../components/motion/Reveal';
import { Sparkles, Terminal, Cpu, Database, ShieldCheck, Zap } from 'lucide-react';

export const AIPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-void pt-6 pb-20">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Header Title Banner */}
        <div className="space-y-4 pt-4">
          <Reveal>
            <div className="inline-flex items-center space-x-2 font-mono text-xs text-indigo uppercase tracking-widest bg-indigo/10 border border-indigo/25 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-indigo" />
              <span>ZENUXS AI & INTELLIGENCE WORKBENCH</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-6xl text-white tracking-tight">
              Continue AI Assistant
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="font-sans text-fog text-base sm:text-lg max-w-3xl leading-relaxed">
              Integrated developer intelligence layer powered by continuous state machine execution, real-time token streaming, and cross-project AST context awareness.
            </p>
          </Reveal>
        </div>

        {/* Main Grid: Context Telemetry + Continue Chat */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Telemetry Panel */}
          <div className="lg:col-span-4 space-y-6">
            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-border bg-carbon p-6 space-y-6 shadow-xl font-mono text-xs">
                <div className="flex items-center justify-between border-b border-border/80 pb-4">
                  <h3 className="font-display font-bold text-white text-base">Session Entity Graph</h3>
                  <span className="text-emerald flex items-center gap-1.5 text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-emerald animate-ping" />
                    LIVE
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-void border border-border/80 space-y-1">
                    <span className="text-steel text-[10px] uppercase block">Active Memory Graph</span>
                    <p className="text-white font-bold text-xs">OAuth 2.0 PKCE + UserSchema</p>
                  </div>
                  <div className="p-3 rounded-xl bg-void border border-border/80 space-y-1">
                    <span className="text-steel text-[10px] uppercase block">Crypto Pipeline</span>
                    <p className="text-ember font-bold text-xs">Argon2id Pepper Hashing Active</p>
                  </div>
                  <div className="p-3 rounded-xl bg-void border border-border/80 space-y-1">
                    <span className="text-steel text-[10px] uppercase block">Execution Mode</span>
                    <p className="text-indigo font-bold text-xs">Continuous Streaming Engine</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/80 space-y-3">
                  <span className="text-steel text-[10px] uppercase block font-bold">Capabilities</span>
                  <ul className="space-y-2 text-fog font-sans text-xs">
                    <li className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-ember shrink-0" />
                      <span>Zero-blank wait time on message dispatch</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-indigo shrink-0" />
                      <span>Continuous Thinking → Streaming → Complete lifecycle</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald shrink-0" />
                      <span>Constant-time HMAX crypto verification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Main Continue Chat Workspace */}
          <div className="lg:col-span-8">
            <Reveal delay={0.25}>
              <ContinueChat />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};
