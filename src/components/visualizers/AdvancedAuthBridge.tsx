import React, { useState } from 'react';
import { Box, Shield, Users, Activity, ExternalLink, CheckCircle } from 'lucide-react';

export const AdvancedAuthBridge: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'minecraft' | 'web' | 'api'>('minecraft');

  return (
    <div className="w-full rounded-xl border border-border bg-graphite p-5 sm:p-6 shadow-2xl space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-emerald/10 border border-emerald/20 text-emerald">
            <Box className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-base">
              Zenuxs Plugins — AdvancedAuth Server Bridge
            </h4>
            <p className="text-xs text-ash font-mono">Minecraft Authentication & Web Dashboard Integration</p>
          </div>
        </div>
        <a
          href="https://plugins.zenuxs.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-emerald hover:underline flex items-center gap-1"
        >
          <span>plugins.zenuxs.in</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Mode Navigation */}
      <div className="flex space-x-2 border-b border-border/40 pb-2">
        <button
          onClick={() => setActiveTab('minecraft')}
          className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
            activeTab === 'minecraft'
              ? 'bg-iron text-white font-bold border border-border'
              : 'text-ash hover:text-fog'
          }`}
        >
          1. In-Game Session (Java)
        </button>
        <button
          onClick={() => setActiveTab('web')}
          className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
            activeTab === 'web'
              ? 'bg-iron text-white font-bold border border-border'
              : 'text-ash hover:text-fog'
          }`}
        >
          2. Web Admin Dashboard
        </button>
        <button
          onClick={() => setActiveTab('api')}
          className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
            activeTab === 'api'
              ? 'bg-iron text-white font-bold border border-border'
              : 'text-ash hover:text-fog'
          }`}
        >
          3. REST API & Hooks
        </button>
      </div>

      {/* Screen Canvas */}
      <div className="rounded-lg bg-void border border-border p-4 font-mono text-xs min-h-[220px]">
        {activeTab === 'minecraft' && (
          <div className="space-y-2 bg-[#0c0c0c] p-3.5 rounded border border-border/60">
            <div className="text-[11px] text-steel border-b border-border/40 pb-1 flex justify-between">
              <span>Minecraft Server: play.zenuxs.network [Paper 1.20.4]</span>
              <span className="text-emerald">Online: 48 Players</span>
            </div>
            <div className="space-y-1 text-xs pt-1">
              <p className="text-ash">[Server] Player <span className="text-amber">AlexCraft</span> connected.</p>
              <p className="text-amber">[AdvancedAuth] Please authenticate: <span className="text-white">/login &lt;password&gt;</span></p>
              <p className="text-fog">❯ <span className="text-white">/login **********</span></p>
              <p className="text-emerald flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> [AdvancedAuth] Identity verified via Zenuxs Accounts. Welcome back!
              </p>
              <p className="text-ash text-[11px] pt-1">Session bound to UUID 550e8400-e29b-41d4-a716-446655440000 with 2FA email fallback enabled.</p>
            </div>
          </div>
        )}

        {activeTab === 'web' && (
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 rounded bg-carbon border border-border">
                <Users className="w-4 h-4 mx-auto mb-1 text-indigo" />
                <span className="text-white font-bold">1,240</span>
                <span className="text-[10px] text-steel block">Registered Users</span>
              </div>
              <div className="p-2.5 rounded bg-carbon border border-border">
                <Shield className="w-4 h-4 mx-auto mb-1 text-emerald" />
                <span className="text-white font-bold">100%</span>
                <span className="text-[10px] text-steel block">2FA Protected</span>
              </div>
              <div className="p-2.5 rounded bg-carbon border border-border">
                <Activity className="w-4 h-4 mx-auto mb-1 text-ember" />
                <span className="text-white font-bold">0</span>
                <span className="text-[10px] text-steel block">Security Incidents</span>
              </div>
            </div>
            <div className="text-ash text-[11px] space-y-1">
              <p className="text-white font-semibold">Web Dashboard Capabilities:</p>
              <p>• Email OTP password resets for offline/premium players</p>
              <p>• Live IP audit history & geo-location anomaly flags</p>
              <p>• Role-based permission assignments & session revocation</p>
            </div>
          </div>
        )}

        {activeTab === 'api' && (
          <div className="space-y-2 text-fog">
            <span className="text-indigo font-bold">// External REST API management endpoint</span>
            <pre className="text-white">
{`GET /api/v1/players/AlexCraft/session
Authorization: Bearer zx_api_secret_key

Response 200 OK:
{
  "uuid": "550e8400-e29b-41d4-a716-446655440000",
  "username": "AlexCraft",
  "isLoggedIn": true,
  "lastIp": "198.51.100.42",
  "authMethod": "zenuxs_oauth_sync",
  "sessionExpiry": "2026-08-10T16:00:00Z"
}`}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
