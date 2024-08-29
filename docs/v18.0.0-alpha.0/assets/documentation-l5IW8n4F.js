import{j as n}from"./jsx-runtime-3v6rTKkY.js";import{u as c}from"./index-B5y3xRNA.js";import{M as d,C as h,d as r}from"./index-sugWq352.js";import{B as l}from"./banner-BU_1gqe2.js";import{B as o,O as m}from"./button.stories-BaxO6Z1n.js";import{O as s}from"./index-BjLrujv2.js";import{O as i}from"./index-DB8q6ij-.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-Du4-LCNk.js";import"./ods-icon-MrkrUMg1.js";function a(t){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...c(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:o,name:"Documentation"}),`
`,n.jsx(l,{of:o}),`
`,n.jsx(e.p,{children:n.jsxs(e.em,{children:["A ",n.jsx(e.strong,{children:"Button"})," component aims to initiate an action. Its ",n.jsx(e.a,{href:"?path=/docs/ods-components-text--documentation",children:n.jsx(e.strong,{children:"Text"})})," indicates the related intent, its aspect describes the importance and influence level."]})}),`
`,n.jsx(h,{of:m,sourceState:"none"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs("div",{children:[n.jsxs("div",{id:"description",children:[n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Buttons"}),` are triggerable elements that are used to set actions. They communicate calls to action to the user and
allow them to interact with pages.`]}),n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Button"}),` labels express explicitly what action will occur when the user interacts with it. Its aspect describes
the importance and influence level.`]}),n.jsx(e.p,{children:"This component exists in many ways : variants, sizes and colors."})]}),n.jsx("table",{children:n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Name"}),n.jsx("td",{children:n.jsx("strong",{children:"Button"})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Also known as"}),n.jsx("td",{children:n.jsx("em",{children:"Call To Action, CTA"})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Atomic type"}),n.jsx("td",{children:n.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#atoms",children:["Atom",n.jsx(s,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Related component(s)"}),n.jsx("td",{children:n.jsx(e.p,{children:n.jsx(e.a,{href:"?path=/docs/ods-components-icon--documentation",children:n.jsx(e.strong,{children:"Icon"})})})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Links"}),n.jsxs("td",{children:[n.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",n.jsx(s,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),n.jsx("br",{}),n.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/button",children:["Github",n.jsx(s,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
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
`,n.jsx(r,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Group a main with a secondary Button for page actions.                                                                                                                       |
| - At least one primary **Button** must be present per page in order to present the main action.                                                                                |
`}),`
`,n.jsx(r,{children:`
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
`,n.jsxs(e.p,{children:["When focusing the ",n.jsx(e.strong,{children:"Button"}),", pressing ",n.jsx(e.code,{children:"Enter"})," or ",n.jsx(e.code,{children:"Space"})," keys will trigger it."]})]})}function O(t={}){const{wrapper:e}={...c(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{O as default};
