import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as l}from"./index-ZwkxtaJJ.js";import{t as a,l as c}from"./ods-react60-DssFCbzP.js";import{M as p}from"./index-9orhCFJa.js";import{T as i,O as d,A as h}from"./tooltip.stories-QHg8_HDk.js";import{A as m}from"./Anatomy-DkXJCwiR.js";import{B as x}from"./Banner-DiJ2utjo.js";import{I as u,B as j}from"./IdentityCard-0vzhW5ZM.js";import{C as s}from"./Canvas-CreDMEws.js";import{E as g}from"./ExternalLink-C0Msq_QQ.js";import{H as t}from"./Heading-eINcjqM4.js";import{S as f}from"./StorybookLink-CMOdzit3.js";import{S as v,R as b}from"./meta-t9Q7ez2Q.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-BRevKSH1.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-B-GJ-1TA.js";import"./index-CqY9YpN0.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./icon-name-C581wThh.js";import"./TooltipTrigger-CtwhYrHp.js";import"./overlay-CZHjGBMC.js";import"./portal--PO1aV1j.js";import"./use-locale-context-6s5qsrWI.js";import"./use-presence-Dwt5F0sJ.js";import"./use-event-c9j7vq_1.js";import"./index-Dp00x3gb.js";import"./index-CgXDLFtf.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./Table-BvR76ybm-DzE94PQp.js";import"./Table-u83oGl00.js";import"./TooltipTrigger-CizyLvLy-D53hI2Ct.js";import"./index-blQ1D1fB.js";import"./lz-string-U2heoObX.js";import"./ResetTheme-BVzaMHe3.js";import"./tokens-VHDJ0kGa.js";import"./Link-CIjoG_UN-BDwROQOD.js";function r(n){const o={code:"code",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:i,name:"Documentation"}),`
`,e.jsx(x,{of:i}),`
`,e.jsx(o.p,{children:e.jsxs(o.em,{children:[e.jsx(o.strong,{children:"Tooltip"})," component is used to display contextual information when the user hovers or focuses a UI element in a page."]})}),`
`,e.jsx(s,{of:d,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsxs(u,{aliases:["Info Bubble"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=55-23473",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/tooltip",name:"Tooltip",children:[e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Tooltip"})," component is used to display contextual information when the user hovers or focuses an element."]}),e.jsx(o.p,{children:"It enhances user experience by providing helpful hints, explanations, or descriptions without cluttering the UI."}),e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Tooltips"})," are commonly used with a button, an icon, or interactive elements."]})]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(o.p,{children:["Use the ",e.jsx(o.strong,{children:"Tooltip"})," component to provide additional information or context for UI elements."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Tooltips"})," should be brief and helpful, enhancing user understanding without overwhelming them."]}),`
`,e.jsx(o.p,{children:"They are suitable for a button, an icon, a link, and any other elements where additional context would be beneficial."}),`
`,e.jsx(t,{label:"Tooltip vs Popover",level:3}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Both components look similar but a ",e.jsx(o.strong,{children:"Tooltip"})," is displayed on hover and focus while a ",e.jsx(f,{kind:b.popover,story:v.documentation,children:"Popover"})," is triggered by click."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Tooltips"})," are commonly used for shorter explanations, while longer text / complex UIs would suit Popovers better."]}),`
`,e.jsx(o.li,{children:"Use a Popover when you need to insert interactive elements such as a button."}),`
`,e.jsx(o.li,{children:"A Popover can be dismissed if an action button allows it."}),`
`]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(j,{donts:["- Don't place critical or essential information inside a Tooltip, users may miss it","- Don't use Tooltip to show error messages","- Don't include interactive elements (e.g., buttons, links) inside a Tooltip","- Don't repeat content already visible in the UI. Tooltips should complement, not duplicate","- Don't overload Tooltips with rich content (images, media, long paragraphs)"],dos:["- Use a Tooltip to provide concise, contextual help or clarification","- Keep the content brief and easy to read, ideally under two lines","- Use complete sentences with punctuation when space allows for improved readability","- Use Tooltips only when the user might need additional context, not by default on every element","- Position the Tooltip so it does not obstruct important elements"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(m,{src:"components/tooltip/anatomy.png"}),`
`,e.jsxs(o.ol,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Tooltip"})}),`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Content"})}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Caret tip"})," - optional"]}),`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Trigger"})}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Tooltip"})," has automatic positioning feature. It can detect the edge of the browser so the container always stays visible on a page."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(o.p,{children:["By default, a ",e.jsx(o.strong,{children:"Tooltip"})," is hidden to the user."]}),`
`,e.jsxs(o.p,{children:["It triggers when the user hovers or focuses on the ",e.jsx(o.strong,{children:"Tooltip"}),"'s trigger element such as an icon."]}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.strong,{children:"Tooltip"})," remains visible while the user's mouse or focus is active, with customizable open and close delays."]}),`
`,e.jsx(o.p,{children:"It will hide when the users stop hovering over or focusing on this element."}),`
`,e.jsxs(o.p,{children:["On a mobile device, a ",e.jsx(o.strong,{children:"Tooltip"})," is displayed upon tapping, and it will hide when the user taps an area outside the ",e.jsx(o.strong,{children:"Tooltip"})," container."]}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"With extra arrow"}),": providing a more pronounced visual connection between the tooltip and the element it describes, ensuring users clearly understand which element the tooltip is associated with."]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus Management",level:3}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.strong,{children:"Tooltip"})," is tied to its trigger element and becomes visible when the trigger receives focus."]}),`
`,e.jsx(o.p,{children:"It remains open as long as the trigger element is focused."}),`
`,e.jsx(t,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Tab"})," moves focus to the trigger, opening the ",e.jsx(o.strong,{children:"Tooltip"})," without delay."]}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Tab"})," again moves focus away, closing the ",e.jsx(o.strong,{children:"Tooltip"}),"."]}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Escape"})," closes the ",e.jsx(o.strong,{children:"Tooltip"})," immediately if it is open."]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Tooltips"}),` are used to provide supplementary information about a UI element.
This component complies with the `,e.jsx(g,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role",children:"Tooltip WAI-ARIA design pattern"}),"."]}),`
`,e.jsxs(o.p,{children:["You should set a minimal ",e.jsx(o.strong,{children:"Tooltip Trigger"})," height to at least ",e.jsx(o.code,{children:"24px"})," to provide sufficient visual clarity."]}),`
`,e.jsx(t,{label:"Use tooltips to provide additional context",level:3}),`
`,e.jsxs(o.p,{children:["If your UI includes an unlabeled or ambiguous element, consider attaching a ",e.jsx(o.strong,{children:"Tooltip"})," that explains its purpose."]}),`
`,e.jsx(s,{of:h,sourceState:"shown"}),`
`,e.jsxs(o.p,{children:[e.jsx(a,{name:c.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screens will announce the tooltip information."]})]})}function pe(n={}){const{wrapper:o}={...l(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{pe as default};
