import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as c}from"./index-DQB45XCM.js";import{M as d,C as m}from"./index-BlaLg9GY.js";import{B as a,O as h}from"./breadcrumb.stories-CkW2i2id.js";import{B as p}from"./Banner-CANn_RZm.js";import{I as x,A as j,B as u}from"./IdentityCard-DkdK44g3.js";import{H as r}from"./Heading-6Mfikk-c.js";import{S as i,a as s,O as t}from"./StorybookLink-Dek5KO7Z.js";import"./index-D_CmzhJ4.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";import"./Link-CnzBxqpY.js";import"./icon-name-jL3axqAU.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-lH7YZu4p.js";import"./ods-react49-9IXPzWp7.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-Ck4D7Gly-DoENOEBg.js";function l(o){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a,name:"Documentation"}),`
`,e.jsx(p,{of:a}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A list of ",e.jsx(i,{kind:t.link,story:s.documentation,children:"Links"})," showing the current page location in the navigational hierarchy."]})}),`
`,e.jsx(m,{of:h,sourceState:"none"}),`
`,e.jsx(r,{label:"Overview",level:2}),`
`,e.jsx(x,{aliases:["Breadcrumb trail"],atomicType:j.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-22762",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/breadcrumb",name:"Breadcrumb",relatedComponents:[{name:"Icon"},{name:"Link"},{name:"Text"}],children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Breadcrumb"}),` is used to define the user's position in a site hierarchy, it can also be useful for a finer navigation in
an inner application.`]})}),`
`,e.jsx(r,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/breadcrumb/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Page link"})," (as Home ",e.jsx(i,{kind:t.icon,story:s.documentation,children:"Icon"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Page link"}),": Directs users to the parent-level page."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Separator"}),": Element between each page."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Active page"})," (Non-clickable): Indicate the current page."]}),`
`]}),`
`,e.jsx(r,{label:"Usage",level:2}),`
`,e.jsx(n.p,{children:"It has several usage :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displaying sub-pages of a site structure"}),`
`,e.jsx(n.li,{children:"Show a step progress of a process"}),`
`,e.jsx(n.li,{children:"Simplify site structure navigation in a quicker way"}),`
`]}),`
`,e.jsx(r,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:["- Use Breadcrumb for main page navigation","- Use nested Breadcrumbs",e.jsxs(n.span,{children:["- Add external ",e.jsx(i,{kind:t.link,story:s.documentation,children:"Link"})," in the component"]}),"- Put more than 4 imbrications inside a Breadcrumb, as the structure will be too complex"],dos:[e.jsxs(n.span,{children:["- The first Breadcrumb element has to be a ",e.jsx(i,{kind:t.link,story:s.documentation,children:"Link"})," to its preferential home page (with an ",e.jsx(i,{kind:t.icon,story:s.documentation,children:"Icon"}),', or with "Home" ',e.jsx(i,{kind:t.text,story:s.documentation,children:"Text"})]}),"- Inherit page structure logic inside the Breadcrumb construction"]}),`
`,e.jsx(r,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Breadcrumb"})," is used at the top of a web page, preferably start-aligned."]}),`
`,e.jsx(n.p,{children:"Its width is automatic, relative to its content and is not adjustable."}),`
`,e.jsx(r,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Breadcrumb"})," has more than 4 ",e.jsx(i,{kind:t.link,story:s.documentation,children:"Link"})," visible, an ellipsis is displayed as a replacement for the middle ",e.jsx(i,{kind:t.link,story:s.documentation,children:"Link"}),"."]}),`
`,e.jsxs(n.p,{children:["A click on the ellipsis will expanded all previously hidden ",e.jsx(i,{kind:t.link,story:s.documentation,children:"Link"})," inline, the collapsed state can't be redone afterwards."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Breadcrumb"})," ",e.jsx(i,{kind:t.link,story:s.documentation,children:"Link"})," are kept inline, even on mobile viewports."]}),`
`,e.jsxs(n.p,{children:["Clicking or pressing ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})," key on ",e.jsx(n.strong,{children:"Breadcrumb"})," item triggers an event."]}),`
`,e.jsxs(n.p,{children:["Same actions on ",e.jsx(n.strong,{children:"Breadcrumb"})," collapsed item will trigger an event."]}),`
`,e.jsx(r,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(r,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["All ",e.jsx(i,{kind:t.link,story:s.documentation,children:"Links"})," are accessible through tabulation."]})]})}function N(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{N as default};
