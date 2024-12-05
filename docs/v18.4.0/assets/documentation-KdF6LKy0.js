import{j as e}from"./jsx-runtime-Cz980c3e.js";import{u as r}from"./index-C2TcKet0.js";import{M as l,C as c}from"./index-Nkgk7YEz.js";import{T as t,O as d}from"./tabs.stories-DxOQE9qG.js";import{B as m}from"./Banner-DJBI_cBG.js";import{I as p,A as h,B as g}from"./IdentityCard-C7PlZNnd.js";import{H as s}from"./Heading-DYcKlEuJ.js";import{S as o}from"./StorybookLink-CNJXR0hy.js";import"./iframe-COPR_OVU.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./controls-D697y8_r.js";import"./index-CveiHl7W.js";import"./index-BvZXb4_Z.js";function i(a){const n={em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",...r(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t,name:"Documentation"}),`
`,e.jsx(m,{of:t}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Tabs"})," are a way of navigating between multiple panels, reducing clutter and fitting more into a smaller space"]})}),`
`,e.jsx(c,{of:d,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsx(p,{aliases:["Tab Navigation","Tabbed interface"],atomicType:h.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-11168",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/tabs",name:"Tabs",relatedComponents:[{name:"Link"},{name:"Text"}],children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tabs"})," are used to organize content by grouping similar information on the same page."]})}),`
`,e.jsx(s,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/tabs/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Active tab"}),`
`,e.jsx(n.li,{children:"Unselected tab"}),`
`]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tabs"})," component is ideal for dashboards, settings pages, profile sections, and any interface where multiple views need to be accessible from the same page."]}),`
`,e.jsx(n.p,{children:"They can also be used to filter content via some common denominator."}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(g,{donts:["- Use a large amount of Tabs, as it can be confusing for the user","- Use long labelled Tabs","- Use conjugated verbs in labels",e.jsxs(n.span,{children:["- Use external ",e.jsx(o,{kind:"ODS Components/Link",label:"Link",story:"Documentation"})," as Tabs"]}),"- Avoid elements comparison in multiple Tabs (context switching)","- Avoid nesting Tabs in a web page","- Use Tabs as a process progression"],dos:["- Group data in sub-navigation with Tabs"]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tabs"})," are ",e.jsx(n.strong,{children:"often used in the top part of a web page"}),", as it can act as a navigation focus."]}),`
`,e.jsxs(n.p,{children:["They are ",e.jsx(n.strong,{children:"left-centered by default"}),"."]}),`
`,e.jsxs(n.p,{children:["Each ",e.jsx(n.strong,{children:"Tab"})," has an automatic width based on the content's length."]}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["By default, one of the ",e.jsx(n.strong,{children:"Tabs"})," is always selected"]}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tabs"})," can be hovered, focused and selected. A ",e.jsx(n.strong,{children:"Tab"})," can also act as a disabled ",e.jsx(n.strong,{children:"Tab"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tabs"})," always stay on the same line, and can be horizontally scrolled through if they happen to not fit their container."]}),`
`,e.jsxs(n.p,{children:["When the selected ",e.jsx(n.strong,{children:"Tab"})," changes, an event is triggered."]}),`
`,e.jsxs(n.p,{children:["Each ",e.jsx(n.strong,{children:"Tab"})," has a panel displaying free content. Selecting a ",e.jsx(n.strong,{children:"Tab"})," displays the corresponding panel."]}),`
`,e.jsxs(n.p,{children:["The panel does not depend on the ",e.jsx(n.strong,{children:"Tab"})," component, it is in the developer’s hands."]}),`
`,e.jsx(s,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["All inner ",e.jsx(n.strong,{children:"Tabs"})," follow the same focusing/keyboard navigation as ",e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"}),"."]})]})}function E(a={}){const{wrapper:n}={...r(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(i,{...a})}):i(a)}export{E as default};
