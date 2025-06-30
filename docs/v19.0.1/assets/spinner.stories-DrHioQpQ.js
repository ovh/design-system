import{e}from"./index-D_CmzhJ4.js";import{S as r,a as v,b as z,c as m,d as c}from"./Spinner-BC3A9yP9.js";import{o as L,C as l}from"./controls-BtiQQn1l.js";const T={component:r,title:"React Components/Spinner"},n={argTypes:L({color:{table:{category:l.design,type:{summary:"SPINNER_COLOR"}},control:{type:"select"},options:z},size:{table:{category:l.design,type:{summary:"SPINNER_SIZE"}},control:{type:"select"},options:v}})},t={tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:m.neutral}),e.createElement(r,{color:m.primary}))},s={tags:["!dev"],render:({})=>e.createElement(r,null)},a={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null)},o={tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{size:c.xs}),e.createElement(r,{size:c.sm}),e.createElement(r,{size:c.md}),e.createElement(r,{size:c.lg}))};var p,i,S;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(S=(i=n.parameters)==null?void 0:i.docs)==null?void 0:S.source}}};var d,E,N;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <Spinner color={SPINNER_COLOR.neutral} />
      <Spinner color={SPINNER_COLOR.primary} />
    </>
}`,...(N=(E=t.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var u,R,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Spinner />
}`,...(g=(R=s.parameters)==null?void 0:R.docs)==null?void 0:g.source}}};var O,I,_;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Spinner />
}`,...(_=(I=a.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var y,C,P;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <Spinner size={SPINNER_SIZE.xs} />
      <Spinner size={SPINNER_SIZE.sm} />
      <Spinner size={SPINNER_SIZE.md} />
      <Spinner size={SPINNER_SIZE.lg} />
    </>
}`,...(P=(C=o.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const Z=["Demo","Color","Default","Overview","Size"],x=Object.freeze(Object.defineProperty({__proto__:null,Color:t,Default:s,Demo:n,Overview:a,Size:o,__namedExportsOrder:Z,default:T},Symbol.toStringTag,{value:"Module"}));export{t as C,s as D,a as O,x as S,o as a};
