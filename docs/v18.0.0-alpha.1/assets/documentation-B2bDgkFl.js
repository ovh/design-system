import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as a}from"./index-BNSrq6w-.js";import{M as d,C as l,d as r}from"./index-DnV51lgW.js";import{B as h}from"./banner-CAPzkNgn.js";import{B as o,O as m}from"./breadcrumb.stories-Bwp1f1F9.js";import{O as i}from"./index-BUOQImqF.js";import{O as t}from"./index-CEZbmgmh.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";import"./ods-toggle2-CgWFvVwm.js";function c(s){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:o,name:"Documentation"}),`
`,e.jsx(h,{of:o}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A list of ",e.jsx(n.a,{href:"?path=/docs/ods-components-link--documentation",children:e.jsx(n.strong,{children:"Link"})})," showing the current page location in the navigational hierarchy."]})}),`
`,e.jsx(l,{of:m,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsx("div",{id:"description",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Breadcrumb"}),` is used to define the user's position in a site hierarchy, it can also be useful for a finer navigation in
an inner application.`]})}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Breadcrumb"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"Breadcrumb trail"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#atoms",children:["Atom",e.jsx(i,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-link--documentation",children:e.jsx(n.strong,{children:"Link"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-icon--documentation",children:e.jsx(n.strong,{children:"Icon"})}),`),
`,e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})}),")"]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(i,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/breadcrumb",children:["Github",e.jsx(i,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/breadcrumb/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Page link"})," (as Home ",e.jsx(n.a,{href:"?path=/docs/ods-components-icon--documentation",children:e.jsx(n.strong,{children:"Icon"})}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Page link"}),": Directs users to the parent-level page."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Separator"}),": Element between each page."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Active page"})," (Non-clickable): Indicate the current page."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"It has several usage :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displaying sub-pages of a site structure"}),`
`,e.jsx(n.li,{children:"Show a step progress of a process"}),`
`,e.jsx(n.li,{children:"Simplify site structure navigation in a quicker way"}),`
`]}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(r,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - The first **Breadcrumb** element has to be a [**Link**](?path=/docs/ods-components-link--documentation) to its preferential home page (with an [**Icon**](?path=/docs/ods-components-icon--documentation), or with "Home" [**Text**](?path=/docs/ods-components-text--documentation))
| - Inherit page structure logic inside the **Breadcrumb** construction
`}),`
`,e.jsx(r,{children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Use **Breadcrumb** for main page navigation                                                                                                                                    |
| - Use nested **Breadcrumbs**                                                                                                                                                     |
| - Add external [**Link**](?path=/docs/ods-components-link--documentation) in the component                                                                               |
| - Put more than 4 imbrications inside a **Breadcrumb**, as the structure will be too complex                                                                                     |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Breadcrumb"})," is used at the top of a web page, preferably start-aligned."]}),`
`,e.jsx(n.p,{children:"Its width is automatic, relative to its content and is not adjustable."}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Breadcrumb"})," has more than 4 ",e.jsx(n.a,{href:"?path=/docs/ods-components-link--documentation",children:e.jsx(n.strong,{children:"Link"})})," visible, an ellipsis is displayed as a replacement for the middle ",e.jsx(n.a,{href:"?path=/docs/ods-components-link--documentation",children:e.jsx(n.strong,{children:"Link"})}),"."]}),`
`,e.jsxs(n.p,{children:["A click on the ellipsis will expanded all previously hidden ",e.jsx(n.a,{href:"?path=/docs/ods-components-link--documentation",children:e.jsx(n.strong,{children:"Link"})})," inline, the collapsed state can't be redone afterwards."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Breadcrumb"})," ",e.jsx(n.a,{href:"?path=/docs/ods-components-link--documentation",children:e.jsx(n.strong,{children:"Link"})})," are kept inline, even on mobile viewports."]}),`
`,e.jsxs(n.p,{children:["Clicking or pressing ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})," key on ",e.jsx(n.strong,{children:"Breadcrumb"})," item triggers an event."]}),`
`,e.jsxs(n.p,{children:["Same actions on ",e.jsx(n.strong,{children:"Breadcrumb"})," collapsed item will trigger an event."]}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["All ",e.jsx(n.a,{href:"?path=/docs/ods-components-link--documentation",children:e.jsx(n.strong,{children:"Link"})})," are accessible through tabulation."]})]})}function C(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(c,{...s})}):c(s)}export{C as default};
