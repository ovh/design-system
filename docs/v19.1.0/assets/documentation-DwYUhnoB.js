import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as l}from"./index-DQB45XCM.js";import{a,o as c}from"./ods-react61-BFiU7C5S.js";import{M as p,C as i}from"./index-DQDMPrC3.js";import{E as d}from"./ExternalLink-F7ndcp9T.js";import{T as s,O as h,A as m}from"./tooltip.stories-DpaewY7h.js";import{B as x}from"./Banner-D5YsTkFA.js";import{I as u,B as j}from"./IdentityCard-C39Eam7s.js";import{H as n}from"./Heading-BTR1K1mm.js";import{S as g}from"./StorybookLink-BJoxMnxL.js";import{S as v,R as f}from"./meta-Dkilg8AS.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-llaHorau.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Link-DTswNFmS-CEk9YBDP.js";import"./Button-Cu9Xbu09.js";import"./index-CkQHsVsO.js";import"./Spinner-BdLZU4dE.js";import"./colors-DSObuHxd.js";import"./icon-name-CL_C5kfn.js";import"./TooltipTrigger--1kPNsOd.js";import"./overlay-CZHjGBMC.js";import"./portal-CjJhVgfZ.js";import"./use-locale-context-DLC4Hyvy.js";import"./use-presence-BH5ft0ba.js";import"./use-event-OCVb0O1l.js";import"./index-Rz4wIOao.js";import"./index-inT8qsA6.js";import"./controls-BtiQQn1l.js";import"./source-d0g_Nd0q.js";import"./Divider-DwZugXnI-RR--JbES.js";import"./ods-react222-B9lkGKUh.js";function r(t){const o={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:s,name:"Documentation"}),`
`,e.jsx(x,{of:s}),`
`,e.jsx(o.p,{children:e.jsxs(o.em,{children:[e.jsx(o.strong,{children:"Tooltip"})," component is used to display contextual information when the user hovers or focuses a UI element in a page."]})}),`
`,e.jsx(i,{of:h,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsxs(u,{aliases:["Info Bubble"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=55-23473",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/tooltip",name:"Tooltip",children:[e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Tooltip"})," component is used to display contextual information when the user hovers or focuses an element."]}),e.jsx(o.p,{children:"It enhances user experience by providing helpful hints, explanations, or descriptions without cluttering the UI."}),e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Tooltips"})," are commonly used with a button, an icon, or interactive elements."]})]}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(o.p,{children:["Use the ",e.jsx(o.strong,{children:"Tooltip"})," component to provide additional information or context for UI elements."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Tooltips"})," should be brief and helpful, enhancing user understanding without overwhelming them."]}),`
`,e.jsx(o.p,{children:"They are suitable for a button, an icon, a link, and any other elements where additional context would be beneficial."}),`
`,e.jsx(n,{label:"Tooltip vs Popover",level:3}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Both components look similar but a ",e.jsx(o.strong,{children:"Tooltip"})," is displayed on hover and focus while a ",e.jsx(g,{kind:f.popover,story:v.documentation,children:"Popover"})," is triggered by click."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Tooltips"})," are commonly used for shorter explanations, while longer text / complex UIs would suit Popovers better."]}),`
`,e.jsx(o.li,{children:"Use a Popover when you need to insert interactive elements such as a button."}),`
`,e.jsx(o.li,{children:"A Popover can be dismissed if an action button allows it."}),`
`]}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(j,{donts:["- Don't place critical or essential information inside a Tooltip, users may miss it","- Don't use Tooltip to show error messages","- Don't include interactive elements (e.g., buttons, links) inside a Tooltip","- Don't repeat content already visible in the UI. Tooltips should complement, not duplicate","- Don't overload Tooltips with rich content (images, media, long paragraphs)"],dos:["- Use a Tooltip to provide concise, contextual help or clarification","- Keep the content brief and easy to read, ideally under two lines","- Use complete sentences with punctuation when space allows for improved readability","- Use Tooltips only when the user might need additional context, not by default on every element","- Position the Tooltip so it does not obstruct important elements"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(o.p,{children:e.jsx(o.img,{src:"components/tooltip/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(o.ol,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Tooltip"})}),`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Content"})}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Carret tip"})," - optional"]}),`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Trigger"})}),`
`]}),`
`,e.jsx(n,{label:"Placement",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Tooltip"})," has automatic positioning feature. It can detect the edge of the browser so the container always stays visible on a page."]}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsxs(o.p,{children:["By default, a ",e.jsx(o.strong,{children:"Tooltip"})," is hidden to the user."]}),`
`,e.jsxs(o.p,{children:["It triggers when the user hovers or focuses on the ",e.jsx(o.strong,{children:"Tooltip"}),"'s trigger element such as an icon."]}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.strong,{children:"Tooltip"})," remains visible while the user's mouse or focus is active, with customizable open and close delays."]}),`
`,e.jsx(o.p,{children:"It will hide when the users stop hovering over or focusing on this element."}),`
`,e.jsxs(o.p,{children:["On a mobile device, a ",e.jsx(o.strong,{children:"Tooltip"})," is displayed upon tapping, and it will hide when the user taps an area outside the ",e.jsx(o.strong,{children:"Tooltip"})," container."]}),`
`,e.jsx(n,{label:"Variation",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"With extra arrow"}),": providing a more pronounced visual connection between the tooltip and the element it describes, ensuring users clearly understand which element the tooltip is associated with."]}),`
`,e.jsx(n,{label:"Navigation",level:2}),`
`,e.jsx(n,{label:"Focus Management",level:3}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.strong,{children:"Tooltip"})," is tied to its trigger element and becomes visible when the trigger receives focus."]}),`
`,e.jsx(o.p,{children:"It remains open as long as the trigger element is focused."}),`
`,e.jsx(n,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Tab"})," moves focus to the trigger, opening the ",e.jsx(o.strong,{children:"Tooltip"})," without delay."]}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Tab"})," again moves focus away, closing the ",e.jsx(o.strong,{children:"Tooltip"}),"."]}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Escape"})," closes the ",e.jsx(o.strong,{children:"Tooltip"})," immediately if it is open."]}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Tooltips"}),` are used to provide supplementary information about a UI element.
This component complies with the `,e.jsx(d,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role",children:"Tooltip WAI-ARIA design pattern"}),"."]}),`
`,e.jsxs(o.p,{children:["You should set a minimal ",e.jsx(o.strong,{children:"Tooltip Trigger"})," height to at least ",e.jsx(o.code,{children:"24px"})," to provide sufficient visual clarity."]}),`
`,e.jsx(n,{label:"Use tooltips to provide additional context",level:3}),`
`,e.jsxs(o.p,{children:["If your UI includes an unlabeled or ambiguous element, consider attaching a ",e.jsx(o.strong,{children:"Tooltip"})," that explains its purpose."]}),`
`,e.jsx(i,{of:m,sourceState:"shown"}),`
`,e.jsxs(o.p,{children:[e.jsx(a,{name:c.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screens will announce the tooltip information."]})]})}function ne(t={}){const{wrapper:o}={...l(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(r,{...t})}):r(t)}export{ne as default};
