import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as d}from"./index-ZwkxtaJJ.js";import{b as o,l as a}from"./ods-react69-Dlwzrp8h.js";import{k as n}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as h}from"./index-C4hjFBuI.js";import{T as l,O as x,A as p,a as m}from"./textarea.stories-B0MZ7JO8.js";import{A as j}from"./Anatomy-DkXJCwiR.js";import{B as u}from"./Banner-DR_-FHd1.js";import{I as g,B as f}from"./IdentityCard-a_2isD7k.js";import{C as i}from"./Canvas-C4XHK09l.js";import{H as r}from"./Heading-9LxWPJUe.js";import{S as b}from"./StorybookLink-JdIJT3av.js";import{H as v}from"./meta-BVDGtJjn.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-Cq8r12Hk.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabelSubLabel-DCAb65DU.js";import"./index-CqY9YpN0.js";import"./Text-CW33_IfE.js";import"./Textarea-di6qQWES.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./Table-DfFDy0oa-pPcXAmDO.js";import"./ExternalLink-3_acHraq.js";import"./Link-BD6LLyZr-BDwROQOD.js";import"./Table-skMWcQVm.js";import"./TooltipTrigger-DHfLNvMW-UFJEJJFl.js";import"./ods-react123-5kwUyuQy.js";import"./index-7h_USg0z.js";import"./lz-string-U2heoObX.js";import"./ResetTheme-DQ5v3p_P.js";import"./tokens-BrWUS-3i.js";import"./Divider-BA_mBCsl-c8UMRNiU.js";function c(t){const s={em:"em",li:"li",ol:"ol",p:"p",strong:"strong",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l,name:"Documentation"}),`
`,e.jsx(u,{of:l}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:["A ",e.jsx(s.strong,{children:"Textarea"})," component allows users to input and edit multiple lines of text."]})}),`
`,e.jsx(i,{of:x,sourceState:"none"}),`
`,e.jsx(r,{label:"Overview",level:2}),`
`,e.jsxs(g,{aliases:["Text Box"],extraLinks:[e.jsx(b,{title:v.formGuidelines,children:"Form Guidelines"})],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=53-11147",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/textarea",name:"Textarea",children:[e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Textarea"})," component is used to capture and display multi-line text input from users."]}),e.jsx(s.p,{children:"It is typically used in forms where users need to provide detailed information, comments, or descriptions."})]}),`
`,e.jsx(r,{label:"Usage",level:2}),`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.strong,{children:"Textarea"})," component to allow users to enter multi-line text in forms, such as comments, messages, descriptions, or other detailed information."]}),`
`,e.jsxs(s.p,{children:["Ensure that the ",e.jsx(s.strong,{children:"Textarea"})," is appropriately sized for the expected input and provides clear guidance on what information is needed."]}),`
`,e.jsx(r,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(f,{donts:["- Don't use a Textarea for short, single-line inputs. Use an Input instead","- Don't rely on a placeholder as a substitute for a proper label since it disappears once the user starts typing","- Don't disable resizing if users are expected to write long-form content and might need a larger view"],dos:["- Use a Textarea for inputs that may span multiple lines, such as comments, descriptions, or messages","- Always pair the Textarea with a label to clearly explain what is expected","- Use helper text to provide guidance or clarify formatting when needed","- Allow scrolling or resizing if users are likely to enter long text (based on use case)","- Use Textarea for a text longer than a single line"]}),`
`,e.jsx(r,{label:"Best Practices in Context",level:3}),`
`,e.jsx(j,{src:"components/textarea/anatomy.png"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Textarea"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Placeholder or textarea text"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Resize handler"})," - optional"]}),`
`]}),`
`,e.jsx(r,{label:"Placement",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Textarea"})," should be vertically aligned with other form components on a same page."]}),`
`,e.jsx(r,{label:"Behavior",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Textarea"})," can be hovered, focused, disabled, or set to read-only."]}),`
`,e.jsx(s.p,{children:"When disabled, the component cannot be focused or interacted with."}),`
`,e.jsxs(s.p,{children:["If the user types more text than the ",e.jsx(s.strong,{children:"Textarea"})," can display, a scrollbar appears to allow scrolling."]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Textarea"})," supports native browser resizing, but it is not enabled by default."]}),`
`,e.jsx(r,{label:"Navigation",level:2}),`
`,e.jsx(r,{label:"Focus Management",level:3}),`
`,e.jsxs(s.p,{children:["When the ",e.jsx(s.strong,{children:"Textarea"})," is enabled, it can receive focus via keyboard interaction."]}),`
`,e.jsxs(s.p,{children:["A disabled ",e.jsx(s.strong,{children:"Textarea"})," cannot receive focus."]}),`
`,e.jsxs(s.p,{children:["A read-only ",e.jsx(s.strong,{children:"Textarea"})," can receive focus, allowing users to scroll and select content, but its content cannot be modified."]}),`
`,e.jsx(r,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(n,{children:"Tab"})," moves focus to the ",e.jsx(s.strong,{children:"Textarea"}),"."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(n,{children:"Shift"})," + ",e.jsx(n,{children:"Tab"})," moves focus to the previous focusable element."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(n,{children:"Enter"})," creates a new line within the ",e.jsx(s.strong,{children:"Textarea"}),"."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(n,{children:"Arrow"})," keys moves the caret within the text content."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(n,{children:"Ctrl"})," + ",e.jsx(n,{children:"Arrow Left"})," / ",e.jsx(n,{children:"Arrow Right"})," (or ",e.jsx(n,{children:"Option"})," + ",e.jsx(n,{children:"Arrow Left"})," / ",e.jsx(n,{children:"Arrow Right"})," on macOS) moves the caret by word."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(n,{children:"Home"})," / ",e.jsx(n,{children:"End"})," (or ",e.jsx(n,{children:"Cmd"}),"+ ",e.jsx(n,{children:"Arrow"})," keys on macOS) moves the caret to the beginning or end of the line."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(n,{children:"Page Up"})," / ",e.jsx(n,{children:"Page Down"})," scrolls through the content if it's longer than the visible area."]}),`
`,e.jsx(r,{label:"Accessibility",level:2}),`
`,e.jsx(s.p,{children:"To ensure proper accessibility, it must be correctly labeled, and provide live updates if a character limit is set."}),`
`,e.jsx(r,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(s.p,{children:["Every ",e.jsx(s.strong,{children:"Textarea"}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either `,e.jsx(s.strong,{children:"FormField"})," or a native label tag."]}),`
`,e.jsx(i,{of:p,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(o,{name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label and the field."]}),`
`,e.jsx(r,{label:"Linking helper text",level:3}),`
`,e.jsx(i,{of:m,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(o,{name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field and the helper text."]})]})}function te(t={}){const{wrapper:s}={...d(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(c,{...t})}):c(t)}export{te as default};
