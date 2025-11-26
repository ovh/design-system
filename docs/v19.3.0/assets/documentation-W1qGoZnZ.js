import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as r}from"./index-ZwkxtaJJ.js";import{M as a}from"./index-9orhCFJa.js";import{R as s,O as l}from"./radio-group.stories-C_ZY3ItB.js";import{A as d}from"./Anatomy-DkXJCwiR.js";import{B as c}from"./Banner-DiJ2utjo.js";import{I as h,B as p}from"./IdentityCard-0vzhW5ZM.js";import{C as u}from"./Canvas-CreDMEws.js";import{E as m}from"./ExternalLink-C0Msq_QQ.js";import{H as n}from"./Heading-eINcjqM4.js";import"./index-jIWwRBLr.js";import"./iframe-BRevKSH1.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-B8-lDkmb.js";import"./index-CqY9YpN0.js";import"./Text-DyiJ5nHV.js";import"./use-locale-context-6s5qsrWI.js";import"./index-Dp00x3gb.js";import"./controls-BtiQQn1l.js";import"./Table-BvR76ybm-DzE94PQp.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./Table-u83oGl00.js";import"./ods-react60-DssFCbzP.js";import"./TooltipTrigger-CizyLvLy-D53hI2Ct.js";import"./index-blQ1D1fB.js";import"./lz-string-U2heoObX.js";import"./meta-t9Q7ez2Q.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-BVzaMHe3.js";import"./tokens-VHDJ0kGa.js";import"./Link-CIjoG_UN-BDwROQOD.js";function i(t){const o={code:"code",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:s,name:"Documentation"}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(o.p,{children:e.jsxs(o.em,{children:["A ",e.jsx(o.strong,{children:"Radio"})," button allows users to select only one option from a number of choices."]})}),`
`,e.jsx(u,{of:l,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(h,{aliases:["Radio button (previous name)"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-14625",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/radio-group",name:"Radio",children:e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Radio Group"})," is a group of Radios to select a single state from multiples options."]})}),`
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
`,e.jsx(d,{src:"components/radio-group/anatomy.png"}),`
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
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Space"})," when focused on an unchecked radio button selects it."]}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsxs(o.p,{children:["This component complies with the ",e.jsx(m,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/radio/",children:"Radio Group WAI-ARIA design pattern"})]}),`
`,e.jsxs(o.p,{children:["Try to keep a vertical spacing of at least ",e.jsx(o.code,{children:"8px"})," between each radio buttons, to provide sufficient tactile and visual separation."]})]})}function J(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{J as default};
