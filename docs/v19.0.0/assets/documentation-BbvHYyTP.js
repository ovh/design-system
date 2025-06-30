import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as a}from"./index-DQB45XCM.js";import{M as r,C as l}from"./index-CTRIvuAa.js";import{S as s,D as c}from"./skeleton.stories-BhzaM7mi.js";import{B as d}from"./Banner-DKEGGZmZ.js";import{I as h,A as m,B as p}from"./IdentityCard-DMALWF_P.js";import{H as t}from"./Heading-BKRI_kjA.js";import{S as u}from"./StorybookLink-DMr2bWgk.js";import{S as x,R as j}from"./meta-Ci0gAceS.js";import"./index-D_CmzhJ4.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function i(o){const n={em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:s,name:"Documentation"}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Skeleton"})," component indicates that data is loading. It improves the perceived loading time for the user."]})}),`
`,e.jsx(l,{of:c,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(h,{aliases:["Skeleton loader"],atomicType:m.quark,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-10250",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/skeleton",name:"Skeleton",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Skeleton"})," indicates, through and animation, that content is loading and that the screen is not frozen."]})}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Skeleton"})," can be used in a variety of contexts such as in Cards, lists, and table content."]}),`
`,e.jsx(t,{label:"Spinner vs Skeleton",level:3}),`
`,e.jsxs(n.p,{children:["Both ",e.jsx(u,{kind:j.spinner,story:x.documentation,children:"Spinner"})," and ",e.jsx(n.strong,{children:"Skeleton"})," indicate that content is loading, but they serve different purposes:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Use a Spinner when the content or result is unknown and the user must wait. For example, after clicking a button or loading data from an API"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Use a ",e.jsx(n.strong,{children:"Skeleton"})," when the structure of the content is known, but the actual data hasn't loaded yet. It helps set expectations and makes the wait feel shorter"]}),`
`]}),`
`]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(p,{donts:["- Don't use Skeleton for static content that doesn't change, load it normally without placeholders","- Don't apply Skeleton to interactive elements like buttons or inputs. Use Spinner or loading states instead","- Don't show Skeleton for very short loading delays, it may feel like a glitch or visual noise","- Don't animate excessively or use distracting visuals. Skeleton should feel smooth and unobtrusive"],dos:["- Use a Skeleton to indicate loading states for dynamic content, such as user data or content blocks","- Prefer Skeleton when content will take more than a moment to load (usually > 500ms)","- Ensure Skeleton is replaced with real content as soon as it is available"]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Skeleton"})," can be placed whenever needed to indicate a content is loading."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Skeleton"})," component has a linear animation to show to indicates a content is loading."]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Skeleton"})," component is non-interactive and does not receive keyboard focus. It is purely visual and serves as a placeholder for content loading, without affecting keyboard navigation."]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsx(n.p,{children:"This component is only visual and does not provide any screen reader information."})]})}function L(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{L as default};
