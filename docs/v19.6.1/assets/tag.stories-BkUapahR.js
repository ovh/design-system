import{e}from"./index-jIWwRBLr.js";import{b as U,a as V}from"./icon-name-DsSs6qF8.js";import{T as r,a as X,b as y}from"./Tag-DT-1jNFv.js";import{C as $,a}from"./colors-DSObuHxd.js";import{e as ee,o as re,C as o}from"./controls-BtiQQn1l.js";const ae={argTypes:ee(["onRemove"]),component:r,title:"React Components/Tag"},n={argTypes:re({color:{table:{category:o.design,type:{summary:"TAG_COLOR"}},control:{type:"select"},options:$},children:{table:{category:o.general},control:"text"},disabled:{table:{category:o.general,type:{summary:"boolean"}},control:{type:"boolean"}},icon:{table:{category:o.design,type:{summary:"ICON_NAME"}},control:{type:"select"},options:U},size:{table:{category:o.design,type:{summary:"TAG_SIZE"}},control:{type:"select"},options:X}}),args:{children:"My tag"}},s={decorators:[t=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},t())],globals:{imports:"import { TAG_COLOR, Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:a.critical},"Critical"),e.createElement(r,{color:a.information},"Information"),e.createElement(r,{color:a.neutral},"Neutral"),e.createElement(r,{color:a.primary},"Primary"),e.createElement(r,{color:a.success},"Success"),e.createElement(r,{color:a.warning},"Warning"))},l={decorators:[t=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},t())],globals:{imports:"import { ICON_NAME, Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{icon:null},"No Icon"),e.createElement(r,{icon:V.star},"Custom Icon"))},c={globals:{imports:"import { Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null,"My tag")},i={globals:{imports:"import { Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{disabled:!0},"My tag")},m={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null,"My tag")},g={decorators:[t=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},t())],globals:{imports:"import { TAG_SIZE, Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{size:y.md},"MD tag"),e.createElement(r,{size:y.lg},"LG tag"))},d={globals:{imports:"import { Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("ul",null,e.createElement("li",null,e.createElement(r,null,"Design")),e.createElement("li",null,e.createElement(r,null,"Development")),e.createElement("li",null,e.createElement(r,null,"Accessibility")))},p={globals:{imports:"import { Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("div",{role:"list"},e.createElement("div",{role:"listitem"},e.createElement(r,null,"Design")),e.createElement("div",{role:"listitem"},e.createElement(r,null,"Development")),e.createElement("div",{role:"listitem"},e.createElement(r,null,"Accessibility")))},u={globals:{imports:"import { Tag } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{"aria-label":"Remove my tag"},"My tag")},T={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"row wrap",gap:"8px",alignItems:"center"}},e.createElement(r,null,"Default"),e.createElement(r,{disabled:!0},"Disabled"),e.createElement(r,{size:y.lg},"Large"),e.createElement(r,{color:a.primary},"Primary"),e.createElement(r,{color:a.success},"Success"),e.createElement(r,{color:a.warning},"Warning"),e.createElement(r,{color:a.critical},"Critical"),e.createElement(r,{color:a.information},"Info"),e.createElement(r,{color:a.neutral},"Neutral"))};var v,O,E;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(E=(O=n.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var b,A,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(C=(A=s.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var f,_,G;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(G=(_=l.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var R,S,I;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(I=(S=c.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var L,x,N;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(N=(x=i.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var w,h,D;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tag>
      My tag
    </Tag>
}`,...(D=(h=m.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var M,F,z;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(z=(F=g.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var Z,Y,P;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(P=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:P.source}}};var W,j,k;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(k=(j=p.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var q,B,H;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tag } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tag aria-label="Remove my tag">
      My tag
    </Tag>
}`,...(H=(B=u.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var J,K,Q;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=T.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const te=["Demo","Color","CustomIcon","Default","Disabled","Overview","Size","AccessibilityList","AccessibilityAriaRoles","AccessibilityAriaLabel","ThemeGenerator"],ie=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:u,AccessibilityAriaRoles:p,AccessibilityList:d,Color:s,CustomIcon:l,Default:c,Demo:n,Disabled:i,Overview:m,Size:g,ThemeGenerator:T,__namedExportsOrder:te,default:ae},Symbol.toStringTag,{value:"Module"}));export{d as A,s as C,c as D,m as O,g as S,ie as T,p as a,u as b,i as c,l as d};
