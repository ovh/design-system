import{e}from"./index-E9JSHJbc.js";import{O as t,a as p,b as O,c as y,d as m,e as T,f as i}from"./OdsButton-Do9GSXD9.js";import{o as M,C as r}from"./controls-CQ2mnOwv.js";const h={component:t,title:"ODS Components/Button"},a={argTypes:M({children:{table:{category:r.slot,defaultValue:{summary:"ø"}},control:"text"},color:{table:{category:r.design,defaultValue:{summary:i.primary},type:{summary:T}},control:{type:"select"},options:T},isLoading:{table:{category:r.general,defaultValue:{summary:"false"},type:{summary:"boolean"}},control:"boolean"},size:{table:{category:r.design,defaultValue:{summary:m.md},type:{summary:y}},control:{type:"select"},options:y},variant:{table:{category:r.design,defaultValue:{summary:O.default},type:{summary:p}},control:{type:"select"},options:p}}),args:{children:"My button"}},o={decorators:[n=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px"}},n())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{color:i.primary},"Primary button"),e.createElement(t,{color:i.critical},"Critical button"),e.createElement(t,{color:i.neutral},"Neutral button"))},s={tags:["!dev"],render:({})=>e.createElement(t,null,"My button")},l={tags:["!dev"],render:({})=>e.createElement(t,{isLoading:!0},"Loading button")},u={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,"Button")},d={decorators:[n=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px"}},n())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{size:m.md},"MB button"),e.createElement(t,{size:m.sm},"SM button"),e.createElement(t,{size:m.xs},"XS button"))},c={decorators:[n=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px"}},n())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{variant:O.default},"Default button"),e.createElement(t,{variant:O.outline},"Outline button"),e.createElement(t,{variant:O.ghost},"Ghost button"))};var g,_,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  argTypes: orderControls({
    children: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text'
    },
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_BUTTON_COLOR.primary
        },
        type: {
          summary: ODS_BUTTON_COLORS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_BUTTON_COLORS
    },
    isLoading: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'false'
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_BUTTON_SIZE.md
        },
        type: {
          summary: ODS_BUTTON_SIZES
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_BUTTON_SIZES
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_BUTTON_VARIANT.default
        },
        type: {
          summary: ODS_BUTTON_VARIANTS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_BUTTON_VARIANTS
    }
  }),
  args: {
    children: 'My button'
  }
}`,...(S=(_=a.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var B,b,N;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <OdsButton color={ODS_BUTTON_COLOR.primary}>Primary button</OdsButton>
      <OdsButton color={ODS_BUTTON_COLOR.critical}>Critical button</OdsButton>
      <OdsButton color={ODS_BUTTON_COLOR.neutral}>Neutral button</OdsButton>
    </>
}`,...(N=(b=o.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var f,v,E;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsButton>
      My button
    </OdsButton>
}`,...(E=(v=s.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var D,C,R;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsButton isLoading={true}>
      Loading button
    </OdsButton>
}`,...(R=(C=l.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var x,U,A;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <OdsButton>
      Button
    </OdsButton>
}`,...(A=(U=u.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var L,V,I;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <OdsButton size={ODS_BUTTON_SIZE.md}>MB button</OdsButton>
      <OdsButton size={ODS_BUTTON_SIZE.sm}>SM button</OdsButton>
      <OdsButton size={ODS_BUTTON_SIZE.xs}>XS button</OdsButton>
    </>
}`,...(I=(V=d.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var w,z,F;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <OdsButton variant={ODS_BUTTON_VARIANT.default}>Default button</OdsButton>
      <OdsButton variant={ODS_BUTTON_VARIANT.outline}>Outline button</OdsButton>
      <OdsButton variant={ODS_BUTTON_VARIANT.ghost}>Ghost button</OdsButton>
    </>
}`,...(F=(z=c.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};const G=["Demo","Color","Default","IsLoading","Overview","Size","Variant"],j=Object.freeze(Object.defineProperty({__proto__:null,Color:o,Default:s,Demo:a,IsLoading:l,Overview:u,Size:d,Variant:c,__namedExportsOrder:G,default:h},Symbol.toStringTag,{value:"Module"}));export{j as B,o as C,s as D,l as I,u as O,d as S,c as V};
