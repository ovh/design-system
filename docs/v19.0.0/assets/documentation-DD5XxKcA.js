import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as r}from"./index-DQB45XCM.js";import{M as a,C as l}from"./index-CTRIvuAa.js";import{R as t,O as d}from"./radio-group.stories-BgzgMTt8.js";import{B as c}from"./Banner-DKEGGZmZ.js";import{I as h,A as u,B as p}from"./IdentityCard-DMALWF_P.js";import{H as n}from"./Heading-BKRI_kjA.js";import"./index-D_CmzhJ4.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-DjB85afw.js";import"./index-CkQHsVsO.js";import"./Text-KX3Hvvn9.js";import"./use-locale-context-BQVaQ0H3.js";import"./index-DoGvXrgL.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function i(s){const o={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:t,name:"Documentation"}),`
`,e.jsx(c,{of:t}),`
`,e.jsx(o.p,{children:e.jsxs(o.em,{children:["A ",e.jsx(o.strong,{children:"Radio"})," button allows users to select only one option from a number of choices."]})}),`
`,e.jsx(l,{of:d,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(h,{aliases:["Radio button (previous name)"],atomicType:u.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-14625",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/radio",name:"Radio",children:e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Radio Group"})," is a group of Radios to select a single state from multiples options."]})}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsx(o.p,{children:"In most situations where you want to present a list of mutually exclusive options."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Radio groups"})," can be used within a form."]}),`
`,e.jsx(o.p,{children:"Also, it can serve as :"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Selecting choice"}),`
`,e.jsx(o.li,{children:"Lists/sub-lists"}),`
`,e.jsx(o.li,{children:"Filters"}),`
`]}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(p,{donts:["- Don't use Radio Group when multiple selections are allowed. Use Checkbox instead","- Don't use a Radio Group with more than 5 options. Switch to a Select component for better usability","- Avoid situations where all options in a set should be deselected","- Don't truncate long labels, allow wrapping to maintain readability"],dos:["- Use Radio Group when users must choose only one option from a set of two or more","- Ensure each radio has a clear and concise label, wrapped text is preferable to truncated labels","- Keep the number of radios concise (ideally 2 to 5) to avoid overwhelming the user",'- Consider using a Toggle instead of a two-option Radio Group when the options are affirmative/negative (e.g., "Enable notifications" yes/no)',"- Group related radios together with a visible label or legend to provide context"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(o.p,{children:e.jsx(o.img,{src:"components/radio-group/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(o.ol,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Radio Group"})}),`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Radio button"})}),`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Label"})}),`
`]}),`
`,e.jsx(n,{label:"Placement",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Radio Groups"})," should be vertical, meaning one radio button under another."]}),`
`,e.jsxs(o.p,{children:["Usage of horizontal ",e.jsx(o.strong,{children:"Radio Groups"})," should only occur if vertical space is limited."]}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsx(o.p,{children:"Radio button can be hovered, focused, clicked or disabled. When disabled, radio button cannot be focused nor clicked."}),`
`,e.jsx(o.p,{children:"When clicking on one of the radio button or its linked label, the radio button is selected or deselected depending on the previous state."}),`
`,e.jsxs(o.p,{children:["Radio button behavior does work only when used in a situation of a ",e.jsx(o.strong,{children:"Radio group"}),`.
The `,e.jsx(o.strong,{children:"Radio group"})," can be in an error state, but also in a disabled state. It also can be focused and hovered."]}),`
`,e.jsx(n,{label:"Variation",level:2}),`
`,e.jsx(o.p,{children:"Radio buttons follow the native behavior of the browser used, so the appearance of radio buttons may vary depending on the browser."}),`
`,e.jsx(n,{label:"Navigation",level:2}),`
`,e.jsx(n,{label:"Focus Management",level:3}),`
`,e.jsxs(o.p,{children:["When the ",e.jsx(o.strong,{children:"Radio Group"})," component is focused, focus is automatically set to the first focusable and not disabled radio in the group."]}),`
`,e.jsx(o.p,{children:"If a radio button is checked, focus moves to that checked item when the component is focused."}),`
`,e.jsx(o.p,{children:"A read-only radio button can receive focus but cannot be selected or modified."}),`
`,e.jsx(o.p,{children:"If a radio button is disabled, it cannot receive focus and cannot be selected."}),`
`,e.jsx(o.p,{children:"Focus moves through the radio buttons sequentially."}),`
`,e.jsx(n,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Tab"})," moves focus to the next focusable and enabled radio button in the group."]}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Shift"})," + ",e.jsx(o.code,{children:"Tab"})," moves focus backward through the radio buttons."]}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Arrow Down"})," or ",e.jsx(o.code,{children:"Arrow Right"})," moves focus and selects the next radio button in the group."]}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Arrow Up"})," or ",e.jsx(o.code,{children:"Arrow Left"})," moves focus and selects the previous radio button in the group."]}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Space"})," when focused on an unchecked radio button selects it."]})]})}function O(s={}){const{wrapper:o}={...r(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(i,{...s})}):i(s)}export{O as default};
