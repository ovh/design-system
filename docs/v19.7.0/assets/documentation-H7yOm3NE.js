import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as l}from"./index-ZwkxtaJJ.js";import{s as c,e as a}from"./icon-name-kFDeGXCQ--4TVzzrX.js";import{k as s}from"./Kbd-Cnje_EfN-CvQx-mOR.js";import{M as d}from"./index-BnNeS_H2.js";import{C as i,O as p}from"./code.stories-CRlERoxz.js";import{A as m}from"./Anatomy-DkXJCwiR.js";import{B as h}from"./Banner-DYvgfZRi.js";import{B as x}from"./BestPractices-j46EvglC.js";import{C as j}from"./Canvas-zVPAbnas.js";import{H as n}from"./Heading-lgNAZPkT.js";import{I as g}from"./IdentityCard-BTJG0hV7.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DtAqipxR.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./typescript-DU2lJCEK.js";import"./nord-Cm2omLQ2.js";import"./Code-BeNYFw9y.js";import"./index-CqY9YpN0.js";import"./Button-B-GJ-1TA.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./index-Br7IW9i3.js";import"./context-C_-r2uoG.js";import"./use-locale-context-CGqEQCyU.js";import"./Input-CsaVjqar.js";import"./index-B0M5RXeR.js";import"./Text-CAQM6i-X.js";import"./useI18n-C0NLVYPv.js";import"./icon-name-D0KNfDOz.js";import"./index-Ct9O8XVq.js";import"./overlay-CZHjGBMC.js";import"./portal-DmTPQ5yQ.js";import"./use-presence-D0Br6WHR.js";import"./use-event-c9j7vq_1.js";import"./index-XMtSmgu6.js";import"./controls-BtiQQn1l.js";import"./index-DA9hOdui.js";import"./context-Z_Xa7sWf-5kwUyuQy.js";import"./index-D6AFTHzO.js";import"./lz-string-U2heoObX.js";import"./meta-twt-Yy4M.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-CLF5P7Bf.js";import"./tokens-BrWUS-3i.js";import"./divider-color-DMMH0ySn-B7JauIP0.js";import"./colors-C1Wmnk_L-aAAP9SXj.js";import"./Table-Bof_Nsov-CS9ZUwCH.js";import"./ExternalLink-D9Oykgkh.js";import"./Link-fc4PsoC7-BoLkDjrj.js";import"./Table-BXVk_N0H.js";function r(t){const o={em:"em",li:"li",ol:"ol",p:"p",strong:"strong",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i,name:"Documentation"}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(o.p,{children:e.jsxs(o.em,{children:[e.jsx(o.strong,{children:"Code"})," component highlights strings or small blocks of ",e.jsx(o.strong,{children:"Code"})," so it makes them easier to read and understand"]})}),`
`,e.jsx(j,{of:p,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(g,{aliases:["Code snippet"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=26-7720",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/code",name:"Code",children:e.jsxs(o.p,{children:["A ",e.jsx(o.strong,{children:"Code"})," component displays a string of ",e.jsx(o.strong,{children:"Code"})," or a small block of ",e.jsx(o.strong,{children:"Code"})," that can be copied to the clipboard."]})}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Code"})," is mainly used for sharing examples of ",e.jsx(o.strong,{children:"Code"})," that can be a string or a small block of ",e.jsx(o.strong,{children:"Code"}),"."]}),`
`,e.jsxs(o.p,{children:["An optional icon ",e.jsx(o.strong,{children:"Button"})," may be added in order to copy its content."]}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:["- Don't use the Code component to display very long code blocks","- Don't use the Code component for non-code content","- Don't overload the UI with code examples in places where documentation would be clearer","- Don't use the component if the code can't be easily understood, reused, or copied","- Don't style code with custom formatting that breaks consistency (e.g., non-monospace fonts, shadows, etc.)"],dos:["- Use the Code component to display short and reusable code snippets (e.g., command lines, config)","- Make sure the code is readable and scannable, with appropriate syntax highlighting","- Use inline code within text blocks for single tokens","- Wrap multiline snippets in a block format only when necessary and still concise"]}),`
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
`,e.jsxs(o.p,{children:[e.jsx(c,{name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the embedded code and the copy button ",e.jsx(o.strong,{children:"Tooltip"})," content."]})]})}function be(t={}){const{wrapper:o}={...l(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(r,{...t})}):r(t)}export{be as default};
