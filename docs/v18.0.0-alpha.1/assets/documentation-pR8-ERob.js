import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as d}from"./index-BNSrq6w-.js";import{M as c,C as l,d as o}from"./index-DnV51lgW.js";import{B as h}from"./banner-CAPzkNgn.js";import{T as r,O as m}from"./tabs.stories-COu7hTjL.js";import{O as t}from"./index-BUOQImqF.js";import{O as i}from"./index-CEZbmgmh.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";import"./ods-toggle2-CgWFvVwm.js";function a(s){const n={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r,name:"Documentation"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Tabs"})," are a way of navigating between multiple panels, reducing clutter and fitting more into a smaller space"]})}),`
`,e.jsx(l,{of:m,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsx("div",{id:"description",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tabs"})," are used to organize content by grouping similar information on the same page."]})}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Tabs"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"Tab Navigation, Tabbed interface"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#molecules",children:["Molecule",e.jsx(t,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-link--documentation",children:e.jsx(n.strong,{children:"Link"})})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(t,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/tabs",children:["Github",e.jsx(t,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/tabs/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Active tab"}),`
`,e.jsx(n.li,{children:"Unselected tab"}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tabs"})," component is ideal for dashboards, settings pages, profile sections, and any interface where multiple views need to be accessible from the same page."]}),`
`,e.jsx(n.p,{children:"They can also be used to filter content via some common denominator."}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(o,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Group data in sub-navigation with **Tabs**                                                                                                                                   |
`}),`
`,e.jsx(o,{children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Use a large amount of **Tabs**, as it can be confusing for the user                                                                                                            |
| - Use long labelled **Tabs**                                                                                                                                                     |
| - Use conjugated verbs in labels                                                                                                                                                 |
| - Use external [**Link**](?path=/docs/ods-components-link--documentation) as **Tabs**                                                                                    |
| - Avoid elements comparison in multiple **Tabs** (context switching)                                                                                                             |
| - Avoid nesting **Tabs** in a web page                                                                                                                                           |
| - Use **Tabs** as a process progression                                                                                                                                          |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tabs"})," are ",e.jsx(n.strong,{children:"often used in the top part of a web page"}),", as it can act as a navigation focus."]}),`
`,e.jsxs(n.p,{children:["They are ",e.jsx(n.strong,{children:"left-centered by default"}),"."]}),`
`,e.jsxs(n.p,{children:["Each ",e.jsx(n.strong,{children:"Tab"})," has an automatic width based on the content's length."]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["By default, one of the ",e.jsx(n.strong,{children:"Tabs"})," is always selected"]}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tabs"})," can be hovered, focused and selected. A ",e.jsx(n.strong,{children:"Tab"})," can also act as a disabled ",e.jsx(n.strong,{children:"Tab"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tabs"})," always stay on the same line, and can be horizontally scrolled through if they happen to not fit their container."]}),`
`,e.jsxs(n.p,{children:["When the selected ",e.jsx(n.strong,{children:"Tab"})," changes, an event is triggered."]}),`
`,e.jsxs(n.p,{children:["Each ",e.jsx(n.strong,{children:"Tab"})," has a panel displaying free content. Selecting a ",e.jsx(n.strong,{children:"Tab"})," displays the corresponding panel."]}),`
`,e.jsxs(n.p,{children:["The panel does not depend on the ",e.jsx(n.strong,{children:"Tab"})," component, it is in the developer’s hands."]}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["All inner ",e.jsx(n.strong,{children:"Tabs"})," follow the same focusing/keyboard navigation as ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})]})]})}function O(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{O as default};
