import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as r}from"./index-DQB45XCM.js";import{M as o,C as l}from"./index-CTRIvuAa.js";import{R as t,O as c}from"./range.stories-D4wu3Ne3.js";import{B as d}from"./Banner-DKEGGZmZ.js";import{I as h,A as m,B as u}from"./IdentityCard-DMALWF_P.js";import{H as s}from"./Heading-BKRI_kjA.js";import"./StorybookLink-DMr2bWgk.js";import"./index-D_CmzhJ4.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-DjB85afw.js";import"./index-CkQHsVsO.js";import"./Text-KX3Hvvn9.js";import"./TooltipTrigger-DmpQ7Q38.js";import"./overlay-CZHjGBMC.js";import"./portal-Bd62KldU.js";import"./use-locale-context-BQVaQ0H3.js";import"./use-presence-Cqrqn20p.js";import"./use-event-OCVb0O1l.js";import"./index-DoGvXrgL.js";import"./index-xSrPfE2G.js";import"./controls-BtiQQn1l.js";import"./source-d0g_Nd0q.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function a(i){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t,name:"Documentation"}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Range"})," component is used to allow users to visually select one or more values from a range of values by moving the handle along a bar"]})}),`
`,e.jsx(l,{of:c,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsxs(h,{aliases:["Slider"],atomicType:m.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-16052",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/range",name:"Range",children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Range"})," component is used for selecting a numerical value or a range of values within a specified range."]}),e.jsx(n.p,{children:"It provides a visual and interactive way to adjust values, often used in forms, settings, and data filtering."}),e.jsx(n.p,{children:"The component can support single-value sliders or dual-handle sliders for selecting ranges."})]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Range"})," is used to select a numeric value within a given range with defined minimum and maximum values."]}),`
`,e.jsx(n.p,{children:"It is easily adjustable in a visually pleasing interface and, after interacting with it, changes are reflected immediately."}),`
`,e.jsxs(n.p,{children:["A dual ",e.jsx(n.strong,{children:"Range"})," allows the user to select a numeric range value that is no less than a given value, and no more than another given value."]}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:["- Don't overload a page with too many Range components","- Don't place a Range in tight or constrained spaces where the control becomes hard to use or interpret","- Don't use a continuous Range for large intervals where precision is important. Use a discrete step Range or typed input instead","- Don't omit labels or helper text"],dos:["- Use a Range component when users need to select a value (or values) within a defined numeric interval","- Label the Range clearly using a Form Field to indicate what the value represents","- Provide a default value or starting range to guide users and avoid ambiguity","- Use a dual Range when allowing users to set a minimum and maximum value","- Make sure the Range has enough horizontal space to be usable and legible"]}),`
`,e.jsx(s,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/range/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Range"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Track"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Min/Max values"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Handle"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Active fill"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Second handle"})," - optional (Dual Range)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tick marks"})," - optional"]}),`
`]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Range"})," can be used in a page as long as there is a need to allow users to select a numeric value within a given range, for a quantity or a volume for example."]}),`
`,e.jsx(n.p,{children:"It has a width by default, but it can widen to match its container."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Range"})," can also be used inside components."]}),`
`,e.jsx(n.p,{children:"It also can be combined with other elements such as an input for a better control of the value selection."}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Range"})," can be focused and hovered. It also can be disabled."]}),`
`,e.jsx(n.p,{children:"The user can select a numeric value by clicking and dragging the thumb along the track."}),`
`,e.jsx(s,{label:"Navigation",level:2}),`
`,e.jsx(s,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Range"})," component can be focused. Focus will land on the first thumb if multiple are present."]}),`
`,e.jsx(n.p,{children:"When multiple thumbs are used, each thumb can receive focus individually."}),`
`,e.jsxs(n.p,{children:["Disabled ",e.jsx(n.strong,{children:"Range"})," and disabled thumbs cannot be focused or interacted with."]}),`
`,e.jsx(s,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Arrow Right"})," or ",e.jsx(n.code,{children:"Arrow Up"})," increases the value of the focused thumb by one step."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Arrow Left"})," or ",e.jsx(n.code,{children:"Arrow Down"})," decreases the value of the focused thumb by one step."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Page Up"})," or ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Arrow Right"})," increases the value by a larger step."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Page Down"})," or ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Arrow Down"})," decreases the value by a larger step."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Home"})," or ",e.jsx(n.code,{children:"fn"})," + ",e.jsx(n.code,{children:"Arrow Left"})," sets the value to the minimum."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"End"})," or ",e.jsx(n.code,{children:"fn"})," + ",e.jsx(n.code,{children:"Arrow Right"})," sets the value to the maximum."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Tab"})," and ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Tab"})," allow navigation between multiple thumbs (if present)."]})]})}function N(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{N as default};
