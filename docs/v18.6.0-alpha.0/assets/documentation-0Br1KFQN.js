import{j as e,M as d,C as p}from"./index-CMHv63WF.js";import{u as l}from"./index-CavMhwFB.js";import{A as a,O as h}from"./accordion.stories-D7tBA8yu.js";import{B as m}from"./Banner-C-KRFYMc.js";import{I as x,A as j,B as g}from"./IdentityCard-p_hoisJc.js";import{H as t}from"./Heading-Drr0F75o.js";import{S as o,O as i,a as s}from"./StorybookLink-DyXIZpxe.js";import"./iframe-CW-8tKo2.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C_uqOg6Y.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";import"./index-BLVG44ao.js";import"./index-BDosBUxz.js";import"./ods-badge-DLluvt0I.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-BAtyPzTJ.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";function c(r){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a,name:"Documentation"}),`
`,e.jsx(m,{of:a}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["An ",e.jsx(n.strong,{children:"Accordion"})," is a vertical header that reveals or hides an associated section of content."]})}),`
`,e.jsx(p,{of:h,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsxs(x,{aliases:["Collapsible","FAQ"],atomicType:j.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=1-6634",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/accordion",name:"Accordion",relatedComponents:[{name:"Text"}],children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Accordion"})," component ",e.jsx(n.strong,{children:"delivers large amounts of content in a small space through progressive disclosure"}),"."]}),e.jsx(n.p,{children:`The header part gives the user a high-level overview of the content allowing them to decide which sections to
read.`}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Accordions"})," can make ",e.jsx(n.strong,{children:"information processing and discovering more effective"}),`. However, it does hide content
from the users, and it’s important to account for a user not noticing or reading all the included content. If a user
is likely to read all the content then then the usage of an `,e.jsx(n.strong,{children:"Accordion"}),` would not be recommended as it adds an extra
interaction to access the content; instead use a full scrolling page with normal headers.`]})]}),`
`,e.jsx(t,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/accordion/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Header"}),": contains the section title and acts as a control for revealing the panel or not (always visible)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon"}),': A "down/up" chevron ',e.jsx(o,{kind:i.icon,label:"Icon",story:s.documentation})," is used to indicate the “expand/collapse” action, though the entire header area is clickable (always visible)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Panel"}),": the section of content associated with an ",e.jsx(n.strong,{children:"Accordion"})," header."]}),`
`]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsx(n.p,{children:`Use any number of elements to visually display them as a group.
Several collapsible panels can co-exist in a same interface.`}),`
`,e.jsx(n.p,{children:"Use this component for :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Organizing related information"}),`
`,e.jsx(n.li,{children:"Shortening pages and reducing scrolling when content is not crucial to read in full"}),`
`,e.jsx(n.li,{children:"When space is at a premium and long content cannot be displayed all at once, like on a mobile interface or in a side panel"}),`
`]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(g,{donts:["- Expose a lot of content in the Header section (i.e. more than 2 lines)","- Use Accordions with essential content for users",e.jsxs(n.span,{children:["- Use ",e.jsx(o,{kind:i.icon,label:"Icon",story:s.documentation})," in header text"]}),"- Expose a lot of content in the Panel section (i.e. more than the viewport height)","- Empty the Panel section, as the Accordion become useless","- Trigger expanding/collapsing on hover action","- Avoid nested Accordions, like collapsible content within collapsible content"],dos:[e.jsxs(n.span,{children:["- Header ",e.jsx(o,{kind:i.text,label:"Text",story:s.documentation})," describes the content contained in the panel. Use a clear and concise ",e.jsx(o,{kind:i.text,label:"Text",story:s.documentation}),", and be explicit about the action that will happen if the option is selected"]}),e.jsxs(n.span,{children:["- Use sentence-style capitalization in header ",e.jsx(o,{kind:i.text,label:"Text",story:s.documentation})," (only the first word in a phrase and any proper nouns capitalized), no more than three words, and no punctuation"]}),e.jsxs(n.span,{children:["- Use Accordion instead of ",e.jsx(o,{kind:i.tabs,label:"Tab",story:s.documentation})," if users need to see multiple sections at once"]})]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Accordion"})," component is adjusted to the parent's width. It can vary based on the content, layout, and page design."]}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.strong,{children:"Accordion"})," content is left-aligned in its container, as the header does."]}),`
`,e.jsx(n.p,{children:"It can be placed within main page content or inside a side container (as panels, or tiles)."}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Accordion"})," has two states : ",e.jsx(n.strong,{children:"collapsed"})," and ",e.jsx(n.strong,{children:"expanded"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Accordion is by default collapsed."})}),`
`,e.jsx(n.p,{children:`When triggering the header part, the panel part should react as expanding or collapsing, depending on what previous
state it had.`}),`
`,e.jsx(n.p,{children:"The mouse cursor acts as a clickable area on the Header part of the component."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Icon"})," helps the user to know if the ",e.jsx(n.strong,{children:"Accordion"})," is collapsed or expanded :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Collapsed : chevron points down"}),`
`,e.jsx(n.li,{children:"Expanded : chevron points up"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"The Header part of this component acts like a Button"}),", with hover, focus and active styles."]}),`
`,e.jsx(n.p,{children:"Same behavior and styling applies to both Desktop and Mobile modes."}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["The header part can be navigated through tabulation, with the same behavior as a ",e.jsx(o,{kind:i.button,label:"Button",story:s.documentation}),"."]}),`
`,e.jsxs(n.p,{children:["When focusing the header part, pressing ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})," keys will trigger its expansion or its collapse."]}),`
`,e.jsxs(n.p,{children:["For screen readers, the user can know easily that the ",e.jsx(n.strong,{children:"Accordion"})," is opened or not, and therefore the inner content is readable or not."]})]})}function Ue(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(c,{...r})}):c(r)}export{Ue as default};
