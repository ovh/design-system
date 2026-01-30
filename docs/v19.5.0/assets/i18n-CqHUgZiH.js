import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as m}from"./index-ZwkxtaJJ.js";import{M as h,S as i}from"./index-Cw5r0Kn8.js";import{E as r}from"./ExternalLink-C5hGBmwh.js";import{H as o}from"./Heading-Dep_rTif.js";import{r as u}from"./ods-react108-l5fgq-IX.js";import{e as c}from"./index-jIWwRBLr.js";import{S as s}from"./StorybookLink-DQwP2BEI.js";import{S as a,R as l}from"./meta-DcQbZjt_.js";import"./iframe-DCzti3mm.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ods-react67-C395g5lW.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./Link-TMoA1i18-BDwROQOD.js";import"./Divider-wQyo85oE-CpSK6tnQ.js";import"./index-CSeLFT3z.js";const p=()=>c.createElement("ul",null,u.map(n=>c.createElement("li",{key:n},n)));p.__docgenInfo={description:"",methods:[],displayName:"OdsLocaleList"};function d(n){const t={code:"code",img:"img",li:"li",p:"p",ul:"ul",...m(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"OVHcloud Design System/Guides/Internationalization"}),`
`,e.jsx(o,{label:"Internationalization",level:1}),`
`,e.jsx(t.p,{children:"ODS does not embed any i18n library, as most of the translatable contents are coming from the integration side."}),`
`,e.jsx(t.p,{children:"There are two exceptions, components with full embedded translation and components with default translation on some accessibility attribute."}),`
`,e.jsx(o,{label:"Embedded translation",level:2}),`
`,e.jsx(t.p,{children:"So far, only the following components internally manage a complete translation system:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(s,{kind:l.datepicker,story:a.documentation,children:"Datepicker"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(s,{kind:l.phoneNumber,story:a.documentation,children:"Phone number"}),`
`]}),`
`]}),`
`,e.jsxs(t.p,{children:["Both are relying on the native ",e.jsx(r,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl",children:"Intl"})," feature."]}),`
`,e.jsxs(t.p,{children:["They do de-facto support the same locales as ",e.jsx(r,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl",children:"Intl"}),"."]}),`
`,e.jsx(o,{label:"ODS specific translation",level:2}),`
`,e.jsx(t.p,{children:`Although you have complete control on label translation when using the ODS components, there are a few internal elements
that need a textual description for accessibility purpose.`}),`
`,e.jsxs(t.p,{children:["For example, take the ",e.jsx(s,{kind:l.message,story:a.documentation,children:"Message"})," component:"]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"components/message/anatomy-i18n.png",alt:"i18n anatomy",title:"i18n anatomy"})}),`
`,e.jsxs(t.p,{children:["Here, the close button needs to have the right ",e.jsx(t.code,{children:"aria-label"}),` value set for accessibility compliance.
Though the element is not part of the composable components, it is internal.`]}),`
`,e.jsxs(t.p,{children:["By default, ODS will provide a default ",e.jsx(t.code,{children:"aria-label"}),` message for all locales that we currently support.
So if you use the component as-is, it will be accessible already.`]}),`
`,e.jsxs(t.p,{children:["In case you want to change the locale to one supported by ODS, you can use the ",e.jsx(t.code,{children:"locale"})," attribute of the component."]}),`
`,e.jsx(i,{code:`
// This will change the close button aria-label to the french version
<Message locale="fr">
  <MessageBody>
    Mon message
  </MessageBody>
</Message>
`,dark:"true",language:"tsx"}),`
`,e.jsxs(t.p,{children:["If the ",e.jsx(t.code,{children:"locale"})," is not set, the component will try to use the navigator languages by default."]}),`
`,e.jsxs(t.p,{children:[`In case you want to change to a locale not supported by ODS, or you want to override the default messages,
you can set your own translation using the `,e.jsx(t.code,{children:"i18n"})," attribute of the component."]}),`
`,e.jsx(i,{code:`
// This will change the close button aria-label to your own string
<Message i18n={{ [MESSAGE_I18N.closeButton]: 'Remove the notification' }}>
  <MessageBody>
    Mon message
  </MessageBody>
</Message>
`,dark:"true",language:"tsx"}),`
`,e.jsx(o,{label:"ODS supported locale",level:2}),`
`,e.jsx(t.p,{children:"Current locales supported by ODS:"}),`
`,e.jsx(p,{})]})}function R(n={}){const{wrapper:t}={...m(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(d,{...n})}):d(n)}export{R as default};
