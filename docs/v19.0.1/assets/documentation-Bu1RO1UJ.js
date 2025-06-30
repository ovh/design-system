import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as r}from"./index-DQB45XCM.js";import{M as a,C as l}from"./index-D1K7mLD0.js";import{I as i,O as c}from"./input.stories-BkxvScJF.js";import{B as d}from"./Banner-B4K6Zb-5.js";import{I as h,A as p,B as u}from"./IdentityCard-Yo1l2iFh.js";import{H as n}from"./Heading-mtuBTkOf.js";import"./StorybookLink-DMr2bWgk.js";import"./index-D_CmzhJ4.js";import"./iframe-DbJ8Lucp.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-DjB85afw.js";import"./index-CkQHsVsO.js";import"./Text-KX3Hvvn9.js";import"./Input-Pkw6XJuX.js";import"./Button-CbWLwkmI.js";import"./Spinner-BC3A9yP9.js";import"./colors-DSObuHxd.js";import"./icon-name-BOrBmUKT.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function o(s){const t={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i,name:"Documentation"}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:[e.jsx(t.strong,{children:"Input"})," component is an ",e.jsx(t.strong,{children:"Input"})," field where users can type into"]})}),`
`,e.jsx(l,{of:c,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(h,{aliases:["Text Input","Text Field"],atomicType:p.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=93-22570",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/input",name:"Input",children:e.jsxs(t.p,{children:["An ",e.jsx(t.strong,{children:"Input"})," is used to allow the user to enter a single line information in a field."]})}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:["An ",e.jsx(t.strong,{children:"Input"})," is used to type a free-form short text in a field. It is often used within a Form Field component that adds its label."]}),`
`,e.jsx(t.p,{children:"It is commonly used in a form, such as asking the user their name or email address, data entered can be text or numbers."}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Input"})," component can be used in addition with an ",e.jsx(t.strong,{children:"Autocomplete"}),"."]}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:["- Don't use an Input for multi-line content, use a Textarea instead","- Don't use an Input when users must choose from a predefined set of answers. Prefer Select, Combobox, or Radio","- Don't leave an Input without a label","- Don't overload the Input with multiple embedded actions (e.g., clear + search + toggle) since it creates visual clutter","- Don't use an Input that is inappropriately sized for its content"],dos:["- Always pair the Input with a clear and explicit label, using the Form Field component for example","- Provide a helper message or validation feedback below the Input when appropriate (e.g., expected format or error state)","- Use the clearable button option when it helps users reset the field quickly and efficiently","- Use the toggle mask button for sensitive inputs to let users show or hide the content","- Include a search button within the Input if a specific action is expected (e.g., triggering a search)","- Choose the appropriate input type (email, password, search, etc.) to support native validation"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"components/input/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Input"})}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Placeholder or input text"})}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Clearable button"})," - optional"]}),`
`]}),`
`,e.jsx(n,{label:"Placement",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Input"})," should be vertically aligned with other form components on a same page."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Inputs"})," that are strongly related in a form can be grouped. This group can flow horizontally left to right and/or vertically top to bottom."]}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Inputs"})," can be hovered, focused and clicked / triggered. They can be disabled or readonly as well."]}),`
`,e.jsxs(t.p,{children:["The user can start typing in the ",e.jsx(t.strong,{children:"Input"})," after clicking or focusing on the field container."]}),`
`,e.jsxs(t.p,{children:["A clearable button can be displayed within the ",e.jsx(t.strong,{children:"Input"})," to clear its content. This button becomes visible as soon as the user types the first character and removes all content when clicked."]}),`
`,e.jsxs(t.p,{children:["A toggle mask button can be displayed within the ",e.jsx(t.strong,{children:"Input"})," to toggle the visibility of its content, such as revealing or hiding a password in a masked input."]}),`
`,e.jsxs(t.p,{children:["A search button can be displayed within the ",e.jsx(t.strong,{children:"Input"})," to trigger a specific action, such as performing a search."]}),`
`,e.jsx(n,{label:"Navigation",level:2}),`
`,e.jsx(n,{label:"Focus Management",level:3}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Input"})," field receives focus as part of the natural tab order."]}),`
`,e.jsxs(t.p,{children:["If a clear button is present, it becomes focusable immediately after the ",e.jsx(t.strong,{children:"Input"})," field."]}),`
`,e.jsx(t.p,{children:"If a toggle mask button (show/hide password) is present, it becomes focusable after the clear button."}),`
`,e.jsxs(t.p,{children:["If a search button is present, it becomes focusable after the other ",e.jsx(t.strong,{children:"Input"})," action buttons."]}),`
`,e.jsxs(t.p,{children:["If the ",e.jsx(t.strong,{children:"Input"})," field is read-only, it can still receive focus but cannot be edited."]}),`
`,e.jsxs(t.p,{children:["If the ",e.jsx(t.strong,{children:"Input"})," is disabled, it is  skipped in the tab order and cannot be edited."]}),`
`,e.jsx(n,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Tab"})," moves focus forward."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Shift"})," + ",e.jsx(t.code,{children:"Tab"})," moves focus backward to the previous interactive element."]}),`
`,e.jsxs(t.p,{children:["Typing any character while the ",e.jsx(t.strong,{children:"Input"})," field is focused enters text into the field."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Backspace"})," deletes the character preceding the cursor."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Enter"})," while a clear, toggle mask, or search button is focused triggers the corresponding action."]})]})}function K(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(o,{...s})}):o(s)}export{K as default};
