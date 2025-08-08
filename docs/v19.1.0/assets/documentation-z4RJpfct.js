import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as d}from"./index-DQB45XCM.js";import{a as o,o as r}from"./ods-react61-BFiU7C5S.js";import{M as h,C as i}from"./index-DQDMPrC3.js";import{E as a}from"./ExternalLink-F7ndcp9T.js";import{B as l,O as u,A as p,a as x,b as m}from"./button.stories-Ba4sDe-M.js";import{B as j}from"./Banner-D5YsTkFA.js";import{I as g,B as b}from"./IdentityCard-C39Eam7s.js";import{H as t}from"./Heading-BTR1K1mm.js";import{S as f}from"./StorybookLink-BJoxMnxL.js";import{S as y,R as v}from"./meta-Dkilg8AS.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-llaHorau.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Link-DTswNFmS-CEk9YBDP.js";import"./Button-Cu9Xbu09.js";import"./index-CkQHsVsO.js";import"./Spinner-BdLZU4dE.js";import"./colors-DSObuHxd.js";import"./icon-name-CL_C5kfn.js";import"./controls-BtiQQn1l.js";import"./source-d0g_Nd0q.js";import"./Divider-DwZugXnI-RR--JbES.js";import"./ods-react222-B9lkGKUh.js";function c(s){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l,name:"Documentation"}),`
`,e.jsx(j,{of:l}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Button"})," component aims to initiate an action. Its text indicates the related intent, its aspect describes the importance and influence level."]})}),`
`,e.jsx(i,{of:u,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsxs(g,{aliases:["Call To Action","CTA"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-23353",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/button",name:"Button",children:[e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Buttons"}),` are triggerable elements that are used to set actions. They communicate calls to action to the user and
allow them to interact with pages.`]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Button"}),` labels express explicitly what action will occur when the user interacts with it. Its aspect describes
the importance and influence level.`]}),e.jsx(n.p,{children:"This component exists in many ways : variants, sizes and colors."})]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Buttons"}),` are mainly used for actions, like adding, removing, validating, etc.
They are used to allow users to interact with the page or its content.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Buttons"}),` work with other elements on a screen to surface the most important actions the user wants to take in that context.
They must respect the proximity law in order to guide the user on the action to be performed and the expected result.
A `,e.jsx(n.strong,{children:"Button"})," label indicates what happens when the user taps the ",e.jsx(n.strong,{children:"Button"}),", even if it's just to acknowledge something."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Buttons"})," don't usually redirect to an external page. For that, see ",e.jsx(f,{kind:v.link,story:y.documentation,children:"Link"}),"."]}),`
`,e.jsx(t,{label:"When to use a link or a button?",level:3}),`
`,e.jsx(n.p,{children:"Links and buttons serve different purposes, and using them correctly improves both accessibility and user experience:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use a link when the action navigates the user to another page or resource, either within your application or to an external site"}),`
`,e.jsx(n.li,{children:"Use a button when the action performs a function or triggers a behavior on the current page, like submitting a form, opening a modal, or toggling a menu"}),`
`]}),`
`,e.jsx(n.p,{children:"A button should not mimic a link. It can lead to confusion for users and assistive technologies, as button are not typically expected to handle navigation."}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(b,{donts:["- Don't use a Button as a link, use the Link component instead","- Don't show more than one primary button per view","- Don't place two identical Buttons side by side (same label and style)","- Don't use standalone decorative icons in Buttons unless the action is universally understood","- Don't use a ghost Button as the main call to action","- Don't overload a Button with too much text or visual clutter"],dos:["- Use a primary Button to highlight the main action on a page or in a form",'- Pair an outline Button for complementary actions (e.g., "Cancel", "Learn more")',"- Maintain a clear visual hierarchy between Button types (primary, outline, ghost)",'- Use icons when they add clarity to the action (e.g., arrow for "Next", trash for "Delete")',"- Choose the appropriate size based on context"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/button/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Button"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon"})," - optional (left or right)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Label"})," - optional"]}),`
`]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Button"})," can be hovered, focused, clicked and disabled."]}),`
`,e.jsx(n.p,{children:'When in disabled state, it is impossible to focus or click on it. A "disabled" cursor is shown when hovering the disabled component.'}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Button"})," supports a loading state."]}),`
`,e.jsxs(n.p,{children:["An icon can be displayed on the left or right of the ",e.jsx(n.strong,{children:"Button"})," label. Icon-only ",e.jsx(n.strong,{children:"Button"})," also exists but it must meet accessibility requirements. See Accessibility section below."]}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsx(t,{label:"Color",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primary"})," ",e.jsx(n.em,{children:"(default)"}),": used for main usage of ",e.jsx(n.strong,{children:"Buttons"}),", and linked to the brand graphical charter."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Critical"}),": alerts users to high-priority actions or warnings that require immediate attention."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Neutral"}),": secondary actions (such as clearing field or close button)."]}),`
`]}),`
`,e.jsx(t,{label:"Variant",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default"}),": primary actions, featuring a full background with a matching border to signify important emphasis."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Outline"}),": secondary actions, featuring a transparent background with a visible border to signify less emphasis than primary buttons."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ghost"}),": tertiary or less prominent actions, blending into the background with minimal styling until hovered or focused to reduce visual dominance."]}),`
`]}),`
`,e.jsx(t,{label:"Size",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Extra Small"}),": actions in tiny spaces, such as action button in fields or compact rows in a table."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Small"}),": actions in compact spaces or within densely packed interfaces, providing a more subtle and space-efficient option."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Medium"})," ",e.jsx(n.em,{children:"(default)"}),": main usage of ",e.jsx(n.strong,{children:"Buttons"}),", when they can be displayed in an important manner."]}),`
`]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Button"})," component can receive keyboard focus and is part of the standard tab order."]}),`
`,e.jsxs(n.p,{children:["If the ",e.jsx(n.strong,{children:"Button"})," is disabled, it does not receive focus and cannot be activated via keyboard."]}),`
`,e.jsx(t,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})," while the ",e.jsx(n.strong,{children:"Button"})," is focused activates it, triggering its action."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Alt"})," moves focus to the previous interactive element."]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["This component complies with the ",e.jsx(a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/button/",children:"Button WAI-ARIA design pattern"}),"."]}),`
`,e.jsx(t,{label:"Always provide an explicit text content",level:3}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Button"})," should always have a clear and descriptive text content to indicate their purpose."]}),`
`,e.jsx(i,{of:p,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(o,{name:r.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the text content."]}),`
`,e.jsx(t,{label:"Icon Button",level:3}),`
`,e.jsxs(n.p,{children:["If a ",e.jsx(n.strong,{children:"Button"})," contains only an icon, it must include an ",e.jsx(a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label",children:"aria-label"})," to provide context."]}),`
`,e.jsx(i,{of:x,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(o,{name:r.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label."]}),`
`,e.jsx(t,{label:"Using aria-labelledby for additional context",level:3}),`
`,e.jsxs(n.p,{children:["When a ",e.jsx(n.strong,{children:"Button"})," is associated with an existing label, content is read by screen readers when the ",e.jsx(n.strong,{children:"Button"})," receives focus."]}),`
`,e.jsx(i,{of:m,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(o,{name:r.circleCheck,style:{color:"var(--ods-color-success-500)"}})," When the ",e.jsx(n.strong,{children:"Button"})," is focused, the screen reader will announce the linked label."]})]})}function J(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(c,{...s})}):c(s)}export{J as default};
