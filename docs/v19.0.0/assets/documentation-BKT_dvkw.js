import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as r}from"./index-DQB45XCM.js";import{M as i,C as c}from"./index-CTRIvuAa.js";import{T as o,O as l}from"./tabs.stories-D3LFuEyh.js";import{B as d}from"./Banner-DKEGGZmZ.js";import{I as h,A as p,B as m}from"./IdentityCard-DMALWF_P.js";import{H as s}from"./Heading-BKRI_kjA.js";import"./index-D_CmzhJ4.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";import"./use-locale-context-BQVaQ0H3.js";import"./render-strategy-D_LTfuI4.js";import"./use-presence-Cqrqn20p.js";import"./use-event-OCVb0O1l.js";import"./controls-BtiQQn1l.js";import"./source-d0g_Nd0q.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function a(t){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:o,name:"Documentation"}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Tabs"})," are a way of navigating between multiple panels, reducing clutter and fitting more into a smaller space"]})}),`
`,e.jsx(c,{of:l,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsx(h,{aliases:["Tab Navigation","Tabbed interface"],atomicType:p.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-11168",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/tabs",name:"Tabs",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tabs"})," are used to organize content by grouping similar information on the same page."]})}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tabs"})," component is ideal for dashboards, settings pages, profile sections, and any interface where multiple views need to be accessible from the same page."]}),`
`,e.jsx(n.p,{children:"They can also be used to filter content via some common denominator."}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(m,{donts:["- Don't use Tabs as a progress indicator or wizard steps","- Don't nest Tabs inside other Tabs, this creates a confusing and hard-to-navigate experience","- Don't overload the interface with too many tabs. Use dropdowns if you need more than 5 tabs","- Don't use long or verbose labels","- Don't use external links or actions as tab triggers, Tabs should only control the visibility of in-page content"],dos:["- Use Tabs to group related content under the same page when it fits in a shared context","- Keep Tab labels short, clear, and scannable, use nouns or very short phrases (1–3 words max)","- Use Tabs for horizontal navigation, not hierarchical structure or progressive steps"]}),`
`,e.jsx(s,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/tabs/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Tabs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Active tab"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Unselected tab"})}),`
`]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tabs"})," are often used in the top part of a web page, as it can act as a navigation focus."]}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["By default, one of the ",e.jsx(n.strong,{children:"Tab"})," is always selected."]}),`
`,e.jsxs(n.p,{children:["Each ",e.jsx(n.strong,{children:"Tab"})," can be hovered, focused and selected. A ",e.jsx(n.strong,{children:"Tab"})," can also act as a disabled ",e.jsx(n.strong,{children:"Tab"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tabs"})," always stay on the same line, and can be horizontally scrolled through if they happen to not fit their container."]}),`
`,e.jsxs(n.p,{children:["Each ",e.jsx(n.strong,{children:"Tab"})," has a panel displaying content. Selecting a ",e.jsx(n.strong,{children:"Tab"})," displays the corresponding panel."]}),`
`,e.jsxs(n.p,{children:["The panel does not depend on the ",e.jsx(n.strong,{children:"Tab"})," component, it is in the developer's hands."]}),`
`,e.jsx(s,{label:"Navigation",level:2}),`
`,e.jsx(s,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["When focus moves to the ",e.jsx(n.strong,{children:"Tabs"})," component, it is set on the active ",e.jsx(n.strong,{children:"Tab"}),"."]}),`
`,e.jsxs(n.p,{children:["Once a ",e.jsx(n.strong,{children:"Tab"})," is focused, its associated content is also activated."]}),`
`,e.jsx(s,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Tab"})," moves focus into or out of the ",e.jsx(n.strong,{children:"Tabs"})," component while keeping the active ",e.jsx(n.strong,{children:"Tab"})," selected."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Arrow Right"})," moves focus to the next ",e.jsx(n.strong,{children:"Tab"})," and activates its content."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Arrow Left"})," moves focus to the previous ",e.jsx(n.strong,{children:"Tab"})," and activates its content."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Home"})," / ",e.jsx(n.code,{children:"fn"})," + ",e.jsx(n.code,{children:"Arrow Left"})," moves focus to the first ",e.jsx(n.strong,{children:"Tab"})," and activates its content."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"End"})," / ",e.jsx(n.code,{children:"fn"})," + ",e.jsx(n.code,{children:"Arrow Right"})," moves focus to the last ",e.jsx(n.strong,{children:"Tab"})," and activates its content."]})]})}function F(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{F as default};
