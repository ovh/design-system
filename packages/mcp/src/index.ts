#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { getIndex, source } from './content.js';
import { registerTools } from './tools.js';

const index = await getIndex().catch((error: unknown) => {
  // Startup survives so the message below can explain the situation on stderr:
  // every tool call will surface the same failure to the assistant anyway.
  console.error(`ods-mcp: cannot load the documentation index from ${source.label}: ${String(error)}`);
  if (source.kind === 'pinned') {
    console.error('ods-mcp: ODS_DOCS_VERSION only works for versions published with the docs platform (the older Storybook-era sets do not ship llms-index.json).');
  }
  return undefined;
});

const server = new McpServer({
  name: 'ovhcloud-design-system',
  version: index?.version ?? '0.0.0',
});

registerTools(server);

await server.connect(new StdioServerTransport());
// stdout carries the protocol: any human-facing logging goes to stderr.
console.error(`ods-mcp ready — docs ${index?.version ?? 'unknown'} — source: ${source.label}`);
