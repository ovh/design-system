import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as i}from"./index-DQB45XCM.js";import{M as a,C as l}from"./index-CTRIvuAa.js";import{T as r,O as c}from"./textarea.stories-C1LPn-rX.js";import{B as d}from"./Banner-DKEGGZmZ.js";import{I as h,A as x,B as p}from"./IdentityCard-DMALWF_P.js";import{H as s}from"./Heading-BKRI_kjA.js";import"./index-D_CmzhJ4.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-DjB85afw.js";import"./index-CkQHsVsO.js";import"./Text-KX3Hvvn9.js";import"./Textarea-BHPD4BX2.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function o(t){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r,name:"Documentation"}),`
`,e.jsx(d,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Textarea"})," component allows users to input and edit multiple lines of text."]})}),`
`,e.jsx(l,{of:c,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsxs(h,{aliases:["Text Box"],atomicType:x.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=53-11147",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/textarea",name:"Textarea",children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Textarea"})," component is used to capture and display multi-line text input from users."]}),e.jsx(n.p,{children:"It is typically used in forms where users need to provide detailed information, comments, or descriptions."})]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"Textarea"})," component to allow users to enter multi-line text in forms, such as comments, messages, descriptions, or other detailed information."]}),`
`,e.jsxs(n.p,{children:["Ensure that the ",e.jsx(n.strong,{children:"Textarea"})," is appropriately sized for the expected input and provides clear guidance on what information is needed."]}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(p,{donts:["- Don't use a Textarea for short, single-line inputs. Use an Input instead","- Don't rely on a placeholder as a substitute for a proper label since it disappears once the user starts typing","- Don't disable resizing if users are expected to write long-form content and might need a larger view"],dos:["- Use a Textarea for inputs that may span multiple lines, such as comments, descriptions, or messages","- Always pair the Textarea with a label to clearly explain what is expected","- Use helper text to provide guidance or clarify formatting when needed","- Allow scrolling or resizing if users are likely to enter long text (based on use case)","- Use Textarea for a text longer than a single line"]}),`
`,e.jsx(s,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/textarea/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Textarea"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Placeholder or textarea text"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Resize handler"})," - optional"]}),`
`]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Textarea"})," should be vertically aligned with other form components on a same page."]}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Textarea"})," can be hovered, focused, disabled, or set to read-only."]}),`
`,e.jsx(n.p,{children:"When disabled, the component cannot be focused or interacted with."}),`
`,e.jsxs(n.p,{children:["If the user types more text than the ",e.jsx(n.strong,{children:"Textarea"})," can display, a scrollbar appears to allow scrolling."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Textarea"})," supports native browser resizing, but it is not enabled by default."]}),`
`,e.jsx(s,{label:"Navigation",level:2}),`
`,e.jsx(s,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Textarea"})," is enabled, it can receive focus via keyboard interaction."]}),`
`,e.jsxs(n.p,{children:["A disabled ",e.jsx(n.strong,{children:"Textarea"})," cannot receive focus."]}),`
`,e.jsxs(n.p,{children:["A read-only ",e.jsx(n.strong,{children:"Textarea"})," can receive focus, allowing users to scroll and select content, but its content cannot be modified."]}),`
`,e.jsx(s,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Tab"})," moves focus to the ",e.jsx(n.strong,{children:"Textarea"}),"."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Tab"})," moves focus to the previous focusable element."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Enter"})," creates a new line within the ",e.jsx(n.strong,{children:"Textarea"}),"."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Arrow"})," keys moves the caret within the text content."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Ctrl"})," + ",e.jsx(n.code,{children:"Arrow Left"})," / ",e.jsx(n.code,{children:"Arrow Right"})," (or ",e.jsx(n.code,{children:"Option"})," + ",e.jsx(n.code,{children:"Arrow Left"})," / ",e.jsx(n.code,{children:"Arrow Right"})," on macOS) moves the caret by word."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Home"})," / ",e.jsx(n.code,{children:"End"})," (or ",e.jsx(n.code,{children:"Cmd"}),"+ ",e.jsx(n.code,{children:"Arrow"})," keys on macOS) moves the caret to the beginning or end of the line."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Page Up"})," / ",e.jsx(n.code,{children:"Page Down"})," scrolls through the content if it's longer than the visible area."]})]})}function E(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{E as default};
