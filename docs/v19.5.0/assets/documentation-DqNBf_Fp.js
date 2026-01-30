import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as l}from"./index-ZwkxtaJJ.js";import{a as c,l as a}from"./ods-react67-C395g5lW.js";import{k as s}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as d}from"./index-Cw5r0Kn8.js";import{C as i,O as p}from"./code.stories-DZusYk37.js";import{A as m}from"./Anatomy-DkXJCwiR.js";import{B as h}from"./Banner-X7WOeBPc.js";import{I as x,B as j}from"./IdentityCard-D9LjZbLA.js";import{C as g}from"./Canvas-i2Tfjesg.js";import{H as n}from"./Heading-Dep_rTif.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DCzti3mm.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./nord-Cm2omLQ2.js";import"./index-CqY9YpN0.js";import"./Button-B-GJ-1TA.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./ClipboardTrigger-Dv2wHfAu.js";import"./use-locale-context-kHyebpMI.js";import"./Input-BllcUVFN.js";import"./FormFieldLabelSubLabel-DCAb65DU.js";import"./Text-CW33_IfE.js";import"./context-C_-r2uoG.js";import"./useI18n-C0NLVYPv.js";import"./icon-name-BpdEc4-2.js";import"./TooltipTrigger-CRWH95NO.js";import"./overlay-CZHjGBMC.js";import"./portal-CJHwXgLI.js";import"./use-presence-C53EI5fL.js";import"./use-event-c9j7vq_1.js";import"./index-BlUhyWms.js";import"./controls-BtiQQn1l.js";import"./Table-D8Me597i-NC3k9YIT.js";import"./ExternalLink-C5hGBmwh.js";import"./Link-TMoA1i18-BDwROQOD.js";import"./Table-5ah53JFf.js";import"./TooltipTrigger-C3aN0eJB-DwV7p8FS.js";import"./ods-react121-5kwUyuQy.js";import"./index-CSeLFT3z.js";import"./lz-string-U2heoObX.js";import"./meta-DcQbZjt_.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-xqxcB8cs.js";import"./tokens-BtVMeYnn.js";import"./Divider-wQyo85oE-CpSK6tnQ.js";function r(t){const o={em:"em",li:"li",ol:"ol",p:"p",strong:"strong",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i,name:"Documentation"}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(o.p,{children:e.jsxs(o.em,{children:[e.jsx(o.strong,{children:"Code"})," component highlights strings or small blocks of ",e.jsx(o.strong,{children:"Code"})," so it makes them easier to read and understand"]})}),`
`,e.jsx(g,{of:p,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(x,{aliases:["Code snippet"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=26-7720",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/code",name:"Code",children:e.jsxs(o.p,{children:["A ",e.jsx(o.strong,{children:"Code"})," component displays a string of ",e.jsx(o.strong,{children:"Code"})," or a small block of ",e.jsx(o.strong,{children:"Code"})," that can be copied to the clipboard."]})}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Code"})," is mainly used for sharing examples of ",e.jsx(o.strong,{children:"Code"})," that can be a string or a small block of ",e.jsx(o.strong,{children:"Code"}),"."]}),`
`,e.jsxs(o.p,{children:["An optional icon ",e.jsx(o.strong,{children:"Button"})," may be added in order to copy its content."]}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(j,{donts:["- Don't use the Code component to display very long code blocks","- Don't use the Code component for non-code content","- Don't overload the UI with code examples in places where documentation would be clearer","- Don't use the component if the code can't be easily understood, reused, or copied","- Don't style code with custom formatting that breaks consistency (e.g., non-monospace fonts, shadows, etc.)"],dos:["- Use the Code component to display short and reusable code snippets (e.g., command lines, config)","- Make sure the code is readable and scannable, with appropriate syntax highlighting","- Use inline code within text blocks for single tokens","- Wrap multiline snippets in a block format only when necessary and still concise"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(m,{src:"components/code/anatomy.png"}),`
`,e.jsxs(o.ol,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Code"})}),`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Content"})}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Copy button"})," - optional"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Tooltip"})," (when the copy button is displayed)"]}),`
`]}),`
`,e.jsx(n,{label:"Placement",level:2}),`
`,e.jsxs(o.p,{children:["By default, the ",e.jsx(o.strong,{children:"Code"})," content is left-aligned in its container."]}),`
`,e.jsx(o.p,{children:"It should be vertically aligned with other form components on a same page."}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsxs(o.p,{children:['The "Copy" icon ',e.jsx(o.strong,{children:"Button"})," can be hovered, focused and clicked."]}),`
`,e.jsxs(o.p,{children:["If the optional icon ",e.jsx(o.strong,{children:"Button"})," exists, when clicking on it, the ",e.jsx(o.strong,{children:"Code"})," content is copied to the user's clipboard."]}),`
`,e.jsx(o.p,{children:"Copy label and copy success label can be customized."}),`
`,e.jsx(n,{label:"Navigation",level:2}),`
`,e.jsx(n,{label:"Focus Management",level:3}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.strong,{children:"Code"})," component itself is non-interactive and does not receive keyboard focus."]}),`
`,e.jsx(o.p,{children:'However, if the component includes a "Copy" action, the associated Copy button can be focused.'}),`
`,e.jsx(n,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(s,{children:"Tab"}),' moves focus to the "Copy" button if available.']}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(s,{children:"Enter"})," or ",e.jsx(s,{children:"Space"}),' while the "Copy" button is focused copies the code to the clipboard.']}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(s,{children:"Shift"})," + ",e.jsx(s,{children:"Tab"})," moves focus to the previous interactive element."]}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(c,{name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the embedded code and the copy button ",e.jsx(o.strong,{children:"Tooltip"})," content."]})]})}function xe(t={}){const{wrapper:o}={...l(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(r,{...t})}):r(t)}export{xe as default};
