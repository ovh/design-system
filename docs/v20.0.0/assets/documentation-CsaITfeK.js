import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,Heading:c,Icon:l,IdentityCard:u,Kbd:d}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`Heading`,!0),l||o(`Icon`,!0),u||o(`IdentityCard`,!0),d||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:`Code`}),` component highlights strings or small blocks of `,(0,r.jsx)(t.strong,{children:`Code`}),` so it makes them easier to read and understand`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(c,{label:`Overview`,level:2}),`
`,(0,r.jsx)(u,{aliases:[`Code snippet`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=26-7720`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/code`,name:`Code`,children:(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Code`}),` component displays a string of `,(0,r.jsx)(t.strong,{children:`Code`}),` or a small block of `,(0,r.jsx)(t.strong,{children:`Code`}),` that can be copied to the clipboard.`]})}),`
`,(0,r.jsx)(c,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Code`}),` is mainly used for sharing examples of `,(0,r.jsx)(t.strong,{children:`Code`}),` that can be a string or a small block of `,(0,r.jsx)(t.strong,{children:`Code`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`An optional icon `,(0,r.jsx)(t.strong,{children:`Button`}),` may be added in order to copy its content.`]}),`
`,(0,r.jsx)(c,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use the Code component to display very long code blocks`,`- Don't use the Code component for non-code content`,`- Don't overload the UI with code examples in places where documentation would be clearer`,`- Don't use the component if the code can't be easily understood, reused, or copied`,`- Don't style code with custom formatting that breaks consistency (e.g., non-monospace fonts, shadows, etc.)`],dos:[`- Use the Code component to display short and reusable code snippets (e.g., command lines, config)`,`- Make sure the code is readable and scannable, with appropriate syntax highlighting`,`- Use inline code within text blocks for single tokens`,`- Wrap multiline snippets in a block format only when necessary and still concise`]}),`
`,(0,r.jsx)(c,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/code/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Code`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Content`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Copy button`}),` - optional`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Tooltip`}),` (when the copy button is displayed)`]}),`
`]}),`
`,(0,r.jsx)(c,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`By default, the `,(0,r.jsx)(t.strong,{children:`Code`}),` content is left-aligned in its container.`]}),`
`,(0,r.jsx)(t.p,{children:`It should be vertically aligned with other form components on a same page.`}),`
`,(0,r.jsx)(c,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The "Copy" icon `,(0,r.jsx)(t.strong,{children:`Button`}),` can be hovered, focused and clicked.`]}),`
`,(0,r.jsxs)(t.p,{children:[`If the optional icon `,(0,r.jsx)(t.strong,{children:`Button`}),` exists, when clicking on it, the `,(0,r.jsx)(t.strong,{children:`Code`}),` content is copied to the user's clipboard.`]}),`
`,(0,r.jsx)(t.p,{children:`Copy label and copy success label can be customized.`}),`
`,(0,r.jsx)(c,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(c,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Code`}),` component itself is non-interactive and does not receive keyboard focus.`]}),`
`,(0,r.jsx)(t.p,{children:`However, if the component includes a "Copy" action, the associated Copy button can be focused.`}),`
`,(0,r.jsx)(c,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Tab`}),` moves focus to the "Copy" button if available.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Enter`}),` or `,(0,r.jsx)(d,{children:`Space`}),` while the "Copy" button is focused copies the code to the clipboard.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Shift`}),` + `,(0,r.jsx)(d,{children:`Tab`}),` moves focus to the previous interactive element.`]}),`
`,(0,r.jsx)(c,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(l,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the embedded code and the copy button `,(0,r.jsx)(t.strong,{children:`Tooltip`}),` content.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};