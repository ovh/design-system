import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as r}from"./index-DQB45XCM.js";import{M as a,C as l}from"./index-D1K7mLD0.js";import{S as o,O as c}from"./spinner.stories-DrHioQpQ.js";import{B as d}from"./Banner-B4K6Zb-5.js";import{I as h,A as p,B as m}from"./IdentityCard-Yo1l2iFh.js";import{H as t}from"./Heading-mtuBTkOf.js";import{S as u}from"./StorybookLink-DMr2bWgk.js";import{S as g,R as x}from"./meta-Ci0gAceS.js";import"./index-D_CmzhJ4.js";import"./iframe-DbJ8Lucp.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Spinner-BC3A9yP9.js";import"./index-CkQHsVsO.js";import"./colors-DSObuHxd.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function s(i){const n={em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:o,name:"Documentation"}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"A visual indicator that a process is happening in the background but the interface is not yet ready for interaction."})}),`
`,e.jsx(l,{of:c,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(h,{aliases:["Loading","Spin","Circular Progress"],atomicType:p.quark,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-10340",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/spinner",name:"Spinner",children:e.jsx(n.p,{children:`A visual indicator that a process is happening in the background but the interface is not yet ready for
interaction.`})}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Spinner"})," component is used as a fallback when complex content is loading in the background."]}),`
`,e.jsx(t,{label:"Spinner vs Skeleton",level:3}),`
`,e.jsxs(n.p,{children:["Both ",e.jsx(n.strong,{children:"Spinner"})," and ",e.jsx(u,{kind:x.skeleton,story:g.documentation,children:"Skeleton"})," indicate that content is loading, but they serve different purposes:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Use a ",e.jsx(n.strong,{children:"Spinner"})," when the content or result is unknown and the user must wait. For example, after clicking a button or loading data from an API"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Use a Skeleton when the structure of the content is known, but the actual data hasn't loaded yet. It helps set expectations and makes the wait feel shorter"}),`
`]}),`
`]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(m,{donts:["- Don't use multiple Spinners on the same page, it creates confusion and visual noise. Use a single centralized Spinner or loading overlay","- Don't use a Spinner for text or layout placeholders, use the Skeleton component instead, which better preserves structure","- Don't use a Spinner if the loading duration is extremely short, this can feel like a flicker or visual glitch","- Don't place Spinners in interactive elements like buttons without also disabling them and explaining the ongoing action"],dos:["- Use a Spinner to indicate indeterminate loading when the duration is unknown or cannot be measured","- Use a Spinner when complex or background processes are happening (e.g. fetching filtered data, saving a form)","- Display a Spinner if the loading is expected to take more than a couple of seconds, to reassure the user",`- Combine the Spinner with contextual messaging (e.g. "Loading [...]" or "Saving your changes") to clarify what's happening`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Spinner"})," can be placed where needed, whether it's centered on an overlay or specific container/content in the page."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Spinner"})," can widen to match its container."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Spinner"})," component has a spinning animation to show to the user that the background process is moving on."]}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsx(t,{label:"Color",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primary"})," (default): used in contexts where the ",e.jsx(n.strong,{children:"Spinner"})," is tied to the main brand action"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Neutral"}),": used for secondary or subtle loading indicators, and commonly displayed in disabled parent components to indicate background activity without drawing too much attention"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"White"}),": designed for use on dark or colored backgrounds to ensure proper contrast and visibility"]}),`
`]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Spinner"})," component is non-interactive and does not receive keyboard focus. It is purely visual and serves as a loading indicator, without affecting keyboard navigation."]})]})}function X(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{X as default};
