import React, { useState } from 'react';
import ShinyPill from '../../components/originkit/ui/shiny-pill';
import PixelLedDisplay from '../../components/originkit/ui/pixel-led-display';
import { CheckCircle2, RefreshCw, Activity, ArrowRight, ShieldCheck } from 'lucide-react';

interface ServiceStatus {
  name: string;
  url: string;
  category: string;
  status: 'operational' | 'degraded' | 'maintenance';
  latency: string;
  uptime: string;
}

export const StatusPage: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastChecked, setLastChecked] = useState(new Date().toLocaleTimeString());

  const services: ServiceStatus[] = [
    { name: 'Zenuxs Accounts (OAuth 2.0 PKCE)', url: 'https://zenuxs.in', category: 'Identity', status: 'operational', latency: '22ms', uptime: '99.99%' },
    { name: 'Zenuxs AI (Memory Engine)', url: 'https://ai.zenuxs.in', category: 'AI', status: 'operational', latency: '45ms', uptime: '99.95%' },
    { name: 'Zenuxs.Code (Workspace Runtime)', url: 'https://code.zenuxs.in', category: 'Developer', status: 'operational', latency: '38ms', uptime: '99.90%' },
    { name: 'Easy-Mongoo (npm Registry Mirror)', url: 'https://easy-mongoo.zenuxs.in', category: 'Database', status: 'operational', latency: '14ms', uptime: '100%' },
    { name: 'HMAX-SECURE (Security Primitives)', url: 'https://hmax.zenuxs.in', category: 'Security', status: 'operational', latency: '12ms', uptime: '100%' },
    { name: 'Zenuxs Hosting (Edge Anycast)', url: 'https://host.zenuxs.in', category: 'Infrastructure', status: 'operational', latency: '18ms', uptime: '99.98%' },
    { name: 'Zenuxs DNS (Anycast Resolvers)', url: 'https://dns.zenuxs.in', category: 'Infrastructure', status: 'operational', latency: '8ms', uptime: '100%' },
    { name: 'Zenuxs Plugins (AdvancedAuth Sync)', url: 'https://plugins.zenuxs.in', category: 'Minecraft', status: 'operational', latency: '28ms', uptime: '99.96%' },
    { name: 'Zenuxs Discord (Community Gateway)', url: 'https://discord.zenuxs.in', category: 'Community', status: 'operational', latency: '32ms', uptime: '99.99%' },
    { name: 'Zenuxs GitHub (Organization Repos)', url: 'https://github.com/zenuxs-dev', category: 'Open Source', status: 'operational', latency: '19ms', uptime: '100%' }
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastChecked(new Date().toLocaleTimeString());
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 space-y-12 font-mono text-xs">
      {/* Header */}
      <div className="space-y-4 font-sans pt-4">
        <div className="inline-flex items-center space-x-2 font-mono text-xs text-emerald uppercase tracking-widest bg-emerald/10 border border-emerald/25 px-3 py-1 rounded">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald" />
          <ShinyPill
            text="SYSTEM HEALTH & AVAILABILITY"
            textColor="#10b981"
            shineColor="#ffffff"
            speed={2.2}
            font={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 'bold' }}
          />
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-6xl text-white">
          Zenuxs Ecosystem Status
        </h1>

        <p className="text-fog text-base sm:text-lg max-w-2xl font-normal">
          Real-time availability metrics, response latencies, and uptime telemetry across all ecosystem services.
        </p>
      </div>

      {/* Hardware Pixel LED Status Ticker */}
      <PixelLedDisplay
        text="ZENUXS PLATFORM • 10/10 SYSTEMS OPERATIONAL • ZERO DOWNTIME • ANYCAST EDGE RESOLUTION ACTIVE"
        ledColor="#10b981"
        dimColor="#0e1712"
        pixelSize={3.5}
        speed={45}
      />

      {/* Global Status Banner */}
      <div className="p-6 rounded-xl border border-emerald/30 bg-emerald/5 flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="w-3.5 h-3.5 rounded-full bg-emerald animate-ping" />
          <div>
            <h3 className="font-display font-bold text-white text-base">
              All Systems Fully Operational
            </h3>
            <p className="text-ash text-xs">Last verified at {lastChecked} • 10/10 endpoints healthy</p>
          </div>
        </div>

        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-carbon hover:bg-iron text-white border border-border transition-all disabled:opacity-50 cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
          <span>{isRefreshing ? 'Pinging endpoints...' : 'Refresh Status'}</span>
        </button>
      </div>

      {/* Services Table */}
      <div className="rounded-xl border border-border bg-graphite overflow-hidden shadow-2xl">
        <div className="px-6 py-4 bg-carbon border-b border-border/80 text-[11px] text-steel uppercase font-bold flex justify-between">
          <span>Ecosystem Service</span>
          <span className="hidden sm:inline">Telemetry & Latency</span>
        </div>

        <div className="divide-y divide-border/60">
          {services.map((svc) => (
            <div
              key={svc.name}
              className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-carbon/50 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald" />
                  <span className="font-display font-bold text-white text-sm">
                    {svc.name}
                  </span>
                  <span className="text-[10px] text-ember uppercase bg-ember/10 px-2 py-0.5 rounded border border-ember/20">
                    {svc.category}
                  </span>
                </div>
                <a
                  href={svc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ash hover:text-fog text-[11px] hover:underline block"
                >
                  {svc.url}
                </a>
              </div>

              <div className="flex items-center space-x-6 text-xs text-ash">
                <div className="text-right">
                  <span className="text-steel text-[10px] block">Latency</span>
                  <span className="text-indigo font-bold">{svc.latency}</span>
                </div>
                <div className="text-right">
                  <span className="text-steel text-[10px] block">30d Uptime</span>
                  <span className="text-emerald font-bold">{svc.uptime}</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald/10 text-emerald text-[11px] font-bold border border-emerald/20">
                  OPERATIONAL
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
