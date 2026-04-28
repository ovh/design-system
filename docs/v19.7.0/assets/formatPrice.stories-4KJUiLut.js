import{e}from"./index-jIWwRBLr.js";import{f as r}from"./format-C-fLMDQr.js";import{s as n}from"./source-CPEZJ6oD.js";const g={title:"Helpers/formatPrice"},o={globals:{imports:"import { formatPrice } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...n()}}},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("p",null,"Euro: ",r(123456.789,"fr-FR","EUR")),e.createElement("p",null,"Dollar: ",r(123456.789,"fr-FR","USD")),e.createElement("p",null,"Yen: ",r(123456.789,"fr-FR","JPY")))},a={globals:{imports:"import { formatPrice } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...n()}}},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,r(123456.789))},t={globals:{imports:"import { formatPrice } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...n()}}},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("p",null,"France: ",r(123456.789,"fr-FR")),e.createElement("p",null,"Germany: ",r(123456.789,"de-DE")),e.createElement("p",null,"Arabic: ",r(123456.789,"ar-EG")),e.createElement("p",null,"India: ",r(123456.789,"en-IN")))};var s,c,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  globals: {
    imports: \`import { formatPrice } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => <>
      <p>Euro: {formatPrice(123456.789, 'fr-FR', 'EUR')}</p>
      <p>Dollar: {formatPrice(123456.789, 'fr-FR', 'USD')}</p>
      <p>Yen: {formatPrice(123456.789, 'fr-FR', 'JPY')}</p>
    </>
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,p,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  globals: {
    imports: \`import { formatPrice } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => <>{formatPrice(123456.789)}</>
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var d,u,f;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  globals: {
    imports: \`import { formatPrice } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => <>
      <p>France: {formatPrice(123456.789, 'fr-FR')}</p>
      <p>Germany: {formatPrice(123456.789, 'de-DE')}</p>
      <p>Arabic: {formatPrice(123456.789, 'ar-EG')}</p>
      <p>India: {formatPrice(123456.789, 'en-IN')}</p>
    </>
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const E=["Currencies","Default","Locales"],F=Object.freeze(Object.defineProperty({__proto__:null,Currencies:o,Default:a,Locales:t,__namedExportsOrder:E,default:g},Symbol.toStringTag,{value:"Module"}));export{o as C,a as D,t as L,F as S};
