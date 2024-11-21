import{j as e}from"./jsx-runtime-BtDUu9js.js";import{u as r}from"./index-DZL6x4lo.js";import{M as c,C as l}from"./index-CYldocI7.js";import{A as i,O as d}from"./accordion.stories-CO7ppZmv.js";import{B as h}from"./Banner-CW_U-IGN.js";import{I as p,A as m,B as x}from"./IdentityCard-BLiY5u4s.js";import{H as o}from"./Heading-DwuTnCox.js";import{S as t}from"./StorybookLink-BiRTKXGy.js";import"./iframe-D7GxXTWn.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./controls-DpsgTNdU.js";import"./index-BvAGq-5Z.js";import"./index-DtXgNHxz.js";function a(s){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:i,name:"Documentation"}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["An ",e.jsx(n.strong,{children:"Accordion"})," is a vertical header that reveals or hides an associated section of content."]})}),`
`,e.jsx(l,{of:d,sourceState:"none"}),`
`,e.jsx(o,{label:"Overview",level:2}),`
`,e.jsxs(p,{aliases:["Collapsible","FAQ"],atomicType:m.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=1-6634",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/accordion",name:"Accordion",relatedComponents:[{name:"Text"}],children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Accordion"})," component ",e.jsx(n.strong,{children:"delivers large amounts of content in a small space through progressive disclosure"}),"."]}),e.jsx(n.p,{children:`The header part gives the user a high-level overview of the content allowing them to decide which sections to
read.`}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Accordions"})," can make ",e.jsx(n.strong,{children:"information processing and discovering more effective"}),`. However, it does hide content
from the users, and it’s important to account for a user not noticing or reading all the included content. If a user
is likely to read all the content then then the usage of an `,e.jsx(n.strong,{children:"Accordion"}),` would not be recommended as it adds an extra
interaction to access the content; instead use a full scrolling page with normal headers.`]})]}),`
`,e.jsx(o,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/accordion/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Header"}),": contains the section title and acts as a control for revealing the panel or not (always visible)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon"}),': A "down/up" chevron ',e.jsx(t,{kind:"ODS Components/Icon",label:"Icon",story:"Documentation"})," is used to indicate the “expand/collapse” action, though the entire header area is clickable (always visible)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Panel"}),": the section of content associated with an ",e.jsx(n.strong,{children:"Accordion"})," header."]}),`
`]}),`
`,e.jsx(o,{label:"Usage",level:2}),`
`,e.jsx(n.p,{children:`Use any number of elements to visually display them as a group.
Several collapsible panels can co-exist in a same interface.`}),`
`,e.jsx(n.p,{children:"Use this component for :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Organizing related information"}),`
`,e.jsx(n.li,{children:"Shortening pages and reducing scrolling when content is not crucial to read in full"}),`
`,e.jsx(n.li,{children:"When space is at a premium and long content cannot be displayed all at once, like on a mobile interface or in a side panel"}),`
`]}),`
`,e.jsx(o,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:["- Expose a lot of content in the Header section (i.e. more than 2 lines)","- Use Accordions with essential content for users",e.jsxs(n.span,{children:["- Use ",e.jsx(t,{kind:"ODS Components/Icon",label:"Icon",story:"Documentation"})," in header text"]}),"- Expose a lot of content in the Panel section (i.e. more than the viewport height)","- Empty the Panel section, as the Accordion become useless","- Disable Accordions, as it can be confusing for users","- Trigger expanding/collapsing on hover action","- Avoid nested Accordions, like collapsible content within collapsible content"],dos:[e.jsxs(n.span,{children:["- Header ",e.jsx(t,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," describes the content contained in the panel. Use a clear and concise ",e.jsx(t,{kind:"ODS Components/Text",label:"Text",story:"Documentation"}),", and be explicit about the action that will happen if the option is selected"]}),e.jsxs(n.span,{children:["- Use sentence-style capitalization in header ",e.jsx(t,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," (only the first word in a phrase and any proper nouns capitalized), no more than three words, and no punctuation"]}),e.jsxs(n.span,{children:["- Use Accordion instead of ",e.jsx(t,{kind:"ODS Components/Tabs",label:"Tab",story:"Documentation"})," if users need to see multiple sections at once"]})]}),`
`,e.jsx(o,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Accordion"})," component is adjusted to the parent's width. It can vary based on the content, layout, and page design."]}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.strong,{children:"Accordion"})," content is left-aligned in its container, as the header does."]}),`
`,e.jsx(n.p,{children:"It can be placed within main page content or inside a side container (as panels, or tiles)."}),`
`,e.jsx(o,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Accordion"})," has two states : ",e.jsx(n.strong,{children:"collapsed"})," and ",e.jsx(n.strong,{children:"expanded"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Accordion is by default collapsed."})}),`
`,e.jsx(n.p,{children:`When triggering the header part, the panel part should react as expanding or collapsing, depending on what previous
state it had.`}),`
`,e.jsx(n.p,{children:"The mouse cursor acts as a clickable area on the Header part of the component."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Icon"})," helps the user to know if the ",e.jsx(n.strong,{children:"Accordion"})," is collapsed or expanded :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Collapsed : chevron points down"}),`
`,e.jsx(n.li,{children:"Expanded : chevron points up"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"The Header part of this component acts like a Button"}),", with hover, focus and active styles."]}),`
`,e.jsx(n.p,{children:"Same behavior and styling applies to both Desktop and Mobile modes."}),`
`,e.jsx(o,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(o,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["The header part can be navigated through tabulation, with the same behavior as a ",e.jsx(t,{kind:"ODS Components/Button",label:"Button",story:"Documentation"}),"."]}),`
`,e.jsxs(n.p,{children:["When focusing the header part, pressing ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})," keys will trigger its expansion or its collapse."]}),`
`,e.jsxs(n.p,{children:["For screen readers, the user can know easily that the ",e.jsx(n.strong,{children:"Accordion"})," is opened or not, and therefore the inner content is readable or not."]})]})}function M(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{M as default};
