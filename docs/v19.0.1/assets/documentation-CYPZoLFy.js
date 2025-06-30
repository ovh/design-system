import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as a}from"./index-DQB45XCM.js";import{M as l,C as o}from"./index-D1K7mLD0.js";import{B as s,O as c}from"./breadcrumb.stories-BBGS13p2.js";import{B as d}from"./Banner-B4K6Zb-5.js";import{I as h,A as m,B as p}from"./IdentityCard-Yo1l2iFh.js";import{H as t}from"./Heading-mtuBTkOf.js";import{S as u}from"./StorybookLink-DMr2bWgk.js";import{S as x,R as g}from"./meta-Ci0gAceS.js";import"./index-D_CmzhJ4.js";import"./iframe-DbJ8Lucp.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";import"./element-BmbJTp3e.js";import"./Link-Ba-_E0nD.js";import"./icon-name-BOrBmUKT.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function r(i){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:s,name:"Documentation"}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A list of ",e.jsx(u,{kind:g.link,story:x.documentation,children:"Links"})," showing the current page location in the navigational hierarchy."]})}),`
`,e.jsx(o,{of:c,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(h,{aliases:["Breadcrumb trail"],atomicType:m.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-22762",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/breadcrumb",name:"Breadcrumb",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Breadcrumb"}),` is used to define the user's position in a site hierarchy, it can also be useful for a finer navigation in
an inner application.`]})}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsx(n.p,{children:"It has several usage :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displaying sub-pages of a site structure"}),`
`,e.jsx(n.li,{children:"Show a step progress of a process"}),`
`,e.jsx(n.li,{children:"Simplify site structure navigation in a quicker way"}),`
`]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(p,{donts:["- Don't use Breadcrumbs as a primary navigation method, they are secondary and contextual only","- Don't include external links in Breadcrumb items, all links should be internal","- Don't nest Breadcrumbs or place more than one Breadcrumb component on the same page","- Don't exceed 4 levels of depth. Overly complex paths reduce clarity and usability","- Don't make the current page a link. The last item should be plain text to indicate the user's location","- Don't change the Breadcrumb order to reflect user history or actions, it should always match site structure","- Don't use Breadcrumb if the page doesn't belong to a clearly hierarchical structure"],dos:['- Start the Breadcrumb trail with a link to the homepage, using a "home" Icon or the "Home" label for example',"- Reflect the actual page hierarchy in the Breadcrumb structure (e.g., Section > Subsection > Current page)","- Use Breadcrumb to provide contextual orientation, especially in deep navigation paths","- Ensure that each Breadcrumb item (except the last one) is a clickable link to a parent page","- Add the ellipsis to collapse long paths (more than 4 Links visible)"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/breadcrumb/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Breadcrumb"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Page link"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Current page"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Ellipsis"})}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Breadcrumb"})," is used at the top of a web page, preferably start-aligned."]}),`
`,e.jsx(n.p,{children:"Its width is automatic, relative to its content and is not adjustable."}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Breadcrumb"})," has more than 4 links visible, an ellipsis is displayed as a replacement for the middle link."]}),`
`,e.jsx(n.p,{children:"A click on the ellipsis will expanded all previously hidden link inline, the collapsed state can't be redone afterwards."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Breadcrumb"})," links are kept inline, even on mobile viewports."]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["All links within the ",e.jsx(n.strong,{children:"Breadcrumb"})," component are focusable, following the reading order. The last item, which represents the current page, is static text and does not receive focus."]}),`
`,e.jsx(t,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"Tab"})," moves focus through each link in the ",e.jsx(n.strong,{children:"Breadcrumb"})," trail"]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"Enter"})," while a link is focused navigates to the corresponding page"]}),`
`,e.jsxs(n.li,{children:["When an ellipsis (...) appears due to a long ",e.jsx(n.strong,{children:"Breadcrumb"})," trail (more than 4 elements), it behaves as a link:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"Enter"})," expands the full ",e.jsx(n.strong,{children:"Breadcrumb"})," list"]}),`
`,e.jsxs(n.li,{children:["Once expanded, additional link become accessible via ",e.jsx(n.code,{children:"Tab"})," navigation"]}),`
`]}),`
`]}),`
`]})]})}function X(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{X as default};
