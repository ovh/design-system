import{e}from"./index-jIWwRBLr.js";import{D as r,a as y,b as A,c,d as n}from"./Divider-Dh8-cuUJ.js";import{o as G,C as m}from"./controls-BtiQQn1l.js";const N={component:r,title:"React Components/Divider"},a={argTypes:G({color:{table:{category:m.design,type:{summary:"DIVIDER_COLOR"}},control:{type:"select"},options:A},spacing:{table:{category:m.design,type:{summary:"DIVIDER_SPACING"}},control:{type:"select"},options:y}})},t={globals:{imports:"import { Divider } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null)},o={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),e.createElement(r,{color:c.primary}),e.createElement("p",null,"Interdum et malesuada fames ac ante ipsum primis in faucibus."))},s={globals:{imports:"import { DIVIDER_COLOR, Divider } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:c.neutral}),e.createElement(r,{color:c.primary}))},i={globals:{imports:"import { DIVIDER_SPACING, Divider } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{spacing:n._0}),e.createElement(r,{spacing:n._2}),e.createElement(r,{spacing:n._4}),e.createElement(r,{spacing:n._6}),e.createElement(r,{spacing:n._8}),e.createElement(r,{spacing:n._12}),e.createElement(r,{spacing:n._16}),e.createElement(r,{spacing:n._24}),e.createElement(r,{spacing:n._32}),e.createElement(r,{spacing:n._40}),e.createElement(r,{spacing:n._48}),e.createElement(r,{spacing:n._64}))};var p,l,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'DIVIDER_COLOR'
        }
      },
      control: {
        type: 'select'
      },
      options: DIVIDER_COLORS
    },
    spacing: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'DIVIDER_SPACING'
        }
      },
      control: {
        type: 'select'
      },
      options: DIVIDER_SPACINGS
    }
  })
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var D,I,g;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Divider } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Divider />
}`,...(g=(I=t.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var _,u,E;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Divider color={DIVIDER_COLOR.primary} />
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </>
}`,...(E=(u=o.parameters)==null?void 0:u.docs)==null?void 0:E.source}}};var R,v,C;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  globals: {
    imports: \`import { DIVIDER_COLOR, Divider } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Divider color={DIVIDER_COLOR.neutral} />
      <Divider color={DIVIDER_COLOR.primary} />
    </>
}`,...(C=(v=s.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var O,S,V;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  globals: {
    imports: \`import { DIVIDER_SPACING, Divider } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Divider spacing={DIVIDER_SPACING._0} />
      <Divider spacing={DIVIDER_SPACING._2} />
      <Divider spacing={DIVIDER_SPACING._4} />
      <Divider spacing={DIVIDER_SPACING._6} />
      <Divider spacing={DIVIDER_SPACING._8} />
      <Divider spacing={DIVIDER_SPACING._12} />
      <Divider spacing={DIVIDER_SPACING._16} />
      <Divider spacing={DIVIDER_SPACING._24} />
      <Divider spacing={DIVIDER_SPACING._32} />
      <Divider spacing={DIVIDER_SPACING._40} />
      <Divider spacing={DIVIDER_SPACING._48} />
      <Divider spacing={DIVIDER_SPACING._64} />
    </>
}`,...(V=(S=i.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const P=["Demo","Default","Overview","Color","Spacing"],T=Object.freeze(Object.defineProperty({__proto__:null,Color:s,Default:t,Demo:a,Overview:o,Spacing:i,__namedExportsOrder:P,default:N},Symbol.toStringTag,{value:"Module"}));export{s as C,T as D,o as O,i as S,t as a};
