import{e}from"./index-D_CmzhJ4.js";import{S as r,a as v,b as z,c as l,d as c}from"./Spinner-CcwadLZv.js";import{o as L,C as m}from"./controls-BtiQQn1l.js";const b={component:r,title:"ODS Components/Spinner"},n={argTypes:L({color:{table:{category:m.design,type:{summary:"SPINNER_COLOR"}},control:{type:"select"},options:z},size:{table:{category:m.design,type:{summary:"SPINNER_SIZE"}},control:{type:"select"},options:v}})},t={tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:l.neutral}),e.createElement(r,{color:l.primary}),e.createElement(r,{style:{backgroundColor:"#262626"},color:l.white}))},o={tags:["!dev"],render:({})=>e.createElement(r,null)},s={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null)},a={tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{size:c.xs}),e.createElement(r,{size:c.sm}),e.createElement(r,{size:c.md}),e.createElement(r,{size:c.lg}))};var p,i,S;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      <Spinner style={{
      backgroundColor: '#262626'
    }} color={SPINNER_COLOR.white} />
    </>
}`,...(N=(E=t.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var u,O,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Spinner />
}`,...(g=(O=o.parameters)==null?void 0:O.docs)==null?void 0:g.source}}};var R,y,I;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Spinner />
}`,...(I=(y=s.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var _,C,P;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <Spinner size={SPINNER_SIZE.xs} />
      <Spinner size={SPINNER_SIZE.sm} />
      <Spinner size={SPINNER_SIZE.md} />
      <Spinner size={SPINNER_SIZE.lg} />
    </>
}`,...(P=(C=a.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const T=["Demo","Color","Default","Overview","Size"],w=Object.freeze(Object.defineProperty({__proto__:null,Color:t,Default:o,Demo:n,Overview:s,Size:a,__namedExportsOrder:T,default:b},Symbol.toStringTag,{value:"Module"}));export{t as C,o as D,s as O,w as S,a};
