export interface ProductLegalInfo {
  productId: string;
  slug: string;
  name: string;
  terms: {
    lastUpdated: string;
    summary: string;
    sections: { title: string; content: string[] }[];
  };
  privacy: {
    lastUpdated: string;
    summary: string;
    sections: { title: string; content: string[] }[];
  };
}

export const PLATFORM_TERMS = {
  lastUpdated: 'August 11, 2026',
  summary: 'General terms governing access and use of the ZenuxsPlatform ecosystem website, developer resources, and unified services.',
  sections: [
    {
      title: '1. About ZenuxsPlatform',
      content: [
        'ZenuxsPlatform is a technology and developer ecosystem platform intended to provide information, discovery, documentation links, resources, and access points for software products, developer tools, open-source projects, infrastructure services, community resources, and related technologies associated with the Zenuxs ecosystem.',
        'The Platform contains information about products developed by Zenuxs, maintained as open-source, or operated through separate infrastructure.',
      ],
    },
    {
      title: '2. Acceptance of Terms',
      content: [
        'By accessing or using ZenuxsPlatform, you acknowledge that you have read, understood, and agree to be bound by these Terms.',
        'If you use the Platform on behalf of an organization, you represent that you have authority to bind that organization.',
      ],
    },
    {
      title: '3. Acceptable Use',
      content: [
        'You must use the Platform only for lawful developer and technology purposes.',
        'Prohibited activities include: unauthorized security testing or attacks, scraping or disrupting infrastructure, distributing malware, circumventing authentication, or impersonating Zenuxs services.',
      ],
    },
    {
      title: '4. Product & Service Information',
      content: [
        'Products may be marked as Live, Beta, or Development. Specifications, features, pricing, APIs, and technical behavior may change without prior notice.',
        'Each product operated under the Zenuxs ecosystem maintains its own specific Terms and Privacy Policy accessible via this legal portal.',
      ],
    },
    {
      title: '5. Disclaimer of Warranties & Limitation of Liability',
      content: [
        'The Platform is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind.',
        'Zenuxs and its maintainers will not be liable for indirect, incidental, consequential, or punitive damages resulting from your use of the Platform.',
      ],
    },
    {
      title: '6. Governing Law',
      content: [
        'These Terms shall be governed by and interpreted in accordance with the laws applicable in India.',
        'Legal inquiries: legal@zenuxs.in',
      ],
    },
  ],
};

export const PLATFORM_PRIVACY = {
  lastUpdated: 'August 11, 2026',
  summary: 'How Zenuxs collects, uses, and protects personal data across the ZenuxsPlatform ecosystem.',
  sections: [
    {
      title: '1. Information We Collect',
      content: [
        'Account Data: Email address, username, profile identifiers when registering via Zenuxs Accounts.',
        'Technical Logs: Anonymized IP addresses, browser user-agent strings, access timestamps, and telemetry data needed for platform security and rate limiting.',
        'Developer Usage Data: API request counts, CLI version pings, and aggregated feature usage.',
      ],
    },
    {
      title: '2. How We Use Information',
      content: [
        'To authenticate users and enforce OAuth 2.0 PKCE authorization tokens.',
        'To maintain edge network security, prevent DDoS attacks, and enforce API rate limits.',
        'To improve developer developer tooling, fix software bugs, and optimize infrastructure performance.',
      ],
    },
    {
      title: '3. Data Retention & Security',
      content: [
        'We store credentials and secrets using Argon2id peppered password hashing (HMAX-SECURE) and constant-time token verification.',
        'We retain operational logs for up to 90 days before automated deletion or anonymization.',
        'We do not sell user data to third parties under any circumstances.',
      ],
    },
    {
      title: '4. Your Data Rights',
      content: [
        'You have the right to request access, correction, or complete erasure of your account data.',
        'To exercise your data privacy rights, email privacy@zenuxs.in.',
      ],
    },
  ],
};

