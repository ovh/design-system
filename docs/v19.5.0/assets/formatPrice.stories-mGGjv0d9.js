import{e as r}from"./index-jIWwRBLr.js";import{s as t}from"./source-CPEZJ6oD.js";function e(g,E="fr-FR",P="EUR"){return new Intl.NumberFormat(E,{currency:P,currencyDisplay:"narrowSymbol",style:"currency"}).format(g)}const R={title:"Helpers/formatPrice"},o={globals:{imports:"import { formatPrice } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...t()}}},tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement("p",null,"Euro: ",e(123456.789,"fr-FR","EUR")),r.createElement("p",null,"Dollar: ",e(123456.789,"fr-FR","USD")),r.createElement("p",null,"Yen: ",e(123456.789,"fr-FR","JPY")))},a={globals:{imports:"import { formatPrice } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...t()}}},tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,e(123456.789))},n={globals:{imports:"import { formatPrice } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...t()}}},tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement("p",null,"France: ",e(123456.789,"fr-FR")),r.createElement("p",null,"Germany: ",e(123456.789,"de-DE")),r.createElement("p",null,"Arabic: ",e(123456.789,"ar-EG")),r.createElement("p",null,"India: ",e(123456.789,"en-IN")))};var c,s,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(s=o.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var l,p,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var d,u,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const F=["Currencies","Default","Locales"],v=Object.freeze(Object.defineProperty({__proto__:null,Currencies:o,Default:a,Locales:n,__namedExportsOrder:F,default:R},Symbol.toStringTag,{value:"Module"}));export{o as C,a as D,n as L,v as S};
