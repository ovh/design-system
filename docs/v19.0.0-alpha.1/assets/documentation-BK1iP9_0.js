import{j as n}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as r}from"./index-DQB45XCM.js";import{M as a,C as l}from"./index-BtXuKPxx.js";import{S as s,O as c}from"./spinner.stories-BqgAGHmh.js";import{B as p}from"./Banner-CQ0hjMFM.js";import{I as d,A as m,B as h}from"./IdentityCard-CHpZg30n.js";import{H as t}from"./Heading-D0aj94cg.js";import{S as x,a as g,O as j}from"./StorybookLink-BHoLbhqx.js";import"./index-D_CmzhJ4.js";import"./iframe-VOlI4tKJ.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./OdsSpinner-DCrUZmmt.js";import"./index-CkQHsVsO.js";import"./controls-BtiQQn1l.js";import"./ods-react-BwLnGFOk.js";function o(i){const e={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:s,name:"Documentation"}),`
`,n.jsx(p,{of:s}),`
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"A visual indicator that a process is happening in the background but the interface is not yet ready for interaction."})}),`
`,n.jsx(l,{of:c,sourceState:"none"}),`
`,n.jsx(t,{label:"Overview",level:2}),`
`,n.jsx(d,{aliases:["Loading","Spin","Circular Progress"],atomicType:m.quark,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-10340",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/spinner",name:"Spinner",relatedComponents:[],children:n.jsxs(e.p,{children:["A visual indicator that ",n.jsx(e.strong,{children:"a process is happening in the background"}),` but the interface is not yet ready for
interaction.`]})}),`
`,n.jsx(t,{label:"Anatomy",level:2}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"components/spinner/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Main content"}),": the ",n.jsx(e.strong,{children:"Spinner"})," itself."]}),`
`]}),`
`,n.jsx(t,{label:"Usage",level:2}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Spinner"})," component is used as a fallback when complex content is loading in the background."]}),`
`,n.jsxs(e.p,{children:["When using a ",n.jsx(e.strong,{children:"Spinner"})," directly over content, we recommend applying an opacity to the content container to de-emphasize the content and increase the visibility of the ",n.jsx(e.strong,{children:"Spinner"}),"."]}),`
`,n.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,n.jsx(h,{donts:["- Use multiple Spinners on the same page, prefer using a single Spinner on an overlay",n.jsxs(e.span,{children:["- Use Spinner for text-only loading. Use ",n.jsx(x,{kind:j.skeleton,story:g.documentation,children:"Skeleton"})," component instead"]})],dos:["- Use Spinner when the loading wait time is expected to be longer than three seconds"]}),`
`,n.jsx(t,{label:"Placement",level:2}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Spinner can be placed where needed"}),", whether it's centered on an overlay or specific container/content in the page."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Spinner"})," can widen to match its container."]}),`
`,n.jsx(t,{label:"Behavior",level:2}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.strong,{children:"Spinner"})," component has a spinning animation to show to the user that the background process is moving on."]}),`
`,n.jsx(t,{label:"Variation",level:2}),`
`,n.jsx(e.p,{children:"N/A"}),`
`,n.jsx(t,{label:"Accessibility",level:2}),`
`,n.jsxs(e.p,{children:["User is being notified of its loading based on the ARIA ",n.jsx(e.code,{children:"live"})," property."]})]})}function L(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{L as default};
