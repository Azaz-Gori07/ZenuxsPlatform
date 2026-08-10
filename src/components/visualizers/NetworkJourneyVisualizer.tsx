import React, { useState, useEffect } from 'react';
import { Globe, Radio, Server, Zap, CheckCircle2 } from 'lucide-react';

export const NetworkJourneyVisualizer: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState(0);

  const edgeLocations = [
    { city: 'Frankfurt (eu-central)', ping: '18ms', status: 'Optimal', dns: '1.2s' },
    { city: 'Singapore (ap-southeast)', ping: '24ms', status: 'Optimal', dns: '1.4s' },
    { city: 'Virginia (us-east)', ping: '14ms', status: 'Optimal', dns: '0.9s' },
    { city: 'London (eu-west)', ping: '16ms', status: 'Optimal', dns: '1.1s' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRegion((prev) => (prev + 1) % edgeLocations.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [edgeLocations.length]);

  return (
    <div className="w-full rounded-xl border border-border bg-graphite p-5 sm:p-6 shadow-2xl space-y-5">
      {/* Title */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-indigo/10 border border-indigo/20 text-indigo">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-base">
              Zenuxs Hosting & DNS — Anycast Edge Journey
            </h4>
            <p className="text-xs text-ash font-mono">Distributed Routing & Sub-Second DNS</p>
          </div>
        </div>
        <span className="text-[11px] font-mono text-indigo bg-indigo/10 px-2.5 py-1 rounded border border-indigo/20 flex items-center gap-1.5">
          <Radio className="w-3 h-3 animate-pulse text-indigo" /> Anycast Active
        </span>
      </div>

      {/* Network Pipeline Visual */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
        <div className="p-3 rounded-lg bg-carbon border border-border space-y-1">
          <span className="text-[10px] text-steel font-bold">STAGE 01</span>
          <p className="text-white font-semibold flex items-center gap-1">
            <Server className="w-3.5 h-3.5 text-ember" /> Source Git
          </p>
          <p className="text-[11px] text-ash">Commit triggers immutable build container</p>
        </div>
        <div className="p-3 rounded-lg bg-carbon border border-border space-y-1">
          <span className="text-[10px] text-steel font-bold">STAGE 02</span>
          <p className="text-white font-semibold flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-indigo" /> Anycast DNS
          </p>
          <p className="text-[11px] text-ash">Zenuxs DNS routes to nearest edge PoP</p>
        </div>
        <div className="p-3 rounded-lg bg-carbon border border-border space-y-1">
          <span className="text-[10px] text-steel font-bold">STAGE 03</span>
          <p className="text-white font-semibold flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-emerald" /> Edge Caching
          </p>
          <p className="text-[11px] text-ash">TLS handshake & static assets cached locally</p>
        </div>
        <div className="p-3 rounded-lg bg-carbon border border-border space-y-1">
          <span className="text-[10px] text-steel font-bold">STAGE 04</span>
          <p className="text-white font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-white" /> End User
          </p>
          <p className="text-[11px] text-ash">Instant sub-30ms global response</p>
        </div>
      </div>

      {/* Real-time Edge Ping Grid */}
      <div className="rounded-lg bg-void border border-border p-4 font-mono text-xs space-y-3">
        <div className="flex justify-between items-center text-[11px] text-steel border-b border-border/40 pb-2">
          <span>Global Telemetry & DNS Propagation</span>
          <span className="text-emerald">All Nodes Healthy</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {edgeLocations.map((loc, idx) => {
            const isCurrent = idx === activeRegion;
            return (
              <div
                key={loc.city}
                onClick={() => setActiveRegion(idx)}
                className={`cursor-pointer flex items-center justify-between p-2.5 rounded border transition-all ${
                  isCurrent
                    ? 'border-indigo bg-indigo/10 text-white'
                    : 'border-border/60 bg-carbon text-ash hover:text-fog'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-indigo animate-ping' : 'bg-emerald'}`} />
                  <span className="font-semibold text-xs">{loc.city}</span>
                </div>
                <div className="flex items-center space-x-3 text-[11px]">
                  <span className="text-indigo font-bold">{loc.ping}</span>
                  <span className="text-steel">DNS: {loc.dns}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
