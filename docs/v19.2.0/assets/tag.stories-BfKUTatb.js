import{e}from"./index-jIWwRBLr.js";import{T as r,a as W,b as u}from"./Tag-Bp5l-_LL.js";import{C as k,a}from"./colors-DSObuHxd.js";import{e as q,o as B,C as g}from"./controls-BtiQQn1l.js";const H={argTypes:q(["onRemove"]),component:r,title:"React Components/Tag"},t={argTypes:B({color:{table:{category:g.design,type:{summary:"TAG_COLOR"}},control:{type:"select"},options:k},children:{table:{category:g.general},control:"text"},disabled:{table:{category:g.general,type:{summary:"boolean"}},control:{type:"boolean"}},size:{table:{category:g.design,type:{summary:"TAG_SIZE"}},control:{type:"select"},options:W}}),args:{children:"My tag"}},o={decorators:[p=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},p())],globals:{imports:"import { TAG_COLOR, Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:a.critical},"Critical"),e.createElement(r,{color:a.information},"Information"),e.createElement(r,{color:a.neutral},"Neutral"),e.createElement(r,{color:a.primary},"Primary"),e.createElement(r,{color:a.success},"Success"),e.createElement(r,{color:a.warning},"Warning"))},n={globals:{imports:"import { Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null,"My tag")},s={globals:{imports:"import { Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{disabled:!0},"My tag")},l={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null,"My tag")},c={decorators:[p=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},p())],globals:{imports:"import { TAG_SIZE, Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{size:u.md},"MD tag"),e.createElement(r,{size:u.lg},"LG tag"))},i={globals:{imports:"import { Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("ul",null,e.createElement("li",null,e.createElement(r,null,"Design")),e.createElement("li",null,e.createElement(r,null,"Development")),e.createElement("li",null,e.createElement(r,null,"Accessibility")))},m={globals:{imports:"import { Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("div",{role:"list"},e.createElement("div",{role:"listitem"},e.createElement(r,null,"Design")),e.createElement("div",{role:"listitem"},e.createElement(r,null,"Development")),e.createElement("div",{role:"listitem"},e.createElement(r,null,"Accessibility")))},d={globals:{imports:"import { Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{"aria-label":"Remove my tag"},"My tag")};var T,y,v;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var b,O,E;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  globals: {
    imports: \`import { TAG_COLOR, Tag } from '@ovhcloud/ods-react';\`
  },
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
}`,...(E=(O=o.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var A,f,C;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tag } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tag>
      My tag
    </Tag>
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var _,S,R;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tag } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tag disabled>
      My tag
    </Tag>
}`,...(R=(S=s.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var G,L,h;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tag>
      My tag
    </Tag>
}`,...(h=(L=l.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var D,x,I;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  globals: {
    imports: \`import { TAG_SIZE, Tag } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <>
      <Tag size={TAG_SIZE.md}>MD tag</Tag>
      <Tag size={TAG_SIZE.lg}>LG tag</Tag>
    </>
}`,...(I=(x=c.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var M,w,z;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tag } from '@ovhcloud/ods-react';\`
  },
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
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var Z,F,N;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tag } from '@ovhcloud/ods-react';\`
  },
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
}`,...(N=(F=m.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var Y,P,j;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tag } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tag aria-label="Remove my tag">
      My tag
    </Tag>
}`,...(j=(P=d.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const J=["Demo","Color","Default","Disabled","Overview","Size","AccessibilityList","AccessibilityAriaRoles","AccessibilityAriaLabel"],X=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:d,AccessibilityAriaRoles:m,AccessibilityList:i,Color:o,Default:n,Demo:t,Disabled:s,Overview:l,Size:c,__namedExportsOrder:J,default:H},Symbol.toStringTag,{value:"Module"}));export{i as A,o as C,n as D,l as O,c as S,X as T,m as a,d as b,s as c};
