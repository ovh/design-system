import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Since Next 16.3, `next dev` run by an AI agent writes an AGENTS.md into the app: not in this repository.
  agentRules: false,
};

export default nextConfig;
