import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as c}from"./index-DQB45XCM.js";import{a as o,o as i}from"./ods-react61-BFiU7C5S.js";import{M as d,C as r}from"./index-DQDMPrC3.js";import{T as a,O as h,A as x,a as p}from"./textarea.stories-DS0IJqS-.js";import{B as m}from"./Banner-D5YsTkFA.js";import{I as j,B as u}from"./IdentityCard-C39Eam7s.js";import{H as n}from"./Heading-BTR1K1mm.js";import"./ExternalLink-F7ndcp9T.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-llaHorau.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-DQkMrZpp.js";import"./index-CkQHsVsO.js";import"./Text-B1XN51Xz.js";import"./Textarea-DJ9iXjLq.js";import"./controls-BtiQQn1l.js";import"./source-d0g_Nd0q.js";import"./Divider-DwZugXnI-RR--JbES.js";import"./ods-react222-B9lkGKUh.js";import"./Link-DTswNFmS-CEk9YBDP.js";function l(t){const s={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a,name:"Documentation"}),`
`,e.jsx(m,{of:a}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:["A ",e.jsx(s.strong,{children:"Textarea"})," component allows users to input and edit multiple lines of text."]})}),`
`,e.jsx(r,{of:h,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsxs(j,{aliases:["Text Box"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=53-11147",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/textarea",name:"Textarea",children:[e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Textarea"})," component is used to capture and display multi-line text input from users."]}),e.jsx(s.p,{children:"It is typically used in forms where users need to provide detailed information, comments, or descriptions."})]}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.strong,{children:"Textarea"})," component to allow users to enter multi-line text in forms, such as comments, messages, descriptions, or other detailed information."]}),`
`,e.jsxs(s.p,{children:["Ensure that the ",e.jsx(s.strong,{children:"Textarea"})," is appropriately sized for the expected input and provides clear guidance on what information is needed."]}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:["- Don't use a Textarea for short, single-line inputs. Use an Input instead","- Don't rely on a placeholder as a substitute for a proper label since it disappears once the user starts typing","- Don't disable resizing if users are expected to write long-form content and might need a larger view"],dos:["- Use a Textarea for inputs that may span multiple lines, such as comments, descriptions, or messages","- Always pair the Textarea with a label to clearly explain what is expected","- Use helper text to provide guidance or clarify formatting when needed","- Allow scrolling or resizing if users are likely to enter long text (based on use case)","- Use Textarea for a text longer than a single line"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"components/textarea/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Textarea"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Placeholder or textarea text"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Resize handler"})," - optional"]}),`
`]}),`
`,e.jsx(n,{label:"Placement",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Textarea"})," should be vertically aligned with other form components on a same page."]}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Textarea"})," can be hovered, focused, disabled, or set to read-only."]}),`
`,e.jsx(s.p,{children:"When disabled, the component cannot be focused or interacted with."}),`
`,e.jsxs(s.p,{children:["If the user types more text than the ",e.jsx(s.strong,{children:"Textarea"})," can display, a scrollbar appears to allow scrolling."]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Textarea"})," supports native browser resizing, but it is not enabled by default."]}),`
`,e.jsx(n,{label:"Navigation",level:2}),`
`,e.jsx(n,{label:"Focus Management",level:3}),`
`,e.jsxs(s.p,{children:["When the ",e.jsx(s.strong,{children:"Textarea"})," is enabled, it can receive focus via keyboard interaction."]}),`
`,e.jsxs(s.p,{children:["A disabled ",e.jsx(s.strong,{children:"Textarea"})," cannot receive focus."]}),`
`,e.jsxs(s.p,{children:["A read-only ",e.jsx(s.strong,{children:"Textarea"})," can receive focus, allowing users to scroll and select content, but its content cannot be modified."]}),`
`,e.jsx(n,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Tab"})," moves focus to the ",e.jsx(s.strong,{children:"Textarea"}),"."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Shift"})," + ",e.jsx(s.code,{children:"Tab"})," moves focus to the previous focusable element."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Enter"})," creates a new line within the ",e.jsx(s.strong,{children:"Textarea"}),"."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Arrow"})," keys moves the caret within the text content."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Ctrl"})," + ",e.jsx(s.code,{children:"Arrow Left"})," / ",e.jsx(s.code,{children:"Arrow Right"})," (or ",e.jsx(s.code,{children:"Option"})," + ",e.jsx(s.code,{children:"Arrow Left"})," / ",e.jsx(s.code,{children:"Arrow Right"})," on macOS) moves the caret by word."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Home"})," / ",e.jsx(s.code,{children:"End"})," (or ",e.jsx(s.code,{children:"Cmd"}),"+ ",e.jsx(s.code,{children:"Arrow"})," keys on macOS) moves the caret to the beginning or end of the line."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Page Up"})," / ",e.jsx(s.code,{children:"Page Down"})," scrolls through the content if it's longer than the visible area."]}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsx(s.p,{children:"To ensure proper accessibility, it must be correctly labeled, and provide live updates if a character limit is set."}),`
`,e.jsx(n,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(s.p,{children:["Every ",e.jsx(s.strong,{children:"Textarea"}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either `,e.jsx(s.strong,{children:"FormField"})," or a native label tag."]}),`
`,e.jsx(r,{of:x,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(o,{name:i.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label and the field."]}),`
`,e.jsx(n,{label:"Linking helper text",level:3}),`
`,e.jsx(r,{of:p,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(o,{name:i.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field and the helper text."]})]})}function K(t={}){const{wrapper:s}={...c(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(l,{...t})}):l(t)}export{K as default};
