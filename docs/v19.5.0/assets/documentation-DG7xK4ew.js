import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as a}from"./index-ZwkxtaJJ.js";import{a as c,l as d}from"./ods-react67-C395g5lW.js";import{k as r}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as p,B as h}from"./index-Cw5r0Kn8.js";import{P as i,O as x,A as m}from"./popover.stories-6nPwKkay.js";import{A as j}from"./Anatomy-DkXJCwiR.js";import{B as u}from"./Banner-X7WOeBPc.js";import{I as g,B as v}from"./IdentityCard-D9LjZbLA.js";import{C as s}from"./Canvas-i2Tfjesg.js";import{H as n}from"./Heading-Dep_rTif.js";import{S as f}from"./StorybookLink-DQwP2BEI.js";import{S as b,R as y}from"./meta-DcQbZjt_.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DCzti3mm.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-B-GJ-1TA.js";import"./index-CqY9YpN0.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./divider-color-CxuCs_uS.js";import"./icon-name-BpdEc4-2.js";import"./PopoverTrigger-CBYmsU80.js";import"./overlay-CZHjGBMC.js";import"./portal-CJHwXgLI.js";import"./use-locale-context-kHyebpMI.js";import"./use-presence-C53EI5fL.js";import"./use-event-c9j7vq_1.js";import"./index-BwUtbHV0.js";import"./index-BFzjWlov.js";import"./context-C_-r2uoG.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./Table-D8Me597i-NC3k9YIT.js";import"./ExternalLink-C5hGBmwh.js";import"./Link-TMoA1i18-BDwROQOD.js";import"./Table-5ah53JFf.js";import"./TooltipTrigger-C3aN0eJB-DwV7p8FS.js";import"./ods-react121-5kwUyuQy.js";import"./index-CSeLFT3z.js";import"./lz-string-U2heoObX.js";import"./ResetTheme-xqxcB8cs.js";import"./tokens-BtVMeYnn.js";import"./Divider-wQyo85oE-CpSK6tnQ.js";function l(t){const o={code:"code",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:i,name:"Documentation"}),`
`,e.jsx(u,{of:i}),`
`,e.jsx(o.p,{children:e.jsxs(o.em,{children:[e.jsx(o.strong,{children:"Popover"})," component is triggered by click and is used to provide additional information to the user in a new temporary surface that overlays the page"]})}),`
`,e.jsx(s,{of:x,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsxs(g,{aliases:["Complex Tooltip"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-8447",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/popover",name:"Popover",children:[e.jsxs(o.p,{children:["A ",e.jsx(o.strong,{children:"Popover"})," will provide additional information to the user in a clear and concise way."]}),e.jsxs(o.p,{children:["It is commonly used to appear by click, thus crucial information should not be displayed in the ",e.jsx(o.strong,{children:"Popover"}),"."]})]}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(o.p,{children:["A ",e.jsx(o.strong,{children:"Popover"})," is used to provide an explanation for a user interface element."]}),`
`,e.jsx(o.p,{children:"It can include interactive elements such as a button or a link."}),`
`,e.jsx(n,{label:"Tooltip vs Popover",level:3}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Both components look similar but a ",e.jsx(f,{kind:y.tooltip,story:b.documentation,children:"Tooltip"})," is displayed on hover and focus while ",e.jsx(o.strong,{children:"Popover"})," is triggered by click."]}),`
`,e.jsx(o.li,{children:"Tooltips are commonly used for shorter explanations, while longer text / complex UIs would suit a popover better."}),`
`,e.jsx(o.li,{children:"Use a popover when you need to insert interactive elements such as Button."}),`
`,e.jsx(o.li,{children:"A popover can be dismissed if an action button allows it."}),`
`]}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(v,{donts:["- Don't place critical or mandatory information inside a popover. Users may miss it since it's only revealed on click","- Don't overload a popover with rich content like images, videos, or large interactive components. Use a Modal or Drawer instead","- Don't trigger a popover from non-obvious elements, the interactive element should clearly indicate it controls a popover","- Don't rely on popovers for persistent content since they're meant to be transient and dismissible","- Don't use a popover on elements that are already part of another complex interaction"],dos:["- Use a popover to display contextual information or options that are secondary to the main task","- Prefer a popover over a tooltip when the content is longer, interactive, or requires formatting (but keep it focused)","- Write a popover content using complete sentences","- Ensure the popover is positioned clearly and does not overlap with its trigger element","- Use a popover for lightweight content such as field explanations, secondary actions"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(j,{src:"components/popover/anatomy.png"}),`
`,e.jsxs(o.ol,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Popover"})}),`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Content"})}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Caret tip"})," - optional"]}),`
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
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(r,{children:"Escape"})," closes the currently opened ",e.jsx(o.strong,{children:"Popover"}),"."]}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(r,{children:"Tab"})," moves focus forward through the focusable elements inside the ",e.jsx(o.strong,{children:"Popover"}),"."]}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(r,{children:"Shift"})," + ",e.jsx(r,{children:"Tab"})," moves focus backward within the ",e.jsx(o.strong,{children:"Popover"}),"."]}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsxs(o.p,{children:["To ensure proper accessibility, ",e.jsx(o.strong,{children:"Popover"})," component must specify its content nature using appropriate ARIA attributes."]}),`
`,e.jsx(n,{label:"Specify the Popover's content nature",level:3}),`
`,e.jsxs(o.p,{children:["Update the content type on the ",e.jsx(o.strong,{children:"Popover Trigger"}),", which is set by default to ",e.jsx(o.code,{children:'aria-haspopup="dialog"'}),"."]}),`
`,e.jsxs(h,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Content Type"}),e.jsx("th",{children:"ARIA Attribute"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Menu"}),e.jsx("td",{children:e.jsx(o.code,{children:'aria-haspopup="menu"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"List"}),e.jsx("td",{children:e.jsx(o.code,{children:'aria-haspopup="listbox"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Tree"}),e.jsx("td",{children:e.jsx(o.code,{children:'aria-haspopup="tree"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Grid"}),e.jsx("td",{children:e.jsx(o.code,{children:'aria-haspopup="grid"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Dialog"}),e.jsx("td",{children:e.jsx(o.code,{children:'aria-haspopup="dialog"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Comment"}),e.jsx("td",{children:e.jsx(o.code,{children:'aria-details="comment"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Definition"}),e.jsxs("td",{children:[e.jsx(o.code,{children:'aria-details="term"'})," + ",e.jsx(o.code,{children:'role="definition"'})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Caption"}),e.jsx("td",{children:e.jsx(o.code,{children:'aria-details="figure"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Footnote"}),e.jsx("td",{children:e.jsx(o.code,{children:'aria-details="doc-footnote"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Endnote"}),e.jsx("td",{children:e.jsx(o.code,{children:'aria-details="doc-endnote"'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Description"}),e.jsx("td",{children:e.jsx(o.code,{children:'aria-details="true"'})})]})]})]}),`
`,e.jsx(n,{label:"Using aria-popup for a Popover containing a Menu",level:3}),`
`,e.jsx(s,{of:m,sourceState:"shown"}),`
`,e.jsxs(o.p,{children:[e.jsx(c,{name:d.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will recognize that ",e.jsx(o.strong,{children:"Popover"})," contains a menu and menu items. It indicates that the element can trigger a popup and the nature of this popup."]})]})}function ue(t={}){const{wrapper:o}={...a(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(l,{...t})}):l(t)}export{ue as default};
