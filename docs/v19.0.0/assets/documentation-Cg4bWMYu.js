import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as r}from"./index-DQB45XCM.js";import{M as a,C as l}from"./index-CTRIvuAa.js";import{L as i,O as c}from"./link.stories-DJ1V1M-w.js";import{B as d}from"./Banner-DKEGGZmZ.js";import{I as h,A as p,B as m}from"./IdentityCard-DMALWF_P.js";import{H as t}from"./Heading-BKRI_kjA.js";import"./StorybookLink-DMr2bWgk.js";import"./index-D_CmzhJ4.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./icon-name-BOrBmUKT.js";import"./index-CkQHsVsO.js";import"./Link-Ba-_E0nD.js";import"./element-BmbJTp3e.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function o(s){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i,name:"Documentation"}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Link"})," is a component that enables redirection to a new page, section, website or other resources:"]})}),`
`,e.jsx(l,{of:c,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsxs(h,{aliases:["Hyperlink","Anchor"],atomicType:p.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=44-6837",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/link",name:"Link",children:[e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Link"})," allows users to move through a website by redirecting them to a different page or section."]}),e.jsxs(n.p,{children:["It can also enables ",e.jsx(n.strong,{children:"Links"})," to other resources."]})]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Links"})," are used as navigational elements."]}),`
`,e.jsxs(n.p,{children:["They are also used when linking to another document. In that case, ",e.jsx(n.strong,{children:"Link"})," description should contain type and size of document."]}),`
`,e.jsx(t,{label:"When to use a link or a button?",level:3}),`
`,e.jsx(n.p,{children:"Links and buttons serve different purposes, and using them correctly improves both accessibility and user experience."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use a link when the action navigates the user to another page or resource, either within your application or to an external site"}),`
`,e.jsx(n.li,{children:"Use a button when the action performs a function or triggers a behavior on the current page, like submitting a form, opening a modal, or toggling a menu."}),`
`]}),`
`,e.jsx(n.p,{children:"A button should not mimic a link. It can lead to confusion for users and assistive technologies, as buttons are not typically expected to handle navigation."}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(m,{donts:[`- Don't use a link to perform actions like "save", "submit", or "cancel", use a button for that`,`- Don't use vague text like "Click here" or "Read more", it provides no context for screen readers or SEO`,"- Don't write entire sentences as link label","- Don't apply different colors to a link and its adjacent icon. They should appear as one cohesive element","- Don't open a link in a new tab or window unless it's clearly indicated and necessary (e.g., for external sites)",`- Don't forget to set appropriate rel attributes (e.g., rel="noopener noreferrer") for external links opened in new tabs`],dos:["- Use a link to navigate to another page, section, or external website, not to trigger actions","- Make link labels clear and descriptive, so users understand where the link will take them","- Keep link labels short ideally 1–4 words",'- Indicate when a link leads to a document or file by including its type and size (e.g., "Annual Report (PDF, 1.2MB)")',"- Optionally include an icon, but ensure it's styled consistently with the link label"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/link/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Link"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Label"})," - optional"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon"})," - optional (left or right)"]}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Link"})," can stand alone on a page, or it can be placed within a sentence or a paragraph."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Link"})," component can be hovered, focused, clicked and disabled."]}),`
`,e.jsxs(n.p,{children:["When disabled, users cannot focus nor click on the ",e.jsx(n.strong,{children:"Link"}),"."]}),`
`,e.jsxs(n.p,{children:["On hover, ",e.jsx(n.strong,{children:"Link"})," is underlined and its color changes."]}),`
`,e.jsxs(n.p,{children:["An optional icon can be displayed on the left or right of the ",e.jsx(n.strong,{children:"Link"})," label content. Icon-only ",e.jsx(n.strong,{children:"Link"})," also exists but it must meet accessibility requirements. See Accessibility section below."]}),`
`,e.jsxs(n.p,{children:["When users clicks anywhere on the ",e.jsx(n.strong,{children:"Link"}),", even its optional icon, they are redirected to the expected page or section."]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Link"})," component can receive keyboard focus and is part of the standard tab order."]}),`
`,e.jsx(t,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Enter"})," while a ",e.jsx(n.strong,{children:"Link"})," is focused activates it, navigating to the associated destination."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Tab"})," moves focus to the previous interactive element."]}),`
`,e.jsxs(n.p,{children:["If a ",e.jsx(n.strong,{children:"Link"})," opens in a new tab, focus remains on the original page unless otherwise specified."]})]})}function F(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{F as default};
