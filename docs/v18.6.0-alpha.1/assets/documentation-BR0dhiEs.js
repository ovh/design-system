import{j as e,M as p,C as c}from"./index-BCVJDEqf.js";import{u as m}from"./index-_YJSRz3a.js";import{T as o,O as d}from"./tabs.stories-Du5ZAyol.js";import{B as h}from"./Banner-rrMSB4A0.js";import{I as g,A as b,B as x}from"./IdentityCard-CmaN0nrQ.js";import{H as t}from"./Heading-DYNNEBec.js";import{S as i,O as a,a as r}from"./StorybookLink-D-rUt3MS.js";import"./iframe-B5YUgUg3.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-tabs2-ChMEr-fQ.js";import"./index-DAZhnxgO.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";import"./index-BLVG44ao.js";import"./index-CwrMpZKn.js";import"./ods-accordion2-C_uqOg6Y.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-DLluvt0I.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-BXJ8jrhz.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";function l(s){const n={em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",...m(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o,name:"Documentation"}),`
`,e.jsx(h,{of:o}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Tabs"})," are a way of navigating between multiple panels, reducing clutter and fitting more into a smaller space"]})}),`
`,e.jsx(c,{of:d,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(g,{aliases:["Tab Navigation","Tabbed interface"],atomicType:b.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-11168",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/tabs",name:"Tabs",relatedComponents:[{name:"Link"},{name:"Text"}],children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tabs"})," are used to organize content by grouping similar information on the same page."]})}),`
`,e.jsx(t,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/tabs/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Active tab"}),`
`,e.jsx(n.li,{children:"Unselected tab"}),`
`]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tabs"})," component is ideal for dashboards, settings pages, profile sections, and any interface where multiple views need to be accessible from the same page."]}),`
`,e.jsx(n.p,{children:"They can also be used to filter content via some common denominator."}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:["- Use a large amount of Tabs, as it can be confusing for the user","- Use long labelled Tabs","- Use conjugated verbs in labels",e.jsxs(n.span,{children:["- Use external ",e.jsx(i,{kind:a.link,label:"Link",story:r.documentation})," as Tabs"]}),"- Avoid elements comparison in multiple Tabs (context switching)","- Avoid nesting Tabs in a web page","- Use Tabs as a process progression"],dos:["- Group data in sub-navigation with Tabs"]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tabs"})," are ",e.jsx(n.strong,{children:"often used in the top part of a web page"}),", as it can act as a navigation focus."]}),`
`,e.jsxs(n.p,{children:["They are ",e.jsx(n.strong,{children:"left-centered by default"}),"."]}),`
`,e.jsxs(n.p,{children:["Each ",e.jsx(n.strong,{children:"Tab"})," has an automatic width based on the content's length."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["By default, one of the ",e.jsx(n.strong,{children:"Tabs"})," is always selected"]}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tabs"})," can be hovered, focused and selected. A ",e.jsx(n.strong,{children:"Tab"})," can also act as a disabled ",e.jsx(n.strong,{children:"Tab"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tabs"})," always stay on the same line, and can be horizontally scrolled through if they happen to not fit their container."]}),`
`,e.jsxs(n.p,{children:["When the selected ",e.jsx(n.strong,{children:"Tab"})," changes, an event is triggered."]}),`
`,e.jsxs(n.p,{children:["Each ",e.jsx(n.strong,{children:"Tab"})," has a panel displaying free content. Selecting a ",e.jsx(n.strong,{children:"Tab"})," displays the corresponding panel."]}),`
`,e.jsxs(n.p,{children:["The panel does not depend on the ",e.jsx(n.strong,{children:"Tab"})," component, it is in the developer’s hands."]}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["All inner ",e.jsx(n.strong,{children:"Tabs"})," follow the same focusing/keyboard navigation as ",e.jsx(i,{kind:a.button,label:"Button",story:r.documentation}),"."]})]})}function Me(s={}){const{wrapper:n}={...m(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{Me as default};
