import{j as e,M as a}from"./index-aSJOi-xY.js";import{u as r}from"./index-D_oymSD0.js";import{D as i,O as l}from"./drawer.stories-B8_6d9mZ.js";import{B as c}from"./Banner-DfBQCKAd.js";import{I as d,A as h,B as m}from"./IdentityCard-bFWvbFx8.js";import{H as t}from"./Heading-fUBW5LMg.js";import{S as p,O as x,a as g}from"./StorybookLink-CdkDDCl2.js";import{C as u}from"./CanvasWithoutContext-C-GUXK1d.js";import{a as j}from"./index-DduIf26o.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-B1WyGMUD.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";function o(s){const n={code:"code",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i,name:"Documentation"}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(n.p,{children:"The Drawer component provides a sliding panel that reveals additional content without navigating away from the current page."}),`
`,e.jsx(u,{of:l,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(d,{aliases:["Sidenav","Panel"],atomicType:h.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/5BA2ZwZaX2bzfiWwTyMpQH/ODS---UI-Kit?node-id=5488-15121&p=f&t=gPfKLQM0iEuF2FXm-0",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/drawer",name:"Drawer",relatedComponents:[]}),`
`,e.jsx(t,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/drawer/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsx(n.p,{children:"The component is a simple container that wraps its whole content."}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Drawer"})," component is ideal for use cases where content should be revealed in context without navigating to a new page. Common examples include:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Side navigation menus"}),`
`,e.jsx(n.li,{children:"Filters and settings panels"}),`
`,e.jsx(n.li,{children:"Detail views or contextual information"}),`
`]}),`
`,e.jsx(m,{dos:["- Use the Drawer for complementary actions or information that need to stay connected to the current page context","- Ensure the Drawer does not interfere with page content when open","- Allow the Drawer to be dismissed via a clear and accessible trigger","- Customize the width, height, or style to fit your layout and use case"],donts:["- Use the Drawer for displaying purely informational content — prefer a Modal or Message component instead","- Use more than two Drawers on the same page, as it can confuse users","- Use very wide Drawers that obscure the main page content"]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Drawer"})," can be positioned on any edge of the screen:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Left/Right"}),": Covers 100% of the page height, with a default width of 320px and a maximum width of 100% - 3rem (48px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Top/Bottom"}),": Covers 100% of the page width, with a default height of 320px and a maximum height of 100vh - 3rem (48px)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Drawer"})," is displayed above all page content but is positioned below the Modal in terms of layering, following the z-index hierarchy defined by OVHcloud Design System. This ensures consistent stacking behavior across components."]}),`
`,e.jsxs(n.p,{children:["By default, the OVHcloud Design System does not enforce whether the ",e.jsx(n.strong,{children:"Drawer"})," is fixed or scrollable. Integrators can configure this behavior based on their specific use case and requirements."]}),`
`,e.jsxs(n.p,{children:["Be careful the placement of the drawer can be broken if you create a new ",e.jsx(j,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",label:"stacking context",target:"_blank"}),`.
For example with a transform style or scale.`]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Drawer"})," supports the following interactions:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Expansion: Triggered by interacting with a designated element, such as a button."}),`
`,e.jsxs(n.li,{children:["Collapsing:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"By interacting with the same trigger used for expansion"}),`
`,e.jsx(n.li,{children:"By pressing the escape key"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Animation: The ",e.jsx(n.strong,{children:"Drawer"})," slides into view with a smooth animation (default duration: 300ms)."]}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Drawer"})," can slide in from the left, right, top, or bottom, depending on its configuration and the layout of the page."]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Aria attributes"}),": The ",e.jsx(n.strong,{children:"Drawer"})," reacts to the aria-expanded attribute to indicate its state"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus management"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["When expanded, focus moves inside the ",e.jsx(n.strong,{children:"Drawer"})," and is set to the first focusable element by default"]}),`
`,e.jsx(n.li,{children:"When collapsed, focus returns to the trigger element unless specified otherwise by the integrator"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.strong,{children:"Drawer"})," is opened :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Escape"})," key will dismiss it"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tabulation"})," allows to move forward through any focusable element in the ",e.jsx(n.strong,{children:"Drawer"})," (e.g. action ",e.jsx(p,{kind:x.button,label:"Button",story:g.documentation}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Shift + Tab"})," allows the opposite way to move backward in focusing items"]}),`
`]})]})}function L(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{L as default};
