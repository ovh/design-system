import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as r}from"./index-DQB45XCM.js";import{M as c,C as l}from"./index-CTRIvuAa.js";import{C as s,O as a}from"./code.stories-uV3ARwZX.js";import{B as d}from"./Banner-DKEGGZmZ.js";import{I as p,A as m,B as h}from"./IdentityCard-DMALWF_P.js";import{H as n}from"./Heading-BKRI_kjA.js";import"./StorybookLink-DMr2bWgk.js";import"./index-D_CmzhJ4.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";import"./Button-CbWLwkmI.js";import"./Spinner-BC3A9yP9.js";import"./colors-DSObuHxd.js";import"./ClipboardTrigger-CLwkTjg3.js";import"./use-locale-context-BQVaQ0H3.js";import"./Input-Pkw6XJuX.js";import"./FormFieldLabel-DjB85afw.js";import"./Text-KX3Hvvn9.js";import"./icon-name-BOrBmUKT.js";import"./TooltipTrigger-DmpQ7Q38.js";import"./overlay-CZHjGBMC.js";import"./portal-Bd62KldU.js";import"./use-presence-Cqrqn20p.js";import"./use-event-OCVb0O1l.js";import"./index-DoGvXrgL.js";import"./index-xSrPfE2G.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function i(t){const o={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:s,name:"Documentation"}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(o.p,{children:e.jsxs(o.em,{children:[e.jsx(o.strong,{children:"Code"})," component highlights strings or small blocks of ",e.jsx(o.strong,{children:"Code"})," so it makes them easier to read and understand"]})}),`
`,e.jsx(l,{of:a,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(p,{aliases:["Code snippet"],atomicType:m.organism,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=26-7720",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/code",name:"Code",children:e.jsxs(o.p,{children:["A ",e.jsx(o.strong,{children:"Code"})," component displays a string of ",e.jsx(o.strong,{children:"Code"})," or a small block of ",e.jsx(o.strong,{children:"Code"})," that can be copied to the clipboard."]})}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Code"})," is mainly used for sharing examples of ",e.jsx(o.strong,{children:"Code"})," that can be a string or a small block of ",e.jsx(o.strong,{children:"Code"}),"."]}),`
`,e.jsxs(o.p,{children:["An optional icon ",e.jsx(o.strong,{children:"Button"})," may be added in order to copy its content."]}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(h,{donts:["- Don't use the Code component to display very long code blocks","- Don't use the Code component for non-code content","- Don't overload the UI with code examples in places where documentation would be clearer","- Don't use the component if the code can't be easily understood, reused, or copied","- Don't style code with custom formatting that breaks consistency (e.g., non-monospace fonts, shadows, etc.)"],dos:["- Use the Code component to display short and reusable code snippets (e.g., command lines, config)","- Make sure the code is readable and scannable, with appropriate syntax highlighting","- Use inline code within text blocks for single tokens","- Wrap multiline snippets in a block format only when necessary and still concise"]}),`
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
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Shift"})," + ",e.jsx(o.code,{children:"Tab"})," moves focus to the previous interactive element."]})]})}function V(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{V as default};
