import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as i}from"./index-ZwkxtaJJ.js";import{t as l,l as a}from"./ods-react60-CRx7zEey.js";import{M as c,C as d,B as p}from"./index-8pGbFWRq.js";import{P as r,O as h,A as x}from"./popover.stories-KYh0caGd.js";import{B as m}from"./Banner-CNp5SML8.js";import{I as j,B as u}from"./IdentityCard-e2WB6ddF.js";import{C as g}from"./Canvas-Df5XpfVk.js";import{H as o}from"./Heading-hbfjmHNc.js";import{S as v}from"./StorybookLink-DL_XdQSR.js";import{S as f,R as b}from"./meta-B7heVWH0.js";import"./index-jIWwRBLr.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-D7nmkxLr.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-Tqe-VRSF.js";import"./index-CqY9YpN0.js";import"./Spinner-DNePmVpu.js";import"./colors-DSObuHxd.js";import"./Divider-Dh8-cuUJ.js";import"./icon-name-C581wThh.js";import"./PopoverTrigger-DrWuZNFw.js";import"./overlay-CZHjGBMC.js";import"./portal-QnUqvOWs.js";import"./use-locale-context-BIV2aQtl.js";import"./use-presence-BC2E-XtL.js";import"./use-event-c9j7vq_1.js";import"./index-Bc-ZgdcL.js";import"./index-RANsh8_O.js";import"./index-3nFJ2Pi7.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./ExternalLink-izdABMGv.js";import"./Link-BWQEuWpd-DsrdP0qI.js";import"./TooltipTrigger-Iu3rt7LP-DQH4Rvrv.js";import"./index-CTDx-6u2.js";import"./lz-string-U2heoObX.js";import"./ods-react236-aAAP9SXj.js";function s(t){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r,name:"Documentation"}),`
`,e.jsx(m,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Popover"})," component is triggered by click and is used to provide additional information to the user in a new temporary surface that overlays the page"]})}),`
`,e.jsx(d,{of:h,sourceState:"none"}),`
`,e.jsx(o,{label:"Overview",level:2}),`
`,e.jsxs(j,{aliases:["Complex Tooltip"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-8447",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/popover",name:"Popover",children:[e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Popover"})," will provide additional information to the user in a clear and concise way."]}),e.jsxs(n.p,{children:["It is commonly used to appear by click, thus crucial information should not be displayed in the ",e.jsx(n.strong,{children:"Popover"}),"."]})]}),`
`,e.jsx(o,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Popover"})," is used to provide an explanation for a user interface element."]}),`
`,e.jsx(n.p,{children:"It can include interactive elements such as a button or a link."}),`
`,e.jsx(o,{label:"Tooltip vs Popover",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Both components look similar but a ",e.jsx(v,{kind:b.tooltip,story:f.documentation,children:"Tooltip"})," is displayed on hover and focus while ",e.jsx(n.strong,{children:"Popover"})," is triggered by click."]}),`
`,e.jsx(n.li,{children:"Tooltips are commonly used for shorter explanations, while longer text / complex UIs would suit a popover better."}),`
`,e.jsx(n.li,{children:"Use a popover when you need to insert interactive elements such as Button."}),`
`,e.jsx(n.li,{children:"A popover can be dismissed if an action button allows it."}),`
`]}),`
`,e.jsx(o,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:["- Don't place critical or mandatory information inside a popover. Users may miss it since it's only revealed on click","- Don't overload a popover with rich content like images, videos, or large interactive components. Use a Modal or Drawer instead","- Don't trigger a popover from non-obvious elements, the interactive element should clearly indicate it controls a popover","- Don't rely on popovers for persistent content since they're meant to be transient and dismissible","- Don't use a popover on elements that are already part of another complex interaction"],dos:["- Use a popover to display contextual information or options that are secondary to the main task","- Prefer a popover over a tooltip when the content is longer, interactive, or requires formatting (but keep it focused)","- Write a popover content using complete sentences","- Ensure the popover is positioned clearly and does not overlap with its trigger element","- Use a popover for lightweight content such as field explanations, secondary actions"]}),`
`,e.jsx(o,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/popover/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Popover"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Content"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Carret tip"})," - optional"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Trigger"})}),`
`]}),`
`,e.jsx(o,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Popover"})," can be set in a certain position by default around its trigger."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Popover"})," has automatic positioning feature. It can detect the edge of the browser so the container always stays visible on a page."]}),`
`,e.jsx(o,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["By default, a ",e.jsx(n.strong,{children:"Popover"})," is hidden to the user."]}),`
`,e.jsxs(n.p,{children:["It triggers when the user clicks on the ",e.jsx(n.strong,{children:"Popover"}),"'s trigger element such as a button."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Popover"})," can be closed or dismissed by clicking anywhere on the page outside the ",e.jsx(n.strong,{children:"Popover"}),"'s container."]}),`
`,e.jsx(o,{label:"Navigation",level:2}),`
`,e.jsx(o,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["Depending on the ",e.jsx(n.strong,{children:"Popover"})," trigger used (e.g., a button or a link), refer to that component's documentation for its keyboard interaction."]}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Popover"})," is opened, it gains focus automatically. Focus remains within the ",e.jsx(n.strong,{children:"Popover"})," until it is closed."]}),`
`,e.jsx(n.p,{children:"Closing it returns focus to the trigger element."}),`
`,e.jsx(o,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Escape"})," closes the currently opened ",e.jsx(n.strong,{children:"Popover"}),"."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Tab"})," moves focus forward through the focusable elements inside the ",e.jsx(n.strong,{children:"Popover"}),"."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Tab"})," moves focus backward within the ",e.jsx(n.strong,{children:"Popover"}),"."]}),`
`,e.jsx(o,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["To ensure proper accessibility, ",e.jsx(n.strong,{children:"Popover"})," component must specify its content nature using appropriate ARIA attributes."]}),`
`,e.jsx(o,{label:"Specify the Popover's content nature",level:3}),`
`,e.jsxs(n.p,{children:["Update the content type on the ",e.jsx(n.strong,{children:"Popover Trigger"}),", which is set by default to ",e.jsx(n.code,{children:'aria-haspopup="dialog"'}),"."]}),`
`,e.jsxs(p,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Content Type"}),e.jsx("th",{children:"ARIA Attribute"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Menu"}),e.jsx("td",{children:e.jsx(n.code,{children:'aria-haspopup="menu"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"List"}),e.jsx("td",{children:e.jsx(n.code,{children:'aria-haspopup="listbox"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Tree"}),e.jsx("td",{children:e.jsx(n.code,{children:'aria-haspopup="tree"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Grid"}),e.jsx("td",{children:e.jsx(n.code,{children:'aria-haspopup="grid"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Dialog"}),e.jsx("td",{children:e.jsx(n.code,{children:'aria-haspopup="dialog"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Comment"}),e.jsx("td",{children:e.jsx(n.code,{children:'aria-details="comment"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Definition"}),e.jsxs("td",{children:[e.jsx(n.code,{children:'aria-details="term"'})," + ",e.jsx(n.code,{children:'role="definition"'})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Caption"}),e.jsx("td",{children:e.jsx(n.code,{children:'aria-details="figure"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Footnote"}),e.jsx("td",{children:e.jsx(n.code,{children:'aria-details="doc-footnote"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Endnote"}),e.jsx("td",{children:e.jsx(n.code,{children:'aria-details="doc-endnote"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Description"}),e.jsx("td",{children:e.jsx(n.code,{children:'aria-details="true"'})})]})]})]}),`
`,e.jsx(o,{label:"Using aria-popup for a Popover containing a Menu",level:3}),`
`,e.jsx(g,{of:x,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(l,{name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will recognize that ",e.jsx(n.strong,{children:"Popover"})," contains a menu and menu items. It indicates that the element can trigger a popup and the nature of this popup."]})]})}function ae(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{ae as default};
