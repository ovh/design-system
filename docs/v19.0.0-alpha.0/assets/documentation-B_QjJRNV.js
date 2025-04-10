import{j as n}from"./jsx-runtime-BSm7YJ_y.js";import{useMDXComponents as c}from"./index-CUkz9CBV.js";import{M as d,C as h}from"./index-Ad1vjMe7.js";import{B as a,O as m}from"./button.stories-CrSlCBy9.js";import{B as u}from"./Banner-p8uZ_3sx.js";import{I as p,A as x,B as j}from"./IdentityCard-_ftJ8uhy.js";import{H as t}from"./Heading-RrL0wZ2g.js";import{S as i,a as o,O as r}from"./StorybookLink-CSvrJ6Z1.js";import"./index-E9JSHJbc.js";import"./iframe-ZxD9YLZr.js";import"./index-DOJIDNlS.js";import"./index-DZAg5o-f.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./OdsButton-Do9GSXD9.js";import"./controls-CQ2mnOwv.js";import"./OdsSpinner-DbFadktS.js";import"./ods-react-CYmC8DRO.js";function l(s){const e={code:"code",em:"em",img:"img",li:"li",p:"p",span:"span",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:a,name:"Documentation"}),`
`,n.jsx(u,{of:a}),`
`,n.jsx(e.p,{children:n.jsxs(e.em,{children:["A ",n.jsx(e.strong,{children:"Button"})," component aims to initiate an action. Its ",n.jsx(i,{kind:r.text,story:o.documentation,children:"Text"})," indicates the related intent, its aspect describes the importance and influence level."]})}),`
`,n.jsx(h,{of:m,sourceState:"none"}),`
`,n.jsx(t,{label:"Overview",level:2}),`
`,n.jsxs(p,{aliases:["Call To Action","CTA"],atomicType:x.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-23353",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/button",name:"Button",relatedComponents:[{name:"Icon"}],children:[n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Buttons"}),` are triggerable elements that are used to set actions. They communicate calls to action to the user and
allow them to interact with pages.`]}),n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Button"}),` labels express explicitly what action will occur when the user interacts with it. Its aspect describes
the importance and influence level.`]}),n.jsx(e.p,{children:"This component exists in many ways : variants, sizes and colors."})]}),`
`,n.jsx(t,{label:"Anatomy",level:2}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"components/button/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,n.jsx(t,{label:"Usage",level:2}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Buttons"}),` are mainly used for actions, like adding, removing, validating, etc.
They are used to allow users to interact with the page or its content.`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Buttons"})," work with other elements on a screen to ",n.jsx(e.strong,{children:"surface the most important actions the user wants to take in that context"}),`.
`,n.jsx(e.strong,{children:"They must respect the proximity law"}),` in order to guide the user on the action to be performed and the expected result.
A `,n.jsx(e.strong,{children:"Button"})," label indicates what happens when the user taps the ",n.jsx(e.strong,{children:"Button"}),", even if it's just to acknowledge something."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Buttons"})," don't usually redirect to an external page. For that, see ",n.jsx(i,{kind:r.link,story:o.documentation,children:"Link"}),"."]}),`
`,n.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,n.jsx(j,{donts:[n.jsxs(e.span,{children:["- Use Buttons as ",n.jsx(i,{kind:r.link,story:o.documentation,children:"Link"})," (using the ghost variant), prefer using the ",n.jsx(i,{kind:r.link,story:o.documentation,children:"Link"})," component"]}),"- Put two identical Buttons side by side","- Use success/error variants for other needs than validation/cancel"],dos:["- Group a main with a secondary Button for page actions","- At least one primary Button must be present per page in order to present the main action"]}),`
`,n.jsx(t,{label:"Placement",level:2}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.strong,{children:"Button"})," component has an automatic width regarding its context."]}),`
`,n.jsxs(e.p,{children:["By default, the ",n.jsx(e.strong,{children:"Button"})," content is centered in its container."]}),`
`,n.jsx(t,{label:"Behavior",level:2}),`
`,n.jsxs(e.p,{children:["A ",n.jsx(e.strong,{children:"Button"})," can be hovered, focused, clicked and disabled."]}),`
`,n.jsx(e.p,{children:'When in disabled state, it is impossible to focus or click on it. A "disabled" cursor is shown when hovering the disabled component.'}),`
`,n.jsxs(e.p,{children:["An ",n.jsx(i,{kind:r.icon,story:o.documentation,children:"Icon"})," can be displayed on the left or right of the ",n.jsx(e.strong,{children:"Button"})," label content."]}),`
`,n.jsx(t,{label:"Variation",level:2}),`
`,n.jsx(t,{label:"Color",level:3}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Primary"})," ",n.jsx(e.em,{children:"(default)"}),": used for main usage of ",n.jsx(e.strong,{children:"Buttons"}),", and linked to the brand graphical charter."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Critical"}),": alerts users to high-priority actions or warnings that require immediate attention."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Neutral"}),": secondary actions (such as clearing field or close button)."]}),`
`]}),`
`,n.jsx(t,{label:"Variant",level:3}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Default"}),": primary actions, featuring a full background with a matching border to signify important emphasis."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Outline"}),": secondary actions, featuring a transparent background with a visible border to signify less emphasis than primary buttons."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Ghost"}),": tertiary or less prominent actions, blending into the background with minimal styling until hovered or focused to reduce visual dominance."]}),`
`]}),`
`,n.jsx(t,{label:"Size",level:3}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Extra Small"}),": actions in tiny spaces, such as action button in fields or compact rows in a table."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Small"}),": actions in compact spaces or within densely packed interfaces, providing a more subtle and space-efficient option."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Medium"})," ",n.jsx(e.em,{children:"(default)"}),": main usage of ",n.jsx(e.strong,{children:"Buttons"}),", when they can be displayed in an important manner."]}),`
`]}),`
`,n.jsx(t,{label:"Accessibility",level:2}),`
`,n.jsxs(e.p,{children:["When focusing the ",n.jsx(e.strong,{children:"Button"}),", pressing ",n.jsx(e.code,{children:"Enter"})," or ",n.jsx(e.code,{children:"Space"})," keys will trigger it."]})]})}function E(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(l,{...s})}):l(s)}export{E as default};
