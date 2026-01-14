import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as r}from"./index-ZwkxtaJJ.js";import{k as a}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as l}from"./index-C3P7rize.js";import{C as o,O as c}from"./checkbox.stories-DERm_8k0.js";import{A as h}from"./Anatomy-DkXJCwiR.js";import{B as d}from"./Banner-pQsjs-k1.js";import{I as p,B as m}from"./IdentityCard-BHvRCB68.js";import{C as x}from"./Canvas-ClwM1ePO.js";import{E as b}from"./ExternalLink-C9tV86xX.js";import{H as t}from"./Heading-DAsItneX.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-B-1i39SD.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./CheckboxLabel--CnxJIHu.js";import"./index-CqY9YpN0.js";import"./FormFieldLabel-f_nl6yro.js";import"./Text-CW33_IfE.js";import"./use-locale-context-Da8UBLVe.js";import"./use-field-context-6EvXFqGa.js";import"./icon-name-BpdEc4-2.js";import"./index-C73mxVPS.js";import"./use-event-c9j7vq_1.js";import"./controls-BtiQQn1l.js";import"./Table-DVdtSe4m-Co7uf3pc.js";import"./Table-Bq5w2nKq.js";import"./ods-react64-C395g5lW.js";import"./TooltipTrigger-DxEeTVF8-B5Le9OVu.js";import"./ods-react114-5kwUyuQy.js";import"./index-lGh5KcWi.js";import"./lz-string-U2heoObX.js";import"./meta-DxXVpXmq.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-BVzaMHe3.js";import"./tokens-VHDJ0kGa.js";import"./Link-BhqYqKFa-BDwROQOD.js";import"./Divider-DmVNyNnn-DCNXheUh.js";function i(s){const n={code:"code",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o,name:"Documentation"}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Checkbox"})," are used for a list of options where the user may make a choice by selecting multiple options, including all or none."]})}),`
`,e.jsx(x,{of:c,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(p,{aliases:["Checkbox Button (previous name)","Check Box","Tick Box"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-28514",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/checkbox",name:"Checkbox",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Checkbox"}),` are used to make a choice that must be confirmed by submitting a form. For an instantaneous choice
(without submit), the use of a switch is preferred (see Switch).`]})}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Checkbox"})," can be used in forms and containers."]}),`
`,e.jsx(n.p,{children:"Also, it can serve as :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Selecting/deselecting item(s)"}),`
`,e.jsx(n.li,{children:"Lists/sub-lists"}),`
`,e.jsx(n.li,{children:"Filters"}),`
`,e.jsx(n.li,{children:"Agreement to terms and conditions"}),`
`]}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Checkbox"})," group is used for a list of options where the user may make a choice by selecting multiple options, including all or none."]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(m,{donts:["- Don't use a Checkbox if the user can only select one option, use a Radio Group instead","- Don't truncate labels with ellipsis","- Don't place Checkboxes too close together, maintain sufficient spacing to prevent selection errors",`- Don't use Checkboxes for binary actions like "save" or "submit", use a Button instead`],dos:["- Use clear, concise, and descriptive labels to explain what the Checkbox controls","- Allow labels to wrap to multiple lines when necessary, readability is more important than keeping to one line here","- Group related Checkboxes using a fieldset with a legend to provide context when applicable","- Use Checkboxes when multiple selections are allowed within a group of options"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(h,{src:"components/checkbox/anatomy.png"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Checkbox"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Label"})}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Checkbox"})," can be autonomous, as it can be labelled in a starting/ending text."]}),`
`,e.jsx(n.p,{children:"It can be inserted in containers or next to an external item."}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["The default behavior is that when clicking on the ",e.jsx(n.strong,{children:"Checkbox"})," or its linked label, the ",e.jsx(n.strong,{children:"Checkbox"})," is alternatively selected or deselected depending on the previous state."]}),`
`,e.jsxs(n.p,{children:["The indeterminate state is used only when the ",e.jsx(n.strong,{children:"Checkbox"})," contains a sub-list of selections that are partially selected."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Checkbox"})," can be in an error state, but also in a disabled state."]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Checkbox"})," component can receive keyboard focus and is part of the standard tab order."]}),`
`,e.jsxs(n.p,{children:["If the ",e.jsx(n.strong,{children:"Checkbox"})," is disabled, it does not receive focus and cannot be activated via keyboard."]}),`
`,e.jsx(t,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(a,{children:"Space"})," toggles the ",e.jsx(n.strong,{children:"Checkbox"})," state (checked/unchecked)."]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["This component complies with the ",e.jsx(b,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/checkbox",children:"Checkbox WAI-ARIA design pattern"}),"."]}),`
`,e.jsxs(n.p,{children:["Vertical spacing of at least ",e.jsx(n.code,{children:"8px"})," between each checkbox is advised to provide sufficient tactile and visual separation."]})]})}function se(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{se as default};
