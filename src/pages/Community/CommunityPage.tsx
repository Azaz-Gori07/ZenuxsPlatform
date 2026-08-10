import React from 'react';
import ShinyPill from '../../components/originkit/ui/shiny-pill';
import { MessageSquare, Box, Users, Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { GithubIcon } from '../../components/ui/Icons';
import LiveChat from '../../components/originkit/ui/live-chat';

export const CommunityPage: React.FC = () => {
  const communityChatMessages = [
    {
      text: "Is there an easy way to verify Minecraft player sessions in our web dashboard?",
      sender: "them" as const,
      timestamp: "10:14 AM"
    },
    {
      text: "Yes! Use the AdvancedAuth REST API bridge — it returns verified UUIDs and active 2FA session status in real-time.",
      sender: "me" as const,
      timestamp: "10:16 AM"
    },
    {
      text: "Super clean integration. Love the zero-friction developer experience!",
      sender: "them" as const,
      timestamp: "10:18 AM"
    }
  ];

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 space-y-12">
      {/* Header */}
      <div className="space-y-4 pt-4">
        <div className="inline-flex items-center space-x-2 font-mono text-xs text-indigo uppercase tracking-widest bg-indigo/10 border border-indigo/25 px-3 py-1 rounded">
          <Users className="w-3.5 h-3.5 text-indigo" />
          <ShinyPill
            text="COMMUNITY & COLLABORATION HUB"
            textColor="#6798ff"
            shineColor="#ffffff"
            speed={2.2}
            font={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 'bold' }}
          />
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-6xl text-white">
          Built With and For Builders
        </h1>

        <p className="font-sans text-fog text-base sm:text-lg max-w-2xl">
          The Zenuxs community connects software engineers, server administrators, gamers, and open-source contributors into one active collaboration network.
        </p>

        <div className="pt-2 font-mono flex flex-wrap gap-3">
          <a
            href="https://discord.zenuxs.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo hover:bg-indigo-hover text-black font-bold text-xs shadow-lg transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Join Zenuxs Discord Community ↗</span>
          </a>
          <a
            href="https://github.com/zenuxs-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-carbon hover:bg-iron text-white font-semibold text-xs border border-border transition-colors cursor-pointer"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Discussions</span>
          </a>
        </div>
      </div>

      {/* Live Community Chat Interactive Panel */}
      <div className="rounded-xl border border-border bg-carbon p-6 sm:p-8 space-y-6 shadow-2xl font-mono text-xs">
        <div className="flex items-center justify-between border-b border-border/80 pb-4">
          <div>
            <h3 className="font-display font-bold text-lg text-white">Real-Time Discord Channel Stream</h3>
            <p className="text-steel text-xs font-sans mt-0.5">Live technical assistance, RFC brainstorming, and release previews.</p>
          </div>
          <span className="text-emerald flex items-center gap-1.5 font-mono text-[11px] font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald animate-ping" />
            LIVE TELEMETRY
          </span>
        </div>

        <div className="p-4 rounded-xl bg-void border border-border/80">
          <LiveChat
            messages={communityChatMessages}
            sentBubbleColor="#1e1e1e"
            sentTextColor="#eeeeee"
            receivedBubbleColor="#111111"
            receivedTextColor="#b4b4b4"
            showTimestamps={true}
            showTyping={true}
            typingSender="them"
            animate={true}
          />
        </div>
      </div>

      {/* Community Hub Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
        <div className="p-6 rounded-xl border border-border bg-graphite space-y-3 shadow-xl">
          <div className="p-2.5 rounded-lg bg-indigo/10 border border-indigo/20 text-indigo w-fit">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="font-display text-lg font-bold text-white">Developer Discussion</h3>
          <p className="font-sans text-fog text-xs sm:text-sm leading-relaxed">
            Get instant help with OAuth 2.0 PKCE integrations, Easy-Mongoo schemas, and HMAX cryptographic setups directly from core contributors.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-border bg-graphite space-y-3 shadow-xl">
          <div className="p-2.5 rounded-lg bg-emerald/10 border border-emerald/20 text-emerald w-fit">
            <Box className="w-5 h-5" />
          </div>
          <h3 className="font-display text-lg font-bold text-white">Minecraft Server Admins</h3>
          <p className="font-sans text-fog text-xs sm:text-sm leading-relaxed">
            Collaborate on server authentication, AdvancedAuth setups, custom plugin commissions, and web dashboard synchronization.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-border bg-graphite space-y-3 shadow-xl">
          <div className="p-2.5 rounded-lg bg-ember/10 border border-ember/20 text-ember w-fit">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-display text-lg font-bold text-white">Preview Testing & RFCs</h3>
          <p className="font-sans text-fog text-xs sm:text-sm leading-relaxed">
            Participate in preview builds, test experimental features before release, and vote on architectural RFC proposals.
          </p>
        </div>
      </div>
    </div>
  );
};
