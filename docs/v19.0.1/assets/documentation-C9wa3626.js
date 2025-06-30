import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as r}from"./index-DQB45XCM.js";import{M as l,C as a}from"./index-D1K7mLD0.js";import{T as i,O as c}from"./tooltip.stories-D1q6ELFK.js";import{B as p}from"./Banner-B4K6Zb-5.js";import{I as d,A as h,B as m}from"./IdentityCard-Yo1l2iFh.js";import{H as n}from"./Heading-mtuBTkOf.js";import{S as x}from"./StorybookLink-DMr2bWgk.js";import{S as u,R as g}from"./meta-Ci0gAceS.js";import"./index-D_CmzhJ4.js";import"./iframe-DbJ8Lucp.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-CbWLwkmI.js";import"./index-CkQHsVsO.js";import"./Spinner-BC3A9yP9.js";import"./colors-DSObuHxd.js";import"./icon-name-BOrBmUKT.js";import"./TooltipTrigger-DmpQ7Q38.js";import"./overlay-CZHjGBMC.js";import"./portal-Bd62KldU.js";import"./use-locale-context-BQVaQ0H3.js";import"./use-presence-Cqrqn20p.js";import"./use-event-OCVb0O1l.js";import"./index-DoGvXrgL.js";import"./index-xSrPfE2G.js";import"./controls-BtiQQn1l.js";import"./source-d0g_Nd0q.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function s(t){const o={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:i,name:"Documentation"}),`
`,e.jsx(p,{of:i}),`
`,e.jsx(o.p,{children:e.jsxs(o.em,{children:[e.jsx(o.strong,{children:"Tooltip"})," component is used to display contextual information when the user hovers or focuses a UI element in a page."]})}),`
`,e.jsx(a,{of:c,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsxs(d,{aliases:["Info Bubble"],atomicType:h.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=55-23473",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/tooltip",name:"Tooltip",children:[e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Tooltip"})," component is used to display contextual information when the user hovers or focuses an element."]}),e.jsx(o.p,{children:"It enhances user experience by providing helpful hints, explanations, or descriptions without cluttering the UI."}),e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Tooltips"})," are commonly used with a button, an icon, or interactive elements."]})]}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(o.p,{children:["Use the ",e.jsx(o.strong,{children:"Tooltip"})," component to provide additional information or context for UI elements."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Tooltips"})," should be brief and helpful, enhancing user understanding without overwhelming them."]}),`
`,e.jsx(o.p,{children:"They are suitable for a button, an icon, a link, and any other elements where additional context would be beneficial."}),`
`,e.jsx(n,{label:"Tooltip vs Popover",level:3}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Both components look similar but a ",e.jsx(o.strong,{children:"Tooltip"})," is displayed on hover and focus while a ",e.jsx(x,{kind:g.popover,story:u.documentation,children:"Popover"})," is triggered by click."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Tooltips"})," are commonly used for shorter explanations, while longer text / complex UIs would suit Popovers better."]}),`
`,e.jsx(o.li,{children:"Use a Popover when you need to insert interactive elements such as a button."}),`
`,e.jsx(o.li,{children:"A Popover can be dismissed if an action button allows it."}),`
`]}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(m,{donts:["- Don't place critical or essential information inside a Tooltip, users may miss it","- Don't use Tooltip to show error messages","- Don't include interactive elements (e.g., buttons, links) inside a Tooltip","- Don't repeat content already visible in the UI. Tooltips should complement, not duplicate","- Don't overload Tooltips with rich content (images, media, long paragraphs)"],dos:["- Use a Tooltip to provide concise, contextual help or clarification","- Keep the content brief and easy to read, ideally under two lines","- Use complete sentences with punctuation when space allows for improved readability","- Use Tooltips only when the user might need additional context, not by default on every element","- Position the Tooltip so it does not obstruct important elements"]}),`
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
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Escape"})," closes the ",e.jsx(o.strong,{children:"Tooltip"})," immediately if it is open."]})]})}function Z(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}export{Z as default};
