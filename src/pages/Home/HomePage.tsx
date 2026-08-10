import React from 'react';
import WaveBg from '../../components/originkit/ui/pulse-lines';
import { Chapter01Opening } from './chapters/Chapter01Opening';
import { Chapter02Problem } from './chapters/Chapter02Problem';
import { Chapter03Principle } from './chapters/Chapter03Principle';
import { Chapter04Identity } from './chapters/Chapter04Identity';
import { Chapter05DevTools } from './chapters/Chapter05DevTools';
import { Chapter06AI } from './chapters/Chapter06AI';
import { Chapter07Data } from './chapters/Chapter07Data';
import { Chapter08Security } from './chapters/Chapter08Security';
import { Chapter09Infra } from './chapters/Chapter09Infra';
import { Chapter10Plugins } from './chapters/Chapter10Plugins';
import { Chapter11Ecosystem } from './chapters/Chapter11Ecosystem';
import { Chapter12OpenSource } from './chapters/Chapter12OpenSource';
import { Chapter13Builder } from './chapters/Chapter13Builder';
import { Chapter14Community } from './chapters/Chapter14Community';
import { Chapter15Present } from './chapters/Chapter15Present';
import { Chapter16Final } from './chapters/Chapter16Final';

export const HomePage: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Originkit Pulse Lines Home Page Root Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-25 overflow-hidden">
        <WaveBg
          shape="line"
          type="vertical"
          speed={55}
          lineWidth={1.5}
          gap={48}
          scale={2.2}
          backgroundColor="transparent"
          lineColor="#181818"
          colors={{
            paletteCount: 3,
            color1: "#da5c2c",
            color2: "#6798ff",
            color3: "#10b981"
          }}
        />
      </div>

      {/* Chapter 01: Opening / Identity (Hero Section) */}
      <div className="relative z-10 w-full">
        <Chapter01Opening />
      </div>

      {/* Chapter 02: The Problem */}
      <div className="relative z-10 w-full">
        <Chapter02Problem />
      </div>

      {/* Chapter 03: The Principle */}
      <div className="relative z-10 w-full">
        <Chapter03Principle />
      </div>

      {/* Chapter 04: Identity — Zenuxs Accounts */}
      <div className="relative z-10 w-full">
        <Chapter04Identity />
      </div>

      {/* Chapter 05: Developer Tooling — Zenuxs CLI */}
      <div className="relative z-10 w-full">
        <Chapter05DevTools />
      </div>

      {/* Chapter 06: Intelligence — Zenuxs AI & Code */}
      <div className="relative z-10 w-full">
        <Chapter06AI />
      </div>

      {/* Chapter 07: Data — Easy-Mongoo */}
      <div className="relative z-10 w-full">
        <Chapter07Data />
      </div>

      {/* Chapter 08: Security — HMAX-SECURE */}
      <div className="relative z-10 w-full">
        <Chapter08Security />
      </div>

      {/* Chapter 09: Infrastructure — Hosting & DNS */}
      <div className="relative z-10 w-full">
        <Chapter09Infra />
      </div>

      {/* Chapter 10: Extensions — Minecraft Plugins */}
      <div className="relative z-10 w-full">
        <Chapter10Plugins />
      </div>

      {/* Chapter 11: The Products Connect — 3D Constellation */}
      <div className="relative z-10 w-full">
        <Chapter11Ecosystem />
      </div>

      {/* Chapter 12: Open Source — Source is the Product */}
      <div className="relative z-10 w-full">
        <Chapter12OpenSource />
      </div>

      {/* Chapter 13: What Can I Build? */}
      <div className="relative z-10 w-full">
        <Chapter13Builder />
      </div>

      {/* Chapter 14: Community & Discord */}
      <div className="relative z-10 w-full">
        <Chapter14Community />
      </div>

      {/* Chapter 15: The Present */}
      <div className="relative z-10 w-full">
        <Chapter15Present />
      </div>

      {/* Chapter 16: Final Statement */}
      <div className="relative z-10 w-full">
        <Chapter16Final />
      </div>
    </div>
  );
};
