import React from 'react';
import { ScrollScene } from '../../../components/motion/ScrollScene';
import { TerminalSimulator } from '../../../components/visualizers/TerminalSimulator';
import GlitchCharReveal from '../../../components/originkit/ui/scrambletext';
import { Terminal, ArrowRight, Check } from 'lucide-react';
import { GithubIcon } from '../../../components/ui/Icons';

export const Chapter05DevTools: React.FC = () => {
  return (
    <ScrollScene id="cli" minHeight="min-h-[100svh]" className="py-24 border-b border-border/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Narrative Side */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-ember uppercase tracking-widest bg-ember/10 border border-ember/25 px-3 py-1 rounded">
            <Terminal className="w-3.5 h-3.5" />
            <span>04 / DEVELOPER TOOLING — ZENUXS CLI</span>
          </div>

          <div className="space-y-1">
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
              THE TERMINAL SHOULD NOT FIGHT BACK.
            </h2>
            <div className="pt-1 font-mono text-xs text-ember">
              <GlitchCharReveal
                words="FROM COMMAND LINE TO FULL PRODUCTION SYSTEM"
                color="#da5c2c"
                font={{ fontSize: '13px', fontWeight: 'bold', fontFamily: 'JetBrains Mono' }}
                enterAnimation={{ mode: 'oneLine', scrambleIntensity: 30 }}
                hoverAnimation={{ type: 'diffusion', lines: 'oneLine' }}
              />
            </div>
          </div>

          <p className="font-sans text-fog text-base sm:text-lg leading-relaxed font-normal">
            Zenuxs builds developer-facing tools that bring platform capabilities closer to the environment where developers already work.
          </p>

          <div className="space-y-2.5 font-mono text-xs text-ash">
            <div className="p-3.5 rounded-lg bg-carbon border border-border">
              <span className="text-ember font-bold block mb-1">PROJECT SCAFFOLDING & MODEL GENERATION</span>
              <p className="text-fog font-sans text-xs">
                Scaffold production full-stack TypeScript setups with database ODM models, authentication, and cryptographic pepper configs in one line.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-carbon border border-border">
              <span className="text-white font-bold block mb-1">RFC 8628 DEVICE FLOW AUTH</span>
              <p className="text-fog font-sans text-xs">
                Log into your developer account securely in the browser without manually copying tokens into environment files.
              </p>
            </div>
          </div>

          <div className="pt-2 font-mono flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/zenuxs-dev/zenuxs-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-ember hover:bg-ember-hover text-white text-xs font-semibold shadow-lg shadow-ember/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Install Zenuxs CLI</span>
            </a>
            <a
              href="https://www.npmjs.com/package/zenuxs-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-carbon hover:bg-iron text-fog hover:text-white border border-border text-xs transition-colors"
            >
              npm package ↗
            </a>
          </div>
        </div>

        {/* Visualizer Canvas */}
        <div className="lg:col-span-7">
          <TerminalSimulator />
        </div>
      </div>
    </ScrollScene>
  );
};
