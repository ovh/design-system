import{j as n}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as l}from"./index-DQB45XCM.js";import{M as d,C as h}from"./index-BlaLg9GY.js";import{L as a,O as p}from"./link.stories-DVOuFm1k.js";import{B as m}from"./Banner-CANn_RZm.js";import{I as x,A as j,B as u}from"./IdentityCard-DkdK44g3.js";import{H as s}from"./Heading-6Mfikk-c.js";import{S as i,a as t,O as r}from"./StorybookLink-Dek5KO7Z.js";import"./index-D_CmzhJ4.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./icon-name-jL3axqAU.js";import"./index-CkQHsVsO.js";import"./Link-CnzBxqpY.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-lH7YZu4p.js";import"./ods-react49-9IXPzWp7.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-Ck4D7Gly-DoENOEBg.js";function c(o){const e={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",...l(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:a,name:"Documentation"}),`
`,n.jsx(m,{of:a}),`
`,n.jsx(e.p,{children:n.jsxs(e.em,{children:[n.jsx(e.strong,{children:"Link"})," is a component that enables redirection to a new page, section, website or other resources:"]})}),`
`,n.jsx(h,{of:p,sourceState:"none"}),`
`,n.jsx(s,{label:"Overview",level:2}),`
`,n.jsxs(x,{aliases:["Hyperlink","Anchor"],atomicType:j.quark,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=44-6837",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/link",name:"Link",relatedComponents:[{name:"Icon"}],children:[n.jsxs(e.p,{children:["A ",n.jsx(e.strong,{children:"Link"})," allows users to move through a website by redirecting them to a different page or section."]}),n.jsxs(e.p,{children:["It can also enables ",n.jsx(e.strong,{children:"Links"})," to other resources."]})]}),`
`,n.jsx(s,{label:"Anatomy",level:2}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"components/link/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Link text"}),": Communicates what is being linked to."]}),`
`,n.jsxs(e.li,{children:[n.jsx(i,{kind:r.icon,story:t.documentation,children:"Icon"})," (optional): Indicates the destination or type of content being."]}),`
`]}),`
`,n.jsx(s,{label:"Usage",level:2}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Links"})," are used as navigational elements."]}),`
`,n.jsxs(e.p,{children:["They are also used when linking to another document. In that case, ",n.jsx(e.strong,{children:"Link"})," description should contain type and size of document."]}),`
`,n.jsx(s,{label:"When to use a Link or a Button",level:3}),`
`,n.jsx(e.p,{children:"They have different purposes so, make sure you are accurately using them."}),`
`,n.jsxs(e.p,{children:[n.jsx(i,{kind:r.button,story:t.documentation,children:"Button"})," is used for actions while ",n.jsx(e.strong,{children:"Link"})," is used for navigation."]}),`
`,n.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,n.jsx(u,{donts:[n.jsxs(e.span,{children:["- Use a Link as a ",n.jsx(i,{kind:r.button,story:t.documentation,children:"Button"})," for actions such as 'save', 'cancel' or 'submit'"]}),'- Use "Click Here" or "Here" as description for a Link',"- Write a full long sentence as Link description",n.jsxs(e.span,{children:["- Use different color for Link and the optional ",n.jsx(i,{kind:r.icon,story:t.documentation,children:"Icon"})," when you add one"]})],dos:["- Use a Link to redirect user to a new page, section or website","- Make a Link description self-explanatory to describe where user will be send after following this Link","- Write short key words as Link description","- Ensure users are aware of a Link containing a document by providing its type and size"]}),`
`,n.jsx(s,{label:"Placement",level:2}),`
`,n.jsxs(e.p,{children:["A ",n.jsx(e.strong,{children:"Link"})," can stand alone on a page, or it can be placed within a sentence or a paragraph."]}),`
`,n.jsxs(e.p,{children:["An optional ",n.jsx(i,{kind:r.icon,story:t.documentation,children:"Icon"})," can be displayed on the left or right of the ",n.jsx(e.strong,{children:"Link"})," label content."]}),`
`,n.jsx(s,{label:"Behavior",level:2}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Link"})," component can be hovered, focused, clicked and disabled."]}),`
`,n.jsxs(e.p,{children:["When disabled, users cannot focus nor click on the ",n.jsx(e.strong,{children:"Link"}),"."]}),`
`,n.jsxs(e.p,{children:["On hover, ",n.jsx(e.strong,{children:"Link"})," is underlined and its color changes."]}),`
`,n.jsxs(e.p,{children:["When users clicks anywhere on the ",n.jsx(e.strong,{children:"Link"}),", even its optional ",n.jsx(i,{kind:r.icon,story:t.documentation,children:"Icon"}),", they are redirected to the expected page or section."]}),`
`,n.jsx(s,{label:"Variation",level:2}),`
`,n.jsx(e.p,{children:"N/A"}),`
`,n.jsx(s,{label:"Accessibility",level:2}),`
`,n.jsxs(e.p,{children:["While ",n.jsx(e.strong,{children:"Link"})," has focus, users can press ",n.jsx(e.code,{children:"Enter"})," key to open it."]})]})}function _(o={}){const{wrapper:e}={...l(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(c,{...o})}):c(o)}export{_ as default};
