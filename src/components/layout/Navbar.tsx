import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
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

  // Primary desktop nav — clean & concise
  const primaryNavLinks = [
    { label: 'Products', path: '/products' },
    { label: 'AI Assistant', path: '/ai', isNew: true },
    { label: 'Open Source', path: '/opensource' },
    { label: 'Community', path: '/community' },
  ];

  // Secondary links for mobile menu & quick access
  const allNavLinks = [
    ...primaryNavLinks,
    { label: 'Status', path: '/status' },
    { label: 'About', path: '/about' },
  ];

  return (
    <header className="fixed top-3 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <div
        className={`w-[92%] max-w-[1240px] h-[58px] rounded-full transition-all duration-300 pointer-events-auto flex items-center justify-between px-5 sm:px-6 ${
          isScrolled
            ? 'bg-void/85 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/40'
            : 'bg-void/70 backdrop-blur-lg border border-white/5 shadow-md shadow-black/20'
        }`}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          className="flex items-center space-x-3.5 group cursor-pointer shrink-0"
        >
          <img src="/logo-nav.svg" alt="Zenuxs Logo" className="w-7 h-6 object-contain group-hover:scale-105 transition-transform" />
          <span className="font-display font-bold text-base tracking-tight text-white group-hover:text-ember transition-colors -ml-2.5">
            ZENUXS
          </span>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 font-mono text-xs text-fog bg-carbon/50 backdrop-blur-md border border-border/60 rounded-full px-1.5 py-1">
          {primaryNavLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.label}
                to={link.path}
                className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'text-white bg-iron font-semibold shadow-sm'
                    : 'text-ash hover:text-white hover:bg-iron/50'
                }`}
              >
                <span>{link.label}</span>
                {link.isNew && (
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="hidden sm:flex items-center space-x-2 shrink-0">
          {/* Quick Search Trigger (Cmd+K) */}
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-carbon/60 hover:bg-iron border border-border/60 text-ash hover:text-white font-mono text-xs transition-all cursor-pointer group"
              title="Search products & docs (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-steel group-hover:text-ember transition-colors" />
              <span className="text-steel group-hover:text-fog text-[11px]">Search</span>
              <kbd className="text-[9px] bg-void px-1 py-0.5 rounded border border-border/80 text-steel font-mono">
                ⌘K
              </kbd>
            </button>
          )}

          {/* GitHub Organization Link */}
          <a
            href="https://github.com/zenuxs-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-carbon/60 hover:bg-iron border border-border/60 text-fog hover:text-white transition-colors cursor-pointer"
            title="GitHub Organization"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* Accounts SSO CTA */}
          <a
            href="https://zenuxs.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-ember hover:bg-ember-hover text-white font-mono text-xs font-semibold shadow-md shadow-ember/20 transition-all flex items-center gap-1.5 cursor-pointer group"
          >
            <span>Accounts</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Action & Hamburger */}
        <div className="flex sm:hidden items-center space-x-2">
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="p-1.5 rounded-lg bg-carbon border border-border text-ash hover:text-white cursor-pointer"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-carbon border border-border text-fog hover:text-white cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-[66px] left-4 right-4 bg-void/98 backdrop-blur-2xl border border-border rounded-2xl p-5 space-y-4 font-mono text-xs shadow-2xl pointer-events-auto">
          <div className="flex flex-col space-y-1">
            {allNavLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-fog hover:text-white py-2 px-3 rounded-lg hover:bg-carbon transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-steel" />
              </Link>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://zenuxs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 rounded-lg bg-ember hover:bg-ember-hover text-white font-semibold text-center text-xs flex items-center justify-center gap-1.5"
            >
              <span>Zenuxs Accounts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
