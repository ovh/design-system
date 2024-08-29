import{j as n}from"./jsx-runtime-3v6rTKkY.js";import{u as d}from"./index-B5y3xRNA.js";import{M as a,C as h,d as t}from"./index-sugWq352.js";import{B as l}from"./banner-BU_1gqe2.js";import{L as r,O as p}from"./link.stories-BEac8wNH.js";import{O as o}from"./index-BjLrujv2.js";import{O as i}from"./index-DB8q6ij-.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-Du4-LCNk.js";import"./ods-icon-MrkrUMg1.js";function c(s){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...d(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:r,name:"Documentation"}),`
`,n.jsx(l,{of:r}),`
`,n.jsx(e.p,{children:n.jsxs(e.em,{children:[n.jsx(e.strong,{children:"Link"})," is a component that enables redirection to a new page, section, website or other resources:"]})}),`
`,n.jsx(h,{of:p,sourceState:"none"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs("div",{children:[n.jsxs("div",{id:"description",children:[n.jsxs(e.p,{children:["A ",n.jsx(e.strong,{children:"Link"})," allows users to move through a website by redirecting them to a different page or section."]}),n.jsxs(e.p,{children:["It can also enables ",n.jsx(e.strong,{children:"Links"})," to other resources."]})]}),n.jsx("table",{children:n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Name"}),n.jsx("td",{children:n.jsx("strong",{children:"Link"})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Also known as"}),n.jsx("td",{children:n.jsx("em",{children:"Hyperlink, Anchor"})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Atomic type"}),n.jsx("td",{children:n.jsxs("a",{href:"https://bradfrost.com/blog/post/extending-atomic-design/",children:["Quark",n.jsx(o,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Related component(s)"}),n.jsx("td",{children:n.jsx(e.p,{children:n.jsx(e.a,{href:"?path=/docs/ods-components-icon--documentation",children:n.jsx(e.strong,{children:"Icon"})})})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Links"}),n.jsxs("td",{children:[n.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",n.jsx(o,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),n.jsx("br",{}),n.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/link",children:["Github",n.jsx(o,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"components/link/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Link text"}),": Communicates what is being linked to."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/ods-components-icon--documentation",children:n.jsx(e.strong,{children:"Icon"})})," (optional): Indicates the destination or type of content being."]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Links"})," are used as navigational elements."]}),`
`,n.jsxs(e.p,{children:["They are also used when linking to another document. In that case, ",n.jsx(e.strong,{children:"Link"})," description should contain type and size of document."]}),`
`,n.jsxs(e.h3,{id:"when-to-use-a-link-or-a-button",children:["When to use a ",n.jsx(e.strong,{children:"Link"})," or a ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})}),":"]}),`
`,n.jsx(e.p,{children:"They have different purposes so, make sure you are accurately using them."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})})," is used for actions while ",n.jsx(e.strong,{children:"Link"})," is used for navigation."]}),`
`,n.jsx(e.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,n.jsx(t,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Use a **Link** to redirect user to a new page, section or website.                                                                                                           |
| - Make a **Link** description self-explanatory to describe where user will be send after following this **Link**                                                               |
| - Write short key words as **Link** description                                                                                                                                |
| - Ensure users are aware of a **Link** containing a document by providing its type and size                                                                                    |
`}),`
`,n.jsx(t,{children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Use a **Link** as a [**Button**](?path=/docs/ods-components-button--documentation) for actions such as 'save', 'cancel' or 'submit'                                    |
| - Use "Click Here" or "Here" as description for a **Link**                                                                                                                       |
| - Write a full long sentence as **Link** description                                                                                                                             |
| - Use different color for **Link** and the optional [**Icon**](?path=/docs/ods-components-icon--documentation) when you add one                                          |
`}),`
`,n.jsx(e.h2,{id:"placement",children:"Placement"}),`
`,n.jsxs(e.p,{children:["A ",n.jsx(e.strong,{children:"Link"})," can stand alone on a page, or it can be placed within a sentence or a paragraph."]}),`
`,n.jsxs(e.p,{children:["An optional ",n.jsx(e.a,{href:"?path=/docs/ods-components-icon--documentation",children:n.jsx(e.strong,{children:"Icon"})})," can be placed next to the ",n.jsx(e.strong,{children:"Link"}),"."]}),`
`,n.jsx(e.h2,{id:"behavior",children:"Behavior"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Link"})," component can be hovered, focused, clicked and disabled."]}),`
`,n.jsxs(e.p,{children:["When disabled, users cannot focus nor click on the ",n.jsx(e.strong,{children:"Link"}),"."]}),`
`,n.jsxs(e.p,{children:["On hover, ",n.jsx(e.strong,{children:"Link"})," is underlined and its color changes."]}),`
`,n.jsxs(e.p,{children:["When users clicks anywhere on the ",n.jsx(e.strong,{children:"Link"}),", even its optional ",n.jsx(e.a,{href:"?path=/docs/ods-components-icon--documentation",children:n.jsx(e.strong,{children:"Icon"})}),", they are redirected to the expected page or section."]}),`
`,n.jsx(e.h2,{id:"variation",children:"Variation"}),`
`,n.jsx(e.p,{children:"N/A"}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.p,{children:["While ",n.jsx(e.strong,{children:"Link"})," has focus, users can press ",n.jsx(e.code,{children:"Enter"})," key to open it."]})]})}function O(s={}){const{wrapper:e}={...d(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(c,{...s})}):c(s)}export{O as default};
