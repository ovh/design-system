import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as a}from"./index-ZwkxtaJJ.js";import{k as t}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as l}from"./index-Cw5r0Kn8.js";import{R as i,O as d}from"./radio-group.stories-CroZH5oH.js";import{A as c}from"./Anatomy-DkXJCwiR.js";import{B as h}from"./Banner-X7WOeBPc.js";import{I as p,B as u}from"./IdentityCard-D9LjZbLA.js";import{C as m}from"./Canvas-i2Tfjesg.js";import{E as x}from"./ExternalLink-C5hGBmwh.js";import{H as n}from"./Heading-Dep_rTif.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DCzti3mm.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabelSubLabel-DCAb65DU.js";import"./index-CqY9YpN0.js";import"./Text-CW33_IfE.js";import"./RadioLabel-eoh0KbCP.js";import"./use-locale-context-kHyebpMI.js";import"./index-BlUhyWms.js";import"./controls-BtiQQn1l.js";import"./Table-D8Me597i-NC3k9YIT.js";import"./Table-5ah53JFf.js";import"./ods-react67-C395g5lW.js";import"./TooltipTrigger-C3aN0eJB-DwV7p8FS.js";import"./ods-react121-5kwUyuQy.js";import"./index-CSeLFT3z.js";import"./lz-string-U2heoObX.js";import"./meta-DcQbZjt_.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-xqxcB8cs.js";import"./tokens-BtVMeYnn.js";import"./Link-TMoA1i18-BDwROQOD.js";import"./Divider-wQyo85oE-CpSK6tnQ.js";function r(s){const o={code:"code",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:i,name:"Documentation"}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(o.p,{children:e.jsxs(o.em,{children:["A ",e.jsx(o.strong,{children:"Radio"})," button allows users to select only one option from a number of choices."]})}),`
`,e.jsx(m,{of:d,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(p,{aliases:["Radio button (previous name)"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-14625",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/radio-group",name:"Radio",children:e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Radio Group"})," is a group of Radios to select a single state from multiples options."]})}),`
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
`,e.jsx(u,{donts:["- Don't use Radio Group when multiple selections are allowed. Use Checkbox instead","- Don't use a Radio Group with more than 5 options. Switch to a Select component for better usability","- Avoid situations where all options in a set should be deselected","- Don't truncate long labels, allow wrapping to maintain readability"],dos:["- Use Radio Group when users must choose only one option from a set of two or more","- Ensure each radio has a clear and concise label, wrapped text is preferable to truncated labels","- Keep the number of radios concise (ideally 2 to 5) to avoid overwhelming the user",'- Consider using a Toggle instead of a two-option Radio Group when the options are affirmative/negative (e.g., "Enable notifications" yes/no)',"- Group related radios together with a visible label or legend to provide context"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(c,{src:"components/radio-group/anatomy.png"}),`
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
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(t,{children:"Tab"})," moves focus to the next focusable and enabled radio button in the group."]}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(t,{children:"Shift"})," + ",e.jsx(t,{children:"Tab"})," moves focus backward through the radio buttons."]}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(t,{children:"Arrow Down"})," or ",e.jsx(t,{children:"Arrow Right"})," moves focus and selects the next radio button in the group."]}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(t,{children:"Arrow Up"})," or ",e.jsx(t,{children:"Arrow Left"})," moves focus and selects the previous radio button in the group."]}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(t,{children:"Space"})," when focused on an unchecked radio button selects it."]}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsxs(o.p,{children:["This component complies with the ",e.jsx(x,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/radio/",children:"Radio Group WAI-ARIA design pattern"})]}),`
`,e.jsxs(o.p,{children:["Try to keep a vertical spacing of at least ",e.jsx(o.code,{children:"8px"})," between each radio buttons, to provide sufficient tactile and visual separation."]})]})}function ee(s={}){const{wrapper:o}={...a(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(r,{...s})}):r(s)}export{ee as default};
