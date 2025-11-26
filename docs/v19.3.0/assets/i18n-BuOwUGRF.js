import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as m}from"./index-ZwkxtaJJ.js";import{M as p,S as i}from"./index-9orhCFJa.js";import{E as r}from"./ExternalLink-C0Msq_QQ.js";import{H as o}from"./Heading-eINcjqM4.js";import{r as u}from"./ods-react95-l5fgq-IX.js";import{e as c}from"./index-jIWwRBLr.js";import{S as s}from"./StorybookLink-CMOdzit3.js";import{S as a,R as l}from"./meta-t9Q7ez2Q.js";import"./iframe-BRevKSH1.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ods-react60-DssFCbzP.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./Link-CIjoG_UN-BDwROQOD.js";import"./index-blQ1D1fB.js";const h=()=>c.createElement("ul",null,u.map(t=>c.createElement("li",{key:t},t)));h.__docgenInfo={description:"",methods:[],displayName:"OdsLocaleList"};function d(t){const n={code:"code",img:"img",li:"li",p:"p",ul:"ul",...m(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"OVHcloud Design System/Guides/Internationalization"}),`
`,e.jsx(o,{label:"Internationalization",level:1}),`
`,e.jsx(n.p,{children:"ODS does not embed any i18n library, as most of the translatable contents are coming from the integration side."}),`
`,e.jsx(n.p,{children:"There are two exceptions, components with full embedded translation and components with default translation on some accessibility attribute."}),`
`,e.jsx(o,{label:"Embedded translation",level:2}),`
`,e.jsx(n.p,{children:"So far, only the following components internally manage a complete translation system:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{kind:l.datepicker,story:a.documentation,children:"Datepicker"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{kind:l.phoneNumber,story:a.documentation,children:"Phone number"}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Both are relying on the native ",e.jsx(r,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl",children:"Intl"})," feature."]}),`
`,e.jsxs(n.p,{children:["They do de-facto support the same locales as ",e.jsx(r,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl",children:"Intl"}),"."]}),`
`,e.jsx(o,{label:"ODS specific translation",level:2}),`
`,e.jsx(n.p,{children:`Although you have complete control on label translation when using the ODS components, there are a few internal elements
that need a textual description for accessibility purpose.`}),`
`,e.jsxs(n.p,{children:["For example, take the ",e.jsx(s,{kind:l.message,story:a.documentation,children:"Message"})," component:"]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/message/anatomy-i18n.png",alt:"i18n anatomy",title:"i18n anatomy"})}),`
`,e.jsxs(n.p,{children:["Here, the close button needs to have the right ",e.jsx(n.code,{children:"aria-label"}),` value set for accessibility compliance.
Though the element is not part of the composable components, it is internal.`]}),`
`,e.jsxs(n.p,{children:["By default, ODS will provide a default ",e.jsx(n.code,{children:"aria-label"}),` message for all locales that we currently support.
So if you use the component as-is, it will be accessible already.`]}),`
`,e.jsxs(n.p,{children:["In case you want to change the locale to one supported by ODS, you can use the ",e.jsx(n.code,{children:"locale"})," attribute of the component."]}),`
`,e.jsx(i,{code:`
// This will change the close button aria-label to the french version
<Message locale="fr">
  <MessageBody>
    Mon message
  </MessageBody>
</Message>
`,dark:"true",language:"tsx"}),`
`,e.jsxs(n.p,{children:["If the ",e.jsx(n.code,{children:"locale"})," is not set, the component will try to use the navigator languages by default."]}),`
`,e.jsxs(n.p,{children:[`In case you want to change to a locale not supported by ODS, or you want to override the default messages,
you can set your own translation using the `,e.jsx(n.code,{children:"i18n"})," attribute of the component."]}),`
`,e.jsx(i,{code:`
// This will change the close button aria-label to your own string
<Message i18n={{ [MESSAGE_I18N.closeButton]: 'Remove the notification' }}>
  <MessageBody>
    Mon message
  </MessageBody>
</Message>
`,dark:"true",language:"tsx"}),`
`,e.jsx(o,{label:"ODS supported locale",level:2}),`
`,e.jsx(n.p,{children:"Current locales supported by ODS:"}),`
`,e.jsx(h,{})]})}function B(t={}){const{wrapper:n}={...m(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{B as default};
