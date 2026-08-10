import React from 'react';
import { ScrollScene } from '../../../components/motion/ScrollScene';
import { NetworkJourneyVisualizer } from '../../../components/visualizers/NetworkJourneyVisualizer';
import ShinyPill from '../../../components/originkit/ui/shiny-pill';
import PixelLedDisplay from '../../../components/originkit/ui/pixel-led-display';
import { Globe, ArrowRight, Radio } from 'lucide-react';

export const Chapter09Infra: React.FC = () => {
  return (
    <ScrollScene id="infra" minHeight="min-h-[100svh]" className="py-24 border-b border-border/60">
      <div className="space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Narrative Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 font-mono text-xs text-indigo uppercase tracking-widest bg-indigo/10 border border-indigo/25 px-3 py-1 rounded">
              <Radio className="w-3.5 h-3.5 text-indigo" />
              <ShinyPill
                text="08 / INFRASTRUCTURE — HOSTING & ANYCAST DNS"
                textColor="#6798ff"
                shineColor="#ffffff"
                speed={2.2}
                font={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 'bold' }}
              />
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
              CODE IS ONLY THE BEGINNING.
            </h2>

            <p className="font-sans text-fog text-base sm:text-lg leading-relaxed font-normal">
              Great software needs reliable delivery. Zenuxs provides edge deployment infrastructure and distributed Anycast DNS for minimal global latency and automated failover.
            </p>

            <div className="space-y-2.5 font-mono text-xs text-ash">
              <div className="p-3.5 rounded-lg bg-carbon border border-border">
                <span className="text-indigo font-bold block mb-1">ANYCAST MULTI-POINT RESOLUTION</span>
                <p className="text-fog font-sans text-xs">
                  Queries are routed directly to the geographically closest node, providing sub-15ms DNS lookups globally.
                </p>
              </div>
              <div className="p-3.5 rounded-lg bg-carbon border border-border">
                <span className="text-white font-bold block mb-1">ZERO-CONFIG EDGE HOSTING</span>
                <p className="text-fog font-sans text-xs">
                  Instant static and dynamic web app deployments with automated SSL certificates and DDoS shielding.
                </p>
              </div>
            </div>

            <div className="pt-2 font-mono flex flex-wrap items-center gap-3">
              <a
                href="https://host.zenuxs.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-indigo hover:bg-indigo-hover text-black text-xs font-bold shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Zenuxs Hosting</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://dns.zenuxs.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-carbon hover:bg-iron text-fog hover:text-white border border-border text-xs transition-colors"
              >
                Zenuxs DNS ↗
              </a>
            </div>
          </div>

          {/* Visualizer Canvas */}
          <div className="lg:col-span-7 space-y-4">
            <NetworkJourneyVisualizer />
            <PixelLedDisplay
              text="EDGE NODES: FRANKFURT [12ms] • TOKYO [18ms] • SAN FRANCISCO [14ms] • SINGAPORE [16ms] • MUMBAI [8ms]"
              ledColor="#6798ff"
              dimColor="#0e131d"
              pixelSize={3}
              speed={40}
            />
          </div>
        </div>
      </div>
    </ScrollScene>
  );
};
