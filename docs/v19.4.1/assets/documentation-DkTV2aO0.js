import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as m}from"./index-ZwkxtaJJ.js";import{a,l as h}from"./ods-react64-C395g5lW.js";import{k as t}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as u}from"./index-C3P7rize.js";import{P as d,O as x,A as j,a as f}from"./phone-number.stories-CCBfrOS0.js";import{A as b}from"./Anatomy-DkXJCwiR.js";import{B as g}from"./Banner-pQsjs-k1.js";import{I as y,B as v}from"./IdentityCard-BHvRCB68.js";import{C as c}from"./Canvas-ClwM1ePO.js";import{H as r}from"./Heading-DAsItneX.js";import{S as s}from"./StorybookLink-CUnNm_lF.js";import{S as i,R as l}from"./meta-DxXVpXmq.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-B-1i39SD.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-f_nl6yro.js";import"./index-CqY9YpN0.js";import"./Text-CW33_IfE.js";import"./Input-Iv7SWGNL.js";import"./context-C_-r2uoG.js";import"./useI18n-C0NLVYPv.js";import"./Button-B-GJ-1TA.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./icon-name-BpdEc4-2.js";import"./SelectControl-BHkJQAXK.js";import"./index-OHF4-eS1.js";import"./use-locale-context-Da8UBLVe.js";import"./portal-Dz6APLpY.js";import"./use-presence-BpdcDhnz.js";import"./use-event-c9j7vq_1.js";import"./index-BY2p2mzr.js";import"./index-B-pxw7wW.js";import"./use-field-context-6EvXFqGa.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./Table-DVdtSe4m-Co7uf3pc.js";import"./ExternalLink-C9tV86xX.js";import"./Link-BhqYqKFa-BDwROQOD.js";import"./Table-Bq5w2nKq.js";import"./TooltipTrigger-DxEeTVF8-B5Le9OVu.js";import"./ods-react114-5kwUyuQy.js";import"./index-lGh5KcWi.js";import"./lz-string-U2heoObX.js";import"./ResetTheme-BVzaMHe3.js";import"./tokens-VHDJ0kGa.js";import"./Divider-DmVNyNnn-DCNXheUh.js";function p(o){const n={em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:d,name:"Documentation"}),`
`,e.jsx(g,{of:d}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Phone Number"})," component is a combo of a selection of country phone indicator and an ",e.jsx(s,{kind:l.input,story:i.documentation,children:"Input"})," field for entering a phone number"]})}),`
`,e.jsx(c,{of:x,sourceState:"none"}),`
`,e.jsx(r,{label:"Overview",level:2}),`
`,e.jsx(y,{aliases:["Phone Number Field"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=48-6130",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/phone-number",name:"Phone Number",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Phone Number"}),` component is used to let users enter their phone number in the correct format for the selected
country.`]})}),`
`,e.jsx(r,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Phone Number"})," component should be used when there is a need to collect the user's phone number, in a form for instance:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"An user profile"}),`
`,e.jsx(n.li,{children:"A contact/appointment form"}),`
`,e.jsx(n.li,{children:"For telecom configuration"}),`
`]}),`
`,e.jsx(r,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(v,{donts:["- Don't enforce a rigid format (e.g., requiring users to enter parentheses or dashes), prioritize forgiving input","- Don't make the field required without context. Explain clearly why the phone number is needed (e.g., for account recovery or verification)","- Don't assume all users have mobile numbers. Allow landline formats where applicable","- Don't display country codes or formats that aren't relevant to your supported markets"],dos:["- Use the country indicator Select when your application supports international phone numbers","- Display helper text or error messaging to guide users if the input format is incorrect (e.g., expected digit count or formatting rules)","- If phone numbers are only accepted in the user's locale, use the component without the country code Select"]}),`
`,e.jsx(r,{label:"Best Practices in Context",level:3}),`
`,e.jsx(b,{src:"components/phone-number/anatomy.png"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Phone Number"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Country selector"})," - optional"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Input field"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clearable button"})," - optional"]}),`
`]}),`
`,e.jsx(r,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Phone Number"})," is a group of ",e.jsx(s,{kind:l.select,story:i.documentation,children:"Select"})," and ",e.jsx(s,{kind:l.input,story:i.documentation,children:"Input"}),", and should act as their specific placements."]}),`
`,e.jsx(r,{label:"Behavior",level:2}),`
`,e.jsx(n.p,{children:"When the user selects a country, it determines the format used to validate their phone number. If selected country has been modified, expected format and placeholder will be updated."}),`
`,e.jsxs(n.p,{children:["If the field content is in error state (i.e. missing or wrong characters), the whole ",e.jsx(n.strong,{children:"Phone Number"})," component becomes in error state."]}),`
`,e.jsx(n.p,{children:"The country selector allows users to navigate to the desired country option by typing letters while focused on the country selector."}),`
`,e.jsx(n.p,{children:"The search is based on the start of the word and functions one letter at a time."}),`
`,e.jsx(n.p,{children:"For example:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Typing "f" focus the first country that starts with "f".'}),`
`,e.jsx(n.li,{children:'Typing "r" immediately after focus the first country that starts with "r".'}),`
`]}),`
`,e.jsx(r,{label:"Locale",level:3}),`
`,e.jsxs(n.p,{children:["The locale (i.e. country list translation in ",e.jsx(s,{kind:l.select,story:i.documentation,children:"Select"}),") is first set to the value provided as a property."]}),`
`,e.jsx(n.p,{children:"If the given property is not defined or recognized, the component attempts to use the browser's locale settings."}),`
`,e.jsx(n.p,{children:"If the browser's locale is also not recognized, the component defaults to English (EN)."}),`
`,e.jsx(r,{label:"ISO code",level:3}),`
`,e.jsx(n.p,{children:"The ISO code is initially set to the value provided as a property."}),`
`,e.jsx(n.p,{children:"If the given property is not defined or recognized, the component attempts to determine the ISO code based on the browser's locale."}),`
`,e.jsx(n.p,{children:"If the browser's locale is not recognized, the component defaults to the first ISO code in the predefined country list."}),`
`,e.jsx(r,{label:"Navigation",level:2}),`
`,e.jsx(r,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Phone Number"})," component is focused, focus is first set to the country selector dropdown, if present, or directly to the Input field."]}),`
`,e.jsx(n.p,{children:"Each subcomponent (Select and Input) can be focused independently using keyboard navigation."}),`
`,e.jsx(n.p,{children:"If the country selector is disabled or not rendered, focus starts directly on the Input field."}),`
`,e.jsx(r,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(t,{children:"Tab"})," moves focus forward:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"First to the country selector (if present and enabled)"}),`
`,e.jsx(n.li,{children:"Then to the Phone Number Input field"}),`
`]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(t,{children:"Shift"})," + ",e.jsx(t,{children:"Tab"})," moves focus backward through these elements."]}),`
`,e.jsx(n.p,{children:"While focused on the country selector, keyboard shortcuts are similar to the Select component:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(t,{children:"Space"})," or ",e.jsx(t,{children:"Arrow Down"})," opens the dropdown"]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(t,{children:"Arrow"})," keys navigates through the list of countries"]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(t,{children:"Home"}),"/",e.jsx(t,{children:"fn"}),"+ ",e.jsx(t,{children:"Arrow Up"})," or ",e.jsx(t,{children:"End"}),"/",e.jsx(t,{children:"fn"})," + ",e.jsx(t,{children:"Arrow Down"})," jumps to the first or last option"]}),`
`,e.jsx(n.li,{children:"Typing letters focuses the first country whose name starts with the typed character"}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(t,{children:"Enter"})," or ",e.jsx(t,{children:"Tab"})," selects the focused country and closes the dropdown"]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(t,{children:"Escape"})," closes the dropdown without selection"]}),`
`]}),`
`,e.jsx(n.p,{children:"While focused on the Input field:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Typing numeric characters enters the phone number"}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(t,{children:"Backspace"})," deletes the last character"]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(t,{children:"Arrow Left"})," or ",e.jsx(t,{children:"Arrow Right"})," moves the cursor within the input"]}),`
`]}),`
`,e.jsx(r,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["To ensure proper accessibility, the ",e.jsx(n.strong,{children:"Phone Number"})," component must be correctly labeled and provide meaningful context when interactive elements (such as icon buttons) are used."]}),`
`,e.jsx(r,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(n.p,{children:["Every ",e.jsx(n.strong,{children:"Phone Number"})," must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose, using either ",e.jsx(n.strong,{children:"FormField"})," or a native label tag."]}),`
`,e.jsx(c,{of:j,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(a,{name:h.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field and its content."]}),`
`,e.jsx(r,{label:"Override action context",level:3}),`
`,e.jsx(n.p,{children:"To provide more context on the interactive elements, you can provide your own custom translations to the component."}),`
`,e.jsx(c,{of:f,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(a,{name:h.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field, its content and custom label of focused action."]})]})}function ye(o={}){const{wrapper:n}={...m(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(p,{...o})}):p(o)}export{ye as default};