export const PRODUCT_LEGAL_DATA: Record<string, ProductLegalInfo> = {
  accounts: {
    productId: 'zenuxs-accounts',
    slug: 'accounts',
    name: 'Zenuxs Accounts',
    terms: {
      lastUpdated: 'August 11, 2026',
      summary: 'Terms governing Zenuxs Accounts universal identity and OAuth 2.0 PKCE authentication services.',
      sections: [
        {
          title: '1. Identity & OAuth 2.0 PKCE Usage',
          content: [
            'Zenuxs Accounts provides identity verification and OAuth 2.0 PKCE authorization for web, mobile, and server applications.',
            'Applications integrating Zenuxs Accounts must comply with RFC 7636 PKCE standards and never expose client secrets in frontend client code.',
          ],
        },
        {
          title: '2. Account Security & Credential Protection',
          content: [
            'Users are responsible for safeguarding authentication tokens, recovery keys, and active session credentials.',
            'Automated token rotation occurs silently; compromised tokens must be revoked immediately via the developer dashboard.',
          ],
        },
        {
          title: '3. Rate Limits & Quotas',
          content: [
            'OAuth authorization endpoints are subject to rate limiting to protect against brute-force attacks and credential stuffing.',
            'Excessive request rates exceeding 100 requests/sec per client ID may trigger temporary IP throttling.',
          ],
        },
      ],
    },
    privacy: {
      lastUpdated: 'August 11, 2026',
      summary: 'Privacy practices for Zenuxs Accounts identity and authentication infrastructure.',
      sections: [
        {
          title: '1. Personal Data Processed',
          content: [
            'Account Email: Used as primary identity anchor for authentication and security alerts.',
            'Cryptographic Hashes: Password hashes stored using Argon2id with HMAC-SHA512 pepper sealing.',
            'Session Metadata: IP addresses, user agents, active token expiry timestamps.',
          ],
        },
        {
          title: '2. Third-Party Sharing',
          content: [
            'Identity data is shared ONLY with authorized client applications when explicit user consent is granted via OAuth consent prompts.',
          ],
        },
      ],
    },
  },
  ai: {
    productId: 'zenuxs-ai',
    slug: 'ai',
    name: 'Zenuxs AI',
    terms: {
      lastUpdated: 'August 11, 2026',
      summary: 'Terms governing Zenuxs AI persistent memory engine and multi-model inference layer.',
      sections: [
        {
          title: '1. Acceptable Prompts & Output Disclaimer',
          content: [
            'Users must not submit prompts intended to generate malware, execute unauthorized exploits, or violate privacy laws.',
            'AI output is provided for assistance purposes and must be validated before production deployment.',
          ],
        },
        {
          title: '2. Vector Memory & Context Graph',
          content: [
            'Persistent project context graph vector embeddings remain the property of the project owner.',
            'Zenuxs AI does not use private customer prompts to train underlying base models.',
          ],
        },
      ],
    },
    privacy: {
      lastUpdated: 'August 11, 2026',
      summary: 'Privacy policy for Zenuxs AI memory graph and prompt context processing.',
      sections: [
        {
          title: '1. Data Processed',
          content: [
            'Prompt Content: Processed ephemerally to generate model responses.',
            'Semantic Memory Graph: Vectorized embeddings of codebase ASTs and project preferences stored securely in isolation.',
          ],
        },
        {
          title: '2. Model Provider Routing',
          content: [
            'Requests routed to frontier model providers (Anthropic, OpenAI) adhere to enterprise zero-retention data processing agreements.',
          ],
        },
      ],
    },
  },
  code: {
    productId: 'zenuxs-code',
    slug: 'code',
    name: 'Zenuxs.Code',
    terms: {
      lastUpdated: 'August 11, 2026',
      summary: 'Terms governing Zenuxs.Code cloud IDE workspace and agentic dev container execution.',
      sections: [
        {
          title: '1. Dev Container Resource Usage',
          content: [
            'Workspaces run inside isolated sandboxed environments with strict CPU, RAM, and storage caps.',
            'Cryptocurrency mining, network abuse, and unauthorized penetration testing from cloud dev containers are strictly prohibited.',
          ],
        },
        {
          title: '2. Agentic Code Modifications',
          content: [
            'Automated refactors and terminal executions initiated by Zenuxs.Code agents must be reviewed by the developer prior to git commits.',
          ],
        },
      ],
    },
    privacy: {
      lastUpdated: 'August 11, 2026',
      summary: 'Privacy policy for Zenuxs.Code workspace files and terminal logging.',
      sections: [
        {
          title: '1. Workspace Storage',
          content: [
            'Repository files loaded into Zenuxs.Code are encrypted at rest using AES-256 and accessible only by authenticated session owners.',
            'Terminal execution logs are retained for debugging during active session lifetime and purged upon container destruction.',
          ],
        },
      ],
    },
  },
  'easy-mongoo': {
    productId: 'easy-mongoo',
    slug: 'easy-mongoo',
    name: 'Easy-Mongoo',
    terms: {
      lastUpdated: 'August 11, 2026',
      summary: 'Terms and license for Easy-Mongoo ODM library for Node.js and TypeScript.',
      sections: [
        {
          title: '1. MIT Open Source License',
          content: [
            'Easy-Mongoo is licensed under the permissive MIT License.',
            'Permission is granted to use, modify, merge, publish, distribute, sublicense, and sell copies of the software.',
          ],
        },
        {
          title: '2. Disclaimer of Database Liability',
          content: [
            'Easy-Mongoo is provided "AS IS", without warranty of any kind. Developers are responsible for database backup and transaction safety.',
          ],
        },
      ],
    },
    privacy: {
      lastUpdated: 'August 11, 2026',
      summary: 'Privacy policy for Easy-Mongoo database wrapper.',
      sections: [
        {
          title: '1. Zero Telemetry Collection',
          content: [
            'Easy-Mongoo is a client-side database library that collects ZERO telemetry, tracking data, or external pings.',
            'All database queries execute strictly between your Node.js runtime and your configured MongoDB cluster.',
          ],
        },
      ],
    },
  },
  hmax: {
    productId: 'hmax-secure',
    slug: 'hmax',
    name: 'HMAX-SECURE',
    terms: {
      lastUpdated: 'August 11, 2026',
      summary: 'Terms and security guidelines for HMAX-SECURE cryptographic library.',
      sections: [
        {
          title: '1. Permissive Open Source License',
          content: [
            'HMAX-SECURE is open-source software provided under the MIT License.',
          ],
        },
        {
          title: '2. Pepper Key & Secret Management',
          content: [
            'Developers are solely responsible for securing application pepper keys stored in environment variables.',
            'Loss of pepper keys makes Argon2id password hash verification unrecoverable by design.',
          ],
        },
      ],
    },
    privacy: {
      lastUpdated: 'August 11, 2026',
      summary: 'Privacy policy for HMAX-SECURE cryptography primitives.',
      sections: [
        {
          title: '1. Zero Telemetry & Local Execution',
          content: [
            'HMAX-SECURE executes 100% locally using native Node.js crypto engines without external network requests or tracking.',
          ],
        },
      ],
    },
  },
  hosting: {
    productId: 'zenuxs-hosting',
    slug: 'hosting',
    name: 'Zenuxs Hosting',
    terms: {
      lastUpdated: 'August 11, 2026',
      summary: 'Terms governing Zenuxs Hosting edge infrastructure and deployment pipelines.',
      sections: [
        {
          title: '1. Content Hosting Policy',
          content: [
            'Hosted applications must comply with content laws. Illegal content, malware distribution, or phishing sites will be terminated immediately.',
          ],
        },
        {
          title: '2. Bandwidth & Resource Fair Use',
          content: [
            'Edge bandwidth is subject to plan quotas. Automated TLS certificates are issued via ACME DNS-01 challenges.',
          ],
        },
      ],
    },
    privacy: {
      lastUpdated: 'August 11, 2026',
      summary: 'Privacy policy for Zenuxs Hosting edge routing and access logs.',
      sections: [
        {
          title: '1. Edge Request Logs',
          content: [
            'Edge nodes log incoming HTTP request headers, anonymized client IPs, and status codes for DDoS mitigation and performance analytics.',
          ],
        },
      ],
    },
  },
  plugins: {
    productId: 'zenuxs-plugins',
    slug: 'plugins',
    name: 'Zenuxs Plugins',
    terms: {
      lastUpdated: 'August 11, 2026',
      summary: 'Terms governing Zenuxs Minecraft server plugins including AdvancedAuth.',
      sections: [
        {
          title: '1. Plugin Installation & Game Server Integration',
          content: [
            'AdvancedAuth and zxSrv plugins integrate with Spigot, Paper, and Velocity Minecraft server software.',
            'Server operators must ensure compliance with Minecraft Mojang EULA guidelines.',
          ],
        },
      ],
    },
    privacy: {
      lastUpdated: 'August 11, 2026',
      summary: 'Privacy policy for Zenuxs Plugins and AdvancedAuth session syncing.',
      sections: [
        {
          title: '1. Player Data Collection',
          content: [
            'AdvancedAuth stores Minecraft player UUIDs, hashed passwords (using HMAX-SECURE), and recent login IP records for 2FA auditing.',
          ],
        },
      ],
    },
  },
  dns: {
    productId: 'zenuxs-dns',
    slug: 'dns',
    name: 'Zenuxs DNS',
    terms: {
      lastUpdated: 'August 11, 2026',
      summary: 'Terms governing Zenuxs DNS low-latency resolution and programmable record API.',
      sections: [
        {
          title: '1. Authoritative Nameserver Use',
          content: [
            'Zenuxs DNS nameservers must not be configured for domain squatting, fast-flux malware routing, or spam operations.',
          ],
        },
      ],
    },
    privacy: {
      lastUpdated: 'August 11, 2026',
      summary: 'Privacy policy for Zenuxs DNS resolution logging.',
      sections: [
        {
          title: '1. DNS Query Telemetry',
          content: [
            'DNS resolution queries are processed across global anycast nodes and aggregated without storing individual user browsing histories.',
          ],
        },
      ],
    },
  },
  discord: {
    productId: 'zenuxs-discord',
    slug: 'discord',
    name: 'Zenuxs Discord',
    terms: {
      lastUpdated: 'August 11, 2026',
      summary: 'Community terms and Code of Conduct for Zenuxs Discord server.',
      sections: [
        {
          title: '1. Community Code of Conduct',
          content: [
            'Be respectful. No harassment, hate speech, spamming, or sharing unauthorized malicious exploits.',
          ],
        },
      ],
    },
    privacy: {
      lastUpdated: 'August 11, 2026',
      summary: 'Privacy notes for Zenuxs Discord participation.',
      sections: [
        {
          title: '1. Discord Data Processing',
          content: [
            'Participation is subject to Discord Terms of Service and Privacy Policy.',
          ],
        },
      ],
    },
  },
  github: {
    productId: 'zenuxs-github',
    slug: 'github',
    name: 'Zenuxs GitHub',
    terms: {
      lastUpdated: 'August 11, 2026',
      summary: 'Open source contribution terms and license compliance for Zenuxs GitHub repositories.',
      sections: [
        {
          title: '1. Open Source Licensing',
          content: [
            'Repositories under github.com/zenuxs-dev are published under MIT or Apache 2.0 open-source licenses.',
          ],
        },
      ],
    },
    privacy: {
      lastUpdated: 'August 11, 2026',
      summary: 'Privacy for GitHub open-source contributions.',
      sections: [
        {
          title: '1. Public Commit Records',
          content: [
            'Pull requests, issues, and commit messages published to GitHub repositories are permanently public records.',
          ],
        },
      ],
    },
  },
  cli: {
    productId: 'zenuxs-cli',
    slug: 'cli',
    name: 'Zenuxs CLI',
    terms: {
      lastUpdated: 'August 11, 2026',
      summary: 'Terms governing Zenuxs CLI terminal orchestration utility.',
      sections: [
        {
          title: '1. Command Line Tool Usage',
          content: [
            'Zenuxs CLI provides terminal commands for project scaffolding, device code OAuth login, and stack initialization.',
          ],
        },
      ],
    },
    privacy: {
      lastUpdated: 'August 11, 2026',
      summary: 'Privacy policy for Zenuxs CLI local execution.',
      sections: [
        {
          title: '1. Anonymized Version Checks',
          content: [
            'Zenuxs CLI performs optional version check pings to npm to notify developers of security updates.',
          ],
        },
      ],
    },
  },
};
