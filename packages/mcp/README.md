# @ovhcloud/ods-mcp

MCP ([Model Context Protocol](https://modelcontextprotocol.io)) server exposing the OVHcloud Design System documentation to AI assistants (Claude Code, Cursor, VS Code Copilot, and any other MCP client).

## Setup

Requires **Node.js 18+**.

```bash
# Claude Code
claude mcp add ods -- npx -y @ovhcloud/ods-mcp
```

```jsonc
// Cursor: .cursor/mcp.json (or ~/.cursor/mcp.json)
// Claude Desktop: claude_desktop_config.json
{
  "mcpServers": {
    "ods": { "command": "npx", "args": ["-y", "@ovhcloud/ods-mcp"] }
  }
}
```

```jsonc
// VS Code (Copilot): .vscode/mcp.json — the key is `servers`
{
  "servers": {
    "ods": { "type": "stdio", "command": "npx", "args": ["-y", "@ovhcloud/ods-mcp"] }
  }
}
```

## Documentation version resolution

Checked in this order: pinned version → your project → bundled snapshot.

1. **Pinned version**: set `ODS_DOCS_VERSION=X.Y.Z` (exact version, validated at startup) to read `https://ovh.github.io/design-system/vX.Y.Z/llms`. Only versions published with the docs platform ship the `llms-index.json` the server needs: for the older Storybook-era sets (≤ 19.7.x) the server logs the reason, falls back to the bundled snapshot and says so in every `_source:` line. The only mode that uses the network (10 s timeout, failures are not retried).
2. **Your project**: otherwise, if the installed `@ovhcloud/ods-react` embeds its documentation (`dist/llms`), it is used — the docs match the exact ODS version your project runs, offline. `node_modules` is searched upwards from `ODS_PROJECT_DIR`, else `CLAUDE_PROJECT_DIR` (set by Claude Code), else the working directory: set `ODS_PROJECT_DIR` when your client starts the server outside the project. Ships from the first docs-platform release onward; no published release up to 19.7.x contains `dist/llms`, those fall through to 3.
3. **Bundled snapshot**: the documentation bundled with this package.

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
pnpm --filter @ovhcloud/ods-mcp run build:prod   # tsc + bundle the docs content (rebuilds stale workspace dists)
pnpm --filter @ovhcloud/ods-mcp run test:spec    # harness over the built stdio server (build first)
pnpm --filter @ovhcloud/ods-mcp run lint:ts
```
