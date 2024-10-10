import{j as e}from"./jsx-runtime-vK1CujOl.js";import{u as l}from"./index-CB7mz5IJ.js";import{M as a,C as c}from"./index-Bd2Jnm8T.js";import{T as i,O as m}from"./tooltip.stories-xXxuj8GG.js";import{B as p}from"./Banner-D69sr9PT.js";import{I as d,A as h,B as u}from"./IdentityCard-DJgK2WbX.js";import{H as t}from"./Heading-oJ6nNH90.js";import{S as o}from"./StorybookLink-D-3rjE8q.js";import"./iframe-Lgv0C8F1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-BNPjhb5w.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./controls-DpsgTNdU.js";import"./index-CONup0N6.js";function r(s){const n={em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i,name:"Documentation"}),`
`,e.jsx(p,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Tooltip"})," component is used to display contextual information when the user hovers or focuses a UI element in a page."]})}),`
`,e.jsx(c,{of:m,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsxs(d,{aliases:["Info Bubble"],atomicType:h.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=55-23473",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/tooltip",name:"Tooltip",relatedComponents:[{name:"Icon"},{name:"Text"}],children:[e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tooltip"})," component is used to display contextual information when the user hovers or focuses an element."]}),e.jsx(n.p,{children:"It enhances user experience by providing helpful hints, explanations, or descriptions without cluttering the UI."}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tooltips"})," are commonly used for ",e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"}),`,
`,e.jsx(o,{kind:"ODS Components/Icon",label:"Icon",story:"Documentation"}),`,
`,e.jsx(o,{kind:"ODS Components/Form elements/Form Field",label:"Form Field",story:"Documentation"}),", and other interactive elements."]})]}),`
`,e.jsx(t,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/tooltip/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Container"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Main content"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Arrow"})," ",e.jsx(n.em,{children:"(optional)"})]}),`
`]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"Tooltip"})," component to provide additional information or context for UI elements."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tooltips"})," should be brief and helpful, enhancing user understanding without overwhelming them."]}),`
`,e.jsxs(n.p,{children:["They are suitable for ",e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"}),", ",e.jsx(o,{kind:"ODS Components/Icon",label:"Icon",story:"Documentation"}),", ",e.jsx(o,{kind:"ODS Components/Form elements/Form Field",label:"Form Field",story:"Documentation"}),", ",e.jsx(o,{kind:"ODS Components/Link",label:"Link",story:"Documentation"}),", and any other elements where additional context would be beneficial."]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:["- Use a Tooltip to communicate error messages","- Write very important information within a Tooltip since it is only displayed on hover and focus so the user might miss its crucial content","- Insert rich information such as image in a Tooltip",e.jsxs(n.span,{children:["- Use interactive elements within a Tooltip such as ",e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"})," or ",e.jsx(o,{kind:"ODS Components/Link",label:"Link",story:"Documentation"})]}),"- Repeat information within a Tooltip that is already visible in the UI"],dos:["- Use a Tooltip to provide useful, brief additional information","- Use Tooltips sparingly without invading the screen",e.jsxs(n.span,{children:["- Write Tooltip's ",e.jsx(o,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," as full sentences with punctuation except there is not enough space"]})]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tooltip"})," has automatic positioning feature. It can detect the edge of the browser so the container always stays visible on a page."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["By default, a ",e.jsx(n.strong,{children:"Tooltip"})," is hidden to the user."]}),`
`,e.jsxs(n.p,{children:["It triggers when the user hovers or focuses on the ",e.jsx(n.strong,{children:"Tooltip"}),"'s trigger element such as an ",e.jsx(o,{kind:"ODS Components/Icon",label:"Icon",story:"Documentation"}),"."]}),`
`,e.jsxs(n.p,{children:["As long as the user's mouse cursor or focus is active, the ",e.jsx(n.strong,{children:"Tooltip"})," will persist."]}),`
`,e.jsx(n.p,{children:"It will hide when the users stop hovering over or focusing on this element."}),`
`,e.jsxs(n.p,{children:["On a mobile device, a ",e.jsx(n.strong,{children:"Tooltip"})," is displayed upon tapping, and it will hide when the user taps an area outside the ",e.jsx(n.strong,{children:"Tooltip"})," container."]}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"With extra arrow"}),": providing a more pronounced visual connection between the tooltip and the element it describes, ensuring users clearly understand which element the tooltip is associated with."]}),`
`]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tooltip"})," component is a visual equivalent of ARIA labels, it will be read the same way by screen readers."]})]})}function M(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{M as default};
