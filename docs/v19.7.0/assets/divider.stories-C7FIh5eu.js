import{e}from"./index-jIWwRBLr.js";import{D as r,a as j,b as w,c as x,d as p,e as I,f as n}from"./divider-color-2AUX7hAv.js";import{o as M,C as d}from"./controls-BtiQQn1l.js";const k={component:r,title:"React Components/Divider"},a={argTypes:M({color:{table:{category:d.design,type:{summary:"DIVIDER_COLOR"}},control:{type:"select"},options:x},orientation:{table:{category:d.design,type:{summary:"DIVIDER_ORIENTATION"}},control:{type:"select"},options:w},spacing:{table:{category:d.design,type:{summary:"DIVIDER_SPACING"}},control:{type:"select"},options:j}})},t={tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),e.createElement(r,{color:p.primary}),e.createElement("p",null,"Interdum et malesuada fames ac ante ipsum primis in faucibus."))},o={globals:{imports:"import { Divider } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null)},s={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),e.createElement(r,{color:p.primary}),e.createElement("p",null,"Interdum et malesuada fames ac ante ipsum primis in faucibus."))},i={globals:{imports:"import { DIVIDER_COLOR, Divider } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:p.neutral}),e.createElement(r,{color:p.primary}))},c={globals:{imports:"import { DIVIDER_ORIENTATION, Divider } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{orientation:I.horizontal}),e.createElement(r,{orientation:I.vertical}))},m={globals:{imports:"import { DIVIDER_SPACING, Divider } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{spacing:n._0}),e.createElement(r,{spacing:n._2}),e.createElement(r,{spacing:n._4}),e.createElement(r,{spacing:n._6}),e.createElement(r,{spacing:n._8}),e.createElement(r,{spacing:n._12}),e.createElement(r,{spacing:n._16}),e.createElement(r,{spacing:n._24}),e.createElement(r,{spacing:n._32}),e.createElement(r,{spacing:n._40}),e.createElement(r,{spacing:n._48}),e.createElement(r,{spacing:n._64}))},l={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement(r,null)};var D,u,g;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var E,_,R;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Divider color={DIVIDER_COLOR.primary} />
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </>
}`,...(R=(_=t.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var v,O,C;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Divider } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Divider />
}`,...(C=(O=o.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var N,y,S;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Divider color={DIVIDER_COLOR.primary} />
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </>
}`,...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var V,A,T;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  globals: {
    imports: \`import { DIVIDER_COLOR, Divider } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Divider color={DIVIDER_COLOR.neutral} />
      <Divider color={DIVIDER_COLOR.primary} />
    </>
}`,...(T=(A=i.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var f,G,b;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  globals: {
    imports: \`import { DIVIDER_ORIENTATION, Divider } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Divider orientation={DIVIDER_ORIENTATION.horizontal} />
      <Divider orientation={DIVIDER_ORIENTATION.vertical} />
    </>
}`,...(b=(G=c.parameters)==null?void 0:G.docs)==null?void 0:b.source}}};var P,L,h;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(h=(L=m.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var F,Y,z;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <Divider />
}`,...(z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};const q=["Demo","AnatomyTech","Default","Overview","Color","Orientation","Spacing","ThemeGenerator"],K=Object.freeze(Object.defineProperty({__proto__:null,AnatomyTech:t,Color:i,Default:o,Demo:a,Orientation:c,Overview:s,Spacing:m,ThemeGenerator:l,__namedExportsOrder:q,default:k},Symbol.toStringTag,{value:"Module"}));export{t as A,i as C,K as D,s as O,m as S,o as a,c as b};
