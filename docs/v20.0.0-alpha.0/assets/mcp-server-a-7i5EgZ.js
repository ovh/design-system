import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={blockquote:`blockquote`,code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components},{ExternalLink:i,Heading:a,Table:s}=t;return i||o(`ExternalLink`,!0),a||o(`Heading`,!0),s||o(`Table`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`Connect your AI assistant to the official ODS documentation: the `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-mcp`}),` server exposes components, props, guides, icons, tokens and recipes as tools any MCP-compatible assistant can query — so generated code uses real props instead of guessed ones.`]}),`
`]}),`
`,(0,r.jsx)(a,{label:`What is MCP?`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{href:`https://modelcontextprotocol.io`,children:`MCP (Model Context Protocol)`}),` is an open protocol supported by Claude Code, Claude Desktop, Cursor, VS Code Copilot and most AI coding assistants. An MCP server exposes `,(0,r.jsx)(t.strong,{children:`tools`}),` the assistant can call while it works. `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-mcp`}),` is a read-only server over the same documentation set as this website, running locally in your workspace — no account; works offline once installed (only `,(0,r.jsx)(t.code,{children:`ODS_DOCS_VERSION`}),` reads ovh.github.io).`]}),`
`,(0,r.jsx)(a,{label:`Setup`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The server needs `,(0,r.jsx)(t.strong,{children:`Node.js 20+`}),` (`,(0,r.jsx)(t.code,{children:`npx`}),` comes with it). Then register it in your assistant:`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Claude Code`}),` — run once in your project:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-shell`,children:`claude mcp add ods -- npx -y @ovhcloud/ods-mcp
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Cursor`}),` — `,(0,r.jsx)(t.code,{children:`.cursor/mcp.json`}),` in your project (or `,(0,r.jsx)(t.code,{children:`~/.cursor/mcp.json`}),` for every project):`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-json`,children:`{
  "mcpServers": {
    "ods": { "command": "npx", "args": ["-y", "@ovhcloud/ods-mcp"] }
  }
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`VS Code (Copilot)`}),` — `,(0,r.jsx)(t.code,{children:`.vscode/mcp.json`}),` in your project (note the `,(0,r.jsx)(t.code,{children:`servers`}),` key):`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-json`,children:`{
  "servers": {
    "ods": { "type": "stdio", "command": "npx", "args": ["-y", "@ovhcloud/ods-mcp"] }
  }
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Claude Desktop`}),` — `,(0,r.jsx)(t.code,{children:`claude_desktop_config.json`}),` (Settings › Developer › Edit Config):`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-json`,children:`{
  "mcpServers": {
    "ods": { "command": "npx", "args": ["-y", "@ovhcloud/ods-mcp"] }
  }
}
`})}),`
`,(0,r.jsx)(t.p,{children:`That is all. On the next session, the assistant discovers the ODS tools automatically.`}),`
`,(0,r.jsxs)(t.p,{children:[`To run the newest prerelease instead of the latest release, use `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-mcp@alpha`}),` in these commands.`]}),`
`,(0,r.jsx)(a,{label:`Which documentation version is served?`,level:2}),`
`,(0,r.jsx)(t.p,{children:`The server picks the documentation set in this order — an explicit choice first, then your project, then its own snapshot:`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Pinned version`}),` — set the `,(0,r.jsx)(t.code,{children:`ODS_DOCS_VERSION=X.Y.Z`}),` environment variable to read the published documentation of a specific release (docs-platform releases onward) from ovh.github.io: an explicit choice always wins. A version without a docs-platform documentation set falls back to the bundled snapshot, and the `,(0,r.jsx)(t.code,{children:`_source:`}),` line of every page answer says so.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Your project`}),` — otherwise, if the installed `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-react`}),` embeds its documentation (`,(0,r.jsx)(t.code,{children:`dist/llms`}),`, shipped from the first docs-platform release onward), it is used: the answers match the exact ODS version your project runs, offline. The server looks for `,(0,r.jsx)(t.code,{children:`node_modules`}),` from `,(0,r.jsx)(t.code,{children:`ODS_PROJECT_DIR`}),` if set, then from the project directory your assistant reports (`,(0,r.jsx)(t.code,{children:`CLAUDE_PROJECT_DIR`}),` in Claude Code), then from its working directory, walking up the parent folders.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Bundled fallback`}),` — in every other case (including all 19.x versions published before the docs platform), the snapshot bundled with the server is used.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`Every page answer (component, API, guide) starts with a `,(0,r.jsx)(t.code,{children:`_source:`}),` line telling you which one applied.`]}),`
`,(0,r.jsx)(a,{label:`Available tools`,level:2}),`
`,(0,r.jsxs)(s,{children:[(0,r.jsx)(`thead`,{children:(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`th`,{scope:`col`,children:`Tool`}),(0,r.jsx)(`th`,{scope:`col`,children:`What it answers`})]})}),(0,r.jsxs)(`tbody`,{children:[(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:(0,r.jsx)(`code`,{children:`list_components`})}),(0,r.jsx)(`td`,{children:`"Which components exist? Is there a datepicker?"`})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:(0,r.jsx)(`code`,{children:`get_component`})}),(0,r.jsx)(`td`,{children:`"Show me the documentation and examples of form-field"`})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:(0,r.jsx)(`code`,{children:`get_component_api`})}),(0,r.jsx)(`td`,{children:`"Which props does Select accept, with defaults?"`})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:(0,r.jsx)(`code`,{children:`search_docs`})}),(0,r.jsx)(`td`,{children:`"How does ODS handle form validation errors?"`})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:(0,r.jsx)(`code`,{children:`get_guide`})}),(0,r.jsx)(`td`,{children:`"How do I migrate from v19 to v20?"`})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:(0,r.jsx)(`code`,{children:`list_icons`})}),(0,r.jsx)(`td`,{children:`"An icon for settings?" (names and meaning aliases)`})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:(0,r.jsx)(`code`,{children:`get_tokens`})}),(0,r.jsx)(`td`,{children:`"Which token holds the critical color?"`})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:(0,r.jsx)(`code`,{children:`get_recipe`})}),(0,r.jsx)(`td`,{children:`"A ready-made status modal pattern?"`})]})]})]}),`
`,(0,r.jsx)(a,{label:`Try it`,level:2}),`
`,(0,r.jsx)(t.p,{children:`Once configured, ask your assistant for example:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.em,{children:`"Using the ODS tools, which props does the ODS Select accept?"`}),` — it should call `,(0,r.jsx)(t.code,{children:`get_component_api`}),` and answer with the real API, including default values.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.em,{children:`"Build me a login form with ODS components"`}),` — it should fetch `,(0,r.jsx)(t.code,{children:`form-field`}),`, `,(0,r.jsx)(t.code,{children:`input`}),` and `,(0,r.jsx)(t.code,{children:`button`}),` docs before writing code.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.em,{children:`"Find me an ODS icon meaning delete"`}),` — `,(0,r.jsx)(t.code,{children:`list_icons`}),` matches names and aliases.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`If the assistant does not use the tools spontaneously, mention "ODS documentation tools" once in your prompt; it will pick them up for the rest of the session.`}),`
`,(0,r.jsx)(a,{label:`Troubleshooting`,level:2}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Run `,(0,r.jsx)(t.code,{children:`npx -y @ovhcloud/ods-mcp`}),` manually: it must print `,(0,r.jsx)(t.code,{children:`ods-mcp ready — docs X.Y.Z — source: …`}),` on stderr and then wait for input (Ctrl-C to leave). If it does, the server is fine and the issue is in the client configuration.`]}),`
`,(0,r.jsxs)(t.li,{children:[`The documentation served for your project follows the installed `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-react`}),` — if answers look outdated, check that version first.`]}),`
`,(0,r.jsxs)(t.li,{children:[`The `,(0,r.jsx)(t.code,{children:`_source:`}),` line says `,(0,r.jsx)(t.code,{children:`bundled`}),` although your project installs a docs-platform `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-react`}),`? Your client probably starts the server outside the project: set `,(0,r.jsx)(t.code,{children:`ODS_PROJECT_DIR`}),` to the project path in the server's `,(0,r.jsx)(t.code,{children:`env`}),`.`]}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};