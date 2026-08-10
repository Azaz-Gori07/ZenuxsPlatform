import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { products } from '../../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-void border-t border-border/80 text-ash font-mono text-xs pt-16 pb-12">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-2.5 group">
              <div className="w-7 h-7 rounded bg-carbon border border-border flex items-center justify-center font-display font-bold text-white group-hover:border-ember transition-colors">
                <span className="text-ember font-mono text-sm">Z</span>
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white">
                ZENUXS
              </span>
            </Link>
            <p className="text-fog font-sans text-xs sm:text-sm leading-relaxed max-w-sm">
              Open technology ecosystem built for builders. Identity, security primitives, database wrappers, AI developer tools, and infrastructure.
            </p>
            <div className="flex items-center space-x-3 pt-2 text-fog">
              <a
                href="https://github.com/zenuxs-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-carbon hover:bg-iron border border-border text-fog hover:text-white transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://discord.zenuxs.in"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-carbon hover:bg-iron border border-border text-fog hover:text-white transition-colors font-semibold"
                title="Discord"
              >
                Discord
              </a>
              <a
                href="https://zenuxs.in"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-carbon hover:bg-iron border border-border text-fog hover:text-white transition-colors"
                title="Accounts"
              >
                Accounts
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div className="space-y-3">
            <h4 className="text-[11px] text-white uppercase tracking-widest font-bold">
              Products
            </h4>
            <ul className="space-y-2">
              {products.slice(0, 7).map((p) => (
                <li key={p.id}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>{p.name}</span>
                    <ExternalLink className="w-2.5 h-2.5 text-steel opacity-0 hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers Column */}
          <div className="space-y-3">
            <h4 className="text-[11px] text-white uppercase tracking-widest font-bold">
              Developers
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/zenuxs-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub Organization
                </a>
              </li>
              <li>
                <a
                  href="https://zenuxs.in/developers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  OAuth 2.0 PKCE Docs
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/zenuxs-dev/zenuxs-cli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Zenuxs CLI
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/easy-mongoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  easy-mongoo (npm)
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/hmax-secure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  hmax-secure (npm)
                </a>
              </li>
            </ul>
          </div>

          {/* Ecosystem Column */}
          <div className="space-y-3">
            <h4 className="text-[11px] text-white uppercase tracking-widest font-bold">
              Ecosystem
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Product Directory
                </Link>
              </li>
              <li>
                <Link to="/opensource" className="hover:text-white transition-colors">
                  Open Source Hub
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-white transition-colors">
                  Community & Discord
                </Link>
              </li>
              <li>
                <Link to="/status" className="hover:text-white transition-colors">
                  System Status
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Zenuxs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-steel text-[11px]">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} Zenuxs. All rights reserved.</span>
            <span>•</span>
            <span>Build without limits.</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-amber">
              <span className="w-1.5 h-1.5 rounded-full bg-amber"></span>
              <Link to="/status" className="hover:text-white transition-colors">
                Under Active Development
              </Link>
            </span>
            <span className="text-steel">|</span>
            <span>Open Source & Permissive</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
