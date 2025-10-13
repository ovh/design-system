import{e}from"./index-jIWwRBLr.js";import{S as r,a as G,b as Y,c as m,d as p}from"./Spinner-DNePmVpu.js";import{o as j,C as d}from"./controls-BtiQQn1l.js";const w={component:r,title:"React Components/Spinner"},o={argTypes:j({color:{table:{category:d.design,type:{summary:"SPINNER_COLOR"}},control:{type:"select"},options:Y},size:{table:{category:d.design,type:{summary:"SPINNER_SIZE"}},control:{type:"select"},options:G}})},a={globals:{imports:"import { SPINNER_COLOR, Spinner } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:m.neutral}),e.createElement(r,{color:m.primary}))},n={globals:{imports:"import { Spinner } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null)},s={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null)},t={globals:{imports:"import { SPINNER_SIZE, Spinner } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{size:p.xs}),e.createElement(r,{size:p.sm}),e.createElement(r,{size:p.md}),e.createElement(r,{size:p.lg}))},i={globals:{imports:"import { Spinner } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("div",{"aria-busy":"true","aria-live":"polite"},e.createElement(r,null))},l={globals:{imports:"import { Spinner } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{"aria-label":"Loading user profile"})},c={globals:{imports:"import { Spinner } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("div",null,e.createElement("span",{id:"loading-text"},"Loading user profile"),e.createElement(r,{"aria-labelledby":"loading-text"}))};var S,u,g;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var E,N,v;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  globals: {
    imports: \`import { SPINNER_COLOR, Spinner } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Spinner color={SPINNER_COLOR.neutral} />
      <Spinner color={SPINNER_COLOR.primary} />
    </>
}`,...(v=(N=a.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var b,y,R;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Spinner } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Spinner />
}`,...(R=(y=n.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var O,I,_;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Spinner />
}`,...(_=(I=s.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var f,C,L;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(L=(C=t.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var P,A,z;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Spinner } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <div aria-busy="true" aria-live="polite">
      <Spinner />
    </div>
}`,...(z=(A=i.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var h,Z,T;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Spinner } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Spinner aria-label="Loading user profile" />
}`,...(T=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:T.source}}};var x,D,B;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(B=(D=c.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const F=["Demo","Color","Default","Overview","Size","AccessibilityAriaBusyAriaLive","AccessibilityAriaLabel","AccessibilityAriaLabelledBy"],H=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaBusyAriaLive:i,AccessibilityAriaLabel:l,AccessibilityAriaLabelledBy:c,Color:a,Default:n,Demo:o,Overview:s,Size:t,__namedExportsOrder:F,default:w},Symbol.toStringTag,{value:"Module"}));export{i as A,a as C,n as D,s as O,H as S,l as a,c as b,t as c};
