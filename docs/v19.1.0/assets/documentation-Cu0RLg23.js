import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as h}from"./index-DQB45XCM.js";import{a as m,o as p}from"./ods-react61-BFiU7C5S.js";import{M as u,C as s}from"./index-DQDMPrC3.js";import{E as t}from"./ExternalLink-F7ndcp9T.js";import{B as a,O as x,A as b}from"./breadcrumb.stories-ePls6Vt7.js";import{B as j}from"./Banner-D5YsTkFA.js";import{I as g,B as f}from"./IdentityCard-C39Eam7s.js";import{H as i}from"./Heading-BTR1K1mm.js";import{S as l}from"./StorybookLink-BJoxMnxL.js";import{S as o,R as c}from"./meta-Dkilg8AS.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-llaHorau.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Link-DTswNFmS-CEk9YBDP.js";import"./index-CkQHsVsO.js";import"./element-BmbJTp3e.js";import"./useI18n-CFuCjRRO.js";import"./Link-CQBDxF2D.js";import"./icon-name-CL_C5kfn.js";import"./controls-BtiQQn1l.js";import"./Divider-DwZugXnI-RR--JbES.js";import"./ods-react222-B9lkGKUh.js";function d(r){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...h(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:a,name:"Documentation"}),`
`,e.jsx(j,{of:a}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A list of ",e.jsx(l,{kind:c.link,story:o.documentation,children:"Links"})," showing the current page location in the navigational hierarchy."]})}),`
`,e.jsx(s,{of:x,sourceState:"none"}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsx(g,{aliases:["Breadcrumb trail"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-22762",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/breadcrumb",name:"Breadcrumb",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Breadcrumb"}),` is used to define the user's position in a site hierarchy, it can also be useful for a finer navigation in
an inner application.`]})}),`
`,e.jsx(i,{label:"Usage",level:2}),`
`,e.jsx(n.p,{children:"It has several usages :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displaying subpages of a site structure"}),`
`,e.jsx(n.li,{children:"Show step progress of a process"}),`
`,e.jsx(n.li,{children:"Simplify site structure navigation in a quicker way"}),`
`]}),`
`,e.jsx(i,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(f,{donts:["- Don't use Breadcrumbs as a primary navigation method, they are secondary and contextual only","- Don't include external links in Breadcrumb items, all links should be internal","- Don't nest Breadcrumbs or place more than one Breadcrumb component on the same page","- Don't exceed 4 levels of depth. Overly complex paths reduce clarity and usability","- Don't make the current page a link. The last item should be plain text to indicate the user's location","- Don't change the Breadcrumb order to reflect user history or actions, it should always match site structure","- Don't use Breadcrumb if the page doesn't belong to a clearly hierarchical structure"],dos:['- Start the Breadcrumb trail with a link to the homepage, using a "home" Icon or the "Home" label for example',"- Reflect the actual page hierarchy in the Breadcrumb structure (e.g., Section > Subsection > Current page)","- Use Breadcrumb to provide contextual orientation, especially in deep navigation paths","- Ensure that each Breadcrumb item (except the last one) is a clickable link to a parent page","- Add the ellipsis to collapse long paths (more than 4 Links visible)"]}),`
`,e.jsx(i,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/breadcrumb/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Breadcrumb"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Page link"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Current page"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Ellipsis"})}),`
`]}),`
`,e.jsx(i,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Breadcrumb"})," is used at the top of a web page, preferably start-aligned."]}),`
`,e.jsx(n.p,{children:"Its width is automatic, relative to its content and is not adjustable."}),`
`,e.jsx(i,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Breadcrumb"})," has more than 4 links visible, an ellipsis is displayed as a replacement for the middle link."]}),`
`,e.jsx(n.p,{children:"A click on the ellipsis will expand all previously hidden links inline, the collapsed state can't be redone afterward."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Breadcrumb"})," links are kept inline, even on mobile viewports."]}),`
`,e.jsx(i,{label:"Navigation",level:2}),`
`,e.jsx(i,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["All links within the ",e.jsx(n.strong,{children:"Breadcrumb"})," component are focusable, following the reading order. The last item, which represents the current page, is static text and does not receive focus."]}),`
`,e.jsx(i,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"Tab"})," moves focus through each link in the ",e.jsx(n.strong,{children:"Breadcrumb"})," trail"]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"Enter"})," while a link is focused navigates to the corresponding page"]}),`
`,e.jsxs(n.li,{children:["When an ellipsis (...) appears due to a long ",e.jsx(n.strong,{children:"Breadcrumb"})," trail (more than 4 elements), it behaves as a link:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"Enter"})," expands the full ",e.jsx(n.strong,{children:"Breadcrumb"})," list"]}),`
`,e.jsxs(n.li,{children:["Once expanded, additional link become accessible via ",e.jsx(n.code,{children:"Tab"})," navigation"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["This component complies with the ",e.jsx(t,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/",children:"Breadcrumb WAI-ARIA design pattern"}),"."]}),`
`,e.jsx(i,{label:"Identifying the Breadcrumb with aria-label",level:3}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Breadcrumbs"})," are a form of navigation, but they serve a specific purpose distinct from primary navigation menus. To ensure they are correctly recognized, an ",e.jsx(t,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label",children:"aria-label"})," should be added to explicitly identify them."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Breadcrumb Links"})," follow the same accessibility guidelines as a standard ",e.jsx(l,{kind:c.link,story:o.documentation,children:"Link"}),"."]}),`
`,e.jsx(s,{of:b,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(m,{name:p.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the link, the label of the first link, the list and the number of item."]})]})}function G(r={}){const{wrapper:n}={...h(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{G as default};
