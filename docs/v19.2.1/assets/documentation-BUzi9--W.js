import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as d}from"./index-ZwkxtaJJ.js";import{t as h,l as m}from"./ods-react60-CRx7zEey.js";import{M as p,C as u}from"./index-8pGbFWRq.js";import{C as x}from"./Canvas-Df5XpfVk.js";import{E as t}from"./ExternalLink-izdABMGv.js";import{B as s,O as b,A as j}from"./breadcrumb.stories-D5XCoI3d.js";import{B as g}from"./Banner-CNp5SML8.js";import{I as f,B as v}from"./IdentityCard-e2WB6ddF.js";import{H as i}from"./Heading-hbfjmHNc.js";import{S as a}from"./StorybookLink-DL_XdQSR.js";import{S as l,R as o}from"./meta-B7heVWH0.js";import"./index-jIWwRBLr.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-D7nmkxLr.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./TooltipTrigger-Iu3rt7LP-DQH4Rvrv.js";import"./index-CTDx-6u2.js";import"./lz-string-U2heoObX.js";import"./source-CPEZJ6oD.js";import"./Link-BWQEuWpd-DsrdP0qI.js";import"./index-CqY9YpN0.js";import"./element-3R7vFkDE.js";import"./useI18n-C0NLVYPv.js";import"./Link-D5eLq5a9.js";import"./icon-name-C581wThh.js";import"./controls-BtiQQn1l.js";import"./ods-react236-aAAP9SXj.js";function c(r){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:s,name:"Documentation"}),`
`,e.jsx(g,{of:s}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A list of ",e.jsx(a,{kind:o.link,story:l.documentation,children:"Links"})," showing the current page location in the navigational hierarchy."]})}),`
`,e.jsx(u,{of:b,sourceState:"none"}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsx(f,{aliases:["Breadcrumb trail"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-22762",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/breadcrumb",name:"Breadcrumb",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Breadcrumb"}),` is used to define the user's position in a site hierarchy, it can also be useful for a finer navigation in
an inner application.`]})}),`
`,e.jsx(i,{label:"Usage",level:2}),`
`,e.jsx(n.p,{children:"It has several usages :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displaying subpages of a site structure"}),`
`,e.jsx(n.li,{children:"Show step progress of a process"}),`
`,e.jsx(n.li,{children:"Simplify site structure navigation in a quicker way"}),`
`]}),`
`,e.jsx(i,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(v,{donts:["- Don't use Breadcrumbs as a primary navigation method, they are secondary and contextual only","- Don't include external links in Breadcrumb items, all links should be internal","- Don't nest Breadcrumbs or place more than one Breadcrumb component on the same page","- Don't exceed 4 levels of depth. Overly complex paths reduce clarity and usability","- Don't make the current page a link. The last item should be plain text to indicate the user's location","- Don't change the Breadcrumb order to reflect user history or actions, it should always match site structure","- Don't use Breadcrumb if the page doesn't belong to a clearly hierarchical structure"],dos:['- Start the Breadcrumb trail with a link to the homepage, using a "home" Icon or the "Home" label for example',"- Reflect the actual page hierarchy in the Breadcrumb structure (e.g., Section > Subsection > Current page)","- Use Breadcrumb to provide contextual orientation, especially in deep navigation paths","- Ensure that each Breadcrumb item (except the last one) is a clickable link to a parent page","- Add the ellipsis to collapse long paths (more than 4 Links visible)"]}),`
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
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Breadcrumb Links"})," follow the same accessibility guidelines as a standard ",e.jsx(a,{kind:o.link,story:l.documentation,children:"Link"}),"."]}),`
`,e.jsx(x,{of:j,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(h,{name:m.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the link, the label of the first link, the list and the number of item."]})]})}function V(r={}){const{wrapper:n}={...d(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(c,{...r})}):c(r)}export{V as default};
