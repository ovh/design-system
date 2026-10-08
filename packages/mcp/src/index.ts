#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { getIndex, sourceLabel } from './content.js';
import { registerTools } from './tools.js';

// A pinned version without a docs set already falls back to the bundled
// snapshot (logged by content.ts). What remains is a broken install: startup
// survives and every documentation tool reports the failure to the assistant.
const index = await getIndex().catch((error: unknown) => {
  console.error(`ods-mcp: cannot load the documentation index: ${String(error)}`);
  return undefined;
});

const server = new McpServer({
  name: 'ovhcloud-design-system',
  version: index?.version ?? '0.0.0',
});

await registerTools(server);

await server.connect(new StdioServerTransport());
// stdout carries the protocol: any human-facing logging goes to stderr.
console.error(`ods-mcp ready — docs ${index?.version ?? 'unknown'} — source: ${sourceLabel()}`);
