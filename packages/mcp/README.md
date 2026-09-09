# @ovhcloud/ods-mcp

MCP ([Model Context Protocol](https://modelcontextprotocol.io)) server exposing the OVHcloud Design System documentation to AI assistants (Claude Code, Cursor, VS Code Copilot, and any other MCP client).

## Setup

```bash
# Claude Code
claude mcp add ods -- npx -y @ovhcloud/ods-mcp
```

```jsonc
// Cursor / VS Code / Claude Desktop configuration
{
  "mcpServers": {
    "ods": { "command": "npx", "args": ["-y", "@ovhcloud/ods-mcp"] }
  }
}
```

## Documentation version resolution

1. **Your project first**: if the workspace has `@ovhcloud/ods-react` installed, its embedded documentation (`dist/llms`) is used — the docs always match the exact ODS version your project runs, offline.
2. **Pinned version**: set `ODS_DOCS_VERSION=X.Y.Z` to read `https://ovh.github.io/design-system/vX.Y.Z/llms` instead. Only works for versions published with the docs platform: the older Storybook-era sets (≤ 19.7.x) do not ship the `llms-index.json` the server needs.
3. **Bundled fallback**: the documentation snapshot bundled with this package.

Design tokens, icon aliases and recipes always come from the bundled snapshot (they are not part of the ods-react tarball).

## Tools

| Tool | Purpose |
|---|---|
| `list_components` | Every ODS component with its documentation sections |
| `get_component` | Component documentation (overview, documentation, technical-information, examples) |
| `get_component_api` | Full props / types / CSS variables of a component |
| `search_docs` | Full-text search across components and guides |
| `get_guide` | Guides (get started, forms, accessibility, migrations…) |
| `list_icons` | Icon search by name or alias |
| `get_tokens` | Design tokens of the default theme |
| `get_recipe` | Ready-made UI patterns with full source code |

## Development

```bash
pnpm --filter @ovhcloud/ods-mcp run build:prod   # tsc + bundle the docs content
pnpm --filter @ovhcloud/ods-mcp run test:spec    # harness over the real stdio server
```
