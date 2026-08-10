import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'zenuxs-accounts',
    slug: 'accounts',
    name: 'Zenuxs Accounts',
    tagline: 'Authentication and OAuth 2.0 PKCE infrastructure.',
    description: 'Universal OAuth 2.0 client and identity infrastructure supporting browsers, Node.js, React Native, and hybrid applications with automatic token rotation and session management.',
    category: ['identity', 'developer', 'security'],
    status: 'live',
    openSource: true,
    url: 'https://zenuxs.in',
    docsUrl: 'https://zenuxs.in/developers',
    githubUrl: 'https://github.com/zenuxs-dev/zenuxs-oauth',
    tags: ['oauth2', 'pkce', 'authentication', 'session-management', 'jwt', 'security'],
    audience: ['Frontend Developers', 'Backend Engineers', 'Mobile Developers'],
    accentColor: '#da5c2c',
    features: [
      {
        title: 'Universal OAuth 2.0 + PKCE',
        description: 'Secure authorization code flow with Proof Key for Code Exchange across Web, Node, and Mobile.',
        technicalDetail: 'RFC 7636 compliant PKCE with SHA-256 code challenge generation'
      },
      {
        title: 'Silent Token Refresh',
        description: 'Background rotation of expired access tokens without interrupting active user workflows.',
        technicalDetail: 'In-memory token cache with automatic refresh before expiry'
      },
      {
        title: 'Multi-Environment Session Sync',
        description: 'Seamless identity propagation between web applications, CLI utilities, and game servers.',
        technicalDetail: 'Cryptographically signed session claims with cross-origin cookie support'
      },
      {
        title: 'Developer SDK & CLI Hooks',
        description: 'Drop-in authentication SDK with minimal setup for React, Next.js, Express, and Fastify.',
        technicalDetail: 'Zero-dependency isomorphic client library'
      }
    ],
    codeSnippet: {
      language: 'typescript',
      title: 'zenuxs-oauth.ts',
      code: `import { ZenuxsAuth } from '@zenuxs/oauth';

export const auth = new ZenuxsAuth({
  clientId: process.env.ZENUXS_CLIENT_ID,
  redirectUri: 'https://app.example.com/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  autoRefresh: true
});

// Initiates PKCE login redirect
await auth.loginWithRedirect();`
    },
    stats: [
      { label: 'Standard', value: 'OAuth 2.0 PKCE' },
      { label: 'Security', value: 'Zero-Leak Tokens' },
      { label: 'Platforms', value: 'Web / Node / Native' }
    ]
  },
  {
    id: 'zenuxs-ai',
    slug: 'ai',
    name: 'Zenuxs AI',
    tagline: 'One Memory. Every AI.',
    description: 'Unified intelligence layer delivering cross-model persistent context, intelligent tool orchestration, and developer-focused reasoning assistance.',
    category: ['ai', 'developer'],
    status: 'live',
    openSource: false,
    url: 'https://ai.zenuxs.in',
    docsUrl: 'https://ai.zenuxs.in/docs',
    tags: ['artificial-intelligence', 'llm-orchestration', 'memory-layer', 'context-engine'],
    audience: ['Engineers', 'Product Teams', 'Knowledge Workers'],
    accentColor: '#6798ff',
    features: [
      {
        title: 'Persistent Memory Core',
        description: 'Retains project context, preferences, and architectural decisions across independent sessions.',
        technicalDetail: 'Vector embedding graph with semantic memory retrieval'
      },
      {
        title: 'Multi-Model Routing',
        description: 'Intelligently directs queries to optimal frontier models based on task complexity and token constraints.',
        technicalDetail: 'Dynamic latency & capability load balancer'
      },
      {
        title: 'Developer Tool Integration',
        description: 'Direct hooks into codebases, terminal execution, and repository indexing for continuous paired workflow.',
        technicalDetail: 'MCP (Model Context Protocol) client & server support'
      }
    ],
    codeSnippet: {
      language: 'typescript',
      title: 'zenuxs-ai-context.ts',
      code: `import { ZenuxsAI } from '@zenuxs/ai-sdk';

const ai = new ZenuxsAI({ memoryId: 'project-zenuxs' });

const response = await ai.generate({
  prompt: 'Refactor database connection pool for high concurrency',
  context: { attachRepoGraph: true }
});

console.log(response.output);`
    },
    stats: [
      { label: 'Memory Scope', value: 'Ecosystem-Wide' },
      { label: 'Model Support', value: 'Frontier LLMs' },
      { label: 'Context Engine', value: 'Semantic Graph' }
    ]
  },
  {
    id: 'zenuxs-code',
    slug: 'code',
    name: 'Zenuxs.Code',
    tagline: 'The AI Operating System for software builders.',
    description: 'Next-generation intelligent development workspace connecting code intelligence, container execution, terminal automation, and rapid deployment.',
    category: ['ai', 'developer'],
    status: 'beta',
    openSource: false,
    url: 'https://code.zenuxs.in',
    docsUrl: 'https://code.zenuxs.in/docs',
    tags: ['ai-ide', 'developer-environment', 'agentic-coding', 'cloud-workspace'],
    audience: ['Full-stack Developers', 'Software Architects', 'System Engineers'],
    accentColor: '#6798ff',
    features: [
      {
        title: 'Agentic Code Execution',
        description: 'Performs multi-step architectural refactors, executes unit tests, and validates builds autonomously.',
        technicalDetail: 'Sandboxed deterministic runtime environment'
      },
      {
        title: 'Ecosystem Native Integration',
        description: 'Native bindings to Zenuxs Accounts, Easy-Mongoo, HMAX, and Zenuxs Hosting for one-click stack launches.',
        technicalDetail: 'Integrated configuration synchronization'
      },
      {
        title: 'Intelligent Terminal Agent',
        description: 'Translates high-level system requirements into safe, validated shell commands and pipeline scripts.',
        technicalDetail: 'Dry-run inspection before destructive executions'
      }
    ],
    stats: [
      { label: 'Environment', value: 'Cloud & Local' },
      { label: 'Agent Flow', value: 'Interactive Plan' },
      { label: 'Speed', value: 'Sub-second Indexing' }
    ]
  },
  {
    id: 'easy-mongoo',
    slug: 'easy-mongoo',
    name: 'Easy-Mongoo',
    tagline: 'Simplified MongoDB wrapper for Node.js and TypeScript.',
    description: 'Ergonomic, lightweight database wrapper providing Mongoose-like schema validation, virtual fields, hooks, transactions, soft-delete, and aggregation with zero boilerplate.',
    category: ['database', 'developer', 'opensource'],
    status: 'live',
    openSource: true,
    url: 'https://easy-mongoo.zenuxs.in',
    docsUrl: 'https://easy-mongoo.zenuxs.in/docs',
    githubUrl: 'https://github.com/zenuxs-dev/easy-mongoo',
    npmUrl: 'https://www.npmjs.com/package/easy-mongoo',
    tags: ['mongodb', 'database', 'typescript', 'orm', 'odm', 'schema-validation'],
    audience: ['Node.js Developers', 'Backend Engineers', 'API Builders'],
    accentColor: '#10b981',
    features: [
      {
        title: 'Declarative Schema Modeling',
        description: 'Define strong TypeScript-backed schemas with nested types, defaults, and custom validators.',
        technicalDetail: 'Automatic type inference without code generation'
      },
      {
        title: 'Built-in Soft Delete & Auditing',
        description: 'Automated timestamp tracking, soft deletion flags, and query filtering out of the box.',
        technicalDetail: 'Middleware pre-find filter hooks'
      },
      {
        title: 'Atomic Multi-Document Transactions',
        description: 'Simplified syntax for executing ACID transactions across multiple collections safely.',
        technicalDetail: 'Automatic rollback on unhandled errors'
      },
      {
        title: 'Ergonomic Query Helpers',
        description: 'Fluent chaining for pagination, aggregation pipelines, and populated relationship queries.',
        technicalDetail: 'Direct cursor streaming optimization'
      }
    ],
    codeSnippet: {
      language: 'typescript',
      title: 'UserSchema.ts',
      code: `import { Schema, Model, connect } from 'easy-mongoo';

await connect(process.env.MONGODB_URI);

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, default: 'member' },
  isVerified: { type: Boolean, default: false }
}, { timestamps: true, softDelete: true });

export const User = new Model('User', UserSchema);

// Ergonomic query with automatic soft-delete filter
const activeUsers = await User.find({ role: 'member' });`
    },
    stats: [
      { label: 'Language', value: 'TypeScript' },
      { label: 'Package', value: 'npm Registry' },
      { label: 'Transactions', value: 'Native ACID' }
    ]
  },
  {
    id: 'hmax-secure',
    slug: 'hmax',
    name: 'HMAX-SECURE',
    tagline: 'Layered password hashing and security primitives for Node.js.',
    description: 'Enterprise-grade cryptographic security library combining HMAC-SHA512 pepper sealing, Argon2id/PBKDF2 key derivation, secret rotation, and timing-safe verification.',
    category: ['security', 'developer', 'opensource'],
    status: 'live',
    openSource: true,
    url: 'https://hmax.zenuxs.in',
    docsUrl: 'https://hmax.zenuxs.in/docs',
    githubUrl: 'https://github.com/zenuxs-dev/HMAX-SECURE',
    npmUrl: 'https://www.npmjs.com/package/hmax-secure',
    tags: ['cryptography', 'argon2id', 'hmac-sha512', 'password-hashing', 'security', 'zero-deps'],
    audience: ['Security Engineers', 'Backend Developers', 'System Architects'],
    accentColor: '#da5c2c',
    features: [
      {
        title: 'Layered HMAC-SHA512 + Argon2id',
        description: 'Multi-stage defense sealing passwords with application-level peppers before memory-hard KDF hashing.',
        technicalDetail: 'Protects database leaks from offline GPU cracking attacks'
      },
      {
        title: 'Secret Rotation & Migration',
        description: 'Seamlessly rotate pepper keys and upgrade legacy hash iterations during user authentication.',
        technicalDetail: 'Versioned hash headers ($v1$, $v2$) for automatic rehash'
      },
      {
        title: 'Constant-Time Verification',
        description: 'Cryptographically safe comparison preventing side-channel timing attacks.',
        technicalDetail: 'crypto.timingSafeEqual byte comparison'
      },
      {
        title: 'Zero Dependencies',
        description: 'Pure, audited implementation leveraging native cryptographic engines with zero external bloat.',
        technicalDetail: 'Standard Node.js crypto module bindings'
      }
    ],
    codeSnippet: {
      language: 'typescript',
      title: 'security.ts',
      code: `import { HmaxSecure } from 'hmax-secure';

const hmax = new HmaxSecure({
  pepper: process.env.SECURITY_PEPPER,
  algorithm: 'argon2id',
  memoryCost: 65536,
  timeCost: 3
});

// Securely hash a plaintext password
const hash = await hmax.hash('user_master_password');

// Constant-time verification with automatic rehash detection
const { valid, needsRehash } = await hmax.verify('user_master_password', hash);`
    },
    stats: [
      { label: 'Algorithms', value: 'Argon2id + HMAC-512' },
      { label: 'Protection', value: 'Peppered Sealing' },
      { label: 'Dependencies', value: '0 (Pure Node.js)' }
    ]
  },
  {
    id: 'zenuxs-hosting',
    slug: 'hosting',
    name: 'Zenuxs Hosting',
    tagline: 'High-performance infrastructure and application deployment.',
    description: 'Developer-oriented hosting and edge execution platform optimized for low latency, automated scaling, and unified ecosystem deployment.',
    category: ['infrastructure', 'developer'],
    status: 'development',
    openSource: false,
    url: 'https://host.zenuxs.in',
    docsUrl: 'https://host.zenuxs.in/docs',
    tags: ['hosting', 'cloud-infrastructure', 'edge-network', 'deployment', 'containers'],
    audience: ['System Architects', 'DevOps Engineers', 'Web Builders'],
    accentColor: '#6798ff',
    features: [
      {
        title: 'Global Edge Routing',
        description: 'Automated TLS provisioning and anycast request distribution across distributed edge nodes.',
        technicalDetail: 'Sub-30ms global routing topology'
      },
      {
        title: 'Git-Driven Automated Deploys',
        description: 'Push-to-deploy workflows with instantaneous preview environments and atomic rollbacks.',
        technicalDetail: 'Containerized immutable build pipelines'
      },
      {
        title: 'Ecosystem Telemetry',
        description: 'Real-time performance metrics, health telemetry, and distributed request logging.',
        technicalDetail: 'Direct integration with Zenuxs DNS and Accounts'
      }
    ],
    stats: [
      { label: 'Architecture', value: 'Edge Anycast' },
      { label: 'Security', value: 'Automated TLS' },
      { label: 'Status', value: 'Active Development' }
    ]
  },
  {
    id: 'zenuxs-plugins',
    slug: 'plugins',
    name: 'Zenuxs Plugins',
    tagline: 'Minecraft server plugins and cross-platform tooling.',
    description: 'Extensible Minecraft server ecosystem featuring AdvancedAuth, zxSrv, REST APIs, web management dashboards, and community-driven server extensions.',
    category: ['minecraft', 'developer', 'community'],
    status: 'live',
    openSource: true,
    url: 'https://plugins.zenuxs.in',
    docsUrl: 'https://plugins.zenuxs.in/docs',
    githubUrl: 'https://github.com/zenuxs-dev/AdvancedAuth',
    discordUrl: 'https://discord.zenuxs.in',
    tags: ['minecraft', 'spigot', 'paper-mc', 'server-auth', 'advancedauth', 'rest-api'],
    audience: ['Minecraft Server Owners', 'Plugin Developers', 'Community Admins'],
    accentColor: '#10b981',
    features: [
      {
        title: 'AdvancedAuth Web Bridge',
        description: 'Connects in-game Minecraft accounts to web dashboards with email OTP recovery and REST API management.',
        technicalDetail: 'Paper/Spigot native plugin with external database sync'
      },
      {
        title: 'Granular Session & IP Auditing',
        description: 'Real-time monitoring of active player sessions, IP login histories, and unauthorized access attempts.',
        technicalDetail: 'Geo-IP rate limiting and brute-force prevention'
      },
      {
        title: 'Custom Plugin Requests & Community',
        description: 'Active developer community providing open-source utilities, premium extensions, and support.',
        technicalDetail: 'Direct Discord developer integration'
      }
    ],
    stats: [
      { label: 'Featured Plugin', value: 'AdvancedAuth' },
      { label: 'Protocols', value: 'REST API + Web UI' },
      { label: 'Compatibility', value: 'Paper / Spigot / Velocity' }
    ]
  },
  {
    id: 'zenuxs-dns',
    slug: 'dns',
    name: 'Zenuxs DNS',
    tagline: 'Fast developer DNS and record routing infrastructure.',
    description: 'Low-latency domain resolution and DNS management service engineered for developer platforms and distributed cloud systems.',
    category: ['infrastructure', 'developer'],
    status: 'beta',
    openSource: false,
    url: 'https://dns.zenuxs.in',
    docsUrl: 'https://dns.zenuxs.in/docs',
    tags: ['dns', 'networking', 'anycast', 'developer-routing', 'domain-management'],
    audience: ['DevOps Engineers', 'Web Admins', 'Founders'],
    accentColor: '#6798ff',
    features: [
      {
        title: 'Instant Record Propagation',
        description: 'Sub-second DNS updates for A, AAAA, CNAME, TXT, and SRV records worldwide.',
        technicalDetail: 'Distributed anycast authoritative nameservers'
      },
      {
        title: 'Programmable DNS API',
        description: 'REST API and CLI bindings for automated wildcard certificate challenge resolution and routing.',
        technicalDetail: 'ACME DNS-01 challenge automation'
      }
    ],
    stats: [
      { label: 'Resolution', value: 'Global Anycast' },
      { label: 'Propagation', value: '< 2 Seconds' },
      { label: 'Management', value: 'API & Dashboard' }
    ]
  },
  {
    id: 'zenuxs-discord',
    slug: 'discord',
    name: 'Zenuxs Discord',
    tagline: 'Developer and community collaboration hub.',
    description: 'The central gathering place for Zenuxs developers, server owners, contributors, and builders to discuss code, collaborate on projects, and receive technical support.',
    category: ['community'],
    status: 'live',
    openSource: false,
    url: 'https://discord.zenuxs.in',
    discordUrl: 'https://discord.zenuxs.in',
    tags: ['community', 'discord', 'support', 'developer-hub', 'collaboration'],
    audience: ['Developers', 'Contributors', 'Minecraft Community', 'Designers'],
    accentColor: '#6798ff',
    features: [
      {
        title: 'Direct Developer Support',
        description: 'Collaborate with the creators of Zenuxs tools, report bugs, and request features.',
        technicalDetail: 'Active triage and ticketing channels'
      },
      {
        title: 'Ecosystem Release Announcements',
        description: 'Immediate notifications for new library releases, security patches, and preview builds.',
        technicalDetail: 'Automated GitHub release webhooks'
      }
    ],
    stats: [
      { label: 'Platform', value: 'Discord API' },
      { label: 'Channels', value: 'Dev / OSS / Gaming' },
      { label: 'Access', value: 'Open Invite' }
    ]
  },
  {
    id: 'zenuxs-github',
    slug: 'github',
    name: 'Zenuxs GitHub',
    tagline: 'Open-source repositories, libraries, and public packages.',
    description: 'The open-source foundation of Zenuxs. Transparent codebases covering OAuth clients, database wrappers, cryptographic utilities, CLI tools, and server extensions.',
    category: ['opensource', 'developer'],
    status: 'live',
    openSource: true,
    url: 'https://github.com/zenuxs-dev',
    githubUrl: 'https://github.com/zenuxs-dev',
    tags: ['github', 'open-source', 'repositories', 'codebase', 'typescript'],
    audience: ['Open Source Contributors', 'Security Researchers', 'Curious Builders'],
    accentColor: '#efefef',
    features: [
      {
        title: 'Transparent Codebases',
        description: 'Read, inspect, fork, and contribute to every open-source layer of the ecosystem.',
        technicalDetail: 'MIT / Apache 2.0 licensed software'
      },
      {
        title: 'Public Issue Tracking & RFCs',
        description: 'Open development discussions shaping future APIs, tooling specs, and architecture.',
        technicalDetail: 'GitHub Discussions and issue boards'
      }
    ],
    stats: [
      { label: 'Organization', value: 'github.com/zenuxs-dev' },
      { label: 'License', value: 'Permissive Open Source' },
      { label: 'Contributions', value: 'Community Driven' }
    ]
  },
  {
    id: 'zenuxs-cli',
    slug: 'cli',
    name: 'Zenuxs CLI',
    tagline: 'Command-line tool for scaffolding and ecosystem orchestration.',
    description: 'Unified terminal interface for initializing projects, authenticating with Zenuxs Accounts, generating database schemas, and managing cloud deployments.',
    category: ['developer', 'opensource'],
    status: 'live',
    openSource: true,
    url: 'https://github.com/zenuxs-dev/zenuxs-cli',
    githubUrl: 'https://github.com/zenuxs-dev/zenuxs-cli',
    npmUrl: 'https://www.npmjs.com/package/zenuxs-cli',
    tags: ['cli', 'terminal', 'developer-tooling', 'scaffolding', 'automation'],
    audience: ['Terminal Aficionados', 'Full-stack Developers', 'DevOps'],
    accentColor: '#da5c2c',
    features: [
      {
        title: 'Instant Project Scaffolding',
        description: 'Generate full-stack boilerplates pre-configured with Zenuxs OAuth, Easy-Mongoo, and HMAX.',
        technicalDetail: 'zenuxs init <template-name>'
      },
      {
        title: 'Terminal-Based OAuth Login',
        description: 'Authenticate local developer environments seamlessly using device code authorization.',
        technicalDetail: 'RFC 8628 OAuth Device Flow'
      }
    ],
    codeSnippet: {
      language: 'bash',
      title: 'terminal',
      code: `# Install CLI globally
npm install -g zenuxs-cli

# Authenticate with Zenuxs Accounts
zenuxs login

# Scaffold new secure stack
zenuxs create my-project --template=fullstack-auth`
    },
    stats: [
      { label: 'Interface', value: 'Interactive Terminal' },
      { label: 'Distribution', value: 'npm Global / Homebrew' },
      { label: 'Speed', value: 'Native Execution' }
    ]
  }
];
