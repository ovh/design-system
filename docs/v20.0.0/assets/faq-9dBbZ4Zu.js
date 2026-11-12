import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={em:`em`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{DocLink:i,ExternalLink:a,Heading:s}=t;return i||o(`DocLink`,!0),a||o(`ExternalLink`,!0),s||o(`Heading`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:`Welcome to the F.A.Q. section of the OVHcloud Design System (ODS).`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:`Here, we aim to address common questions and provide helpful guidance for developers.`})}),`
`,(0,r.jsx)(s,{label:`How can I contribute?`,level:2}),`
`,(0,r.jsx)(t.p,{children:`OVHcloud Design System is an evolving project, and we welcome contributions from the community.
By keeping our repository open source, we aim to make it easier for anyone to suggest improvements, fix issues, or share ideas.`}),`
`,(0,r.jsx)(t.p,{children:`Whether it’s a small fix or a new feature, every contribution helps improve the quality and usability of the system.
We appreciate the time and effort of anyone who chooses to take part.`}),`
`,(0,r.jsx)(t.p,{children:`Please note that while we welcome contributions, we encourage you to discuss major changes with our team to ensure alignment with the project's goals and overall quality.
Additionally, if you're interested in proposing a new feature, please reach out to us first to avoid duplicating effort, as we may already be working on a similar development.`}),`
`,(0,r.jsxs)(t.p,{children:[`Refer to our project `,(0,r.jsx)(a,{href:`https://github.com/ovh/design-system?tab=contributing-ov-file#contributing-to-ods-project`,children:`README`}),` to learn more about installation and pre-requisites.`]}),`
`,(0,r.jsx)(s,{label:`How are releases managed?`,level:2}),`
`,(0,r.jsx)(t.p,{children:`The OVHcloud Design System follows a structured release process to deliver improvements regularly while letting teams adopt updates at their own pace.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Patch releases`}),` deliver critical fixes or small improvements and can be adopted immediately.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Minor releases`}),` introduce new non-breaking features, and can deprecate an element when a replacement exists.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Major releases`}),` contain breaking changes and their migration guide.`]}),`
`,(0,r.jsx)(t.p,{children:`Releases are published several times a year based on user needs and product evolution.`}),`
`,(0,r.jsx)(t.p,{children:`We support two major versions at the same time:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The current major version receives full support (features, improvements, fixes).`}),`
`,(0,r.jsx)(t.li,{children:`The previous major version receives maintenance support for six months (critical fixes only).`}),`
`,(0,r.jsx)(t.li,{children:`Older versions are no longer supported.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Breaking changes follow these rules:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`An element deprecated in a minor release is marked as "Deprecated" in the documentation, paired with migration guidance, and removed in the next major release.`}),`
`,(0,r.jsx)(t.li,{children:`A major release can also remove or rename an element that was not deprecated before.`}),`
`,(0,r.jsx)(t.li,{children:`Every removal or rename comes with a before/after example in the migration guide of the major release.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Teams may upgrade at their own pace and can skip versions.
We recommend pinning a specific ODS version in your project to ensure consistent behavior.`}),`
`,(0,r.jsx)(s,{label:`I can't find a component I need`,level:2}),`
`,(0,r.jsx)(t.p,{children:`ODS provides base components that you can build on top of and implement in various contexts.`}),`
`,(0,r.jsx)(t.p,{children:`If you need a new component, we recommend working with the design team to request and design the component to ensure it aligns with the ODS guidelines.`}),`
`,(0,r.jsx)(s,{label:`Is my browser supported?`,level:2}),`
`,(0,r.jsx)(t.p,{children:`ODS supports the latest 2 versions of the following browsers:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Google Chrome`}),`
`,(0,r.jsx)(t.li,{children:`Microsoft Edge`}),`
`,(0,r.jsx)(t.li,{children:`Mozilla Firefox`}),`
`,(0,r.jsx)(t.li,{children:`Opera`}),`
`,(0,r.jsx)(t.li,{children:`Safari`}),`
`]}),`
`,(0,r.jsx)(s,{label:`Can I use another CSS framework on top of ODS?`,level:2}),`
`,(0,r.jsx)(t.p,{children:`You can use any CSS framework on top of ODS.`}),`
`,(0,r.jsx)(t.p,{children:`Note that some imperative CSS frameworks like Bootstrap may override ODS styling.`}),`
`,(0,r.jsx)(t.p,{children:`Ensure compatibility by testing the integration in your project.`}),`
`,(0,r.jsx)(s,{label:`What about Web Components and Vue?`,level:2}),`
`,(0,r.jsx)(t.p,{children:`Starting from v19, ODS has moved to fully React-based components.
Web Components and the Vue wrapper are only available in v18.x, which is no longer supported:
it receives neither new features nor fixes.`}),`
`,(0,r.jsx)(t.p,{children:`If you still need to access documentation about Web Components or Vue, use the version selector at the top left to switch to the latest 18.x documentation, where you'll find the most up-to-date information.`}),`
`,(0,r.jsx)(s,{label:`Something does not work as expected`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Common integration issues (TypeScript resolution, overlays, icons, refs, server-side rendering) and their fixes are gathered in the `,(0,r.jsx)(i,{to:`/guides/troubleshooting`,children:`Troubleshooting`}),` guide.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};