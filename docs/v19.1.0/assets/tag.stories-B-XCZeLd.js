import{e}from"./index-D_CmzhJ4.js";import{T as r,a as W,b as y}from"./Tag-BVsl-I75.js";import{C as k,a}from"./colors-DSObuHxd.js";import{e as q,o as B,C as g}from"./controls-BtiQQn1l.js";const H={argTypes:q(["onRemove"]),component:r,title:"React Components/Tag"},t={argTypes:B({color:{table:{category:g.design,type:{summary:"TAG_COLOR"}},control:{type:"select"},options:k},children:{table:{category:g.general},control:"text"},disabled:{table:{category:g.general,type:{summary:"boolean"}},control:{type:"boolean"}},size:{table:{category:g.design,type:{summary:"TAG_SIZE"}},control:{type:"select"},options:W}}),args:{children:"My tag"}},n={decorators:[p=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},p())],tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:a.critical},"Critical"),e.createElement(r,{color:a.information},"Information"),e.createElement(r,{color:a.neutral},"Neutral"),e.createElement(r,{color:a.primary},"Primary"),e.createElement(r,{color:a.success},"Success"),e.createElement(r,{color:a.warning},"Warning"))},s={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null,"My tag")},o={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{disabled:!0},"My tag")},l={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null,"My tag")},c={decorators:[p=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},p())],tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{size:y.md},"MD tag"),e.createElement(r,{size:y.lg},"LG tag"))},i={tags:["!dev"],render:({})=>e.createElement("ul",null,e.createElement("li",null,e.createElement(r,null,"Design")),e.createElement("li",null,e.createElement(r,null,"Development")),e.createElement("li",null,e.createElement(r,null,"Accessibility")))},m={tags:["!dev"],render:({})=>e.createElement("div",{role:"list"},e.createElement("div",{role:"listitem"},e.createElement(r,null,"Design")),e.createElement("div",{role:"listitem"},e.createElement(r,null,"Development")),e.createElement("div",{role:"listitem"},e.createElement(r,null,"Accessibility")))},d={tags:["!dev"],render:({})=>e.createElement(r,{"aria-label":"Remove my tag"},"My tag")};var u,T,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(v=(T=t.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var E,O,b;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(O=n.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var A,C,S;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tag>My tag</Tag>
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var R,_,G;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tag disabled>My tag</Tag>
}`,...(G=(_=o.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var L,f,D;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tag>My tag</Tag>
}`,...(D=(f=l.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var x,I,M;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
      <Tag size={TAG_SIZE.md}>MD tag</Tag>
      <Tag size={TAG_SIZE.lg}>LG tag</Tag>
    </>
}`,...(M=(I=c.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var w,z,F;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <ul>
      <li>
        <Tag>Design</Tag>
      </li>
      <li>
        <Tag>Development</Tag>
      </li>
      <li>
        <Tag>Accessibility</Tag>
      </li>
    </ul>
}`,...(F=(z=i.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var N,Z,Y;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <div role="list">
      <div role="listitem">
        <Tag>Design</Tag>
      </div>
      <div role="listitem">
        <Tag>Development</Tag>
      </div>
      <div role="listitem">
        <Tag>Accessibility</Tag>
      </div>
    </div>
}`,...(Y=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:Y.source}}};var h,P,j;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Tag aria-label="Remove my tag">My tag</Tag>
}`,...(j=(P=d.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const J=["Demo","Color","Default","Disabled","Overview","Size","AccessibilityList","AccessibilityAriaRoles","AccessibilityAriaLabel"],X=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:d,AccessibilityAriaRoles:m,AccessibilityList:i,Color:n,Default:s,Demo:t,Disabled:o,Overview:l,Size:c,__namedExportsOrder:J,default:H},Symbol.toStringTag,{value:"Module"}));export{i as A,n as C,s as D,l as O,c as S,X as T,m as a,d as b,o as c};
