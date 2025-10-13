import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as r}from"./index-ZwkxtaJJ.js";import{t as c,l}from"./ods-react60-CRx7zEey.js";import{M as a,C as d}from"./index-MSKBj7dO.js";import{C as s,O as p}from"./code.stories-Cg3k-Ylg.js";import{B as m}from"./Banner-BZtChV1g.js";import{I as h,B as x}from"./IdentityCard-BnvyxLnN.js";import{H as n}from"./Heading-Dphh9YsV.js";import"./index-jIWwRBLr.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-Cbr9ww7Z.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CqY9YpN0.js";import"./Button-Dwx1IzdD.js";import"./Spinner-DNePmVpu.js";import"./colors-DSObuHxd.js";import"./ClipboardTrigger-yRBIGquK.js";import"./use-locale-context-BIV2aQtl.js";import"./Input-YvN7KzhF.js";import"./FormFieldLabel-DW-nAxje.js";import"./Text-vMb3-i8V.js";import"./useI18n-C0NLVYPv.js";import"./icon-name-C581wThh.js";import"./TooltipTrigger-CjaENt2x.js";import"./overlay-CZHjGBMC.js";import"./portal-QnUqvOWs.js";import"./use-presence-BC2E-XtL.js";import"./use-event-c9j7vq_1.js";import"./index-DaqjtwB0.js";import"./index-Bc-ZgdcL.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-izdABMGv.js";import"./Link-BWQEuWpd-DsrdP0qI.js";import"./ods-react235-aAAP9SXj.js";function i(t){const o={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:s,name:"Documentation"}),`
`,e.jsx(m,{of:s}),`
`,e.jsx(o.p,{children:e.jsxs(o.em,{children:[e.jsx(o.strong,{children:"Code"})," component highlights strings or small blocks of ",e.jsx(o.strong,{children:"Code"})," so it makes them easier to read and understand"]})}),`
`,e.jsx(d,{of:p,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(h,{aliases:["Code snippet"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=26-7720",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/code",name:"Code",children:e.jsxs(o.p,{children:["A ",e.jsx(o.strong,{children:"Code"})," component displays a string of ",e.jsx(o.strong,{children:"Code"})," or a small block of ",e.jsx(o.strong,{children:"Code"})," that can be copied to the clipboard."]})}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Code"})," is mainly used for sharing examples of ",e.jsx(o.strong,{children:"Code"})," that can be a string or a small block of ",e.jsx(o.strong,{children:"Code"}),"."]}),`
`,e.jsxs(o.p,{children:["An optional icon ",e.jsx(o.strong,{children:"Button"})," may be added in order to copy its content."]}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:["- Don't use the Code component to display very long code blocks","- Don't use the Code component for non-code content","- Don't overload the UI with code examples in places where documentation would be clearer","- Don't use the component if the code can't be easily understood, reused, or copied","- Don't style code with custom formatting that breaks consistency (e.g., non-monospace fonts, shadows, etc.)"],dos:["- Use the Code component to display short and reusable code snippets (e.g., command lines, config)","- Make sure the code is readable and scannable, with appropriate syntax highlighting","- Use inline code within text blocks for single tokens","- Wrap multiline snippets in a block format only when necessary and still concise"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(o.p,{children:e.jsx(o.img,{src:"components/code/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
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
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Tab"}),' moves focus to the "Copy" button if available.']}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Enter"})," or ",e.jsx(o.code,{children:"Space"}),' while the "Copy" button is focused copies the code to the clipboard.']}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Shift"})," + ",e.jsx(o.code,{children:"Tab"})," moves focus to the previous interactive element."]}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(c,{name:l.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the embedded code and the copy button ",e.jsx(o.strong,{children:"Tooltip"})," content."]})]})}function Z(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Z as default};
