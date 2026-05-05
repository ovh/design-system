import{e}from"./index-jIWwRBLr.js";import{b as ee,a as re}from"./icon-name-D0KNfDOz.js";import{T as r,a as ae,b as v}from"./Tag-DvbeX4Ez.js";import{C as te,a}from"./colors-DSObuHxd.js";import{e as oe,o as ne,C as o}from"./controls-BtiQQn1l.js";const se={argTypes:oe(["onRemove"]),component:r,title:"React Components/Tag"},n={argTypes:ne({color:{table:{category:o.design,type:{summary:"TAG_COLOR"}},control:{type:"select"},options:te},children:{table:{category:o.general},control:"text"},disabled:{table:{category:o.general,type:{summary:"boolean"}},control:{type:"boolean"}},icon:{table:{category:o.design,type:{summary:"ICON_NAME"}},control:{type:"select"},options:ee},size:{table:{category:o.design,type:{summary:"TAG_SIZE"}},control:{type:"select"},options:ae}}),args:{children:"My tag"}},s={tags:["!dev"],render:({})=>e.createElement(r,null,"My tag")},l={decorators:[t=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},t())],globals:{imports:"import { TAG_COLOR, Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:a.critical},"Critical"),e.createElement(r,{color:a.information},"Information"),e.createElement(r,{color:a.neutral},"Neutral"),e.createElement(r,{color:a.primary},"Primary"),e.createElement(r,{color:a.success},"Success"),e.createElement(r,{color:a.warning},"Warning"))},c={decorators:[t=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},t())],globals:{imports:"import { ICON_NAME, Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{icon:null},"No Icon"),e.createElement(r,{icon:re.star},"Custom Icon"))},i={globals:{imports:"import { Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null,"My tag")},m={globals:{imports:"import { Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{disabled:!0},"My tag")},g={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null,"My tag")},d={decorators:[t=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},t())],globals:{imports:"import { TAG_SIZE, Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{size:v.md},"MD tag"),e.createElement(r,{size:v.lg},"LG tag"))},p={globals:{imports:"import { Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("ul",null,e.createElement("li",null,e.createElement(r,null,"Design")),e.createElement("li",null,e.createElement(r,null,"Development")),e.createElement("li",null,e.createElement(r,null,"Accessibility")))},u={globals:{imports:"import { Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("div",{role:"list"},e.createElement("div",{role:"listitem"},e.createElement(r,null,"Design")),e.createElement("div",{role:"listitem"},e.createElement(r,null,"Development")),e.createElement("div",{role:"listitem"},e.createElement(r,null,"Accessibility")))},T={globals:{imports:"import { Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{"aria-label":"Remove my tag"},"My tag")},y={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"row wrap",gap:"8px",alignItems:"center"}},e.createElement(r,null,"Default"),e.createElement(r,{disabled:!0},"Disabled"),e.createElement(r,{size:v.lg},"Large"),e.createElement(r,{color:a.primary},"Primary"),e.createElement(r,{color:a.success},"Success"),e.createElement(r,{color:a.warning},"Warning"),e.createElement(r,{color:a.critical},"Critical"),e.createElement(r,{color:a.information},"Info"),e.createElement(r,{color:a.neutral},"Neutral"))};var E,O,b;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    icon: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'ICON_NAME'
        }
      },
      control: {
        type: 'select'
      },
      options: ICON_NAMES
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
}`,...(b=(O=n.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var A,C,f;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Tag>
      My tag
    </Tag>
}`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var _,S,G;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(G=(S=l.parameters)==null?void 0:S.docs)==null?void 0:G.source}}};var R,I,L;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  globals: {
    imports: \`import { ICON_NAME, Tag } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <>
      <Tag icon={null}>
        No Icon
      </Tag>

      <Tag icon={ICON_NAME.star}>
        Custom Icon
      </Tag>
    </>
}`,...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var x,N,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(N=i.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var w,M,D;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(M=m.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var F,z,Z;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tag>
      My tag
    </Tag>
}`,...(Z=(z=g.parameters)==null?void 0:z.docs)==null?void 0:Z.source}}};var Y,P,W;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(W=(P=d.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var j,k,q;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(q=(k=p.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var B,H,J;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tag } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tag aria-label="Remove my tag">
      My tag
    </Tag>
}`,...(U=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,X,$;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...($=(X=y.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};const le=["Demo","AnatomyTech","Color","CustomIcon","Default","Disabled","Overview","Size","AccessibilityList","AccessibilityAriaRoles","AccessibilityAriaLabel","ThemeGenerator"],pe=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:T,AccessibilityAriaRoles:u,AccessibilityList:p,AnatomyTech:s,Color:l,CustomIcon:c,Default:i,Demo:n,Disabled:m,Overview:g,Size:d,ThemeGenerator:y,__namedExportsOrder:le,default:se},Symbol.toStringTag,{value:"Module"}));export{p as A,l as C,i as D,g as O,d as S,pe as T,u as a,T as b,s as c,m as d,c as e};
