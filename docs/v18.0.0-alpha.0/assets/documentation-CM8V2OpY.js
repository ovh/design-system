import{j as e}from"./jsx-runtime-3v6rTKkY.js";import{u as c}from"./index-B5y3xRNA.js";import{M as d,C as l,d as i}from"./index-sugWq352.js";import{B as h}from"./banner-BU_1gqe2.js";import{A as r,O as p}from"./accordion.stories-BHM91C0i.js";import{O as o}from"./index-BjLrujv2.js";import{O as s}from"./index-DB8q6ij-.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";import"./ods-toggle2-Du4-LCNk.js";import"./ods-icon-MrkrUMg1.js";function a(t){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r,name:"Documentation"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["An ",e.jsx(n.strong,{children:"Accordion"})," is a vertical header that reveals or hides an associated section of content."]})}),`
`,e.jsx(l,{of:p,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsxs("div",{id:"description",children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Accordion"})," component ",e.jsx(n.strong,{children:"delivers large amounts of content in a small space through progressive disclosure"}),"."]}),e.jsx(n.p,{children:`The header part gives the user a high-level overview of the content allowing them to decide which sections to
read.`}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Accordions"})," can make ",e.jsx(n.strong,{children:"information processing and discovering more effective"}),`. However, it does hide content
from the users, and it’s important to account for a user not noticing or reading all the included content. If a user
is likely to read all the content then then the usage of an `,e.jsx(n.strong,{children:"Accordion"}),` would not be recommended as it adds an extra
interaction to access the content; instead use a full scrolling page with normal headers.`]})]}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Accordion"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"Collapsible, FAQ"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#atoms",children:["Atom",e.jsx(o,{name:s.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(o,{name:s.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/accordion",children:["Github",e.jsx(o,{name:s.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/accordion/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Header"}),": contains the section title and acts as a control for revealing the panel or not (always visible)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon"}),': A "down/up" chevron ',e.jsx(n.a,{href:"?path=/docs/ods-components-icon--documentation",children:e.jsx(n.strong,{children:"Icon"})})," is used to indicate the “expand/collapse” action, though the entire header area is clickable (always visible)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Panel"}),": the section of content associated with an ",e.jsx(n.strong,{children:"Accordion"})," header."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:`Use any number of elements to visually display them as a group.
Several collapsible panels can co-exist in a same interface.`}),`
`,e.jsx(n.p,{children:"Use this component for :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Organizing related information"}),`
`,e.jsx(n.li,{children:"Shortening pages and reducing scrolling when content is not crucial to read in full"}),`
`,e.jsx(n.li,{children:"When space is at a premium and long content cannot be displayed all at once, like on a mobile interface or in a side panel"}),`
`]}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(i,{children:`
| ✅ Do                                                                                                                                                                                                                                                                                            |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                                                                                                                  |
| - Header [**Text**](?path=/docs/ods-components-text--documentation) describes the content contained in the panel. Use a clear and concise [**Text**](?path=/docs/ods-components-text--documentation), and be explicit about the action that will happen if the option is selected |
| - Use sentence-style capitalization in header [**Text**](?path=/docs/ods-components-text--documentation) (only the first word in a phrase and any proper nouns capitalized), no more than three words, and no punctuation                                                                |
| - Use Accordion instead of [**Tab**](?path=/docs/ods-components-tabs--documentation) if users need to see multiple sections at once                                                                                                                                                  |
`}),`
`,e.jsx(i,{children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Expose a lot of content in the Header section (i.e. more than 2 lines)                                                                                                         |
| - Use **Accordions** with essential content for users                                                                                                                            |
| - Use [**Icon**](?path=/docs/ods-components-icon--documentation) in header text                                                                                   |
| - Expose a lot of content in the Panel section (i.e. more than the viewport height)                                                                                              |
| - Empty the Panel section, as the **Accordion** become useless                                                                                                                   |
| - Disable **Accordions**, as it can be confusing for users                                                                                                                       |
| - Trigger expanding/collapsing on hover action                                                                                                                                   |
| - Avoid nested **Accordions**, like collapsible content within collapsible content                                                                                               |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Accordion"})," component is adjusted to the parent's width. It can vary based on the content, layout, and page design."]}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.strong,{children:"Accordion"})," content is left-aligned in its container, as the header does."]}),`
`,e.jsx(n.p,{children:"It can be placed within main page content or inside a side container (as panels, or tiles)."}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
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
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The header part can be navigated through tabulation, with the same behavior as a ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),"."]}),`
`,e.jsxs(n.p,{children:["When focusing the header part, pressing ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})," keys will trigger its expansion or its collapsion."]}),`
`,e.jsxs(n.p,{children:["For screen readers, the user can know easily that the ",e.jsx(n.strong,{children:"Accordion"})," is opened or not, and therefore the inner content is readable or not."]})]})}function M(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{M as default};
