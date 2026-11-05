import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,img:`img`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components},{DocLink:i,ExternalLink:a,Heading:s,OdsLocaleList:c}=t;return i||o(`DocLink`,!0),a||o(`ExternalLink`,!0),s||o(`Heading`,!0),c||o(`OdsLocaleList`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:`ODS does not embed any i18n library, as most of the translatable contents are coming from the integration side.`}),`
`,(0,r.jsx)(t.p,{children:`There are two exceptions, components with full embedded translation and components with default translation on some accessibility attribute.`}),`
`,(0,r.jsx)(s,{label:`Embedded translation`,level:2}),`
`,(0,r.jsx)(t.p,{children:`So far, only the following components internally manage a complete translation system:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(i,{to:`/components/datepicker`,children:`Datepicker`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(i,{to:`/components/phone-number`,children:`Phone number`}),`
`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`Both are relying on the native `,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl`,children:`Intl`}),` feature.`]}),`
`,(0,r.jsxs)(t.p,{children:[`They do de-facto support the same locales as `,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl`,children:`Intl`}),`.`]}),`
`,(0,r.jsx)(s,{label:`ODS specific translation`,level:2}),`
`,(0,r.jsx)(t.p,{children:`Although you have complete control on label translation when using the ODS components, there are a few internal elements
that need a textual description for accessibility purpose.`}),`
`,(0,r.jsxs)(t.p,{children:[`For example, take the `,(0,r.jsx)(i,{to:`/components/message`,children:`Message`}),` component:`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:`components/message/anatomy-i18n.png`,alt:`i18n anatomy`})}),`
`,(0,r.jsxs)(t.p,{children:[`Here, the close button needs to have the right `,(0,r.jsx)(t.code,{children:`aria-label`}),` value set for accessibility compliance.
Though the element is not part of the composable components, it is internal.`]}),`
`,(0,r.jsxs)(t.p,{children:[`By default, ODS will provide a default `,(0,r.jsx)(t.code,{children:`aria-label`}),` message for all locales that we currently support.
So if you use the component as-is, it will be accessible already.`]}),`
`,(0,r.jsxs)(t.p,{children:[`In case you want to change the locale to one supported by ODS, you can use the `,(0,r.jsx)(t.code,{children:`locale`}),` attribute of the component.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`// This will change the close button aria-label to the french version
<Message locale="fr">
  <MessageBody>
    Mon message
  </MessageBody>
</Message>
`})}),`
`,(0,r.jsxs)(t.p,{children:[`If the `,(0,r.jsx)(t.code,{children:`locale`}),` is not set, the component will try to use the navigator languages by default.`]}),`
`,(0,r.jsxs)(t.p,{children:[`In case you want to change to a locale not supported by ODS, or you want to override the default messages,
you can set your own translation using the `,(0,r.jsx)(t.code,{children:`i18n`}),` attribute of the component.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`// This will change the close button aria-label to your own string
<Message i18n={{ [MESSAGE_I18N.closeButton]: 'Remove the notification' }}>
  <MessageBody>
    Mon message
  </MessageBody>
</Message>
`})}),`
`,(0,r.jsx)(s,{label:`ODS supported locale`,level:2}),`
`,(0,r.jsx)(t.p,{children:`Current locales supported by ODS:`}),`
`,(0,r.jsx)(c,{})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};