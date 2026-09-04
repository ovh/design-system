#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { getIndex, source } from './content.js';
import { registerTools } from './tools.js';

const index = await getIndex().catch(() => undefined);

const server = new McpServer({
  name: 'ovhcloud-design-system',
  version: index?.version ?? '0.0.0',
});

registerTools(server);

await server.connect(new StdioServerTransport());
// stdout carries the protocol: any human-facing logging goes to stderr.
console.error(`ods-mcp ready — docs ${index?.version ?? 'unknown'} — source: ${source.label}`);
