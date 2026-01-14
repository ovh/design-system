import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as d}from"./index-ZwkxtaJJ.js";import{a as o,l as r}from"./ods-react64-C395g5lW.js";import{k as a}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as h}from"./index-C3P7rize.js";import{L as l,O as p,A as m,a as x,b as u}from"./link.stories-BCn8emtv.js";import{A as j}from"./Anatomy-DkXJCwiR.js";import{B as g}from"./Banner-pQsjs-k1.js";import{I as b,B as k}from"./IdentityCard-BHvRCB68.js";import{C as t}from"./Canvas-ClwM1ePO.js";import{E as f}from"./ExternalLink-C9tV86xX.js";import{H as s}from"./Heading-DAsItneX.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-B-1i39SD.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./icon-name-BpdEc4-2.js";import"./index-CqY9YpN0.js";import"./Link-C-y4OBrb.js";import"./element-3R7vFkDE.js";import"./controls-BtiQQn1l.js";import"./Table-DVdtSe4m-Co7uf3pc.js";import"./Table-Bq5w2nKq.js";import"./TooltipTrigger-DxEeTVF8-B5Le9OVu.js";import"./ods-react114-5kwUyuQy.js";import"./index-lGh5KcWi.js";import"./lz-string-U2heoObX.js";import"./meta-DxXVpXmq.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-BVzaMHe3.js";import"./tokens-VHDJ0kGa.js";import"./Link-BhqYqKFa-BDwROQOD.js";import"./Divider-DmVNyNnn-DCNXheUh.js";function c(i){const n={code:"code",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l,name:"Documentation"}),`
`,e.jsx(g,{of:l}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Link"})," is a component that enables redirection to a new page, section, website or other resources:"]})}),`
`,e.jsx(t,{of:p,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsxs(b,{aliases:["Hyperlink","Anchor"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=44-6837",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/link",name:"Link",children:[e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Link"})," allows users to move through a website by redirecting them to a different page or section."]}),e.jsxs(n.p,{children:["It can also enables ",e.jsx(n.strong,{children:"Links"})," to other resources."]})]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Links"})," are used as navigational elements."]}),`
`,e.jsxs(n.p,{children:["They are also used when linking to another document. In that case, ",e.jsx(n.strong,{children:"Link"})," description should contain type and size of document."]}),`
`,e.jsx(s,{label:"When to use a link or a button?",level:3}),`
`,e.jsx(n.p,{children:"Links and buttons serve different purposes, and using them correctly improves both accessibility and user experience."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use a link when the action navigates the user to another page or resource, either within your application or to an external site"}),`
`,e.jsx(n.li,{children:"Use a button when the action performs a function or triggers a behavior on the current page, like submitting a form, opening a modal, or toggling a menu."}),`
`]}),`
`,e.jsx(n.p,{children:"A button should not mimic a link. It can lead to confusion for users and assistive technologies, as buttons are not typically expected to handle navigation."}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(k,{donts:[`- Don't use a link to perform actions like "save", "submit", or "cancel", use a button for that`,`- Don't use vague text like "Click here" or "Read more", it provides no context for screen readers or SEO`,"- Don't write entire sentences as link label","- Don't apply different colors to a link and its adjacent icon. They should appear as one cohesive element","- Don't open a link in a new tab or window unless it's clearly indicated and necessary (e.g., for external sites)",`- Don't forget to set appropriate rel attributes (e.g., rel="noopener noreferrer") for external links opened in new tabs`],dos:["- Use a link to navigate to another page, section, or external website, not to trigger actions","- Make link labels clear and descriptive, so users understand where the link will take them","- Keep link labels short ideally 1–4 words",'- Indicate when a link leads to a document or file by including its type and size (e.g., "Annual Report (PDF, 1.2MB)")',"- Optionally include an icon, but ensure it's styled consistently with the link label"]}),`
`,e.jsx(s,{label:"Best Practices in Context",level:3}),`
`,e.jsx(j,{src:"components/link/anatomy.png"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Link"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Label"})," - optional"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon"})," - optional (left or right)"]}),`
`]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Link"})," can stand alone on a page, or it can be placed within a sentence or a paragraph."]}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Link"})," component can be hovered, focused, clicked and disabled."]}),`
`,e.jsxs(n.p,{children:["When disabled, users cannot focus nor click on the ",e.jsx(n.strong,{children:"Link"}),"."]}),`
`,e.jsxs(n.p,{children:["On hover, ",e.jsx(n.strong,{children:"Link"})," is underlined and its color changes."]}),`
`,e.jsxs(n.p,{children:["An optional icon can be displayed on the left or right of the ",e.jsx(n.strong,{children:"Link"})," label content. Icon-only ",e.jsx(n.strong,{children:"Link"})," also exists but it must meet accessibility requirements. See Accessibility section below."]}),`
`,e.jsxs(n.p,{children:["When users clicks anywhere on the ",e.jsx(n.strong,{children:"Link"}),", even its optional icon, they are redirected to the expected page or section."]}),`
`,e.jsx(s,{label:"Navigation",level:2}),`
`,e.jsx(s,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Link"})," component can receive keyboard focus and is part of the standard tab order."]}),`
`,e.jsx(s,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(a,{children:"Enter"})," while a ",e.jsx(n.strong,{children:"Link"})," is focused activates it, navigating to the associated destination."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(a,{children:"Shift"})," + ",e.jsx(a,{children:"Tab"})," moves focus to the previous interactive element."]}),`
`,e.jsxs(n.p,{children:["If a ",e.jsx(n.strong,{children:"Link"})," opens in a new tab, focus remains on the original page unless otherwise specified."]}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["This component complies with the ",e.jsx(f,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/link/",children:"Link WAI-ARIA design pattern"}),"."]}),`
`,e.jsx(s,{label:"Icon-only Link",level:3}),`
`,e.jsxs(n.p,{children:["If a ",e.jsx(n.strong,{children:"Link"})," is represented only by an ",e.jsx(n.strong,{children:"Icon"}),", it must have an explicit accessible label to provide context about its destination or action."]}),`
`,e.jsx(t,{of:m,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(o,{name:r.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the link and its label."]}),`
`,e.jsx(s,{label:"Link opening in a new tab",level:3}),`
`,e.jsxs(n.p,{children:["When a ",e.jsx(n.strong,{children:"Link"})," opens in a new tab (",e.jsx(n.code,{children:'target="_blank"'}),'), users should be informed to avoid confusion. This can be done by adding a visual indicator (e.g., Icon: "external") and using ',e.jsx(n.code,{children:"aria-label"})," to provide context."]}),`
`,e.jsx(t,{of:x,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(o,{name:r.circleCheck,style:{color:"var(--ods-color-success-500)"}})," The screen reader will announce the link, the opening in a new tab behavior and the link label."]}),`
`,e.jsx(s,{label:"Downloadable files",level:3}),`
`,e.jsxs(n.p,{children:["If a ",e.jsx(n.strong,{children:"Link"})," points to a file download, it should include the file type and size information."]}),`
`,e.jsx(t,{of:u,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(o,{name:r.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the link, the link label with the file name, type and size, ensuring users know they are downloading a file."]})]})}function ie(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(c,{...i})}):c(i)}export{ie as default};
