import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={code:`code`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{ExternalLink:i,Heading:a}=t;return i||o(`ExternalLink`,!0),a||o(`Heading`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:`OVHcloud Design System is a collection of assets, guidelines and UI components for building consistent user experiences across OVHcloud products.`}),`
`,(0,r.jsxs)(t.p,{children:[`This page provides AI/LLM-optimized documentation following the `,(0,r.jsx)(i,{href:`https://llmstxt.org/`,children:`llmstxt.org`}),` specification.`]}),`
`,(0,r.jsx)(a,{label:`Entry Point`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The single entry point for AI agents is the `,(0,r.jsx)(i,{href:`/llms/llms.txt`,rel:`noopener noreferrer`,children:`llms.txt`}),` file. It is automatically generated from the official documentation and always lists the available documentation sets, including:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`the complete documentation and per-category files (components, generic);`}),`
`,(0,r.jsx)(t.li,{children:`per-file indexes for targeted context (one file per component or page);`}),`
`,(0,r.jsxs)(t.li,{children:[`a machine-readable `,(0,r.jsx)(i,{href:`/llms/llms-index.json`,rel:`noopener noreferrer`,children:`JSON index`}),` exposing, for every file, its type, a token estimate and its canonical URL.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`Always refer to `,(0,r.jsx)(i,{href:`/llms/llms.txt`,rel:`noopener noreferrer`,children:`llms.txt`}),` for the current, authoritative list: it is kept in sync with every release, so this page intentionally does not duplicate it.`]}),`
`,(0,r.jsx)(a,{label:`Choosing the Right Version`,level:2}),`
`,(0,r.jsx)(t.p,{children:`Every release publishes an immutable copy of its documentation set. Match the documentation to the code you actually use:`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Prefer the local copy`}),`: the `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-react`}),` npm package ships the full set in `,(0,r.jsx)(t.code,{children:`node_modules/@ovhcloud/ods-react/dist/llms/`}),` — always the installed version, available offline, no URL to resolve.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Otherwise pin the version`}),`: fetch `,(0,r.jsx)(t.code,{children:`https://ovh.github.io/design-system/vX.Y.Z/llms/llms.txt`}),` where `,(0,r.jsx)(t.code,{children:`X.Y.Z`}),` matches your `,(0,r.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Fall back to latest`}),` only when the version is unknown: `,(0,r.jsx)(t.code,{children:`https://ovh.github.io/design-system/latest/llms/llms.txt`}),`. The site root `,(0,r.jsx)(i,{href:`https://ovh.github.io/design-system/llms.txt`,children:`llms.txt`}),` lists every available version.`]}),`
`]}),`
`,(0,r.jsx)(a,{label:`How to Use`,level:2}),`
`,(0,r.jsx)(a,{label:`For AI Assistants`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Start from `,(0,r.jsx)(i,{href:`/llms/llms.txt`,rel:`noopener noreferrer`,children:`llms.txt`}),` and download the documentation set that fits your need, then provide it to your AI assistant (ChatGPT, Claude, etc.) for better context about ODS. For a specific component or page, use the per-file indexes to fetch only the file you need; the JSON index exposes a token estimate so you can budget context and save tokens.`]}),`
`,(0,r.jsx)(a,{label:`For Developers`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Use the category-specific files for focused documentation, or the complete file for full context when training custom AI models on your design system.`})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};