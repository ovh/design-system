import{r as Q,e}from"./index-jIWwRBLr.js";import{j as X}from"./jsx-runtime-Cfl8ynUo.js";import{c as U}from"./index-CqY9YpN0.js";import{a as ee}from"./colors-DSObuHxd.js";import{I as W,a as Y}from"./icon-name-C581wThh.js";import{b as oe,T as ae,a as re}from"./TooltipTrigger-CT3e8Irz.js";import{o as te,C as u}from"./controls-BtiQQn1l.js";var $=(a=>(a.alpha="alpha",a.beta="beta",a.new="new",a.promotion="promotion",a))($||{});const r={...ee,...$},ne=Object.freeze(Object.values(r));var t=(a=>(a.lg="lg",a.md="md",a.sm="sm",a))(t||{});const le=Object.freeze(Object.values(t)),se="_badge_vpjtq_2",b={badge:se,"badge--alpha":"_badge--alpha_vpjtq_11","badge--beta":"_badge--beta_vpjtq_15","badge--critical":"_badge--critical_vpjtq_19","badge--information":"_badge--information_vpjtq_23","badge--neutral":"_badge--neutral_vpjtq_27","badge--new":"_badge--new_vpjtq_31","badge--primary":"_badge--primary_vpjtq_35","badge--promotion":"_badge--promotion_vpjtq_39","badge--success":"_badge--success_vpjtq_43","badge--warning":"_badge--warning_vpjtq_47","badge--sm":"_badge--sm_vpjtq_51","badge--md":"_badge--md_vpjtq_56","badge--lg":"_badge--lg_vpjtq_61"},o=Q.forwardRef(({children:a,className:V,color:k=r.information,size:H=t.md,...J},K)=>X.jsx("span",{className:U(b.badge,b[`badge--${k}`],b[`badge--${H}`],V),"data-ods":"badge",ref:K,...J,children:a}));o.displayName="Badge";o.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{color:{required:!1,tsType:{name:"literal",value:"`${BADGE_COLOR}`"},description:"The color preset to use.",defaultValue:{value:"BADGE_COLOR.information",computed:!0}},size:{required:!1,tsType:{name:"literal",value:"`${BADGE_SIZE}`"},description:"The size preset to use.",defaultValue:{value:"BADGE_SIZE.md",computed:!0}}},composes:["ComponentPropsWithRef"]};const de={component:o,title:"React Components/Badge"},n={argTypes:te({children:{table:{category:u.slot},control:"text"},color:{table:{category:u.design,type:{summary:"BADGE_COLOR"}},control:{type:"select"},options:ne},size:{table:{category:u.design,type:{summary:"BADGE_SIZE"}},control:{type:"select"},options:le}}),args:{children:"My badge"}},l={decorators:[a=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},a())],globals:{imports:"import { BADGE_COLOR, Badge } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(o,{color:r.alpha},"Alpha"),e.createElement(o,{color:r.beta},"Beta"),e.createElement(o,{color:r.critical},"Critical"),e.createElement(o,{color:r.information},"Information"),e.createElement(o,{color:r.neutral},"Neutral"),e.createElement(o,{color:r.new},"New"),e.createElement(o,{color:r.primary},"Primary"),e.createElement(o,{color:r.promotion},"Promotion"),e.createElement(o,{color:r.success},"Success"),e.createElement(o,{color:r.warning},"Warning"))},s={globals:{imports:"import { Badge } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,null,"My badge")},d={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(o,null,"Badge")},i={globals:{imports:"import { BADGE_SIZE, Badge } from '@ovhcloud/ods-react';"},decorators:[a=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},a())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(o,{size:t.sm},"SM badge"),e.createElement(o,{size:t.md},"MD badge"),e.createElement(o,{size:t.lg},"LG badge"))},c={globals:{imports:"import { ICON_NAME, Badge, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,null,e.createElement(W,{"aria-label":"Promotion",name:Y.tag,role:"img"}))},m={globals:{imports:"import { BADGE_COLOR, ICON_NAME, Badge, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(oe,null,e.createElement(ae,{asChild:!0},e.createElement(o,{"aria-labelledby":"tooltip-a11y",color:r.promotion},e.createElement(W,{name:Y.tag}))),e.createElement(re,{id:"tooltip-a11y"},"Promotion valid from November 22 to 26"))},g={globals:{imports:"import { Badge } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("ul",{style:{display:"flex",flexFlow:"row",gap:"8px",margin:0,padding:0,listStyle:"none"}},e.createElement("li",null,e.createElement(o,null,"Item 1")),e.createElement("li",null,e.createElement(o,null,"Item 2")))},p={globals:{imports:"import { Badge } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("div",{role:"list",style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},e.createElement(o,{role:"listitem"},"Item 1"),e.createElement(o,{role:"listitem"},"Item 2"))};var B,_,E;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(E=(_=n.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var y,v,O;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(O=(v=l.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var f,A,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Badge } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Badge>
      My badge
    </Badge>
}`,...(C=(A=s.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var I,G,D;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Badge>
      Badge
    </Badge>
}`,...(D=(G=d.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var T,h,x;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var R,w,S;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Badge, Icon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Badge>
      <Icon aria-label="Promotion" name={ICON_NAME.tag} role="img" />
    </Badge>
}`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var L,N,j;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(j=(N=m.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var q,z,M;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(M=(z=g.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var F,P,Z;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(Z=(P=p.parameters)==null?void 0:P.docs)==null?void 0:Z.source}}};const ie=["Demo","Color","Default","Overview","Size","AccessibilityAriaLabel","AccessibilityWithTooltip","AccessibilityGrouping","AccessibilityAlternativeGrouping"],_e=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAlternativeGrouping:p,AccessibilityAriaLabel:c,AccessibilityGrouping:g,AccessibilityWithTooltip:m,Color:l,Default:s,Demo:n,Overview:d,Size:i,__namedExportsOrder:ie,default:de},Symbol.toStringTag,{value:"Module"}));export{c as A,_e as B,l as C,s as D,d as O,i as S,m as a,g as b,p as c};
