import React from 'react';
import { ScrollScene } from '../../../components/motion/ScrollScene';
import { AdvancedAuthBridge } from '../../../components/visualizers/AdvancedAuthBridge';
import ShinyPill from '../../../components/originkit/ui/shiny-pill';
import { Box, ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../../../components/ui/Icons';

export const Chapter10Plugins: React.FC = () => {
  return (
    <ScrollScene id="plugins" minHeight="min-h-[100svh]" className="py-24 border-b border-border/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Narrative Side */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-emerald uppercase tracking-widest bg-emerald/10 border border-emerald/25 px-3 py-1 rounded">
            <Box className="w-3.5 h-3.5 text-emerald" />
            <ShinyPill
              text="09 / EXTENSIONS — MINECRAFT & PLUGINS"
              textColor="#10b981"
              shineColor="#ffffff"
              speed={2.2}
              font={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 'bold' }}
            />
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
            THE ECOSYSTEM DOESN'T STOP AT THE WEB.
          </h2>

          <p className="font-sans text-fog text-base sm:text-lg leading-relaxed font-normal">
            Zenuxs Plugins extends the ecosystem into Minecraft servers, authentication bridges, web administration dashboards, and community-driven server tooling.
          </p>

          <div className="space-y-2.5 font-mono text-xs text-ash">
            <div className="p-3.5 rounded-lg bg-carbon border border-border">
              <span className="text-emerald font-bold block mb-1">ADVANCEDAUTH SERVER BRIDGE</span>
              <p className="text-fog font-sans text-xs">
                Synchronizes in-game Minecraft players with external web authentication, 2FA email recovery, and real-time session telemetry.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-carbon border border-border">
              <span className="text-white font-bold block mb-1">REST API & WEBHOOK EVENTS</span>
              <p className="text-fog font-sans text-xs">
                Receive instant events when players register, verify, or change security settings on the server.
              </p>
            </div>
          </div>

          <div className="pt-2 font-mono flex flex-wrap items-center gap-3">
            <a
              href="https://plugins.zenuxs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-emerald hover:bg-emerald/90 text-black text-xs font-bold shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Plugins</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/zenuxs-dev/AdvancedAuth"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-carbon hover:bg-iron text-fog hover:text-white border border-border text-xs transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>AdvancedAuth Repo ↗</span>
            </a>
          </div>
        </div>

        {/* Visualizer Canvas */}
        <div className="lg:col-span-7">
          <AdvancedAuthBridge />
        </div>
      </div>
    </ScrollScene>
  );
};
