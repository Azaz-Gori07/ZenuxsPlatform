import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

interface NavbarProps {
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Ecosystem', path: '/#ecosystem' },
    { label: 'Products', path: '/products' },
    { label: 'Open Source', path: '/opensource' },
    { label: 'Community', path: '/community' },
    { label: 'Status', path: '/status', hasPulse: true },
    { label: 'About', path: '/about' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-void/95 backdrop-blur-xl border-b border-border shadow-2xl py-3'
          : 'bg-void/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        
        {/* Brand Logo & Version Tag */}
        <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-carbon border border-border flex items-center justify-center font-display font-bold text-white group-hover:border-ember group-hover:shadow-lg group-hover:shadow-ember/20 transition-all">
            <span className="text-ember font-mono text-base font-bold">Z</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-base tracking-tight text-white group-hover:text-ember transition-colors">
              ZENUXS
            </span>
            <span className="hidden sm:inline-block font-mono text-[9px] uppercase tracking-widest text-steel bg-carbon border border-border/80 px-1.5 py-0.5 rounded">
              v2.4
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 font-mono text-xs text-fog bg-carbon/80 backdrop-blur-lg border border-border/80 rounded-full px-3 py-1 shadow-inner">
          {navLinks.map((link) => {
            const isActive =
              link.path === '/#ecosystem'
                ? location.pathname === '/' && location.hash === '#ecosystem'
                : location.pathname === link.path;

            return (
              <Link
                key={link.label}
                to={link.path}
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'text-white bg-iron font-semibold shadow-sm'
                    : 'text-ash hover:text-white hover:bg-iron/50'
                }`}
              >
                {link.hasPulse && (
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald" />
                  </span>
                )}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="hidden sm:flex items-center space-x-2.5">
          {/* Quick Search Button (Cmd+K) */}
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-carbon hover:bg-iron border border-border/80 text-ash hover:text-white font-mono text-xs transition-all cursor-pointer group"
              title="Search products & docs (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-steel group-hover:text-ember transition-colors" />
              <span className="text-steel group-hover:text-fog font-sans text-xs">Search...</span>
              <kbd className="text-[10px] bg-void px-1.5 py-0.5 rounded border border-border text-steel font-mono">
                ⌘K
              </kbd>
            </button>
          )}

          {/* GitHub Organization */}
          <a
            href="https://github.com/zenuxs-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-carbon hover:bg-iron border border-border/80 text-fog hover:text-white transition-colors cursor-pointer"
            title="GitHub Organization"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* Primary Zenuxs Accounts CTA */}
          <a
            href="https://zenuxs.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg bg-ember hover:bg-ember-hover text-white font-mono text-xs font-semibold shadow-lg shadow-ember/20 border border-ember/40 transition-all flex items-center gap-1.5 cursor-pointer group"
          >
            <span>Accounts</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Action & Hamburger */}
        <div className="flex sm:hidden items-center space-x-2">
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg bg-carbon border border-border text-ash hover:text-white cursor-pointer"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-carbon border border-border text-fog hover:text-white cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-void/98 backdrop-blur-2xl border-b border-border px-6 py-6 space-y-5 font-mono text-sm shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-fog hover:text-white py-2.5 px-3 rounded-lg hover:bg-carbon border-b border-border/30 last:border-0 transition-colors"
              >
                <span>{link.label}</span>
                {link.hasPulse ? (
                  <span className="flex items-center gap-1 text-[10px] text-emerald font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-ping" />
                    LIVE
                  </span>
                ) : (
                  <ArrowRight className="w-3.5 h-3.5 text-steel" />
                )}
              </Link>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="https://zenuxs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg bg-ember hover:bg-ember-hover text-white font-semibold text-center text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-ember/20"
            >
              <span>Zenuxs Accounts</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/zenuxs-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg bg-carbon border border-border text-fog hover:text-white text-center text-xs flex items-center justify-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
