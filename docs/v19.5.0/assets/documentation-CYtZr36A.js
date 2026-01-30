import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as m}from"./index-ZwkxtaJJ.js";import{a as p,l as u}from"./ods-react67-C395g5lW.js";import{k as t}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as x}from"./index-Cw5r0Kn8.js";import{C as s}from"./Canvas-i2Tfjesg.js";import{E as a}from"./ExternalLink-C5hGBmwh.js";import{B as l,O as b,A as j}from"./breadcrumb.stories-K-n_ADBS.js";import{A as g}from"./Anatomy-DkXJCwiR.js";import{B as f}from"./Banner-X7WOeBPc.js";import{I as v,B as y}from"./IdentityCard-D9LjZbLA.js";import{H as r}from"./Heading-Dep_rTif.js";import{S as o}from"./StorybookLink-DQwP2BEI.js";import{S as c,R as d}from"./meta-DcQbZjt_.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DCzti3mm.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./TooltipTrigger-C3aN0eJB-DwV7p8FS.js";import"./ods-react121-5kwUyuQy.js";import"./index-CSeLFT3z.js";import"./lz-string-U2heoObX.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-xqxcB8cs.js";import"./tokens-BtVMeYnn.js";import"./Link-TMoA1i18-BDwROQOD.js";import"./index-CqY9YpN0.js";import"./element-3R7vFkDE.js";import"./context-C_-r2uoG.js";import"./useI18n-C0NLVYPv.js";import"./Link-C-y4OBrb.js";import"./icon-name-BpdEc4-2.js";import"./controls-BtiQQn1l.js";import"./Table-D8Me597i-NC3k9YIT.js";import"./Table-5ah53JFf.js";import"./Divider-wQyo85oE-CpSK6tnQ.js";function h(i){const n={em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...m(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:l,name:"Documentation"}),`
`,e.jsx(f,{of:l}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A list of ",e.jsx(o,{kind:d.link,story:c.documentation,children:"Links"})," showing the current page location in the navigational hierarchy."]})}),`
`,e.jsx(s,{of:b,sourceState:"none"}),`
`,e.jsx(r,{label:"Overview",level:2}),`
`,e.jsx(v,{aliases:["Breadcrumb trail"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-22762",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/breadcrumb",name:"Breadcrumb",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Breadcrumb"}),` is used to define the user's position in a site hierarchy, it can also be useful for a finer navigation in
an inner application.`]})}),`
`,e.jsx(r,{label:"Usage",level:2}),`
`,e.jsx(n.p,{children:"It has several usages :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displaying subpages of a site structure"}),`
`,e.jsx(n.li,{children:"Show step progress of a process"}),`
`,e.jsx(n.li,{children:"Simplify site structure navigation in a quicker way"}),`
`]}),`
`,e.jsx(r,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(y,{donts:["- Don't use Breadcrumbs as a primary navigation method, they are secondary and contextual only","- Don't include external links in Breadcrumb items, all links should be internal","- Don't nest Breadcrumbs or place more than one Breadcrumb component on the same page","- Don't exceed 4 levels of depth. Overly complex paths reduce clarity and usability","- Don't make the current page a link. The last item should be plain text to indicate the user's location","- Don't change the Breadcrumb order to reflect user history or actions, it should always match site structure","- Don't use Breadcrumb if the page doesn't belong to a clearly hierarchical structure"],dos:['- Start the Breadcrumb trail with a link to the homepage, using a "home" Icon or the "Home" label for example',"- Reflect the actual page hierarchy in the Breadcrumb structure (e.g., Section > Subsection > Current page)","- Use Breadcrumb to provide contextual orientation, especially in deep navigation paths","- Ensure that each Breadcrumb item (except the last one) is a clickable link to a parent page","- Add the ellipsis to collapse long paths (more than 4 Links visible)"]}),`
`,e.jsx(r,{label:"Best Practices in Context",level:3}),`
`,e.jsx(g,{src:"components/breadcrumb/anatomy.png"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Breadcrumb"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Page link"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Current page"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Ellipsis"})}),`
`]}),`
`,e.jsx(r,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Breadcrumb"})," is used at the top of a web page, preferably start-aligned."]}),`
`,e.jsx(n.p,{children:"Its width is automatic, relative to its content and is not adjustable."}),`
`,e.jsx(r,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Breadcrumb"})," has more than 4 links visible, an ellipsis is displayed as a replacement for the middle link."]}),`
`,e.jsx(n.p,{children:"A click on the ellipsis will expand all previously hidden links inline, the collapsed state can't be redone afterward."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Breadcrumb"})," links are kept inline, even on mobile viewports."]}),`
`,e.jsx(r,{label:"Navigation",level:2}),`
`,e.jsx(r,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["All links within the ",e.jsx(n.strong,{children:"Breadcrumb"})," component are focusable, following the reading order. The last item, which represents the current page, is static text and does not receive focus."]}),`
`,e.jsx(r,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(t,{children:"Tab"})," moves focus through each link in the ",e.jsx(n.strong,{children:"Breadcrumb"})," trail"]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(t,{children:"Enter"})," while a link is focused navigates to the corresponding page"]}),`
`,e.jsxs(n.li,{children:["When an ellipsis (...) appears due to a long ",e.jsx(n.strong,{children:"Breadcrumb"})," trail (more than 4 elements), it behaves as a link:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(t,{children:"Enter"})," expands the full ",e.jsx(n.strong,{children:"Breadcrumb"})," list"]}),`
`,e.jsxs(n.li,{children:["Once expanded, additional link become accessible via ",e.jsx(t,{children:"Tab"})," navigation"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(r,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["This component complies with the ",e.jsx(a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/",children:"Breadcrumb WAI-ARIA design pattern"}),"."]}),`
`,e.jsx(r,{label:"Identifying the Breadcrumb with aria-label",level:3}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Breadcrumbs"})," are a form of navigation, but they serve a specific purpose distinct from primary navigation menus. To ensure they are correctly recognized, an ",e.jsx(a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label",children:"aria-label"})," should be added to explicitly identify them."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Breadcrumb Links"})," follow the same accessibility guidelines as a standard ",e.jsx(o,{kind:d.link,story:c.documentation,children:"Link"}),"."]}),`
`,e.jsx(s,{of:j,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(p,{name:u.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the link, the label of the first link, the list and the number of item."]})]})}function le(i={}){const{wrapper:n}={...m(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(h,{...i})}):h(i)}export{le as default};
