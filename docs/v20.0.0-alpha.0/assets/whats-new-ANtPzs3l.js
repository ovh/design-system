import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{DocLink:i,Heading:a}=t;return i||o(`DocLink`,!0),a||o(`Heading`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[`Release notes of the current major version, v20. Earlier versions are listed under `,(0,r.jsx)(i,{to:`/guides/whats-new-v19`,children:`What's new in previous versions`}),`; the `,(0,r.jsx)(i,{to:`/guides/changelog`,children:`Changelog`}),` lists every change.`]})}),`
`,(0,r.jsx)(a,{label:`v20.0.0-alpha.0`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`First prerelease of v20. It is published under the `,(0,r.jsx)(t.code,{children:`alpha`}),` tag: install it with `,(0,r.jsx)(t.code,{children:`npm install @ovhcloud/ods-react@alpha @ovhcloud/ods-themes@alpha`}),`, the `,(0,r.jsx)(t.code,{children:`latest`}),` tag stays on v19. Its API may still change before v20.0.0.`]}),`
`,(0,r.jsxs)(t.p,{children:[`v20 has breaking changes in the component API and in the theme. Follow the `,(0,r.jsx)(i,{to:`/guides/migration-19-to-20`,children:`Migration 19.x to 20.x`}),` guide before you upgrade.`]}),`
`,(0,r.jsx)(a,{label:`Project changes`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`React 19`}),` is supported, and React 18 still is: the peer dependency range is unchanged.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Themes`}),` are rebuilt on a semantic layer of tokens, and the default theme gets a new, neutral look. Four themes are shipped, each as one complete stylesheet: the default theme (Aluminium), its dark mode, Blue Jeans (the OVHcloud look) and its dark mode. See `,(0,r.jsx)(i,{to:`/guides/themes`,children:`Themes`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Documentation`}),` moves from Storybook to a new documentation website, published as `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-docs`}),` in place of `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-storybook`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`APIs deprecated in v19 are removed`}),`, the Switch component among them. The `,(0,r.jsx)(t.code,{children:`color`}),` prop is removed too, in favor of `,(0,r.jsx)(t.code,{children:`status`}),` where the component has one.`]}),`
`]}),`
`,(0,r.jsx)(a,{label:`New packages`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`@ovhcloud/ods-mcp`})}),`
`,(0,r.jsxs)(t.p,{children:[`An MCP server that gives AI assistants access to the ODS documentation. `,(0,r.jsx)(i,{to:`/guides/mcp-server`,children:`See Documentation`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`@ovhcloud/ods-tailwind`})}),`
`,(0,r.jsxs)(t.p,{children:[`Tailwind CSS v4 utilities mapped to the ODS tokens. `,(0,r.jsx)(i,{to:`/guides/tailwind`,children:`See Documentation`}),`.`]}),`
`,(0,r.jsx)(a,{label:`New components`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Command`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{to:`/components/command`,children:`See Documentation`}),`.`]}),`
`,(0,r.jsx)(a,{label:`Feature updates`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Accordion`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`emphasis`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Badge`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attributes `,(0,r.jsx)(t.code,{children:`status`}),` and `,(0,r.jsx)(t.code,{children:`emphasis`}),` have been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Button`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attributes `,(0,r.jsx)(t.code,{children:`status`}),` and `,(0,r.jsx)(t.code,{children:`emphasis`}),` have been added, `,(0,r.jsx)(t.code,{children:`emphasis`}),` replaces `,(0,r.jsx)(t.code,{children:`variant`}),`.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Card`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`status`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Drawer`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`backdrop`}),` has been added. With it, the page no longer scrolls and a click on the backdrop closes the drawer.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Input`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attributes `,(0,r.jsx)(t.code,{children:`startContent`}),` and `,(0,r.jsx)(t.code,{children:`endContent`}),` have been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Message`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attributes `,(0,r.jsx)(t.code,{children:`status`}),` and `,(0,r.jsx)(t.code,{children:`emphasis`}),` have been added, `,(0,r.jsx)(t.code,{children:`emphasis`}),` replaces `,(0,r.jsx)(t.code,{children:`variant`}),`.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Pagination`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attributes `,(0,r.jsx)(t.code,{children:`getPageUrl`}),` and `,(0,r.jsx)(t.code,{children:`linkAs`}),` have been added, to render the pages as links.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Spinner`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New CSS custom property `,(0,r.jsx)(t.code,{children:`--ods-spinner-color`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Table`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`striped`}),` has been added, it replaces `,(0,r.jsx)(t.code,{children:`variant`}),`.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Tabs`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`mountStrategy`}),` has been added, to choose when the content of the inactive panels is rendered.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Tag`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`status`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Toaster`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New method `,(0,r.jsx)(t.code,{children:`toast.accent()`}),` has been added, it replaces `,(0,r.jsx)(t.code,{children:`toast.primary()`}),`.`]}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};