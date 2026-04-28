import{e}from"./index-jIWwRBLr.js";import{a as r}from"./format-C-fLMDQr.js";import{s as o}from"./source-CPEZJ6oD.js";const v={title:"Helpers/formatRelativeTime"},t={globals:{imports:"import { formatRelativeTime } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...o()}}},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,r(new Date))},a={globals:{imports:"import { formatRelativeTime } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...o()}}},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("p",null,"France: ",r(new Date,"fr-FR")),e.createElement("p",null,"Germany: ",r(new Date,"de-DE")),e.createElement("p",null,"Arabic: ",r(new Date,"ar-EG")),e.createElement("p",null,"India: ",r(new Date,"en-IN")))},n={globals:{imports:"import { formatRelativeTime } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...o()}}},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("p",null,"Long: ",r(new Date,"en-US",{style:"long"})),e.createElement("p",null,"Short: ",r(new Date,"en-US",{style:"short"})),e.createElement("p",null,"Narrow: ",r(new Date,"en-US",{style:"narrow"})))};var s,m,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  globals: {
    imports: \`import { formatRelativeTime } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => <>{formatRelativeTime(new Date())}</>
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  globals: {
    imports: \`import { formatRelativeTime } from '@ovhcloud/ods-react';\`
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
      <p>France: {formatRelativeTime(new Date(), 'fr-FR')}</p>
      <p>Germany: {formatRelativeTime(new Date(), 'de-DE')}</p>
      <p>Arabic: {formatRelativeTime(new Date(), 'ar-EG')}</p>
      <p>India: {formatRelativeTime(new Date(), 'en-IN')}</p>
    </>
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,u,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  globals: {
    imports: \`import { formatRelativeTime } from '@ovhcloud/ods-react';\`
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
      <p>Long: {formatRelativeTime(new Date(), 'en-US', {
        style: 'long'
      })}</p>
      <p>Short: {formatRelativeTime(new Date(), 'en-US', {
        style: 'short'
      })}</p>
      <p>Narrow: {formatRelativeTime(new Date(), 'en-US', {
        style: 'narrow'
      })}</p>
    </>
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const g=["Default","Locales","Option"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Locales:a,Option:n,__namedExportsOrder:g,default:v},Symbol.toStringTag,{value:"Module"}));export{t as D,a as L,n as O,S};
