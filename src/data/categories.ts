import { CategoryInfo } from '../types/product';

export const categories: CategoryInfo[] = [
  {
    id: 'identity',
    label: 'Identity & Security',
    description: 'Authentication, universal OAuth 2.0 PKCE, session management, and cryptographic primitives.',
    icon: 'KeyRound'
  },
  {
    id: 'ai',
    label: 'AI & Intelligence',
    description: 'Unified context persistence, intelligent developer workspace, and agentic coding execution.',
    icon: 'Brain'
  },
  {
    id: 'developer',
    label: 'Developer Tools',
    description: 'Command line interfaces, developer environments, project scaffolding, and system automation.',
    icon: 'Terminal'
  },
  {
    id: 'database',
    label: 'Data & Backend',
    description: 'Simplified database wrappers, ergonomic document modeling, and structured storage.',
    icon: 'Database'
  },
  {
    id: 'security',
    label: 'Security & Cryptography',
    description: 'Password hashing primitives, HMAC sealing, and enterprise-grade cryptographic utilities.',
    icon: 'ShieldCheck'
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure & Network',
    description: 'Low-latency deployment, edge hosting, DNS routing, and distributed availability.',
    icon: 'Globe'
  },
  {
    id: 'minecraft',
    label: 'Minecraft & Extensions',
    description: 'Server authentication, cross-environment identity synchronization, and server plugins.',
    icon: 'Box'
  },
  {
    id: 'community',
    label: 'Community & Hub',
    description: 'Developer discussions, real-time gaming hub, issue tracking, and collaborative support.',
    icon: 'MessageSquare'
  },
  {
    id: 'opensource',
    label: 'Open Source',
    description: 'Public codebases, modular packages, and transparent engineering for builders.',
    icon: 'Github'
  }
];
