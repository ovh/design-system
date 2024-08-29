import{j as n}from"./jsx-runtime-Dn0LW--f.js";import{u as r}from"./index-DeyDdHvX.js";import{M as a,C as c,d as s}from"./index-BM3JsZOq.js";import{B as d}from"./banner-DPlTyHjv.js";import{B as i,O as l}from"./button.stories-BY8BOuii.js";import{I as h,A as m}from"./identity-card-CwN41yUF.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-DryTTbHl.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-LnXcgd5r.js";import"./chunk-FAE4I7JY-v0Th3BC0.js";function o(t){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:i,name:"Documentation"}),`
`,n.jsx(d,{of:i}),`
`,n.jsx(e.p,{children:n.jsxs(e.em,{children:["A ",n.jsx(e.strong,{children:"Button"})," component aims to initiate an action. Its ",n.jsx(e.a,{href:"?path=/docs/ods-components-text--documentation",children:n.jsx(e.strong,{children:"Text"})})," indicates the related intent, its aspect describes the importance and influence level."]})}),`
`,n.jsx(c,{of:l,sourceState:"none"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs("div",{className:"documentation-overview",children:[n.jsxs("div",{children:[n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Buttons"}),` are triggerable elements that are used to set actions. They communicate calls to action to the user and
allow them to interact with pages.`]}),n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Button"}),` labels express explicitly what action will occur when the user interacts with it. Its aspect describes
the importance and influence level.`]}),n.jsx(e.p,{children:"This component exists in many ways : variants, sizes and colors."})]}),n.jsx(h,{aliases:["Call To Action","CTA"],atomicType:m.atom,className:"documentation-overview__table",figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-23353",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/button",name:"Button",relatedComponents:[{name:"Icon"}]})]}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"components/button/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Buttons"}),` are mainly used for actions, like adding, removing, validating, etc.
They are used to allow users to interact with the page or its content.`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Buttons"})," work with other elements on a screen to ",n.jsx(e.strong,{children:"surface the most important actions the user wants to take in that context"}),`.
`,n.jsx(e.strong,{children:"They must respect the proximity law"}),` in order to guide the user on the action to be performed and the expected result.
A `,n.jsx(e.strong,{children:"Button"})," label indicates what happens when the user taps the ",n.jsx(e.strong,{children:"Button"}),", even if it's just to acknowledge something."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Buttons"})," don't usually redirect to an external page. For that, see ",n.jsx(e.a,{href:"?path=/docs/ods-components-link--documentation",children:n.jsx(e.strong,{children:"Link"})}),"."]}),`
`,n.jsx(e.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,n.jsx(s,{className:"documentation-do-table",children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Group a main with a secondary Button for page actions.                                                                                                                       |
| - At least one primary **Button** must be present per page in order to present the main action.                                                                                |
`}),`
`,n.jsx(s,{className:"documentation-dont-table",children:`
| ❌ Don't                                                                                                                                                                                                           |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                                  |
| - Use **Buttons** as [**Link**](?path=/docs/ods-components-link--documentation) (using the ghost variant), prefer using the [**Link**](?path=/docs/ods-components-link--documentation) component. |
| - Put two identical **Buttons** side by side.                                                                                                                                                                     |
| - Use success/error variants for other needs than validation/cancel.                                                                                                                                              |
`}),`
`,n.jsx(e.h2,{id:"placement",children:"Placement"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.strong,{children:"Button"})," component has an automatic width regarding its context."]}),`
`,n.jsxs(e.p,{children:["By default, the ",n.jsx(e.strong,{children:"Button"})," content is centered in its container."]}),`
`,n.jsx(e.h2,{id:"behavior",children:"Behavior"}),`
`,n.jsxs(e.p,{children:["A ",n.jsx(e.strong,{children:"Button"})," can be hovered, focused, clicked and disabled."]}),`
`,n.jsx(e.p,{children:'When in disabled state, it is impossible to focus or click on it. A "disabled" cursor is shown when hovering the disabled component.'}),`
`,n.jsx(e.h2,{id:"variation",children:"Variation"}),`
`,n.jsx(e.h3,{id:"color",children:"Color"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Primary"})," ",n.jsx(e.em,{children:"(default)"}),": used for main usage of ",n.jsx(e.strong,{children:"Buttons"}),", and linked to the brand graphical charter."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Critical"}),": alerts users to high-priority actions or warnings that require immediate attention."]}),`
`]}),`
`,n.jsx(e.h3,{id:"variant",children:"Variant"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Default"}),": primary actions, featuring a full background with a matching border to signify important emphasis."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Outline"}),": secondary actions, featuring a transparent background with a visible border to signify less emphasis than primary buttons."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Ghost"}),": tertiary or less prominent actions, blending into the background with minimal styling until hovered or focused to reduce visual dominance."]}),`
`]}),`
`,n.jsx(e.h3,{id:"size",children:"Size"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Small"}),": actions in compact spaces or within densely packed interfaces, providing a more subtle and space-efficient option."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Medium"})," ",n.jsx(e.em,{children:"(default)"}),": main usage of ",n.jsx(e.strong,{children:"Buttons"}),", when they can be displayed in an important manner."]}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.p,{children:["When focusing the ",n.jsx(e.strong,{children:"Button"}),", pressing ",n.jsx(e.code,{children:"Enter"})," or ",n.jsx(e.code,{children:"Space"})," keys will trigger it."]})]})}function I(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{I as default};
