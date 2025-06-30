import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as r}from"./index-DQB45XCM.js";import{M as l,C as a}from"./index-CTRIvuAa.js";import{C as i,O as d}from"./clipboard.stories-D60I2rde.js";import{B as c}from"./Banner-DKEGGZmZ.js";import{I as p,A as h,B as m}from"./IdentityCard-DMALWF_P.js";import{H as t}from"./Heading-BKRI_kjA.js";import"./StorybookLink-DMr2bWgk.js";import"./index-D_CmzhJ4.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ClipboardTrigger-CLwkTjg3.js";import"./index-CkQHsVsO.js";import"./use-locale-context-BQVaQ0H3.js";import"./Input-Pkw6XJuX.js";import"./Button-CbWLwkmI.js";import"./Spinner-BC3A9yP9.js";import"./colors-DSObuHxd.js";import"./FormFieldLabel-DjB85afw.js";import"./Text-KX3Hvvn9.js";import"./icon-name-BOrBmUKT.js";import"./TooltipTrigger-DmpQ7Q38.js";import"./overlay-CZHjGBMC.js";import"./portal-Bd62KldU.js";import"./use-presence-Cqrqn20p.js";import"./use-event-OCVb0O1l.js";import"./index-DoGvXrgL.js";import"./index-xSrPfE2G.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function s(n){const o={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:i,name:"Documentation"}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(o.p,{children:e.jsxs(o.em,{children:[e.jsx(o.strong,{children:"Clipboard"})," component allows user to view and copy information to its ",e.jsx(o.strong,{children:"Clipboard"}),"."]})}),`
`,e.jsx(a,{of:d,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(p,{aliases:["Copy Component","Copy to Clipboard"],atomicType:h.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=26-7351",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/clipboard",name:"Clipboard",children:e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Clipboard"})," component is used to copy quickly and easily a text, a link and more to the ",e.jsx(o.strong,{children:"Clipboard"}),"."]})}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Clipboard"})," is used to quickly and easily copy an amount of text to the user's ",e.jsx(o.strong,{children:"Clipboard"}),"."]}),`
`,e.jsx(o.p,{children:"It can be used when it is considered that it will cause trouble for the user to select and copy a text."}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(m,{donts:["- Don't use the Clipboard just to display static text, use a read-only Input or Text component instead","- Don't display text that should be editable in a Clipboard, this component is read-only by nature","- Don't place the Clipboard in contexts where copying is unnecessary or irrelevant"],dos:["- Use the Clipboard component to allow users to easily copy non-editable text, such as tokens, or IDs","- Use Clipboard when copying text manually would be error-prone or tedious","- Use the mask/unmask toggle appropriately for sensitive content, like passwords or tokens"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(o.p,{children:e.jsx(o.img,{src:"components/clipboard/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(o.ol,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Clipboard"})}),`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Input text"})}),`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Copy button"})}),`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Tooltip"})}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Show/Hide button"})," - optional"]}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(o.p,{children:["By default, the ",e.jsx(o.strong,{children:"Clipboard"})," content is left-aligned in its container."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Clipboard"}),"'s Tooltip is right-aligned after the component by default, and vertically centered."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Clipboard"}),` can be focused and hovered. They can be disabled.
When disabled, the component can't be hovered, focused nor clicked.`]}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.strong,{children:"Clipboard"})," component is used as read-only, to allow users to copy a predefined text that cannot be edited directly."]}),`
`,e.jsx(o.p,{children:"Even if no visual indicator prompts the user to do so, the user can select the text directly in the Input."}),`
`,e.jsxs(o.p,{children:["The trigger for copying the Input field content to the ",e.jsx(o.strong,{children:"Clipboard"}),' is the "copy" button.']}),`
`,e.jsx(o.p,{children:"When hovering or focusing, a Tooltip is displayed as a helper."}),`
`,e.jsx(o.p,{children:"The clipboard masking toggled using show/hide action is permanent. Users have to click again to show/hide the Input field content."}),`
`,e.jsxs(o.p,{children:['A confirmation Tooltip is displayed (if user is still hovering the "copy" button) when ',e.jsx(o.strong,{children:"Clipboard"})," content has been successfully copied."]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus Management",level:3}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.strong,{children:"Clipboard"})," receives focus as part of the natural tab order. Copy button becomes focusable immediately after the ",e.jsx(o.strong,{children:"Clipboard"}),"."]}),`
`,e.jsxs(o.p,{children:["If the ",e.jsx(o.strong,{children:"Clipboard"})," is disabled, it is  skipped in the tab order and cannot be focused."]}),`
`,e.jsx(t,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Ctrl"})," + ",e.jsx(o.code,{children:"C"})," (or ",e.jsx(o.code,{children:"Cmd"})," + ",e.jsx(o.code,{children:"C"})," on macOS) while the input field is focused copies the selected text."]}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Enter"})," or ",e.jsx(o.code,{children:"Space"})," when the copy button is focused triggers the copy action (button component behavior)."]})]})}function V(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{V as default};
