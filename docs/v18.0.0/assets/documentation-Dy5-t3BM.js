import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as i}from"./index-DeyDdHvX.js";import{M as r,C as c,d as t}from"./index-BM3JsZOq.js";import{B as l}from"./banner-DPlTyHjv.js";import{T as a,O as d}from"./tabs.stories-COu7hTjL.js";import{I as h,A as m}from"./identity-card-CwN41yUF.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";import"./index-DryTTbHl.js";import"./ods-toggle2-LnXcgd5r.js";import"./chunk-FAE4I7JY-v0Th3BC0.js";function o(s){const n={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a,name:"Documentation"}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Tabs"})," are a way of navigating between multiple panels, reducing clutter and fitting more into a smaller space"]})}),`
`,e.jsx(c,{of:d,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{className:"documentation-overview",children:[e.jsx("div",{children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tabs"})," are used to organize content by grouping similar information on the same page."]})}),e.jsx(h,{aliases:["Tab Navigation","Tabbed interface"],atomicType:m.molecule,className:"documentation-overview__table",figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-11168",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/tabs",name:"Tabs",relatedComponents:[{name:"Link"},{name:"Text"}]})]}),`
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
`,e.jsx(t,{className:"documentation-do-table",children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Group data in sub-navigation with **Tabs**                                                                                                                                   |
`}),`
`,e.jsx(t,{className:"documentation-dont-table",children:`
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
`,e.jsxs(n.p,{children:["All inner ",e.jsx(n.strong,{children:"Tabs"})," follow the same focusing/keyboard navigation as ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})]})]})}function B(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{B as default};
