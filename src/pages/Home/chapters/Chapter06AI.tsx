import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollScene } from '../../../components/motion/ScrollScene';
import ShinyPill from '../../../components/originkit/ui/shiny-pill';
import { Sparkles, Brain, Code2, Cpu, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export const Chapter06AI: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'memory' | 'workspace'>('memory');

  return (
    <ScrollScene id="ai" minHeight="min-h-[100svh]" className="py-24 border-b border-border/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Narrative Side */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-indigo uppercase tracking-widest bg-indigo/10 border border-indigo/25 px-3 py-1 rounded">
            <Sparkles className="w-3.5 h-3.5 text-indigo" />
            <ShinyPill
              text="05 / INTELLIGENCE — AI & WORKSPACES"
              textColor="#6798ff"
              shineColor="#ffffff"
              speed={2.2}
              font={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 'bold' }}
            />
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
            LET THE TOOL MOVE AT THE SPEED OF THE BUILDER.
          </h2>

          <p className="font-sans text-fog text-base sm:text-lg leading-relaxed font-normal">
            Zenuxs builds intelligent developer tools that understand your full project graph, maintain persistent session memory, and automate repetitive coding tasks.
          </p>

          <div className="space-y-2.5 font-mono text-xs text-ash">
            <div className="p-3.5 rounded-lg bg-carbon border border-border">
              <span className="text-indigo font-bold block mb-1">UNIFIED PERSISTENT CONTEXT</span>
              <p className="text-fog font-sans text-xs">
                Zenuxs AI preserves context across prompts, sessions, and tools, eliminating prompt re-explanation.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-carbon border border-border">
              <span className="text-white font-bold block mb-1">ZENUXS.CODE WORKSPACE ENGINE</span>
              <p className="text-fog font-sans text-xs">
                Browser-based coding environment with zero-setup dev containers and intelligent AST refactoring.
              </p>
            </div>
          </div>

          <div className="pt-2 font-mono flex flex-wrap items-center gap-3">
            <a
              href="https://ai.zenuxs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-indigo hover:bg-indigo-hover text-black text-xs font-bold shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Zenuxs AI</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://code.zenuxs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-carbon hover:bg-iron text-fog hover:text-white border border-border text-xs transition-colors"
            >
              Zenuxs.Code ↗
            </a>
          </div>
        </div>

        {/* AI Workspace Visualizer */}
        <div className="lg:col-span-7">
          <div className="rounded-xl border border-border bg-carbon shadow-2xl overflow-hidden font-mono text-xs">
            {/* Header Tabs */}
            <div className="flex items-center justify-between px-4 py-3 bg-graphite border-b border-border/80">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('memory')}
                  className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                    activeTab === 'memory'
                      ? 'bg-indigo text-black font-bold'
                      : 'text-ash hover:text-white bg-carbon'
                  }`}
                >
                  Unified Memory Graph
                </button>
                <button
                  onClick={() => setActiveTab('workspace')}
                  className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                    activeTab === 'workspace'
                      ? 'bg-indigo text-black font-bold'
                      : 'text-ash hover:text-white bg-carbon'
                  }`}
                >
                  AST Refactor Engine
                </button>
              </div>
              <span className="text-[10px] text-emerald flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
                <span>Inference Active</span>
              </span>
            </div>

            {/* Content Area */}
            <div className="p-6 bg-void space-y-4">
              {activeTab === 'memory' ? (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-lg bg-carbon border border-border/80 text-[11px] text-steel">
                    <span className="text-white font-bold block mb-1">Session Entity Graph</span>
                    <div className="grid grid-cols-2 gap-2 text-[10px] pt-1">
                      <div className="p-2 rounded bg-void border border-border text-fog">
                        <span className="text-ember font-bold">● Auth:</span> OAuth PKCE Client
                      </div>
                      <div className="p-2 rounded bg-void border border-border text-fog">
                        <span className="text-emerald font-bold">● DB:</span> Mongo Users Collection
                      </div>
                      <div className="p-2 rounded bg-void border border-border text-fog">
                        <span className="text-indigo font-bold">● Crypto:</span> Argon2id + HMAC
                      </div>
                      <div className="p-2 rounded bg-void border border-border text-fog">
                        <span className="text-amber font-bold">● Edge:</span> DNS Anycast Root
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-carbon border border-border space-y-1">
                    <span className="text-white font-semibold flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-indigo" /> Context Inference Log
                    </span>
                    <p className="text-ash font-sans text-xs">
                      "Injecting Easy-Mongoo UserSchema automatically into authentication handlers without manual model definitions."
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-steel">
                    <span>Generated AST Patch: src/auth/handler.ts</span>
                    <span className="text-emerald font-bold">+28 lines</span>
                  </div>
                  <pre className="p-3.5 rounded-lg bg-graphite border border-border text-white text-[11px] overflow-x-auto leading-relaxed">
{`+ import { HmaxHasher } from '@zenuxs/hmax-secure';
+ import { UserModel } from '@/models/User';
+ 
+ export async function verifySession(token: string) {
+   const user = await UserModel.findById(token.userId);
+   return HmaxHasher.verify(user.hash, user.salt);
+ }`}
                  </pre>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 bg-graphite border-t border-border/80 text-[10px] text-steel flex justify-between">
              <span>Model: Zenuxs CodeGraph 3.0</span>
              <span className="text-indigo font-bold">Latency: 38ms</span>
            </div>
          </div>
        </div>
      </div>
    </ScrollScene>
  );
};
