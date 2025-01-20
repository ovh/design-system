import{j as e,M as d,C as c}from"./index-aSJOi-xY.js";import{u as m}from"./index-D_oymSD0.js";import{F as r,O as p}from"./form-field.stories-B5aWaPlp.js";import{B as h}from"./Banner-DfBQCKAd.js";import{I as u,A as x,B as f}from"./IdentityCard-bFWvbFx8.js";import{H as i}from"./Heading-fUBW5LMg.js";import{S as n,O as o,a as s}from"./StorybookLink-CdkDDCl2.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";import"./index-B1WyGMUD.js";import"./index-DduIf26o.js";function l(a){const t={em:"em",img:"img",p:"p",span:"span",strong:"strong",...m(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r,name:"Documentation"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:["A ",e.jsx(t.strong,{children:"Form Field"})," component is used to wrap several form components with logic, visual hints and additional styling"]})}),`
`,e.jsx(c,{of:p,sourceState:"none"}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsx(u,{aliases:["Form Control"],atomicType:x.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=172-11996",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/form-field",name:"Form Field",relatedComponents:[{name:"Checkbox",subtitle:"Form elements"},{name:"File Upload",subtitle:"Form elements"},{name:"Input",subtitle:"Form elements"},{name:"Password",subtitle:"Form elements"},{name:"Phone Number",subtitle:"Form elements"},{name:"Quantity",subtitle:"Form elements"},{name:"Radio",subtitle:"Form elements"},{name:"Range",subtitle:"Form elements"},{name:"Select",subtitle:"Form elements"},{name:"Switch",subtitle:"Form elements"},{name:"Textarea",subtitle:"Form elements"},{name:"Timepicker",subtitle:"Form elements"},{name:"Toggle",subtitle:"Form elements"}],children:e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Form Field"}),` is based on a single form element or group components as a whole that are decorated with additional
`,e.jsx(n,{kind:o.text,label:"Text",story:s.documentation}),` to handle specific types of information, like a
`,e.jsx(n,{kind:o.password,label:"Password",story:s.documentation})," field for example."]})}),`
`,e.jsx(i,{label:"Anatomy",level:2}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"components/form-field/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsx(i,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Form Field"})," is used to wrap a field that can be customized with some additional information about this field."]}),`
`,e.jsx(t.p,{children:"Additional information (label, placeholder, helper message) provides hint and help to users, so that they can easily understand what is required from them in a form."}),`
`,e.jsx(t.p,{children:"Users will also type or enter information in the expected format and avoid mistakes."}),`
`,e.jsx(i,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(f,{donts:[e.jsxs(t.span,{children:["- Use a Form Field for content longer than a single line: Use a ",e.jsx(n,{kind:o.textarea,label:"Textarea",story:s.documentation})," instead"]}),e.jsxs(t.span,{children:["- Use an Input when you have a predefined list of answers: use a ",e.jsx(n,{kind:o.select,label:"Select",story:s.documentation})," or ",e.jsx(n,{kind:o.radio,label:"Radio",story:s.documentation})," Buttons instead"]}),"- Use * to mark the mandatory fields","- Overuse content related Form Fields with top aligned label in one group since it requires quite vertical space: split into smaller groups",e.jsxs(t.span,{children:["- Use interactive content such as a ",e.jsx(n,{kind:o.link,label:"Link",story:s.documentation})," or a ",e.jsx(n,{kind:o.button,label:"Button",story:s.documentation})," inside the Form Field label"]})],dos:["- Use several Form Fields for strongly related content and/or fields","- Use a Form Fields to help users to fill in a form",e.jsxs(t.span,{children:["- Remember to use a field with a length proportional to the expected user ",e.jsx(n,{kind:o.input,label:"Input",story:s.documentation})]}),"- Group when you need to combine related components into a whole new one"]}),`
`,e.jsx(i,{label:"Placement",level:2}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Form Field"})," can be used everywhere in a page where there is a form and users may need help to fill in this form."]}),`
`,e.jsx(i,{label:"Behavior",level:2}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Form Field"})," can react to a field validation, especially on its border and in addition to a helper (if necessary)."]}),`
`,e.jsxs(t.p,{children:["If the field is in error state, an error message is displayed below the helper ",e.jsx(n,{kind:o.text,label:"Text",story:s.documentation})," when it exists. When no helper ",e.jsx(n,{kind:o.text,label:"Text",story:s.documentation})," exists, the error message is displayed below the form component."]}),`
`,e.jsx(i,{label:"Variation",level:2}),`
`,e.jsx(t.p,{children:"N/A"}),`
`,e.jsx(i,{label:"Accessibility",level:2}),`
`,e.jsxs(t.p,{children:["Label, helpers and extra field information have to be readable to the user when navigating in on a ",e.jsx(t.strong,{children:"Form Field"}),"."]}),`
`,e.jsx(t.p,{children:"For the center part, the reading order for screen readers is components from left to right."})]})}function P(a={}){const{wrapper:t}={...m(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(l,{...a})}):l(a)}export{P as default};
