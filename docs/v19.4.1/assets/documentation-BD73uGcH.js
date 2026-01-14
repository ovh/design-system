import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as h}from"./index-ZwkxtaJJ.js";import{a as l,l as o}from"./ods-react64-C395g5lW.js";import{k as s}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as m}from"./index-C3P7rize.js";import{R as c,O as p,A as u,a as g}from"./range.stories-B5irL-SO.js";import{A as x}from"./Anatomy-DkXJCwiR.js";import{B as j}from"./Banner-pQsjs-k1.js";import{I as b,B as v}from"./IdentityCard-BHvRCB68.js";import{C as a}from"./Canvas-ClwM1ePO.js";import{E as t}from"./ExternalLink-C9tV86xX.js";import{H as r}from"./Heading-DAsItneX.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-B-1i39SD.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-f_nl6yro.js";import"./index-CqY9YpN0.js";import"./Text-CW33_IfE.js";import"./context-C_-r2uoG.js";import"./TooltipTrigger-D6SRfRFV.js";import"./overlay-CZHjGBMC.js";import"./portal-Dz6APLpY.js";import"./use-locale-context-Da8UBLVe.js";import"./use-presence-BpdcDhnz.js";import"./use-event-c9j7vq_1.js";import"./index-C73mxVPS.js";import"./index-BY2p2mzr.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./Table-DVdtSe4m-Co7uf3pc.js";import"./Table-Bq5w2nKq.js";import"./TooltipTrigger-DxEeTVF8-B5Le9OVu.js";import"./ods-react114-5kwUyuQy.js";import"./index-lGh5KcWi.js";import"./lz-string-U2heoObX.js";import"./meta-DxXVpXmq.js";import"./ResetTheme-BVzaMHe3.js";import"./tokens-VHDJ0kGa.js";import"./Link-BhqYqKFa-BDwROQOD.js";import"./Divider-DmVNyNnn-DCNXheUh.js";function d(i){const n={em:"em",li:"li",ol:"ol",p:"p",strong:"strong",...h(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:c,name:"Documentation"}),`
`,e.jsx(j,{of:c}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Range"})," component is used to allow users to visually select one or more values from a range of values by moving the handle along a bar"]})}),`
`,e.jsx(a,{of:p,sourceState:"none"}),`
`,e.jsx(r,{label:"Overview",level:2}),`
`,e.jsxs(b,{aliases:["Slider"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-16052",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/range",name:"Range",children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Range"})," component is used for selecting a numerical value or a range of values within a specified range."]}),e.jsx(n.p,{children:"It provides a visual and interactive way to adjust values, often used in forms, settings, and data filtering."}),e.jsx(n.p,{children:"The component can support single-value sliders or dual-handle sliders for selecting ranges."})]}),`
`,e.jsx(r,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Range"})," is used to select a numeric value within a given range with defined minimum and maximum values."]}),`
`,e.jsx(n.p,{children:"It is easily adjustable in a visually pleasing interface and, after interacting with it, changes are reflected immediately."}),`
`,e.jsxs(n.p,{children:["A dual ",e.jsx(n.strong,{children:"Range"})," allows the user to select a numeric range value that is no less than a given value, and no more than another given value."]}),`
`,e.jsx(r,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(v,{donts:["- Don't overload a page with too many Range components","- Don't place a Range in tight or constrained spaces where the control becomes hard to use or interpret","- Don't use a continuous Range for large intervals where precision is important. Use a discrete step Range or typed input instead","- Don't omit labels or helper text"],dos:["- Use a Range component when users need to select a value (or values) within a defined numeric interval","- Label the Range clearly using a Form Field to indicate what the value represents","- Provide a default value or starting range to guide users and avoid ambiguity","- Use a dual Range when allowing users to set a minimum and maximum value","- Make sure the Range has enough horizontal space to be usable and legible"]}),`
`,e.jsx(r,{label:"Best Practices in Context",level:3}),`
`,e.jsx(x,{src:"components/range/anatomy.png"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Range"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Track"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Min/Max values"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Handle"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Active fill"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Second handle"})," - optional (Dual Range)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tick marks"})," - optional"]}),`
`]}),`
`,e.jsx(r,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Range"})," can be used in a page as long as there is a need to allow users to select a numeric value within a given range, for a quantity or a volume for example."]}),`
`,e.jsx(n.p,{children:"It has a width by default, but it can widen to match its container."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Range"})," can also be used inside components."]}),`
`,e.jsx(n.p,{children:"It also can be combined with other elements such as an input for a better control of the value selection."}),`
`,e.jsx(r,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Range"})," can be focused and hovered. It also can be disabled."]}),`
`,e.jsx(n.p,{children:"The user can select a numeric value by clicking and dragging the thumb along the track."}),`
`,e.jsx(r,{label:"Navigation",level:2}),`
`,e.jsx(r,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Range"})," component can be focused. Focus will land on the first thumb if multiple are present."]}),`
`,e.jsx(n.p,{children:"When multiple thumbs are used, each thumb can receive focus individually."}),`
`,e.jsxs(n.p,{children:["Disabled ",e.jsx(n.strong,{children:"Range"})," and disabled thumbs cannot be focused or interacted with."]}),`
`,e.jsx(r,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Arrow Right"})," or ",e.jsx(s,{children:"Arrow Up"})," increases the value of the focused thumb by one step."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Arrow Left"})," or ",e.jsx(s,{children:"Arrow Down"})," decreases the value of the focused thumb by one step."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Page Up"})," or ",e.jsx(s,{children:"Shift"})," + ",e.jsx(s,{children:"Arrow Right"})," increases the value by a larger step."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Page Down"})," or ",e.jsx(s,{children:"Shift"})," + ",e.jsx(s,{children:"Arrow Down"})," decreases the value by a larger step."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Home"})," or ",e.jsx(s,{children:"fn"})," + ",e.jsx(s,{children:"Arrow Left"})," sets the value to the minimum."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"End"})," or ",e.jsx(s,{children:"fn"})," + ",e.jsx(s,{children:"Arrow Right"})," sets the value to the maximum."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Tab"})," and ",e.jsx(s,{children:"Shift"})," + ",e.jsx(s,{children:"Tab"})," allow navigation between multiple thumbs (if present)."]}),`
`,e.jsx(r,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["This component complies with the ",e.jsx(t,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/slider/",children:"Slider"})," and ",e.jsx(t,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/",children:"Slider (Multi-Thumb)"})," WAI-ARIA design patterns."]}),`
`,e.jsx(r,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(n.p,{children:["Every ",e.jsx(n.strong,{children:"Range"}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either `,e.jsx(n.strong,{children:"FormField"})," or a native label tag."]}),`
`,e.jsx(a,{of:u,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(l,{name:o.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the value, the slider and its label."]}),`
`,e.jsx(r,{label:"Always provide a descriptive sub-label in Dual Range",level:3}),`
`,e.jsxs(n.p,{children:[`Sub-label provide additional context about the values that are selected or adjusted by the user. This sub-label should be vocalized by screen readers.
Use `,e.jsx(t,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby",children:"aria-labelledby"})," to link the sub-label and ",e.jsx(t,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions",children:'aria-live="polite"'})," to ensure that the content is vocalized by screen readers."]}),`
`,e.jsx(a,{of:g,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(l,{name:o.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the values, the slider and its label."]})]})}function de(i={}){const{wrapper:n}={...h(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{de as default};
