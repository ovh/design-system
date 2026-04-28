import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as r}from"./index-ZwkxtaJJ.js";import{M as a}from"./index-CorwBrna.js";import{A as s,O as l}from"./avatar.stories-V6vLuGft.js";import{A as c}from"./Anatomy-DkXJCwiR.js";import{B as m}from"./Banner-BzsM7Ov4.js";import{C as p}from"./Canvas-DmU-XW-X.js";import{B as d}from"./BestPractices-DmW3jiI3.js";import{H as n}from"./Heading-CqLsFmC8.js";import{I as h}from"./IdentityCard-Dz2mtlUf.js";import"./StorybookLink-fxXoIeO7.js";import"./index-jIWwRBLr.js";import"./iframe-CTupHpWb.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CqY9YpN0.js";import"./icon-name-RfJfucZu.js";import"./controls-BtiQQn1l.js";import"./icon-name-BOjNLCTH-CoYid0iC.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./index-CvuQtheM.js";import"./context-Z_Xa7sWf-5kwUyuQy.js";import"./index-D-PjbIVM.js";import"./lz-string-U2heoObX.js";import"./meta-vhIdvDvL.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-DQ5v3p_P.js";import"./tokens-BrWUS-3i.js";import"./divider-color-DMMH0ySn-B7JauIP0.js";import"./colors-C1Wmnk_L-aAAP9SXj.js";import"./Table-Bof_Nsov-CS9ZUwCH.js";import"./ExternalLink-B7meJZZV.js";import"./Link-JvSirtKN-DiqnrgRb.js";import"./Table-BXVk_N0H.js";function o(i){const t={code:"code",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:s,name:"Documentation",tags:["new"]}),`
`,e.jsx(m,{of:s}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:[e.jsx(t.strong,{children:"Avatar"})," is a visual representation of a user or entity, supporting multiple content types such as user images, icons, and user initials."]})}),`
`,e.jsx(p,{of:l,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(h,{aliases:[],figmaLink:"https://www.figma.com/design/mwZtfuQ9nzv6fY0dfez4NZ/-Q3-2026--IA-element?node-id=18697-768",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/avatar",name:"Avatar",startingVersion:19,children:e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Avatar"})," component is a visual representation of a user or entity, supporting multiple content types such as user images, icons, and user initials."]})}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Avatar"})," component is commonly used to represent users, bots, or systems in various applications, such as chat interfaces, user profiles, or notification systems."]}),`
`,e.jsx(t.p,{children:"It is commonly used for:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"User profiles"}),": display a user's avatar next to their name and other profile information"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Chat interfaces"}),": use avatars to represent users or bots in a conversation"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Notification systems"}),": display an avatar for the sender or recipient of a notification"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Team or member lists"}),": show avatars for each team member or user in a list"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Comment sections"}),": display an avatar for each commenter to help identify the author of a comment"]}),`
`]}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(d,{donts:["- Don't use the Avatar component as a decorative element or without a clear purpose","- Don't overload the Avatar component with too much information or complex graphics","- Don't use an Avatar that is too small or too large for the context, which can affect readability and recognition","- Don't forget to provide a fallback logic for cases where the image fails to load or no name is provided (i.e. initials, icons)"],dos:["- Use the Avatar component to represent a user or entity in a concise and recognizable way","- Choose the appropriate content type (image, icon, or initials) based on the context and available information","- Use the Avatar component with sufficient contrast or color scheme"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(c,{src:"components/avatar/anatomy.png"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Avatar"})}),`
`]}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Avatar"})," component is a static display-only element, providing a visual representation of a user or entity without any interactive functionality."]}),`
`,e.jsx(t.p,{children:"The component follows a content priority chain:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["If ",e.jsx(t.strong,{children:"children"})," are provided, they are displayed (initials, custom icon, etc.)"]}),`
`,e.jsxs(t.li,{children:["If a ",e.jsx(t.strong,{children:"src"})," URL is provided, an image is rendered"]}),`
`,e.jsxs(t.li,{children:["If the image fails to load (error), the ",e.jsx(t.strong,{children:"fallback"})," content is displayed"]}),`
`,e.jsx(t.li,{children:"If no fallback is provided, a default user icon is shown"}),`
`]}),`
`,e.jsx(n,{label:"Navigation",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Avatar"})," component is non-interactive and does not receive keyboard focus when used alone."]}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsx(t.p,{children:"When used inside interactive contexts (e.g. next to a user name link or inside a button), ensure the parent element provides the necessary accessible label."}),`
`,e.jsxs(t.p,{children:["When the ",e.jsx(t.strong,{children:"Avatar"})," displays an image, the ",e.jsx(t.code,{children:"alt"})," attribute is empty by default since the avatar is typically decorative. If the avatar conveys meaningful information, wrap it in an element with an appropriate ",e.jsx(t.code,{children:"aria-label"}),"."]})]})}function G(i={}){const{wrapper:t}={...r(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(o,{...i})}):o(i)}export{G as default};
