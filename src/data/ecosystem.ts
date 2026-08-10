export interface EcosystemNode {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  url: string;
  x: number;
  y: number;
  z: number;
  connections: string[];
  color: string;
}

export const ecosystemNodes: EcosystemNode[] = [
  {
    id: 'accounts',
    name: 'Zenuxs Accounts',
    category: 'Identity',
    shortDesc: 'OAuth 2.0 PKCE & Session Layer',
    url: 'https://zenuxs.in',
    x: -30,
    y: 15,
    z: 20,
    connections: ['ai', 'code', 'plugins', 'cli'],
    color: '#da5c2c'
  },
  {
    id: 'ai',
    name: 'Zenuxs AI',
    category: 'Intelligence',
    shortDesc: 'Unified Memory & Cross-Model Context',
    url: 'https://ai.zenuxs.in',
    x: 0,
    y: 35,
    z: -10,
    connections: ['accounts', 'code'],
    color: '#6798ff'
  },
  {
    id: 'code',
    name: 'Zenuxs.Code',
    category: 'IDE / Workspace',
    shortDesc: 'The AI Operating System',
    url: 'https://code.zenuxs.in',
    x: 35,
    y: 20,
    z: 15,
    connections: ['ai', 'accounts', 'easy-mongoo', 'hmax', 'hosting', 'cli'],
    color: '#6798ff'
  },
  {
    id: 'easy-mongoo',
    name: 'Easy-Mongoo',
    category: 'Data',
    shortDesc: 'Simplified MongoDB ODM',
    url: 'https://easy-mongoo.zenuxs.in',
    x: -35,
    y: -20,
    z: -15,
    connections: ['code', 'hmax', 'accounts'],
    color: '#10b981'
  },
  {
    id: 'hmax',
    name: 'HMAX-SECURE',
    category: 'Security',
    shortDesc: 'HMAC-Argon2 Hashing Primitives',
    url: 'https://hmax.zenuxs.in',
    x: -15,
    y: -30,
    z: 25,
    connections: ['accounts', 'easy-mongoo', 'code'],
    color: '#da5c2c'
  },
  {
    id: 'hosting',
    name: 'Zenuxs Hosting',
    category: 'Infrastructure',
    shortDesc: 'Edge Application Deployment',
    url: 'https://host.zenuxs.in',
    x: 30,
    y: -20,
    z: -20,
    connections: ['code', 'dns'],
    color: '#6798ff'
  },
  {
    id: 'dns',
    name: 'Zenuxs DNS',
    category: 'Infrastructure',
    shortDesc: 'Global Anycast DNS Routing',
    url: 'https://dns.zenuxs.in',
    x: 45,
    y: -5,
    z: 10,
    connections: ['hosting'],
    color: '#6798ff'
  },
  {
    id: 'plugins',
    name: 'Zenuxs Plugins',
    category: 'Minecraft',
    shortDesc: 'AdvancedAuth & Server Extensions',
    url: 'https://plugins.zenuxs.in',
    x: -45,
    y: 0,
    z: -25,
    connections: ['accounts', 'discord'],
    color: '#10b981'
  },
  {
    id: 'discord',
    name: 'Zenuxs Discord',
    category: 'Community',
    shortDesc: 'Developer & Community Hub',
    url: 'https://discord.zenuxs.in',
    x: 10,
    y: -35,
    z: 5,
    connections: ['plugins', 'github'],
    color: '#6798ff'
  },
  {
    id: 'github',
    name: 'Zenuxs GitHub',
    category: 'Open Source',
    shortDesc: 'Public Codebases & Packages',
    url: 'https://github.com/zenuxs-dev',
    x: 0,
    y: -15,
    z: 35,
    connections: ['discord', 'accounts', 'easy-mongoo', 'hmax', 'cli'],
    color: '#efefef'
  },
  {
    id: 'cli',
    name: 'Zenuxs CLI',
    category: 'Developer Tooling',
    shortDesc: 'Terminal Orchestration & Scaffolding',
    url: 'https://github.com/zenuxs-dev/zenuxs-cli',
    x: 15,
    y: 10,
    z: -30,
    connections: ['code', 'accounts', 'github'],
    color: '#da5c2c'
  }
];
