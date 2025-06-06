import{e}from"./index-D_CmzhJ4.js";import{B as t,a as V,b as F,c as G,d,e as m,f as p}from"./Button-BRERPjFq.js";import{o as M,C as n}from"./controls-BtiQQn1l.js";const h={component:t,title:"ODS Components/Button"},o={argTypes:M({children:{table:{category:n.slot},control:"text"},color:{table:{category:n.design,type:{summary:"BUTTON_COLOR"}},control:{type:"select"},options:G},disabled:{table:{category:n.general,type:{summary:"boolean"}},control:"boolean"},loading:{table:{category:n.general},control:"boolean"},size:{table:{category:n.design,type:{summary:"BUTTON_SIZE"}},control:{type:"select"},options:F},variant:{table:{category:n.design,type:{summary:"BUTTON_VARIANT"}},control:{type:"select"},options:V}}),args:{children:"My button"}},a={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{color:d.primary},"Primary button"),e.createElement(t,{color:d.critical},"Critical button"),e.createElement(t,{color:d.neutral},"Neutral button"))},s={tags:["!dev"],render:({})=>e.createElement(t,null,"My button")},l={tags:["!dev"],render:({})=>e.createElement(t,{loading:!0},"Loading button")},c={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,"Button")},u={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{size:m.md},"MB button"),e.createElement(t,{size:m.sm},"SM button"),e.createElement(t,{size:m.xs},"XS button"))},i={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{variant:p.default},"Default button"),e.createElement(t,{variant:p.outline},"Outline button"),e.createElement(t,{variant:p.ghost},"Ghost button"))};var T,g,O;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(O=(g=o.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};var y,B,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Button color={BUTTON_COLOR.primary}>Primary button</Button>
      <Button color={BUTTON_COLOR.critical}>Critical button</Button>
      <Button color={BUTTON_COLOR.neutral}>Neutral button</Button>
    </>
}`,...(b=(B=a.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var N,_,v;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Button>
      My button
    </Button>
}`,...(v=(_=s.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var E,S,C;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Button loading={true}>
      Loading button
    </Button>
}`,...(C=(S=l.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var R,f,x;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Button>
      Button
    </Button>
}`,...(x=(f=c.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var U,A,I;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(I=(A=u.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var L,w,z;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const D=["Demo","Color","Default","Loading","Overview","Size","Variant"],j=Object.freeze(Object.defineProperty({__proto__:null,Color:a,Default:s,Demo:o,Loading:l,Overview:c,Size:u,Variant:i,__namedExportsOrder:D,default:h},Symbol.toStringTag,{value:"Module"}));export{j as B,a as C,s as D,l as L,c as O,u as S,i as V};
