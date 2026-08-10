import React from 'react';
import { ScrollScene } from '../../../components/motion/ScrollScene';
import { EcosystemConstellation } from '../../../components/visualizers/EcosystemConstellation';
import ShinyPill from '../../../components/originkit/ui/shiny-pill';
import { Network, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Chapter11Ecosystem: React.FC = () => {
  return (
    <ScrollScene id="ecosystem" minHeight="min-h-[100svh]" className="py-24 border-b border-border/60">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-ember uppercase tracking-widest bg-ember/10 border border-ember/25 px-3 py-1 rounded">
            <Network className="w-3.5 h-3.5 text-ember" />
            <ShinyPill
              text="10 / THE CONNECTION — UNIFIED ARCHITECTURE"
              textColor="#da5c2c"
              shineColor="#ffffff"
              speed={2.2}
              font={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 'bold' }}
            />
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white leading-tight">
            SEPARATE TOOLS. ONE ECOSYSTEM.
          </h2>

          <p className="font-sans text-fog text-base sm:text-lg leading-relaxed font-normal">
            Each product solves a specific engineering challenge. Together, they form a cohesive constellation of building blocks for developers, founders, and server operators.
          </p>
        </div>

        {/* 3D Spatial Network Visualizer */}
        <EcosystemConstellation />

        {/* Action Link to Full Product Catalog */}
        <div className="flex justify-end pt-2">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 font-mono text-xs text-ember hover:text-ember-hover font-semibold transition-colors group cursor-pointer"
          >
            <span>View Full Filterable Product Catalog</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </ScrollScene>
  );
};
