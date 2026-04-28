import{e}from"./index-jIWwRBLr.js";import{S as r,a as H,b as J,c as S,d as n}from"./Spinner-DJB5ZadI.js";import{o as K,C as u}from"./controls-BtiQQn1l.js";const Q={component:r,title:"React Components/Spinner"},a={argTypes:K({color:{table:{category:u.design,type:{summary:"SPINNER_COLOR"}},control:{type:"select"},options:J},size:{table:{category:u.design,type:{summary:"SPINNER_SIZE"}},control:{type:"select"},options:H}})},o={tags:["!dev"],render:({})=>e.createElement(r,null)},s={globals:{imports:"import { SPINNER_COLOR, Spinner } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:S.neutral}),e.createElement(r,{color:S.primary}))},t={globals:{imports:"import { Spinner } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null)},i={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null)},l={globals:{imports:"import { SPINNER_SIZE, Spinner } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{size:n.xs}),e.createElement(r,{size:n.sm}),e.createElement(r,{size:n.md}),e.createElement(r,{size:n.lg}))},c={globals:{imports:"import { Spinner } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("div",{"aria-busy":"true","aria-live":"polite"},e.createElement(r,null))},m={globals:{imports:"import { Spinner } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{"aria-label":"Loading user profile"})},p={globals:{imports:"import { Spinner } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("div",null,e.createElement("span",{id:"loading-text"},"Loading user profile"),e.createElement(r,{"aria-labelledby":"loading-text"}))},d={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"inline-flex",flexFlow:"row",gap:"12px",alignItems:"center"}},e.createElement(r,null),e.createElement(r,{size:n.sm}),e.createElement(r,{size:n.lg}),e.createElement(r,{color:S.neutral}),e.createElement(r,{color:S.primary}))};var g,E,N;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'SPINNER_COLOR'
        }
      },
      control: {
        type: 'select'
      },
      options: SPINNER_COLORS
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'SPINNER_SIZE'
        }
      },
      control: {
        type: 'select'
      },
      options: SPINNER_SIZES
    }
  })
}`,...(N=(E=a.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var v,y,R;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Spinner />
}`,...(R=(y=o.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var b,I,O;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  globals: {
    imports: \`import { SPINNER_COLOR, Spinner } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Spinner color={SPINNER_COLOR.neutral} />
      <Spinner color={SPINNER_COLOR.primary} />
    </>
}`,...(O=(I=s.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var _,f,P;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Spinner } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Spinner />
}`,...(P=(f=t.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var C,L,A;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Spinner />
}`,...(A=(L=i.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var z,h,x;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { SPINNER_SIZE, Spinner } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Spinner size={SPINNER_SIZE.xs} />
      <Spinner size={SPINNER_SIZE.sm} />
      <Spinner size={SPINNER_SIZE.md} />
      <Spinner size={SPINNER_SIZE.lg} />
    </>
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var T,Z,w;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Spinner } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <div aria-busy="true" aria-live="polite">
      <Spinner />
    </div>
}`,...(w=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:w.source}}};var D,G,B;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Spinner } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Spinner aria-label="Loading user profile" />
}`,...(B=(G=m.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var F,Y,j;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Spinner } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <div>
      <span id="loading-text">
        Loading user profile
      </span>

      <Spinner aria-labelledby="loading-text" />
    </div>
}`,...(j=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var M,k,q;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'inline-flex',
    flexFlow: 'row',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Spinner />
      <Spinner size={SPINNER_SIZE.sm} />
      <Spinner size={SPINNER_SIZE.lg} />
      <Spinner color={SPINNER_COLOR.neutral} />
      <Spinner color={SPINNER_COLOR.primary} />
    </div>
}`,...(q=(k=d.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const U=["Demo","AnatomyTech","Color","Default","Overview","Size","AccessibilityAriaBusyAriaLive","AccessibilityAriaLabel","AccessibilityAriaLabelledBy","ThemeGenerator"],$=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaBusyAriaLive:c,AccessibilityAriaLabel:m,AccessibilityAriaLabelledBy:p,AnatomyTech:o,Color:s,Default:t,Demo:a,Overview:i,Size:l,ThemeGenerator:d,__namedExportsOrder:U,default:Q},Symbol.toStringTag,{value:"Module"}));export{c as A,s as C,t as D,i as O,$ as S,m as a,p as b,o as c,l as d};
