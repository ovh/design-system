import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as l}from"./index-BNSrq6w-.js";import{M as d,C as c,d as a}from"./index-DnV51lgW.js";import{B as h}from"./banner-CAPzkNgn.js";import{R as r,O as m}from"./range.stories-DrnjYbuy.js";import{O as i}from"./index-BUOQImqF.js";import{O as t}from"./index-CEZbmgmh.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-CgWFvVwm.js";function o(s){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r,name:"Documentation"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Range"})," component is used to allow users to visually select one or more values from a range of values by moving the handle along a bar"]})}),`
`,e.jsx(c,{of:m,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsxs("div",{id:"description",children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Range"})," component is used for selecting a numerical value or a range of values within a specified range."]}),e.jsx(n.p,{children:"It provides a visual and interactive way to adjust values, often used in forms, settings, and data filtering."}),e.jsx(n.p,{children:"The component can support single-value sliders or dual-handle sliders for selecting ranges."})]}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Range"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"Slider"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#atoms",children:["Atom",e.jsx(i,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-form-field--documentation",children:e.jsx(n.strong,{children:"Form Field"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(i,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/range",children:["Github",e.jsx(i,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/range/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Track"}),": the range of values the user can select and adjust"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Filled track"}),": the user's selected value within the ",e.jsx(n.strong,{children:"Range"}),". It is filled from the minimum value to the selected value"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Thumb"}),": a positional indicator. It can be moved along the track to indicate a position on this track"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Additional thumb"}),": a second positional indicator to get a dual ",e.jsx(n.strong,{children:"Range"}),". It allows users to select a portion within the range ",e.jsx(n.em,{children:"(optional)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Minimum value label"}),": beginning of a ",e.jsx(n.strong,{children:"Range"})," as its minimum value"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Maximum value label"}),": end of a ",e.jsx(n.strong,{children:"Range"})," as its maximum value"]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Range"})," is used to select a numeric value within a given range with defined minimum and maximum values."]}),`
`,e.jsx(n.p,{children:"It is easily adjustable in a visually pleasing interface and, after interacting with it, changes are reflected immediately."}),`
`,e.jsxs(n.p,{children:["A dual ",e.jsx(n.strong,{children:"Range"})," allows the user to select a numeric range value that is no less than a given value, and no more than another given value."]}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(a,{children:`
| ✅ Do                                                                                                                                                                                         |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------               |
| - Use a **Range** when the user needs a way to select a value within a range                                                                                                                 |
| - Include a label on a **Range**, such as the one provided by [**Form Field**](?path=/docs/ods-components-form-elements-form-field--documentation) component, to explain the purpose of the **Range** |
| - Add a default numeric value                                                                                                                                                                |
`}),`
`,e.jsx(a,{children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Overuse **Ranges** on one page                                                                                                                                                 |
| - Use a **Range** when the numeric value range is infinite                                                                                                                       |
| - Use a **Range** in too small spaces on a page: it is necessary to have enough space in the UI                                                                                  |
| - Use a continuous **Range** when the defined range of values is too large: use a discrete **Range**                                                                             |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Range"})," can be used in a page as long as there is a need to allow users to select a numeric value within a given range, for a quantity or a volume for example."]}),`
`,e.jsx(n.p,{children:"It has a width by default, but it can widen to match its container."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Range"})," can also be used inside components."]}),`
`,e.jsxs(n.p,{children:["It also can be combined with other elements such as an ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})})," for a better control of the value selection."]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Range"})," can be focused and hovered. It also can be disabled."]}),`
`,e.jsx(n.p,{children:"The user can select a numeric value by clicking and dragging the thumb along the track."}),`
`,e.jsxs(n.p,{children:["An event is triggered when the ",e.jsx(n.strong,{children:"Range"})," value(s) changes."]}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Each ",e.jsx(n.strong,{children:"Range"})," thumb can be focused using ",e.jsx(n.code,{children:"Tabulation"}),", using ",e.jsx(n.code,{children:"Up"})," and ",e.jsx(n.code,{children:"Right"})," arrows increases its value, ",e.jsx(n.code,{children:"Down"})," and ",e.jsx(n.code,{children:"Left"})," keys decreases it."]})]})}function L(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{L as default};
