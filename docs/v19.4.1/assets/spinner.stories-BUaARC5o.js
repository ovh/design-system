import{e}from"./index-jIWwRBLr.js";import{S as r,a as j,b as M,c as d,d as n}from"./Spinner-DJB5ZadI.js";import{o as k,C as S}from"./controls-BtiQQn1l.js";const q={component:r,title:"React Components/Spinner"},a={argTypes:k({color:{table:{category:S.design,type:{summary:"SPINNER_COLOR"}},control:{type:"select"},options:M},size:{table:{category:S.design,type:{summary:"SPINNER_SIZE"}},control:{type:"select"},options:j}})},o={globals:{imports:"import { SPINNER_COLOR, Spinner } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:d.neutral}),e.createElement(r,{color:d.primary}))},s={globals:{imports:"import { Spinner } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null)},t={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null)},i={globals:{imports:"import { SPINNER_SIZE, Spinner } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{size:n.xs}),e.createElement(r,{size:n.sm}),e.createElement(r,{size:n.md}),e.createElement(r,{size:n.lg}))},l={globals:{imports:"import { Spinner } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("div",{"aria-busy":"true","aria-live":"polite"},e.createElement(r,null))},c={globals:{imports:"import { Spinner } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{"aria-label":"Loading user profile"})},p={globals:{imports:"import { Spinner } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("div",null,e.createElement("span",{id:"loading-text"},"Loading user profile"),e.createElement(r,{"aria-labelledby":"loading-text"}))},m={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"inline-flex",flexFlow:"row",gap:"12px",alignItems:"center"}},e.createElement(r,null),e.createElement(r,{size:n.sm}),e.createElement(r,{size:n.lg}),e.createElement(r,{color:d.neutral}),e.createElement(r,{color:d.primary}))};var u,g,E;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(E=(g=a.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var N,v,y;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  globals: {
    imports: \`import { SPINNER_COLOR, Spinner } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Spinner color={SPINNER_COLOR.neutral} />
      <Spinner color={SPINNER_COLOR.primary} />
    </>
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var R,b,I;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Spinner } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Spinner />
}`,...(I=(b=s.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var O,_,f;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Spinner />
}`,...(f=(_=t.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var P,C,L;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(C=i.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var A,z,h;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Spinner } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <div aria-busy="true" aria-live="polite">
      <Spinner />
    </div>
}`,...(h=(z=l.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var x,Z,T;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Spinner } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Spinner aria-label="Loading user profile" />
}`,...(T=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:T.source}}};var w,D,G;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(G=(D=p.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var B,F,Y;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(Y=(F=m.parameters)==null?void 0:F.docs)==null?void 0:Y.source}}};const H=["Demo","Color","Default","Overview","Size","AccessibilityAriaBusyAriaLive","AccessibilityAriaLabel","AccessibilityAriaLabelledBy","ThemeGenerator"],U=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaBusyAriaLive:l,AccessibilityAriaLabel:c,AccessibilityAriaLabelledBy:p,Color:o,Default:s,Demo:a,Overview:t,Size:i,ThemeGenerator:m,__namedExportsOrder:H,default:q},Symbol.toStringTag,{value:"Module"}));export{l as A,o as C,s as D,t as O,U as S,c as a,p as b,i as c};
