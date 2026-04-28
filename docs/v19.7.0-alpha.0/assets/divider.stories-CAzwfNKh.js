import{e}from"./index-jIWwRBLr.js";import{D as r,a as h,b as F,c as Y,d as p,e as d,f as n}from"./divider-color-2AUX7hAv.js";import{o as z,C as l}from"./controls-BtiQQn1l.js";const j={component:r,title:"React Components/Divider"},a={argTypes:z({color:{table:{category:l.design,type:{summary:"DIVIDER_COLOR"}},control:{type:"select"},options:Y},orientation:{table:{category:l.design,type:{summary:"DIVIDER_ORIENTATION"}},control:{type:"select"},options:F},spacing:{table:{category:l.design,type:{summary:"DIVIDER_SPACING"}},control:{type:"select"},options:h}})},t={globals:{imports:"import { Divider } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null)},o={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),e.createElement(r,{color:p.primary}),e.createElement("p",null,"Interdum et malesuada fames ac ante ipsum primis in faucibus."))},s={globals:{imports:"import { DIVIDER_COLOR, Divider } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:p.neutral}),e.createElement(r,{color:p.primary}))},i={globals:{imports:"import { DIVIDER_ORIENTATION, Divider } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{orientation:d.horizontal}),e.createElement(r,{orientation:d.vertical}))},c={globals:{imports:"import { DIVIDER_SPACING, Divider } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{spacing:n._0}),e.createElement(r,{spacing:n._2}),e.createElement(r,{spacing:n._4}),e.createElement(r,{spacing:n._6}),e.createElement(r,{spacing:n._8}),e.createElement(r,{spacing:n._12}),e.createElement(r,{spacing:n._16}),e.createElement(r,{spacing:n._24}),e.createElement(r,{spacing:n._32}),e.createElement(r,{spacing:n._40}),e.createElement(r,{spacing:n._48}),e.createElement(r,{spacing:n._64}))},m={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement(r,null)};var I,D,g;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
    orientation: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'DIVIDER_ORIENTATION'
        }
      },
      control: {
        type: 'select'
      },
      options: DIVIDER_ORIENTATIONS
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
}`,...(g=(D=a.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};var E,_,u;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Divider } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Divider />
}`,...(u=(_=t.parameters)==null?void 0:_.docs)==null?void 0:u.source}}};var R,O,v;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Divider color={DIVIDER_COLOR.primary} />
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </>
}`,...(v=(O=o.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var C,N,S;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  globals: {
    imports: \`import { DIVIDER_COLOR, Divider } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Divider color={DIVIDER_COLOR.neutral} />
      <Divider color={DIVIDER_COLOR.primary} />
    </>
}`,...(S=(N=s.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var V,y,A;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  globals: {
    imports: \`import { DIVIDER_ORIENTATION, Divider } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Divider orientation={DIVIDER_ORIENTATION.horizontal} />
      <Divider orientation={DIVIDER_ORIENTATION.vertical} />
    </>
}`,...(A=(y=i.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var T,G,f;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(f=(G=c.parameters)==null?void 0:G.docs)==null?void 0:f.source}}};var b,P,L;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <Divider />
}`,...(L=(P=m.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};const w=["Demo","Default","Overview","Color","Orientation","Spacing","ThemeGenerator"],q=Object.freeze(Object.defineProperty({__proto__:null,Color:s,Default:t,Demo:a,Orientation:i,Overview:o,Spacing:c,ThemeGenerator:m,__namedExportsOrder:w,default:j},Symbol.toStringTag,{value:"Module"}));export{s as C,q as D,o as O,c as S,t as a,i as b};
