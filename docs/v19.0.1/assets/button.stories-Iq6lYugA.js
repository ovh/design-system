import{e}from"./index-D_CmzhJ4.js";import{B as t,a as V,b as F,c as d,d as p}from"./Button-CbWLwkmI.js";import{C as G,a as n}from"./colors-DSObuHxd.js";import{o as M,C as o}from"./controls-BtiQQn1l.js";const h={component:t,title:"React Components/Button"},a={argTypes:M({children:{table:{category:o.slot},control:"text"},color:{table:{category:o.design,type:{summary:"BUTTON_COLOR"}},control:{type:"select"},options:G},disabled:{table:{category:o.general,type:{summary:"boolean"}},control:"boolean"},loading:{table:{category:o.general},control:"boolean"},size:{table:{category:o.design,type:{summary:"BUTTON_SIZE"}},control:{type:"select"},options:F},variant:{table:{category:o.design,type:{summary:"BUTTON_VARIANT"}},control:{type:"select"},options:V}}),args:{children:"My button"}},s={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{color:n.critical},"Critical"),e.createElement(t,{color:n.information},"Information"),e.createElement(t,{color:n.neutral},"Neutral"),e.createElement(t,{color:n.primary},"Primary"),e.createElement(t,{color:n.success},"Success"),e.createElement(t,{color:n.warning},"Warning"))},l={tags:["!dev"],render:({})=>e.createElement(t,null,"My button")},c={tags:["!dev"],render:({})=>e.createElement(t,{loading:!0},"Loading button")},i={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,"Button")},u={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{size:d.md},"MB button"),e.createElement(t,{size:d.sm},"SM button"),e.createElement(t,{size:d.xs},"XS button"))},m={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{variant:p.default},"Default button"),e.createElement(t,{variant:p.outline},"Outline button"),e.createElement(t,{variant:p.ghost},"Ghost button"))};var g,O,T;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  argTypes: orderControls({
    children: {
      table: {
        category: CONTROL_CATEGORY.slot
      },
      control: 'text'
    },
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'BUTTON_COLOR'
        }
      },
      control: {
        type: 'select'
      },
      options: BUTTON_COLORS
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    loading: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'BUTTON_SIZE'
        }
      },
      control: {
        type: 'select'
      },
      options: BUTTON_SIZES
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'BUTTON_VARIANT'
        }
      },
      control: {
        type: 'select'
      },
      options: BUTTON_VARIANTS
    }
  }),
  args: {
    children: 'My button'
  }
}`,...(T=(O=a.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var y,B,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Button color={BUTTON_COLOR.critical}>Critical</Button>
      <Button color={BUTTON_COLOR.information}>Information</Button>
      <Button color={BUTTON_COLOR.neutral}>Neutral</Button>
      <Button color={BUTTON_COLOR.primary}>Primary</Button>
      <Button color={BUTTON_COLOR.success}>Success</Button>
      <Button color={BUTTON_COLOR.warning}>Warning</Button>
    </>
}`,...(b=(B=s.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var N,_,E;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Button>
      My button
    </Button>
}`,...(E=(_=l.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var C,v,R;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Button loading={true}>
      Loading button
    </Button>
}`,...(R=(v=c.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var S,f,U;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Button>
      Button
    </Button>
}`,...(U=(f=i.parameters)==null?void 0:f.docs)==null?void 0:U.source}}};var x,I,A;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Button size={BUTTON_SIZE.md}>MB button</Button>
      <Button size={BUTTON_SIZE.sm}>SM button</Button>
      <Button size={BUTTON_SIZE.xs}>XS button</Button>
    </>
}`,...(A=(I=u.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var L,w,z;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Button variant={BUTTON_VARIANT.default}>Default button</Button>
      <Button variant={BUTTON_VARIANT.outline}>Outline button</Button>
      <Button variant={BUTTON_VARIANT.ghost}>Ghost button</Button>
    </>
}`,...(z=(w=m.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const Z=["Demo","Color","Default","Loading","Overview","Size","Variant"],W=Object.freeze(Object.defineProperty({__proto__:null,Color:s,Default:l,Demo:a,Loading:c,Overview:i,Size:u,Variant:m,__namedExportsOrder:Z,default:h},Symbol.toStringTag,{value:"Module"}));export{W as B,s as C,l as D,c as L,i as O,u as S,m as V};
