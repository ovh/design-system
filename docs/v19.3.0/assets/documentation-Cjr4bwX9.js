import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as c}from"./index-ZwkxtaJJ.js";import{t as i,l as o}from"./ods-react60-DssFCbzP.js";import{M as d}from"./index-9orhCFJa.js";import{I as a,O as p,A as h,a as u}from"./input.stories-Speh5HjB.js";import{A as m}from"./Anatomy-DkXJCwiR.js";import{B as x}from"./Banner-DiJ2utjo.js";import{I as j,B as g}from"./IdentityCard-0vzhW5ZM.js";import{C as r}from"./Canvas-CreDMEws.js";import{H as n}from"./Heading-eINcjqM4.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-BRevKSH1.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-B8-lDkmb.js";import"./index-CqY9YpN0.js";import"./Text-DyiJ5nHV.js";import"./Input-DRCIBq_k.js";import"./useI18n-C0NLVYPv.js";import"./Button-B-GJ-1TA.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./icon-name-C581wThh.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./Table-BvR76ybm-DzE94PQp.js";import"./ExternalLink-C0Msq_QQ.js";import"./Link-CIjoG_UN-BDwROQOD.js";import"./Table-u83oGl00.js";import"./TooltipTrigger-CizyLvLy-D53hI2Ct.js";import"./index-blQ1D1fB.js";import"./lz-string-U2heoObX.js";import"./meta-t9Q7ez2Q.js";import"./ResetTheme-BVzaMHe3.js";import"./tokens-VHDJ0kGa.js";function l(s){const t={code:"code",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a,name:"Documentation"}),`
`,e.jsx(x,{of:a}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:[e.jsx(t.strong,{children:"Input"})," component is an ",e.jsx(t.strong,{children:"Input"})," field where users can type into"]})}),`
`,e.jsx(r,{of:p,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(j,{aliases:["Text Input","Text Field"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=93-22570",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/input",name:"Input",children:e.jsxs(t.p,{children:["An ",e.jsx(t.strong,{children:"Input"})," is used to allow the user to enter a single line information in a field."]})}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:["An ",e.jsx(t.strong,{children:"Input"})," is used to type a free-form short text in a field. It is often used within a Form Field component that adds its label."]}),`
`,e.jsx(t.p,{children:"It is commonly used in a form, such as asking the user their name or email address, data entered can be text or numbers."}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Input"})," component can be used in addition with an ",e.jsx(t.strong,{children:"Autocomplete"}),"."]}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(g,{donts:["- Don't use an Input for multi-line content, use a Textarea instead","- Don't use an Input when users must choose from a predefined set of answers. Prefer Select, Combobox, or Radio","- Don't leave an Input without a label","- Don't overload the Input with multiple embedded actions (e.g., clear + search + toggle) since it creates visual clutter","- Don't use an Input that is inappropriately sized for its content"],dos:["- Always pair the Input with a clear and explicit label, using the Form Field component for example","- Provide a helper message or validation feedback below the Input when appropriate (e.g., expected format or error state)","- Use the clearable button option when it helps users reset the field quickly and efficiently","- Use the toggle mask button for sensitive inputs to let users show or hide the content","- Include a search button within the Input if a specific action is expected (e.g., triggering a search)","- Choose the appropriate input type (email, password, search, etc.) to support native validation"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(m,{src:"components/input/anatomy.png"}),`
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
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Enter"})," while a clear, toggle mask, or search button is focused triggers the corresponding action."]}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsxs(t.p,{children:["To ensure proper accessibility, the ",e.jsx(t.strong,{children:"Input"})," component must be correctly labeled and provide meaningful context when interactive elements (such as icon buttons) are used."]}),`
`,e.jsx(n,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(t.p,{children:["Every ",e.jsx(t.strong,{children:"Input"}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either `,e.jsx(t.strong,{children:"FormField"})," or a native label tag."]}),`
`,e.jsx(r,{of:h,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:[e.jsx(i,{name:o.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field and its content."]}),`
`,e.jsx(n,{label:"Override action context",level:3}),`
`,e.jsx(t.p,{children:"To provide more context on the interactive elements, you can provide your own custom translations to the component."}),`
`,e.jsx(r,{of:u,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:[e.jsx(i,{name:o.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field, its content and custom label of focused action."]})]})}function ne(s={}){const{wrapper:t}={...c(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(l,{...s})}):l(s)}export{ne as default};
