import React from 'react';
import { ScrollScene } from '../../../components/motion/ScrollScene';
import { MongoSchemaVisualizer } from '../../../components/visualizers/MongoSchemaVisualizer';
import ShinyPill from '../../../components/originkit/ui/shiny-pill';
import { Database, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../../../components/ui/Icons';

export const Chapter07Data: React.FC = () => {
  return (
    <ScrollScene id="easy-mongoo" minHeight="min-h-[100svh]" className="py-24 border-b border-border/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Narrative Side */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-emerald uppercase tracking-widest bg-emerald/10 border border-emerald/25 px-3 py-1 rounded">
            <Database className="w-3.5 h-3.5 text-emerald" />
            <ShinyPill
              text="06 / DATA — EASY-MONGOO ODM"
              textColor="#10b981"
              shineColor="#ffffff"
              speed={2.2}
              font={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 'bold' }}
            />
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
            DATABASES SHOULD FEEL LIKE BUILDING BLOCKS.
          </h2>

          <p className="font-sans text-fog text-base sm:text-lg leading-relaxed font-normal">
            Easy-Mongoo exists to make working with MongoDB straightforward through a cleaner developer experience, declarative TypeScript schemas, and zero boilerplate.
          </p>

          <div className="space-y-2.5 font-mono text-xs text-ash">
            <div className="p-3.5 rounded-lg bg-carbon border border-border">
              <span className="text-emerald font-bold block mb-1">BUILT-IN SOFT DELETE & TIMESTAMPS</span>
              <p className="text-fog font-sans text-xs">
                Automatic filtering of deleted records and audit tracking across all queries without custom plugins.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-carbon border border-border">
              <span className="text-white font-bold block mb-1">STRICT INFERRED TYPESCRIPT TYPES</span>
              <p className="text-fog font-sans text-xs">
                Get full compile-time autocompletion for nested document fields and query operators.
              </p>
            </div>
          </div>

          <div className="pt-2 font-mono flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/zenuxs-dev/easy-mongoo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-emerald hover:bg-emerald/90 text-black text-xs font-bold shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>
            <a
              href="https://www.npmjs.com/package/easy-mongoo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-carbon hover:bg-iron text-fog hover:text-white border border-border text-xs transition-colors"
            >
              npm registry ↗
            </a>
          </div>
        </div>

        {/* Visualizer Canvas */}
        <div className="lg:col-span-7">
          <MongoSchemaVisualizer />
        </div>
      </div>
    </ScrollScene>
  );
};
