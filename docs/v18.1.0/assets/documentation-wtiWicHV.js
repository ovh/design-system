import{j as e}from"./jsx-runtime-vK1CujOl.js";import{u as a}from"./index-CB7mz5IJ.js";import{M as l,C as c}from"./index-Bd2Jnm8T.js";import{B as o,O as d}from"./button.stories-CDmkwNpC.js";import{B as h}from"./Banner-D69sr9PT.js";import{I as m,A as p,B as u}from"./IdentityCard-DJgK2WbX.js";import{H as t}from"./Heading-oJ6nNH90.js";import{S as i}from"./StorybookLink-D-3rjE8q.js";import"./iframe-Lgv0C8F1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-BNPjhb5w.js";import"./lit-html-D-ZEPr28.js";import"./controls-DpsgTNdU.js";import"./index-CONup0N6.js";function r(s){const n={code:"code",em:"em",img:"img",li:"li",p:"p",span:"span",strong:"strong",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o,name:"Documentation"}),`
`,e.jsx(h,{of:o}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Button"})," component aims to initiate an action. Its ",e.jsx(i,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," indicates the related intent, its aspect describes the importance and influence level."]})}),`
`,e.jsx(c,{of:d,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsxs(m,{aliases:["Call To Action","CTA"],atomicType:p.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-23353",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/button",name:"Button",relatedComponents:[{name:"Icon"}],children:[e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Buttons"}),` are triggerable elements that are used to set actions. They communicate calls to action to the user and
allow them to interact with pages.`]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Button"}),` labels express explicitly what action will occur when the user interacts with it. Its aspect describes
the importance and influence level.`]}),e.jsx(n.p,{children:"This component exists in many ways : variants, sizes and colors."})]}),`
`,e.jsx(t,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/button/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Buttons"}),` are mainly used for actions, like adding, removing, validating, etc.
They are used to allow users to interact with the page or its content.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Buttons"})," work with other elements on a screen to ",e.jsx(n.strong,{children:"surface the most important actions the user wants to take in that context"}),`.
`,e.jsx(n.strong,{children:"They must respect the proximity law"}),` in order to guide the user on the action to be performed and the expected result.
A `,e.jsx(n.strong,{children:"Button"})," label indicates what happens when the user taps the ",e.jsx(n.strong,{children:"Button"}),", even if it's just to acknowledge something."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Buttons"})," don't usually redirect to an external page. For that, see ",e.jsx(i,{kind:"ODS Components/Link",label:"Link",story:"Documentation"}),"."]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:[e.jsxs(n.span,{children:["- Use Buttons as ",e.jsx(i,{kind:"ODS Components/Link",label:"Link",story:"Documentation"})," (using the ghost variant), prefer using the ",e.jsx(i,{kind:"ODS Components/Link",label:"Link",story:"Documentation"})," component"]}),"- Put two identical Buttons side by side","- Use success/error variants for other needs than validation/cancel"],dos:["- Group a main with a secondary Button for page actions","- At least one primary Button must be present per page in order to present the main action"]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Button"})," component has an automatic width regarding its context."]}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.strong,{children:"Button"})," content is centered in its container."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Button"})," can be hovered, focused, clicked and disabled."]}),`
`,e.jsx(n.p,{children:'When in disabled state, it is impossible to focus or click on it. A "disabled" cursor is shown when hovering the disabled component.'}),`
`,e.jsxs(n.p,{children:["An ",e.jsx(i,{kind:"ODS Components/Icon",label:"Icon",story:"Documentation"})," can be displayed on the left or right of the ",e.jsx(n.strong,{children:"Button"})," label content."]}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsx(t,{label:"Color",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primary"})," ",e.jsx(n.em,{children:"(default)"}),": used for main usage of ",e.jsx(n.strong,{children:"Buttons"}),", and linked to the brand graphical charter."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Critical"}),": alerts users to high-priority actions or warnings that require immediate attention."]}),`
`]}),`
`,e.jsx(t,{label:"Variant",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default"}),": primary actions, featuring a full background with a matching border to signify important emphasis."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Outline"}),": secondary actions, featuring a transparent background with a visible border to signify less emphasis than primary buttons."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ghost"}),": tertiary or less prominent actions, blending into the background with minimal styling until hovered or focused to reduce visual dominance."]}),`
`]}),`
`,e.jsx(t,{label:"Size",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Small"}),": actions in compact spaces or within densely packed interfaces, providing a more subtle and space-efficient option."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Medium"})," ",e.jsx(n.em,{children:"(default)"}),": main usage of ",e.jsx(n.strong,{children:"Buttons"}),", when they can be displayed in an important manner."]}),`
`]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["When focusing the ",e.jsx(n.strong,{children:"Button"}),", pressing ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})," keys will trigger it."]})]})}function M(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{M as default};
