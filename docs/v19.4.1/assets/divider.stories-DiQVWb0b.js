import{e}from"./index-jIWwRBLr.js";import{D as r,a as f,b as P,c as m,d as a}from"./divider-color-CBJUkWwB.js";import{o as b,C as l}from"./controls-BtiQQn1l.js";const L={component:r,title:"React Components/Divider"},n={argTypes:b({color:{table:{category:l.design,type:{summary:"DIVIDER_COLOR"}},control:{type:"select"},options:P},spacing:{table:{category:l.design,type:{summary:"DIVIDER_SPACING"}},control:{type:"select"},options:f}})},t={globals:{imports:"import { Divider } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null)},s={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),e.createElement(r,{color:m.primary}),e.createElement("p",null,"Interdum et malesuada fames ac ante ipsum primis in faucibus."))},o={globals:{imports:"import { DIVIDER_COLOR, Divider } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:m.neutral}),e.createElement(r,{color:m.primary}))},i={globals:{imports:"import { DIVIDER_SPACING, Divider } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{spacing:a._0}),e.createElement(r,{spacing:a._2}),e.createElement(r,{spacing:a._4}),e.createElement(r,{spacing:a._6}),e.createElement(r,{spacing:a._8}),e.createElement(r,{spacing:a._12}),e.createElement(r,{spacing:a._16}),e.createElement(r,{spacing:a._24}),e.createElement(r,{spacing:a._32}),e.createElement(r,{spacing:a._40}),e.createElement(r,{spacing:a._48}),e.createElement(r,{spacing:a._64}))},c={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement(r,null)};var p,d,D;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(D=(d=n.parameters)==null?void 0:d.docs)==null?void 0:D.source}}};var I,g,u;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Divider } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Divider />
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var _,E,v;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Divider color={DIVIDER_COLOR.primary} />
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </>
}`,...(v=(E=s.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var R,C,O;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  globals: {
    imports: \`import { DIVIDER_COLOR, Divider } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Divider color={DIVIDER_COLOR.neutral} />
      <Divider color={DIVIDER_COLOR.primary} />
    </>
}`,...(O=(C=o.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var S,V,y;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(y=(V=i.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};var G,A,N;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <Divider />
}`,...(N=(A=c.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const T=["Demo","Default","Overview","Color","Spacing","ThemeGenerator"],j=Object.freeze(Object.defineProperty({__proto__:null,Color:o,Default:t,Demo:n,Overview:s,Spacing:i,ThemeGenerator:c,__namedExportsOrder:T,default:L},Symbol.toStringTag,{value:"Module"}));export{o as C,j as D,s as O,i as S,t as a};
