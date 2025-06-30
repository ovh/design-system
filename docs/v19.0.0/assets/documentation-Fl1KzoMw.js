import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as i}from"./index-DQB45XCM.js";import{M as a,C as l}from"./index-CTRIvuAa.js";import{P as o,O as d}from"./password.stories-BaIwNHMF.js";import{B as c}from"./Banner-DKEGGZmZ.js";import{I as h,A as p,B as m}from"./IdentityCard-DMALWF_P.js";import{H as n}from"./Heading-BKRI_kjA.js";import{S as u}from"./StorybookLink-DMr2bWgk.js";import{S as x,R as g}from"./meta-Ci0gAceS.js";import"./index-D_CmzhJ4.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-DjB85afw.js";import"./index-CkQHsVsO.js";import"./Text-KX3Hvvn9.js";import"./Input-Pkw6XJuX.js";import"./Button-CbWLwkmI.js";import"./Spinner-BC3A9yP9.js";import"./colors-DSObuHxd.js";import"./icon-name-BOrBmUKT.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function r(t){const s={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:o,name:"Documentation"}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:[e.jsx(s.strong,{children:"Password"})," component is an ",e.jsx(u,{kind:g.input,story:x.documentation,children:"Input"})," field for entering a password that can be hidden or not."]})}),`
`,e.jsx(l,{of:d,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(h,{aliases:["Password field","Password input"],atomicType:p.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=48-4526",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/password",name:"Password",children:e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Password"}),` component is an Input field of which the content is replaced with middle dot symbol symbols "·" by default and
the masking can be toggled using a show/hide action.`]})}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(s.p,{children:["A ",e.jsx(s.strong,{children:"Password"})," is mainly used to let users enter a password or secret information."]}),`
`,e.jsx(s.p,{children:"Entered password can be masked or visible as plain text when users need to check what they have entered."}),`
`,e.jsx(s.p,{children:"It can also be used for displaying tokens."}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(m,{donts:["- Don't use the Password component when users need to see what they're typing by default, use a standard Input instead","- Don't hide the label. Users should always know what the Password field is for","- Don't use Passwords for non-sensitive or public information; this could cause unnecessary friction","- Don't rely only on placeholders to communicate password requirements","- Don't remove the toggle visibility option unless there is a strong security or UX reason to do so"],dos:["- Use the Password component for sensitive inputs, such as login credentials, tokens, or API keys","- Use the read-only mode for displaying generated tokens or credentials that users may need to copy, without editing","- Pair Password fields with clear labels and helper texts for expected format or complexity requirements"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"components/password/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Password"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Placeholder or input text"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Show/Hide button"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Clearable button"})," - optional"]}),`
`]}),`
`,e.jsx(n,{label:"Placement",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Password"})," should be vertically aligned with other form components on a same page."]}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Password"})," can be used in read-only mode, especially for displaying sensitive tokens."]}),`
`,e.jsx(s.p,{children:"Users can toggle the password masking (show/hide) by clicking an action button. The selected visibility state remains until the user clicks again."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Password"})," supports a clear action to quickly reset its content."]}),`
`,e.jsx(s.p,{children:"A loading state can be displayed inside the field when needed, for example during validation or processing."}),`
`,e.jsx(n,{label:"Navigation",level:2}),`
`,e.jsx(n,{label:"Focus Management",level:3}),`
`,e.jsx(s.p,{children:"When tabbing through the page, the Password field receives focus as part of the natural tab order."}),`
`,e.jsx(s.p,{children:"If present, the clear button is focusable immediately after the Password field."}),`
`,e.jsx(s.p,{children:"If present, the toggle mask button (show/hide password) is focusable after the clear button."}),`
`,e.jsx(s.p,{children:"If the Password field is read-only, it can still receive focus but cannot be edited."}),`
`,e.jsx(n,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Tab"})," moves focus forward."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Shift"})," + ",e.jsx(s.code,{children:"Tab"})," moves focus backward to the previous interactive element."]}),`
`,e.jsx(s.p,{children:"Pressing any character key while the Password field is focused enters text into the field (unless it is read-only)."}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Backspace"})," deletes the last character before the cursor position."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Enter"})," while the clear button is focused clears the Password content."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Enter"})," while the toggle mask button is focused toggles between showing and hiding the field content."]})]})}function G(t={}){const{wrapper:s}={...i(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(r,{...t})}):r(t)}export{G as default};
