import React from 'react';
import { Database, ShieldCheck, Bot, ArrowRight, CheckCircle2, Eye, EyeOff, Globe } from 'lucide-react';
import ShinyPill from '../../components/originkit/ui/shiny-pill';

export const GroupChatsPage: React.FC = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 space-y-16">
      <div className="space-y-4 pt-4">
        <div className="inline-flex items-center space-x-2 font-mono text-xs text-indigo uppercase tracking-widest bg-indigo/10 border border-indigo/25 px-3 py-1 rounded">
          <Database className="w-3.5 h-3.5 text-indigo" />
          <ShinyPill
            text="DATASET COLLECTION"
            textColor="#6798ff"
            shineColor="#ffffff"
            speed={2.2}
            font={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 'bold' }}
          />
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-6xl text-white">
          Group Chat Dataset
        </h1>
        <p className="font-sans text-fog text-base sm:text-lg max-w-3xl">
          Help us build a human-like AI by contributing your group chat messages. Our bot learns natural conversation patterns to create AI that truly understands how humans communicate.
        </p>
        <div className="pt-2 font-mono flex flex-wrap gap-3">
          <a href="https://t.me/zenuxsDataBot" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo hover:bg-indigo-hover text-black font-bold text-xs shadow-lg transition-all cursor-pointer">
            <Bot className="w-4 h-4" />
            <span>Add @zenuxsDataBot to Group</span>
          </a>
          <a href="https://platform.zenuxs.in" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-carbon hover:bg-iron text-white font-semibold text-xs border border-border transition-colors cursor-pointer">
            <Globe className="w-4 h-4" />
            <span>Back to Platform</span>
          </a>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">How It Works</h2>
          <p className="font-sans text-fog text-sm max-w-2xl">Simple, privacy-first approach to collecting real conversation data.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-mono text-xs">
          {[
            { num: '1', color: 'indigo', title: 'Add Bot', desc: 'Add @zenuxsDataBot to your Telegram group. Works in any group — public or private.' },
            { num: '2', color: 'emerald', title: 'Opt In', desc: 'When a user sends their first message, the bot asks for consent. Click Allow to contribute.' },
            { num: '3', color: 'ember', title: 'Contribute', desc: 'Messages are stored anonymously as USER_1, USER_2. Real names are never saved.' },
            { num: '4', color: 'amber', title: 'AI Learns', desc: 'The AI studies conversation patterns, tone, and natural language flow to become human-like.' },
          ].map((step) => (
            <div key={step.num} className="p-6 rounded-xl border border-border bg-graphite space-y-4 shadow-xl">
              <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-${step.color}/10 border border-${step.color}/20`}>
                <span className={`text-${step.color} font-bold text-lg`}>{step.num}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white">{step.title}</h3>
              <p className="font-sans text-fog text-xs sm:text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-carbon p-6 sm:p-8 space-y-6 shadow-2xl font-mono text-xs">
        <div className="flex items-center justify-between border-b border-border/80 pb-4">
          <div>
            <h3 className="font-display font-bold text-lg text-white">@zenuxsDataBot Features</h3>
            <p className="text-steel text-xs font-sans mt-0.5">Privacy-first data collection for AI training</p>
          </div>
          <span className="text-emerald flex items-center gap-1.5 font-mono text-[11px] font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald animate-ping" />
            ACTIVE
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'Reply-Based Opt-In', desc: 'Bot replies directly to user messages — no spam, just one-time consent.' },
            { title: '24-Hour Re-Prompt', desc: 'If ignored, bot asks again after 24 hours — no pressure, just a reminder.' },
            { title: 'Anonymous Storage', desc: 'All data stored as USER_1, USER_2 — your real name is never saved.' },
            { title: 'Global User Tracking', desc: 'Opt-in once across all groups — no repeated prompts in different chats.' },
          ].map((f) => (
            <div key={f.title} className="p-4 rounded-xl bg-void border border-border/80 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald" />
                <span className="text-white font-bold">{f.title}</span>
              </div>
              <p className="text-fog font-sans text-xs">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">Privacy First</h2>
          <p className="font-sans text-fog text-sm max-w-2xl">Your privacy is our priority. Here is exactly what we collect and how we protect you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
          <div className="p-6 rounded-xl border border-emerald/30 bg-emerald/5 space-y-4">
            <div className="flex items-center gap-2 text-emerald">
              <Eye className="w-5 h-5" />
              <h3 className="font-display text-lg font-bold">What We Store</h3>
            </div>
            <ul className="space-y-2 font-sans text-fog text-xs">
              <li className="flex items-start gap-2"><span className="text-emerald mt-0.5">&#10003;</span><span>Message text (for language pattern learning)</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald mt-0.5">&#10003;</span><span>Anonymous ID (USER_1, USER_2...)</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald mt-0.5">&#10003;</span><span>Group name (for context)</span></li>
              <li className="flex items-start gap-2"><span className="text-emerald mt-0.5">&#10003;</span><span>Timestamp (for sequence understanding)</span></li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-ember/30 bg-ember/5 space-y-4">
            <div className="flex items-center gap-2 text-ember">
              <EyeOff className="w-5 h-5" />
              <h3 className="font-display text-lg font-bold">What We Never Store</h3>
            </div>
            <ul className="space-y-2 font-sans text-fog text-xs">
              <li className="flex items-start gap-2"><span className="text-ember mt-0.5">&#10007;</span><span>Real names or usernames</span></li>
              <li className="flex items-start gap-2"><span className="text-ember mt-0.5">&#10007;</span><span>Passwords or personal credentials</span></li>
              <li className="flex items-start gap-2"><span className="text-ember mt-0.5">&#10007;</span><span>Phone numbers or email addresses</span></li>
              <li className="flex items-start gap-2"><span className="text-ember mt-0.5">&#10007;</span><span>Media files (photos, videos, documents)</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-carbon p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="border-b border-border/80 pb-4">
          <h3 className="font-display font-bold text-lg text-white">Contribution Impact</h3>
          <p className="text-steel text-xs font-sans mt-0.5">Every message helps build better AI for India</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { val: '40K+', label: 'Users Worldwide', color: 'text-indigo' },
            { val: '100%', label: 'Privacy Protected', color: 'text-emerald' },
            { val: '24/7', label: 'Always Collecting', color: 'text-ember' },
            { val: 'India', label: 'Made For India', color: 'text-amber' },
          ].map((s) => (
            <div key={s.label} className="text-center space-y-1">
              <div className={`text-3xl font-bold ${s.color} font-mono`}>{s.val}</div>
              <div className="text-fog text-xs font-sans">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-indigo/30 bg-indigo/5 p-8 sm:p-12 space-y-6 text-center">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">Ready to Contribute?</h2>
        <p className="font-sans text-fog text-base sm:text-lg max-w-2xl mx-auto">
          Add @zenuxsDataBot to your Telegram group and help us build India's most human-like AI. Your messages shape the future of natural language understanding.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://t.me/zenuxsDataBot" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-indigo hover:bg-indigo-hover text-black font-bold text-sm shadow-lg transition-all cursor-pointer">
            <Bot className="w-5 h-5" />
            <span>Add @zenuxsDataBot to Group</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <p className="font-mono text-xs text-steel">
          By adding the bot, you agree to our <a href="/privacy" className="text-indigo hover:underline">Privacy Policy</a> and <a href="/terms" className="text-indigo hover:underline">Terms of Service</a>.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-carbon p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-indigo/10 border border-indigo/20 text-indigo">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-display text-lg font-bold text-white">About Zenuxs Private Limited</h3>
        </div>
        <p className="font-sans text-fog text-sm leading-relaxed max-w-3xl">
          Zenuxs is a registered company in India providing tech solutions, software development, and AI research.
          Trusted by over 40,000 people across the world, we are building India's next-generation AI infrastructure
          with a focus on privacy, transparency, and real human understanding.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a href="https://platform.zenuxs.in" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-indigo text-xs font-mono hover:underline">
            platform.zenuxs.in <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
