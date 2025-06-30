import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as d}from"./index-DQB45XCM.js";import{M as h,C as a}from"./index-D1K7mLD0.js";import{P as l,O as p}from"./phone-number.stories-CwqGdcvW.js";import{B as m}from"./Banner-B4K6Zb-5.js";import{I as u,A as x,B as j}from"./IdentityCard-Yo1l2iFh.js";import{H as t}from"./Heading-mtuBTkOf.js";import{S as r}from"./StorybookLink-DMr2bWgk.js";import{S as s,R as i}from"./meta-Ci0gAceS.js";import"./index-D_CmzhJ4.js";import"./iframe-DbJ8Lucp.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-DjB85afw.js";import"./index-CkQHsVsO.js";import"./Text-KX3Hvvn9.js";import"./Input-Pkw6XJuX.js";import"./Button-CbWLwkmI.js";import"./Spinner-BC3A9yP9.js";import"./colors-DSObuHxd.js";import"./icon-name-BOrBmUKT.js";import"./SelectControl-D8g7ZA4_.js";import"./collection-DMrs6jU3.js";import"./use-locale-context-BQVaQ0H3.js";import"./portal-Bd62KldU.js";import"./use-presence-Cqrqn20p.js";import"./use-event-OCVb0O1l.js";import"./index-xSrPfE2G.js";import"./index-DHCC0GIt.js";import"./use-field-context-A_pa20cf.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function c(o){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l,name:"Documentation"}),`
`,e.jsx(m,{of:l}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Phone Number"})," component is a combo of a selection of country phone indicator and an ",e.jsx(r,{kind:i.input,story:s.documentation,children:"Input"})," field for entering a phone number"]})}),`
`,e.jsx(a,{of:p,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(u,{aliases:["Phone Number Field"],atomicType:x.organism,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=48-6130",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/phone-number",name:"Phone Number",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Phone Number"}),` component is used to let users enter their phone number in the correct format for the selected
country.`]})}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Phone Number"})," component should be used when there is a need to collect the user's phone number, in a form for instance:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"An user profile"}),`
`,e.jsx(n.li,{children:"A contact/appointment form"}),`
`,e.jsx(n.li,{children:"For telecom configuration"}),`
`]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(j,{donts:["- Don't enforce a rigid format (e.g., requiring users to enter parentheses or dashes), prioritize forgiving input","- Don't make the field required without context. Explain clearly why the phone number is needed (e.g., for account recovery or verification)","- Don't assume all users have mobile numbers. Allow landline formats where applicable","- Don't display country codes or formats that aren't relevant to your supported markets"],dos:["- Use the country indicator Select when your application supports international phone numbers","- Display helper text or error messaging to guide users if the input format is incorrect (e.g., expected digit count or formatting rules)","- If phone numbers are only accepted in the user's locale, use the component without the country code Select"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/phone-number/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Phone Number"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Country selector"})," - optional"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Input field"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clearable button"})," - optional"]}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Phone Number"})," is a group of ",e.jsx(r,{kind:i.select,story:s.documentation,children:"Select"})," and ",e.jsx(r,{kind:i.input,story:s.documentation,children:"Input"}),", and should act as their specific placements."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsx(n.p,{children:"When the user selects a country, it determines the format used to validate their phone number. If selected country has been modified, expected format and placeholder will be updated."}),`
`,e.jsxs(n.p,{children:["If the field content is in error state (i.e. missing or wrong characters), the whole ",e.jsx(n.strong,{children:"Phone Number"})," component becomes in error state."]}),`
`,e.jsx(n.p,{children:"The country selector allows users to navigate to the desired country option by typing letters while focused on the country selector."}),`
`,e.jsx(n.p,{children:"The search is based on the start of the word and functions one letter at a time."}),`
`,e.jsx(n.p,{children:"For example:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Typing "f" focus the first country that starts with "f".'}),`
`,e.jsx(n.li,{children:'Typing "r" immediately after focus the first country that starts with "r".'}),`
`]}),`
`,e.jsx(t,{label:"Locale",level:3}),`
`,e.jsxs(n.p,{children:["The locale (i.e. country list translation in ",e.jsx(r,{kind:i.select,story:s.documentation,children:"Select"}),") is first set to the value provided as a property."]}),`
`,e.jsx(n.p,{children:"If the given property is not defined or recognized, the component attempts to use the browser's locale settings."}),`
`,e.jsx(n.p,{children:"If the browser's locale is also not recognized, the component defaults to English (EN)."}),`
`,e.jsx(t,{label:"ISO code",level:3}),`
`,e.jsx(n.p,{children:"The ISO code is initially set to the value provided as a property."}),`
`,e.jsx(n.p,{children:"If the given property is not defined or recognized, the component attempts to determine the ISO code based on the browser's locale."}),`
`,e.jsx(n.p,{children:"If the browser's locale is not recognized, the component defaults to the first ISO code in the predefined country list."}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Phone Number"})," component is focused, focus is first set to the country selector dropdown, if present, or directly to the Input field."]}),`
`,e.jsx(n.p,{children:"Each subcomponent (Select and Input) can be focused independently using keyboard navigation."}),`
`,e.jsx(n.p,{children:"If the country selector is disabled or not rendered, focus starts directly on the Input field."}),`
`,e.jsx(t,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Tab"})," moves focus forward:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"First to the country selector (if present and enabled)"}),`
`,e.jsx(n.li,{children:"Then to the Phone Number Input field"}),`
`]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Tab"})," moves focus backward through these elements."]}),`
`,e.jsx(n.p,{children:"While focused on the country selector, keyboard shortcuts are similar to the Select component:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"Space"})," or ",e.jsx(n.code,{children:"Arrow Down"})," opens the dropdown"]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"Arrow"})," keys navigates through the list of countries"]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"Home"}),"/",e.jsx(n.code,{children:"fn"}),"+ ",e.jsx(n.code,{children:"Arrow Up"})," or ",e.jsx(n.code,{children:"End"}),"/",e.jsx(n.code,{children:"fn"})," + ",e.jsx(n.code,{children:"Arrow Down"})," jumps to the first or last option"]}),`
`,e.jsx(n.li,{children:"Typing letters focuses the first country whose name starts with the typed character"}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Tab"})," selects the focused country and closes the dropdown"]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"Escape"})," closes the dropdown without selection"]}),`
`]}),`
`,e.jsx(n.p,{children:"While focused on the Input field:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Typing numeric characters enters the phone number"}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"Backspace"})," deletes the last character"]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"Arrow Left"})," or ",e.jsx(n.code,{children:"Arrow Right"})," moves the cursor within the input"]}),`
`]})]})}function ne(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{ne as default};
