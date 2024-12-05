import{j as e}from"./jsx-runtime-Cz980c3e.js";import{u as a}from"./index-C2TcKet0.js";import{M as l,C as c}from"./index-Nkgk7YEz.js";import{B as o,O as m}from"./breadcrumb.stories-D1IjC8dh.js";import{B as d}from"./Banner-DJBI_cBG.js";import{I as p,A as h,B as x}from"./IdentityCard-C7PlZNnd.js";import{H as t}from"./Heading-DYcKlEuJ.js";import{S as s}from"./StorybookLink-CNJXR0hy.js";import"./iframe-COPR_OVU.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./controls-D697y8_r.js";import"./index-CveiHl7W.js";import"./index-BvZXb4_Z.js";function r(i){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o,name:"Documentation"}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A list of ",e.jsx(s,{kind:"ODS Components/Link",label:"Links",story:"Documentation"})," showing the current page location in the navigational hierarchy."]})}),`
`,e.jsx(c,{of:m,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(p,{aliases:["Breadcrumb trail"],atomicType:h.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-22762",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/breadcrumb",name:"Breadcrumb",relatedComponents:[{name:"Icon"},{name:"Link"},{name:"Text"}],children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Breadcrumb"}),` is used to define the user's position in a site hierarchy, it can also be useful for a finer navigation in
an inner application.`]})}),`
`,e.jsx(t,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/breadcrumb/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Page link"})," (as Home ",e.jsx(s,{kind:"ODS Components/Icon",label:"Icon",story:"Documentation"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Page link"}),": Directs users to the parent-level page."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Separator"}),": Element between each page."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Active page"})," (Non-clickable): Indicate the current page."]}),`
`]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsx(n.p,{children:"It has several usage :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displaying sub-pages of a site structure"}),`
`,e.jsx(n.li,{children:"Show a step progress of a process"}),`
`,e.jsx(n.li,{children:"Simplify site structure navigation in a quicker way"}),`
`]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:["- Use Breadcrumb for main page navigation","- Use nested Breadcrumbs",e.jsxs(n.span,{children:["- Add external ",e.jsx(s,{kind:"ODS Components/Link",label:"Link",story:"Documentation"})," in the component"]}),"- Put more than 4 imbrications inside a Breadcrumb, as the structure will be too complex"],dos:[e.jsxs(n.span,{children:["- The first Breadcrumb element has to be a ",e.jsx(s,{kind:"ODS Components/Link",label:"Link",story:"Documentation"})," to its preferential home page (with an ",e.jsx(s,{kind:"ODS Components/Icon",label:"Icon",story:"Documentation"}),', or with "Home" ',e.jsx(s,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})]}),"- Inherit page structure logic inside the Breadcrumb construction"]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Breadcrumb"})," is used at the top of a web page, preferably start-aligned."]}),`
`,e.jsx(n.p,{children:"Its width is automatic, relative to its content and is not adjustable."}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Breadcrumb"})," has more than 4 ",e.jsx(s,{kind:"ODS Components/Link",label:"Link",story:"Documentation"})," visible, an ellipsis is displayed as a replacement for the middle ",e.jsx(s,{kind:"ODS Components/Link",label:"Link",story:"Documentation"}),"."]}),`
`,e.jsxs(n.p,{children:["A click on the ellipsis will expanded all previously hidden ",e.jsx(s,{kind:"ODS Components/Link",label:"Link",story:"Documentation"})," inline, the collapsed state can't be redone afterwards."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Breadcrumb"})," ",e.jsx(s,{kind:"ODS Components/Link",label:"Link",story:"Documentation"})," are kept inline, even on mobile viewports."]}),`
`,e.jsxs(n.p,{children:["Clicking or pressing ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})," key on ",e.jsx(n.strong,{children:"Breadcrumb"})," item triggers an event."]}),`
`,e.jsxs(n.p,{children:["Same actions on ",e.jsx(n.strong,{children:"Breadcrumb"})," collapsed item will trigger an event."]}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["All ",e.jsx(s,{kind:"ODS Components/Link",label:"Links",story:"Documentation"})," are accessible through tabulation."]})]})}function P(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{P as default};
