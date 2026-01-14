import{e}from"./index-jIWwRBLr.js";import{T as r,a as H,b as u}from"./Tag-DlakOnvv.js";import{C as J,a}from"./colors-DSObuHxd.js";import{e as K,o as Q,C as p}from"./controls-BtiQQn1l.js";const U={argTypes:K(["onRemove"]),component:r,title:"React Components/Tag"},t={argTypes:Q({color:{table:{category:p.design,type:{summary:"TAG_COLOR"}},control:{type:"select"},options:J},children:{table:{category:p.general},control:"text"},disabled:{table:{category:p.general,type:{summary:"boolean"}},control:{type:"boolean"}},size:{table:{category:p.design,type:{summary:"TAG_SIZE"}},control:{type:"select"},options:H}}),args:{children:"My tag"}},o={decorators:[T=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},T())],globals:{imports:"import { TAG_COLOR, Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:a.critical},"Critical"),e.createElement(r,{color:a.information},"Information"),e.createElement(r,{color:a.neutral},"Neutral"),e.createElement(r,{color:a.primary},"Primary"),e.createElement(r,{color:a.success},"Success"),e.createElement(r,{color:a.warning},"Warning"))},n={globals:{imports:"import { Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null,"My tag")},l={globals:{imports:"import { Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{disabled:!0},"My tag")},s={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null,"My tag")},c={decorators:[T=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},T())],globals:{imports:"import { TAG_SIZE, Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{size:u.md},"MD tag"),e.createElement(r,{size:u.lg},"LG tag"))},i={globals:{imports:"import { Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("ul",null,e.createElement("li",null,e.createElement(r,null,"Design")),e.createElement("li",null,e.createElement(r,null,"Development")),e.createElement("li",null,e.createElement(r,null,"Accessibility")))},m={globals:{imports:"import { Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("div",{role:"list"},e.createElement("div",{role:"listitem"},e.createElement(r,null,"Design")),e.createElement("div",{role:"listitem"},e.createElement(r,null,"Development")),e.createElement("div",{role:"listitem"},e.createElement(r,null,"Accessibility")))},g={globals:{imports:"import { Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{"aria-label":"Remove my tag"},"My tag")},d={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"row wrap",gap:"8px",alignItems:"center"}},e.createElement(r,null,"Default"),e.createElement(r,{disabled:!0},"Disabled"),e.createElement(r,{size:u.lg},"Large"),e.createElement(r,{color:a.primary},"Primary"),e.createElement(r,{color:a.success},"Success"),e.createElement(r,{color:a.warning},"Warning"),e.createElement(r,{color:a.critical},"Critical"),e.createElement(r,{color:a.information},"Info"),e.createElement(r,{color:a.neutral},"Neutral"))};var y,v,O;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(O=(v=t.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var E,b,f;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var A,C,_;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(_=(C=n.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var G,R,S;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(S=(R=l.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var L,x,D;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tag>
      My tag
    </Tag>
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var h,w,I;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(I=(w=c.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var M,z,Z;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(Z=(z=i.parameters)==null?void 0:z.docs)==null?void 0:Z.source}}};var F,N,P;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=(N=m.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var Y,W,j;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tag } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tag aria-label="Remove my tag">
      My tag
    </Tag>
}`,...(j=(W=g.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var k,q,B;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexFlow: 'row wrap',
    gap: '8px',
    alignItems: 'center'
  }}>
      <Tag>Default</Tag>
      <Tag disabled>Disabled</Tag>
      <Tag size={TAG_SIZE.lg}>Large</Tag>
      <Tag color={TAG_COLOR.primary}>Primary</Tag>
      <Tag color={TAG_COLOR.success}>Success</Tag>
      <Tag color={TAG_COLOR.warning}>Warning</Tag>
      <Tag color={TAG_COLOR.critical}>Critical</Tag>
      <Tag color={TAG_COLOR.information}>Info</Tag>
      <Tag color={TAG_COLOR.neutral}>Neutral</Tag>
    </div>
}`,...(B=(q=d.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const V=["Demo","Color","Default","Disabled","Overview","Size","AccessibilityList","AccessibilityAriaRoles","AccessibilityAriaLabel","ThemeGenerator"],ae=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:g,AccessibilityAriaRoles:m,AccessibilityList:i,Color:o,Default:n,Demo:t,Disabled:l,Overview:s,Size:c,ThemeGenerator:d,__namedExportsOrder:V,default:U},Symbol.toStringTag,{value:"Module"}));export{i as A,o as C,n as D,s as O,c as S,ae as T,m as a,g as b,l as c};
