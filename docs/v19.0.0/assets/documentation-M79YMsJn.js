import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as i}from"./index-DQB45XCM.js";import{M as a,C as l}from"./index-CTRIvuAa.js";import{P as r,O as c}from"./popover.stories-BgpUK3Ot.js";import{B as p}from"./Banner-DKEGGZmZ.js";import{I as d,A as h,B as m}from"./IdentityCard-DMALWF_P.js";import{H as n}from"./Heading-BKRI_kjA.js";import{S as x}from"./StorybookLink-DMr2bWgk.js";import{S as g,R as j}from"./meta-Ci0gAceS.js";import"./index-D_CmzhJ4.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-CbWLwkmI.js";import"./index-CkQHsVsO.js";import"./Spinner-BC3A9yP9.js";import"./colors-DSObuHxd.js";import"./icon-name-BOrBmUKT.js";import"./overlay-CZHjGBMC.js";import"./portal-Bd62KldU.js";import"./use-locale-context-BQVaQ0H3.js";import"./use-presence-Cqrqn20p.js";import"./use-event-OCVb0O1l.js";import"./index-xSrPfE2G.js";import"./index-DninfMAu.js";import"./index-DHCC0GIt.js";import"./index-hWLJHUef.js";import"./controls-BtiQQn1l.js";import"./source-d0g_Nd0q.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function s(t){const o={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r,name:"Documentation"}),`
`,e.jsx(p,{of:r}),`
`,e.jsx(o.p,{children:e.jsxs(o.em,{children:[e.jsx(o.strong,{children:"Popover"})," component is triggered by click and is used to provide additional information to the user in a new temporary surface that overlays the page"]})}),`
`,e.jsx(l,{of:c,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsxs(d,{aliases:["Complex Tooltip"],atomicType:h.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-8447",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/popover",name:"Popover",children:[e.jsxs(o.p,{children:["A ",e.jsx(o.strong,{children:"Popover"})," will provide additional information to the user in a clear and concise way."]}),e.jsxs(o.p,{children:["It is commonly used to appear by click, thus crucial information should not be displayed in the ",e.jsx(o.strong,{children:"Popover"}),"."]})]}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(o.p,{children:["A ",e.jsx(o.strong,{children:"Popover"})," is used to provide an explanation for a user interface element."]}),`
`,e.jsx(o.p,{children:"It can include interactive elements such as a button or a link."}),`
`,e.jsx(n,{label:"Tooltip vs Popover",level:3}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Both components look similar but a ",e.jsx(x,{kind:j.tooltip,story:g.documentation,children:"Tooltip"})," is displayed on hover and focus while ",e.jsx(o.strong,{children:"Popover"})," is triggered by click."]}),`
`,e.jsx(o.li,{children:"Tooltips are commonly used for shorter explanations, while longer text / complex UIs would suit a popover better."}),`
`,e.jsx(o.li,{children:"Use a popover when you need to insert interactive elements such as Button."}),`
`,e.jsx(o.li,{children:"A popover can be dismissed if an action button allows it."}),`
`]}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(m,{donts:["- Don't place critical or mandatory information inside a popover. Users may miss it since it's only revealed on click","- Don't overload a popover with rich content like images, videos, or large interactive components. Use a Modal or Drawer instead","- Don't trigger a popover from non-obvious elements, the interactive element should clearly indicate it controls a popover","- Don't rely on popovers for persistent content since they're meant to be transient and dismissible","- Don't use a popover on elements that are already part of another complex interaction"],dos:["- Use a popover to display contextual information or options that are secondary to the main task","- Prefer a popover over a tooltip when the content is longer, interactive, or requires formatting (but keep it focused)","- Write a popover content using complete sentences","- Ensure the popover is positioned clearly and does not overlap with its trigger element","- Use a popover for lightweight content such as field explanations, secondary actions"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(o.p,{children:e.jsx(o.img,{src:"components/popover/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(o.ol,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Popover"})}),`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Content"})}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Carret tip"})," - optional"]}),`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Trigger"})}),`
`]}),`
`,e.jsx(n,{label:"Placement",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Popover"})," can be set in a certain position by default around its trigger."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Popover"})," has automatic positioning feature. It can detect the edge of the browser so the container always stays visible on a page."]}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsxs(o.p,{children:["By default, a ",e.jsx(o.strong,{children:"Popover"})," is hidden to the user."]}),`
`,e.jsxs(o.p,{children:["It triggers when the user clicks on the ",e.jsx(o.strong,{children:"Popover"}),"'s trigger element such as a button."]}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.strong,{children:"Popover"})," can be closed or dismissed by clicking anywhere on the page outside the ",e.jsx(o.strong,{children:"Popover"}),"'s container."]}),`
`,e.jsx(n,{label:"Navigation",level:2}),`
`,e.jsx(n,{label:"Focus Management",level:3}),`
`,e.jsxs(o.p,{children:["Depending on the ",e.jsx(o.strong,{children:"Popover"})," trigger used (e.g., a button or a link), refer to that component's documentation for its keyboard interaction."]}),`
`,e.jsxs(o.p,{children:["When the ",e.jsx(o.strong,{children:"Popover"})," is opened, it gains focus automatically. Focus remains within the ",e.jsx(o.strong,{children:"Popover"})," until it is closed."]}),`
`,e.jsx(o.p,{children:"Closing it returns focus to the trigger element."}),`
`,e.jsx(n,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Escape"})," closes the currently opened ",e.jsx(o.strong,{children:"Popover"}),"."]}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Tab"})," moves focus forward through the focusable elements inside the ",e.jsx(o.strong,{children:"Popover"}),"."]}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Shift"})," + ",e.jsx(o.code,{children:"Tab"})," moves focus backward within the ",e.jsx(o.strong,{children:"Popover"}),"."]})]})}function $(t={}){const{wrapper:o}={...i(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}export{$ as default};
