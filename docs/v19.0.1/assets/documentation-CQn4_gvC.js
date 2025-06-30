import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as r}from"./index-DQB45XCM.js";import{M as a,C as l}from"./index-D1K7mLD0.js";import{C as o,O as c}from"./checkbox.stories-Ds8RCigb.js";import{B as h}from"./Banner-B4K6Zb-5.js";import{I as d,A as m,B as x}from"./IdentityCard-Yo1l2iFh.js";import{H as t}from"./Heading-mtuBTkOf.js";import"./index-D_CmzhJ4.js";import"./iframe-DbJ8Lucp.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";import"./FormFieldLabel-DjB85afw.js";import"./Text-KX3Hvvn9.js";import"./use-locale-context-BQVaQ0H3.js";import"./index-DoGvXrgL.js";import"./use-field-context-A_pa20cf.js";import"./icon-name-BOrBmUKT.js";import"./use-event-OCVb0O1l.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function i(s){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:o,name:"Documentation"}),`
`,e.jsx(h,{of:o}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Checkbox"})," are used for a list of options where the user may make a choice by selecting multiple options, including all or none."]})}),`
`,e.jsx(l,{of:c,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(d,{aliases:["Checkbox Button (previous name)","Check Box","Tick Box"],atomicType:m.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-28514",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/checkbox",name:"Checkbox",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Checkbox"}),` are used to make a choice that must be confirmed by submitting a form. For an instantaneous choice
(without submit), the use of a switch is preferred (see Switch).`]})}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Checkbox"})," can be used in forms and containers."]}),`
`,e.jsx(n.p,{children:"Also, it can serve as :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Selecting/deselecting item(s)"}),`
`,e.jsx(n.li,{children:"Lists/sub-lists"}),`
`,e.jsx(n.li,{children:"Filters"}),`
`,e.jsx(n.li,{children:"Agreement to terms and conditions"}),`
`]}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Checkbox"})," group is used for a list of options where the user may make a choice by selecting multiple options, including all or none."]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:["- Don't use a Checkbox if the user can only select one option, use a Radio Group instead","- Don't truncate labels with ellipsis","- Don't place Checkboxes too close together, maintain sufficient spacing to prevent selection errors",`- Don't use Checkboxes for binary actions like "save" or "submit", use a Button instead`],dos:["- Use clear, concise, and descriptive labels to explain what the Checkbox controls","- Allow labels to wrap to multiple lines when necessary, readability is more important than keeping to one line here","- Group related Checkboxes using a fieldset with a legend to provide context when applicable","- Use Checkboxes when multiple selections are allowed within a group of options"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/checkbox/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Checkbox"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Label"})}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Checkbox"})," can be autonomous, as it can be labelled in a starting/ending text."]}),`
`,e.jsx(n.p,{children:"It can be inserted in containers or next to an external item."}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["The default behavior is that when clicking on the ",e.jsx(n.strong,{children:"Checkbox"})," or its linked label, the ",e.jsx(n.strong,{children:"Checkbox"})," is alternatively selected or deselected depending on the previous state."]}),`
`,e.jsxs(n.p,{children:["The indeterminate state is used only when the ",e.jsx(n.strong,{children:"Checkbox"})," contains a sub-list of selections that are partially selected."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Checkbox"})," can be in an error state, but also in a disabled state."]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Checkbox"})," component can receive keyboard focus and is part of the standard tab order."]}),`
`,e.jsxs(n.p,{children:["If the ",e.jsx(n.strong,{children:"Checkbox"})," is disabled, it does not receive focus and cannot be activated via keyboard."]}),`
`,e.jsx(t,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Space"})," toggles the ",e.jsx(n.strong,{children:"Checkbox"})," state (checked/unchecked)."]})]})}function E(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{E as default};
