import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as a}from"./index-DQB45XCM.js";import{M as o,C as l}from"./index-CTRIvuAa.js";import{T as t,O as c}from"./tag.stories-rCkgYbTv.js";import{B as d}from"./Banner-DKEGGZmZ.js";import{I as g,A as h,B as m}from"./IdentityCard-DMALWF_P.js";import{H as s}from"./Heading-BKRI_kjA.js";import"./index-D_CmzhJ4.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Tag-B60iwTLj.js";import"./index-CkQHsVsO.js";import"./icon-name-BOrBmUKT.js";import"./colors-DSObuHxd.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function r(i){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t,name:"Documentation"}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Tag"})," component is used to display keywords or categories, with a removal feature."]})}),`
`,e.jsx(l,{of:c,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsxs(g,{aliases:["Chip (previous name)","Label","Pill"],atomicType:h.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-11580",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/tag",name:"Tag",children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Tag"}),` component is a small UI element used to represent metadata, keywords, categories, or other contextual
information.`]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tags"})," are removable and can include an icon as additional prefix element."]}),e.jsx(n.p,{children:"They are commonly used in interfaces for categorizing content, filtering, and adding contextual details."})]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"Tag"})," component to display labels, categories, or metadata that describe or classify content."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tags"})," often appear in contexts like filters and lists."]}),`
`,e.jsxs(n.p,{children:["Ensure that ",e.jsx(n.strong,{children:"Tags"})," are clearly labelled and easily distinguishable from other UI elements."]}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(m,{donts:["- Don't use a Tag if there is no interaction expected, prefer the Badge component instead","- Don't use full sentences or long text in a Tag label","- Don't mix Tags with different behaviors (e.g., some removable, some static) unless necessary and clearly indicated",`- Don't use Tags as primary action triggers (e.g., "Submit", "Save"), use Buttons instead`],dos:["- Use Tags to represent interactive labels such as filters, categories, or user-defined keywords","- Ensure the label is short, descriptive, and scannable, aim for 1–2 words","- Use Tags in search contexts, facet filtering, or content classification","- Allow Tags to be removable or toggleable if the interaction requires it (e.g., deselecting a filter)","- Keep visual distinction between Tags (interactive) and Badges (static)"]}),`
`,e.jsx(s,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/tag/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Tag"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon"})," - optional (left or right)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Delete icon"})," - optional"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Label"})," - optional"]}),`
`]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsx(n.p,{children:"Since it provides extra information to a sibling element, in can be used inside components in various places, referring to the nature of its environment."}),`
`,e.jsxs(n.p,{children:["Multiple ",e.jsx(n.strong,{children:"Tags"})," can be displayed:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"on a single line"}),`
`,e.jsx(n.li,{children:"stacked vertically"}),`
`]}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tags"})," can be hovered, focused and disabled."]}),`
`,e.jsx(s,{label:"Variation",level:2}),`
`,e.jsx(s,{label:"Color",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Neutral"}),": displaying general labels or metadata without conveying any particular status or urgency."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Information"})," ",e.jsx(n.em,{children:"(default)"}),": displaying a general information for the user, without conveying any particular urgency."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Success"}),": indicating positive statuses or successful outcomes, providing a visual cue for achievements or completed tasks."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Warning"}),": alerting users to potential issues or cautionary information, signaling that attention is needed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Critical"}),": highlighting severe issues or urgent information that requires immediate attention, emphasizing high-priority concerns."]}),`
`]}),`
`,e.jsx(s,{label:"Size",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Medium"})," ",e.jsx(n.em,{children:"(default)"}),": main size for displaying ",e.jsx(n.strong,{children:"Tags"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Large"}),": highlighting important labels or metadata with greater visibility and emphasis, making them easily noticeable to users."]}),`
`]}),`
`,e.jsx(s,{label:"Navigation",level:2}),`
`,e.jsx(s,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Tag"})," component is focusable and follows the same keyboard interactions as the Button component."]}),`
`,e.jsx(s,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Tab"})," moves focus to the ",e.jsx(n.strong,{children:"Tag"}),"."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})," triggers the assigned action: removing the ",e.jsx(n.strong,{children:"Tag"}),"."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Tab"})," moves focus to the previous interactive element."]})]})}function z(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{z as default};
