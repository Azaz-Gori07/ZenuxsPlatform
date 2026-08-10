import { Repository } from '../types/product';

export const repositories: Repository[] = [
  {
    id: 'zenuxs-oauth',
    name: 'zenuxs-oauth',
    repo: 'zenuxs-dev/zenuxs-oauth',
    url: 'https://github.com/zenuxs-dev/zenuxs-oauth',
    description: 'Universal OAuth 2.0 + PKCE client library for browsers, Node.js, and mobile applications.',
    stars: 0,
    illustrative: true,
    forks: 0,
    language: 'TypeScript',
    license: 'MIT',
    topics: ['oauth2', 'pkce', 'authentication', 'security', 'jwt', 'typescript'],
    productRef: 'accounts'
  },
  {
    id: 'easy-mongoo',
    name: 'easy-mongoo',
    repo: 'zenuxs-dev/easy-mongoo',
    url: 'https://github.com/zenuxs-dev/easy-mongoo',
    description: 'Simplified MongoDB wrapper for Node.js with declarative schemas, hooks, transactions, and soft-delete.',
    stars: 0,
    illustrative: true,
    forks: 0,
    language: 'TypeScript',
    license: 'MIT',
    topics: ['mongodb', 'database', 'odm', 'schema-validation', 'typescript'],
    productRef: 'easy-mongoo'
  },
  {
    id: 'hmax-secure',
    name: 'HMAX-SECURE',
    repo: 'zenuxs-dev/HMAX-SECURE',
    url: 'https://github.com/zenuxs-dev/HMAX-SECURE',
    description: 'Enterprise-grade password hashing primitives combining HMAC-SHA512 pepper sealing and Argon2id/PBKDF2.',
    stars: 0,
    illustrative: true,
    forks: 0,
    language: 'TypeScript',
    license: 'Apache-2.0',
    topics: ['cryptography', 'argon2', 'hmac', 'security', 'password-hashing'],
    productRef: 'hmax'
  },
  {
    id: 'zenuxs-cli',
    name: 'zenuxs-cli',
    repo: 'zenuxs-dev/zenuxs-cli',
    url: 'https://github.com/zenuxs-dev/zenuxs-cli',
    description: 'Terminal CLI tool for scaffolding projects, device-flow authentication, and managing ecosystem stacks.',
    stars: 0,
    illustrative: true,
    forks: 0,
    language: 'TypeScript',
    license: 'MIT',
    topics: ['cli', 'terminal', 'developer-tools', 'scaffolding'],
    productRef: 'cli'
  },
  {
    id: 'advanced-auth',
    name: 'AdvancedAuth',
    repo: 'zenuxs-dev/AdvancedAuth',
    url: 'https://github.com/zenuxs-dev/AdvancedAuth',
    description: 'Minecraft server authentication system with web dashboard integration, REST API, and session auditing.',
    stars: 0,
    illustrative: true,
    forks: 0,
    language: 'Java',
    license: 'GPL-3.0',
    topics: ['minecraft', 'spigot', 'paper-mc', 'authentication', 'rest-api'],
    productRef: 'plugins'
  }
];
