import{e}from"./index-D_CmzhJ4.js";import{T as r,a as I,b as d}from"./Tag-B60iwTLj.js";import{C as M,a}from"./colors-DSObuHxd.js";import{e as w,o as z,C as m}from"./controls-BtiQQn1l.js";const D={argTypes:w(["onRemove"]),component:r,title:"React Components/Tag"},t={argTypes:z({color:{table:{category:m.design,type:{summary:"TAG_COLOR"}},control:{type:"select"},options:M},children:{table:{category:m.general},control:"text"},disabled:{table:{category:m.general,type:{summary:"boolean"}},control:{type:"boolean"}},size:{table:{category:m.design,type:{summary:"TAG_SIZE"}},control:{type:"select"},options:I}}),args:{children:"My tag"}},n={decorators:[g=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},g())],tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:a.critical},"Critical"),e.createElement(r,{color:a.information},"Information"),e.createElement(r,{color:a.neutral},"Neutral"),e.createElement(r,{color:a.primary},"Primary"),e.createElement(r,{color:a.success},"Success"),e.createElement(r,{color:a.warning},"Warning"))},o={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null,"My tag")},s={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{disabled:!0},"My tag")},l={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null,"My tag")},c={decorators:[g=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},g())],tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{size:d.md},"My tag"),e.createElement(r,{size:d.lg},"My tag"))};var i,p,y;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'TAG_COLOR'
        }
      },
      control: {
        type: 'select'
      },
      options: TAG_COLORS
    },
    children: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'text'
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
      },
      control: {
        type: 'boolean'
      }
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'TAG_SIZE'
        }
      },
      control: {
        type: 'select'
      },
      options: TAG_SIZES
    }
  }),
  args: {
    children: 'My tag'
  }
}`,...(y=(p=t.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var T,u,O;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <>
      <Tag color={TAG_COLOR.critical}>Critical</Tag>
      <Tag color={TAG_COLOR.information}>Information</Tag>
      <Tag color={TAG_COLOR.neutral}>Neutral</Tag>
      <Tag color={TAG_COLOR.primary}>Primary</Tag>
      <Tag color={TAG_COLOR.success}>Success</Tag>
      <Tag color={TAG_COLOR.warning}>Warning</Tag>
    </>
}`,...(O=(u=n.parameters)==null?void 0:u.docs)==null?void 0:O.source}}};var C,E,_;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tag>My tag</Tag>
}`,...(_=(E=o.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var S,R,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tag disabled>My tag</Tag>
}`,...(b=(R=s.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var v,f,A;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tag>My tag</Tag>
}`,...(A=(f=l.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var G,x,L;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <>
      <Tag size={TAG_SIZE.md}>My tag</Tag>
      <Tag size={TAG_SIZE.lg}>My tag</Tag>
    </>
}`,...(L=(x=c.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};const F=["Demo","Color","Default","Disabled","Overview","Size"],P=Object.freeze(Object.defineProperty({__proto__:null,Color:n,Default:o,Demo:t,Disabled:s,Overview:l,Size:c,__namedExportsOrder:F,default:D},Symbol.toStringTag,{value:"Module"}));export{n as C,o as D,l as O,c as S,P as T,s as a};
