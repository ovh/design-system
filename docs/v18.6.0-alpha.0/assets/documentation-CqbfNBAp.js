import{j as e,M as a}from"./index-CMHv63WF.js";import{u as s}from"./index-CavMhwFB.js";import{D as o,O as l}from"./drawer.stories-CAQ2Vj6e.js";import{B as m}from"./Banner-C-KRFYMc.js";import{I as c,A as d,B as h}from"./IdentityCard-p_hoisJc.js";import{H as n}from"./Heading-Drr0F75o.js";import{S as p,O as x,a as g}from"./StorybookLink-DyXIZpxe.js";import{C as u}from"./CanvasWithoutContext-B0WJ-iLv.js";import{a as j}from"./index-BDosBUxz.js";import"./iframe-CW-8tKo2.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-BLVG44ao.js";import"./ods-drawer2-DKhK7oOX.js";import"./index-DAZhnxgO.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";import"./ods-accordion2-C_uqOg6Y.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-DLluvt0I.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-BAtyPzTJ.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";function r(i){const t={code:"code",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:o,name:"Documentation"}),`
`,e.jsx(m,{of:o}),`
`,e.jsx(t.p,{children:"The Drawer component provides a sliding panel that reveals additional content without navigating away from the current page."}),`
`,e.jsx(u,{of:l,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(c,{aliases:["Sidenav","Panel"],atomicType:d.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/5BA2ZwZaX2bzfiWwTyMpQH/ODS---UI-Kit?node-id=5488-15121&p=f&t=gPfKLQM0iEuF2FXm-0",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/drawer",name:"Drawer",relatedComponents:[]}),`
`,e.jsx(n,{label:"Anatomy",level:2}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"components/drawer/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsx(t.p,{children:"The component is a simple container that wraps its whole content."}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Drawer"})," component is ideal for use cases where content should be revealed in context without navigating to a new page. Common examples include:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Side navigation menus"}),`
`,e.jsx(t.li,{children:"Filters and settings panels"}),`
`,e.jsx(t.li,{children:"Detail views or contextual information"}),`
`]}),`
`,e.jsx(h,{dos:["- Use the Drawer for complementary actions or information that need to stay connected to the current page context","- Ensure the Drawer does not interfere with page content when open","- Allow the Drawer to be dismissed via a clear and accessible trigger","- Customize the width, height, or style to fit your layout and use case"],donts:["- Use the Drawer for displaying purely informational content — prefer a Modal or Message component instead","- Use more than two Drawers on the same page, as it can confuse users","- Use very wide Drawers that obscure the main page content"]}),`
`,e.jsx(n,{label:"Placement",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Drawer"})," can be positioned on any edge of the screen:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Left/Right"}),": Covers 100% of the page height, with a default width of 320px and a maximum width of 100% - 3rem (48px)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Top/Bottom"}),": Covers 100% of the page width, with a default height of 320px and a maximum height of 100vh - 3rem (48px)"]}),`
`]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Drawer"})," is displayed above all page content but is positioned below the Modal in terms of layering, following the z-index hierarchy defined by OVHcloud Design System. This ensures consistent stacking behavior across components."]}),`
`,e.jsxs(t.p,{children:["By default, the OVHcloud Design System does not enforce whether the ",e.jsx(t.strong,{children:"Drawer"})," is fixed or scrollable. Integrators can configure this behavior based on their specific use case and requirements."]}),`
`,e.jsxs(t.p,{children:["Be careful the placement of the drawer can be broken if you create a new ",e.jsx(j,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",label:"stacking context",target:"_blank"}),`.
For example with a transform style or scale.`]}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Drawer"})," supports the following interactions:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Expansion: Triggered by interacting with a designated element, such as a button."}),`
`,e.jsxs(t.li,{children:["Collapsing:",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"By interacting with the same trigger used for expansion"}),`
`,e.jsx(t.li,{children:"By pressing the escape key"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(t.p,{children:["Animation: The ",e.jsx(t.strong,{children:"Drawer"})," slides into view with a smooth animation (default duration: 300ms)."]}),`
`,e.jsx(n,{label:"Variation",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Drawer"})," can slide in from the left, right, top, or bottom, depending on its configuration and the layout of the page."]}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Aria attributes"}),": The ",e.jsx(t.strong,{children:"Drawer"})," reacts to the aria-expanded attribute to indicate its state"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Focus management"}),":",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["When expanded, focus moves inside the ",e.jsx(t.strong,{children:"Drawer"})," and is set to the first focusable element by default"]}),`
`,e.jsx(t.li,{children:"When collapsed, focus returns to the trigger element unless specified otherwise by the integrator"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(t.p,{children:["When ",e.jsx(t.strong,{children:"Drawer"})," is opened :"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Escape"})," key will dismiss it"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Tabulation"})," allows to move forward through any focusable element in the ",e.jsx(t.strong,{children:"Drawer"})," (e.g. action ",e.jsx(p,{kind:x.button,label:"Button",story:g.documentation}),")"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Shift + Tab"})," allows the opposite way to move backward in focusing items"]}),`
`]})]})}function Ue(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(r,{...i})}):r(i)}export{Ue as default};
