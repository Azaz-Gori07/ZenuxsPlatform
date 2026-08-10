import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BackgroundAtmosphere } from './BackgroundAtmosphere';
import { CommandPalette } from '../ui/CommandPalette';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-void text-paper flex flex-col selection:bg-ember/20 selection:text-white">
      {/* Background Atmosphere */}
      <BackgroundAtmosphere />

      {/* Global Persistent Navbar */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Main Content */}
      <main className="flex-1 w-full relative z-10">{children}</main>

      {/* Command Palette (Cmd+K) */}
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Footer */}
      <Footer />
    </div>
  );
};
