import React from 'react';
import { ScrollScene } from '../../../components/motion/ScrollScene';
import ShinyPill from '../../../components/originkit/ui/shiny-pill';
import { MessageSquare, Users, ArrowRight, Sparkles } from 'lucide-react';
import { GithubIcon } from '../../../components/ui/Icons';
import LiveChat from '../../../components/originkit/ui/live-chat';

export const Chapter14Community: React.FC = () => {
  const communityMessages = [
    {
      text: "How do I setup PKCE with silent refresh on Next.js 15?",
      sender: "them" as const,
      timestamp: "11:02 AM"
    },
    {
      text: "Use @zenuxs/oauth with the withAuth middleware — it handles PKCE verifier cookies and auto-refreshes JWTs silently.",
      sender: "me" as const,
      timestamp: "11:03 AM"
    },
    {
      text: "Works out of the box! Also tested Easy-Mongoo soft-delete queries, saving tons of time.",
      sender: "them" as const,
      timestamp: "11:05 AM"
    }
  ];

  return (
    <ScrollScene id="community" minHeight="min-h-[100svh]" className="py-24 border-b border-border/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Narrative Side */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-indigo uppercase tracking-widest bg-indigo/10 border border-indigo/25 px-3 py-1 rounded">
            <Users className="w-3.5 h-3.5 text-indigo" />
            <ShinyPill
              text="13 / COMMUNITY & DISCORD"
              textColor="#6798ff"
              shineColor="#ffffff"
              speed={2.2}
              font={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 'bold' }}
            />
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
            SOFTWARE GETS BETTER WHEN PEOPLE CAN TOUCH IT.
          </h2>

          <p className="font-sans text-fog text-base sm:text-lg leading-relaxed font-normal">
            Use the tools. Read the source. Report bugs. Build something real. Share it with other builders across the Zenuxs network.
          </p>

          <div className="space-y-2.5 font-mono text-xs text-ash">
            <div className="p-3.5 rounded-lg bg-carbon border border-border">
              <span className="text-indigo font-bold block mb-1">DIRECT BUILDER COLLABORATION</span>
              <p className="text-fog font-sans text-xs">
                Chat directly with package maintainers, get help with cryptographic implementations, and participate in RFC design sessions.
              </p>
            </div>
          </div>

          <div className="pt-2 font-mono flex flex-wrap items-center gap-3">
            <a
              href="https://discord.zenuxs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-indigo hover:bg-indigo-hover text-black text-xs font-bold shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Join Zenuxs Discord</span>
            </a>
            <a
              href="https://github.com/zenuxs-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-carbon hover:bg-iron text-fog hover:text-white border border-border text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Contribute on GitHub</span>
            </a>
          </div>
        </div>

        {/* Live Community Chat Visualizer */}
        <div className="lg:col-span-7">
          <div className="rounded-xl border border-border bg-graphite shadow-2xl p-6 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-border/70 pb-3 text-steel">
              <span className="text-white font-bold flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-indigo" /> #developer-hub (Live Chat)
              </span>
              <span className="text-emerald flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                <span>Discord Telemetry Online</span>
              </span>
            </div>

            {/* Live Chat component from Originkit */}
            <div className="p-4 rounded-lg bg-void border border-border/80 min-h-[220px]">
              <LiveChat
                messages={communityMessages}
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

            <div className="p-3 rounded bg-carbon border border-border text-[11px] text-steel flex items-center justify-between">
              <span>Over 1,200+ developers, server admins & open source contributors</span>
              <a
                href="https://discord.zenuxs.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Connect on Discord ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ScrollScene>
  );
};
