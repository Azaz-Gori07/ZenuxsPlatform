import React from 'react';
import { ScrollScene } from '../../../components/motion/ScrollScene';
import { OAuthFlowVisualizer } from '../../../components/visualizers/OAuthFlowVisualizer';
import ShinyPill from '../../../components/originkit/ui/shiny-pill';
import { KeyRound, Shield, ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../../../components/ui/Icons';

export const Chapter04Identity: React.FC = () => {
  return (
    <ScrollScene id="accounts" minHeight="min-h-[100svh]" className="py-24 border-b border-border/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Narrative Side */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-ember uppercase tracking-widest bg-ember/10 border border-ember/25 px-3 py-1 rounded">
            <KeyRound className="w-3.5 h-3.5 text-ember" />
            <ShinyPill
              text="03 / IDENTITY — ZENUXS ACCOUNTS"
              textColor="#da5c2c"
              shineColor="#ffffff"
              speed={2.0}
              font={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 'bold' }}
            />
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
            EVERY PRODUCT STARTS WITH A USER.
          </h2>

          <p className="font-sans text-fog text-base sm:text-lg leading-relaxed font-normal">
            Before building features, you need identity. Zenuxs Accounts provides universal authentication, OAuth 2.0 PKCE, session management, and role-based access for the entire ecosystem.
          </p>

          <div className="space-y-2.5 font-mono text-xs text-ash">
            <div className="p-3.5 rounded-lg bg-carbon border border-border">
              <span className="text-ember font-bold block mb-1">RFC 7636 • PKCE PROTECTED</span>
              <p className="text-fog font-sans text-xs">
                Mitigates authorization code interception attacks on public and single-page apps with SHA-256 code challenges.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-carbon border border-border">
              <span className="text-white font-bold block mb-1">UNIVERSAL SSO & SILENT ROTATION</span>
              <p className="text-fog font-sans text-xs">
                Seamless login session across all Zenuxs platforms with background token refresh.
              </p>
            </div>
          </div>

          <div className="pt-2 font-mono flex flex-wrap items-center gap-3">
            <a
              href="https://zenuxs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-ember hover:bg-ember-hover text-white text-xs font-semibold shadow-lg shadow-ember/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Zenuxs Accounts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://zenuxs.in/developers"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-carbon hover:bg-iron text-fog hover:text-white border border-border text-xs transition-colors flex items-center gap-1"
            >
              <span>Developer Docs ↗</span>
            </a>
          </div>
        </div>

        {/* Visualizer Canvas */}
        <div className="lg:col-span-7">
          <OAuthFlowVisualizer />
        </div>
      </div>
    </ScrollScene>
  );
};
