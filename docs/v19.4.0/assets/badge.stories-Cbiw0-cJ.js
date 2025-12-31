import{r as oe,e}from"./index-jIWwRBLr.js";import{j as te}from"./jsx-runtime-Cfl8ynUo.js";import{c as ne}from"./index-CqY9YpN0.js";import{a as le}from"./colors-DSObuHxd.js";import{I as H,a as J}from"./icon-name-BpdEc4-2.js";import{b as se,T as ie,a as de}from"./TooltipTrigger-Bh-jDz_G.js";import{o as ce,C as b}from"./controls-BtiQQn1l.js";var K=(r=>(r.alpha="alpha",r.beta="beta",r.new="new",r.promotion="promotion",r))(K||{});const o={...le,...K},Q=Object.freeze(Object.values(o));var t=(r=>(r.lg="lg",r.md="md",r.sm="sm",r))(t||{});const X=Object.freeze(Object.values(t)),me="_badge_14ftx_2",E={badge:me,"badge--alpha":"_badge--alpha_14ftx_37","badge--beta":"_badge--beta_14ftx_41","badge--critical":"_badge--critical_14ftx_45","badge--information":"_badge--information_14ftx_49","badge--neutral":"_badge--neutral_14ftx_53","badge--new":"_badge--new_14ftx_57","badge--primary":"_badge--primary_14ftx_61","badge--promotion":"_badge--promotion_14ftx_65","badge--success":"_badge--success_14ftx_69","badge--warning":"_badge--warning_14ftx_73","badge--sm":"_badge--sm_14ftx_77","badge--md":"_badge--md_14ftx_82","badge--lg":"_badge--lg_14ftx_87"},a=oe.forwardRef(({children:r,className:n,color:U=o.information,size:ee=t.md,...ae},re)=>te.jsx("span",{className:ne(E.badge,E[`badge--${U}`],E[`badge--${ee}`],n),"data-ods":"badge",ref:re,...ae,children:r}));a.displayName="Badge";a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{color:{required:!1,tsType:{name:"literal",value:"`${BADGE_COLOR}`"},description:"The color preset to use.",defaultValue:{value:"BADGE_COLOR.information",computed:!0}},size:{required:!1,tsType:{name:"literal",value:"`${BADGE_SIZE}`"},description:"The size preset to use.",defaultValue:{value:"BADGE_SIZE.md",computed:!0}}},composes:["ComponentPropsWithRef"]};const ge={component:a,title:"React Components/Badge"},l={argTypes:ce({children:{table:{category:b.slot},control:"text"},color:{table:{category:b.design,type:{summary:"BADGE_COLOR"}},control:{type:"select"},options:Q},size:{table:{category:b.design,type:{summary:"BADGE_SIZE"}},control:{type:"select"},options:X}}),args:{children:"My badge"}},s={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:"import { BADGE_COLOR, Badge } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(a,{color:o.alpha},"Alpha"),e.createElement(a,{color:o.beta},"Beta"),e.createElement(a,{color:o.critical},"Critical"),e.createElement(a,{color:o.information},"Information"),e.createElement(a,{color:o.neutral},"Neutral"),e.createElement(a,{color:o.new},"New"),e.createElement(a,{color:o.primary},"Primary"),e.createElement(a,{color:o.promotion},"Promotion"),e.createElement(a,{color:o.success},"Success"),e.createElement(a,{color:o.warning},"Warning"))},i={globals:{imports:"import { Badge } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,null,"My badge")},d={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,null,"Badge")},c={globals:{imports:"import { BADGE_SIZE, Badge } from '@ovhcloud/ods-react';"},decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(a,{size:t.sm},"SM badge"),e.createElement(a,{size:t.md},"MD badge"),e.createElement(a,{size:t.lg},"LG badge"))},m={globals:{imports:"import { ICON_NAME, Badge, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,null,e.createElement(H,{"aria-label":"Promotion",name:J.tag,role:"img"}))},g={globals:{imports:"import { BADGE_COLOR, ICON_NAME, Badge, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(se,null,e.createElement(ie,{asChild:!0},e.createElement(a,{"aria-labelledby":"tooltip-a11y",color:o.promotion},e.createElement(H,{name:J.tag}))),e.createElement(de,{id:"tooltip-a11y"},"Promotion valid from November 22 to 26"))},p={globals:{imports:"import { Badge } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("ul",{style:{display:"flex",flexFlow:"row",gap:"8px",margin:0,padding:0,listStyle:"none"}},e.createElement("li",null,e.createElement(a,null,"Item 1")),e.createElement("li",null,e.createElement(a,null,"Item 2")))},u={globals:{imports:"import { Badge } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("div",{role:"list",style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},e.createElement(a,{role:"listitem"},"Item 1"),e.createElement(a,{role:"listitem"},"Item 2"))},B={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},X.map(r=>e.createElement("div",{key:r,style:{display:"flex",flexFlow:"row",flexWrap:"wrap",gap:"8px",alignItems:"center"}},Q.map(n=>e.createElement(a,{key:`${String(r)}-${String(n)}`,size:r,color:n},String(n))))))};var y,f,_;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
          summary: 'BADGE_COLOR'
        }
      },
      control: {
        type: 'select'
      },
      options: BADGE_COLORS
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'BADGE_SIZE'
        }
      },
      control: {
        type: 'select'
      },
      options: BADGE_SIZES
    }
  }),
  args: {
    children: 'My badge'
  }
}`,...(_=(f=l.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var O,v,x;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  globals: {
    imports: \`import { BADGE_COLOR, Badge } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Badge color={BADGE_COLOR.alpha}>Alpha</Badge>
      <Badge color={BADGE_COLOR.beta}>Beta</Badge>
      <Badge color={BADGE_COLOR.critical}>Critical</Badge>
      <Badge color={BADGE_COLOR.information}>Information</Badge>
      <Badge color={BADGE_COLOR.neutral}>Neutral</Badge>
      <Badge color={BADGE_COLOR.new}>New</Badge>
      <Badge color={BADGE_COLOR.primary}>Primary</Badge>
      <Badge color={BADGE_COLOR.promotion}>Promotion</Badge>
      <Badge color={BADGE_COLOR.success}>Success</Badge>
      <Badge color={BADGE_COLOR.warning}>Warning</Badge>
    </>
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var A,C,I;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Badge } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Badge>
      My badge
    </Badge>
}`,...(I=(C=i.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var G,S,D;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Badge>
      Badge
    </Badge>
}`,...(D=(S=d.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var w,T,h;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  globals: {
    imports: \`import { BADGE_SIZE, Badge } from '@ovhcloud/ods-react';\`
  },
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Badge size={BADGE_SIZE.sm}>SM badge</Badge>
      <Badge size={BADGE_SIZE.md}>MD badge</Badge>
      <Badge size={BADGE_SIZE.lg}>LG badge</Badge>
    </>
}`,...(h=(T=c.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var R,L,N;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Badge, Icon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Badge>
      <Icon aria-label="Promotion" name={ICON_NAME.tag} role="img" />
    </Badge>
}`,...(N=(L=m.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var z,M,F;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { BADGE_COLOR, ICON_NAME, Badge, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tooltip>
      <TooltipTrigger asChild>
        <Badge aria-labelledby="tooltip-a11y" color={BADGE_COLOR.promotion}>
          <Icon name={ICON_NAME.tag} />
        </Badge>
      </TooltipTrigger>

      <TooltipContent id="tooltip-a11y">
        Promotion valid from November 22 to 26
      </TooltipContent>
    </Tooltip>
}`,...(F=(M=g.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var P,Z,j;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Badge } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <ul style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    margin: 0,
    padding: 0,
    listStyle: 'none'
  }}>
      <li>
        <Badge>
          Item 1
        </Badge>
      </li>
      <li>
        <Badge>
          Item 2
        </Badge>
      </li>
    </ul>
}`,...(j=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:j.source}}};var $,W,k;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Badge } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <div role="list" style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>
      <Badge role="listitem">
        Item 1
      </Badge>
      <Badge role="listitem">
        Item 2
      </Badge>
    </div>
}`,...(k=(W=u.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var Y,q,V;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {BADGE_SIZES.map(size => <div key={size} style={{
      display: 'flex',
      flexFlow: 'row',
      flexWrap: 'wrap',
      gap: '8px',
      alignItems: 'center'
    }}>
          {BADGE_COLORS.map(color => <Badge key={\`\${String(size)}-\${String(color)}\`} size={size} color={color}>
              {String(color)}
            </Badge>)}
        </div>)}
    </div>
}`,...(V=(q=B.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};const pe=["Demo","Color","Default","Overview","Size","AccessibilityAriaLabel","AccessibilityWithTooltip","AccessibilityGrouping","AccessibilityAlternativeGrouping","ThemeGenerator"],Oe=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAlternativeGrouping:u,AccessibilityAriaLabel:m,AccessibilityGrouping:p,AccessibilityWithTooltip:g,Color:s,Default:i,Demo:l,Overview:d,Size:c,ThemeGenerator:B,__namedExportsOrder:pe,default:ge},Symbol.toStringTag,{value:"Module"}));export{m as A,Oe as B,s as C,i as D,d as O,c as S,g as a,p as b,u as c};
