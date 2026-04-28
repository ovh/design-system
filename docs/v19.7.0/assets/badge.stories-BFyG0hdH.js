import{r as se,e}from"./index-jIWwRBLr.js";import{j as de}from"./jsx-runtime-Cfl8ynUo.js";import{c as ie}from"./index-CqY9YpN0.js";import{a as ce}from"./colors-DSObuHxd.js";import{I as X,a as U}from"./icon-name-D0KNfDOz.js";import{b as me,T as ge,a as pe}from"./index-Ct9O8XVq.js";import{o as ue,C as E}from"./controls-BtiQQn1l.js";var ee=(r=>(r.alpha="alpha",r.beta="beta",r.new="new",r.promotion="promotion",r))(ee||{});const o={...ce,...ee},ae=Object.freeze(Object.values(o));var t=(r=>(r.lg="lg",r.md="md",r.sm="sm",r))(t||{});const re=Object.freeze(Object.values(t)),Be="_badge_ea7zr_2",y={badge:Be,"badge--alpha":"_badge--alpha_ea7zr_37","badge--beta":"_badge--beta_ea7zr_41","badge--critical":"_badge--critical_ea7zr_45","badge--information":"_badge--information_ea7zr_49","badge--neutral":"_badge--neutral_ea7zr_53","badge--new":"_badge--new_ea7zr_57","badge--primary":"_badge--primary_ea7zr_61","badge--promotion":"_badge--promotion_ea7zr_65","badge--success":"_badge--success_ea7zr_69","badge--warning":"_badge--warning_ea7zr_73","badge--sm":"_badge--sm_ea7zr_77","badge--md":"_badge--md_ea7zr_83","badge--lg":"_badge--lg_ea7zr_89"},a=se.forwardRef(({children:r,className:n,color:oe=o.information,size:te=t.md,...ne},le)=>de.jsx("span",{className:ie(y.badge,y[`badge--${oe}`],y[`badge--${te}`],n),"data-ods":"badge",ref:le,...ne,children:r}));a.displayName="Badge";a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{color:{required:!1,tsType:{name:"literal",value:"`${BADGE_COLOR}`"},description:"The color preset to use.",defaultValue:{value:"BADGE_COLOR.information",computed:!0}},size:{required:!1,tsType:{name:"literal",value:"`${BADGE_SIZE}`"},description:"The size preset to use.",defaultValue:{value:"BADGE_SIZE.md",computed:!0}}},composes:["ComponentPropsWithRef"]};const be={component:a,title:"React Components/Badge"},l={argTypes:ue({children:{table:{category:E.slot},control:"text"},color:{table:{category:E.design,type:{summary:"BADGE_COLOR"}},control:{type:"select"},options:ae},size:{table:{category:E.design,type:{summary:"BADGE_SIZE"}},control:{type:"select"},options:re}}),args:{children:"My badge"}},s={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],globals:{imports:"import { BADGE_COLOR, Badge } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(a,{color:o.alpha},"Alpha"),e.createElement(a,{color:o.beta},"Beta"),e.createElement(a,{color:o.critical},"Critical"),e.createElement(a,{color:o.information},"Information"),e.createElement(a,{color:o.neutral},"Neutral"),e.createElement(a,{color:o.new},"New"),e.createElement(a,{color:o.primary},"Primary"),e.createElement(a,{color:o.promotion},"Promotion"),e.createElement(a,{color:o.success},"Success"),e.createElement(a,{color:o.warning},"Warning"))},d={tags:["!dev"],render:({})=>e.createElement(a,null,"Badge")},i={globals:{imports:"import { Badge } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,null,"My badge")},c={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,null,"Badge")},m={globals:{imports:"import { BADGE_SIZE, Badge } from '@ovhcloud/ods-react';"},decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(a,{size:t.sm},"SM badge"),e.createElement(a,{size:t.md},"MD badge"),e.createElement(a,{size:t.lg},"LG badge"))},g={globals:{imports:"import { ICON_NAME, Badge, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,null,e.createElement(X,{"aria-label":"Promotion",name:U.tag,role:"img"}))},p={globals:{imports:"import { BADGE_COLOR, ICON_NAME, Badge, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(me,null,e.createElement(ge,{asChild:!0},e.createElement(a,{"aria-labelledby":"tooltip-a11y",color:o.promotion},e.createElement(X,{name:U.tag}))),e.createElement(pe,{id:"tooltip-a11y"},"Promotion valid from November 22 to 26"))},u={globals:{imports:"import { Badge } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("ul",{style:{display:"flex",flexFlow:"row",gap:"8px",margin:0,padding:0,listStyle:"none"}},e.createElement("li",null,e.createElement(a,null,"Item 1")),e.createElement("li",null,e.createElement(a,null,"Item 2")))},B={globals:{imports:"import { Badge } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("div",{role:"list",style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},e.createElement(a,{role:"listitem"},"Item 1"),e.createElement(a,{role:"listitem"},"Item 2"))},b={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},re.map(r=>e.createElement("div",{key:r,style:{display:"flex",flexFlow:"row",flexWrap:"wrap",gap:"8px",alignItems:"center"}},ae.map(n=>e.createElement(a,{key:`${String(r)}-${String(n)}`,size:r,color:n},String(n))))))};var _,f,v;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var O,A,C;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(C=(A=s.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var x,I,G;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Badge>
      Badge
    </Badge>
}`,...(G=(I=d.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var S,D,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Badge } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Badge>
      My badge
    </Badge>
}`,...(T=(D=i.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var h,w,R;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Badge>
      Badge
    </Badge>
}`,...(R=(w=c.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var z,L,N;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(N=(L=m.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var M,F,P;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Badge, Icon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Badge>
      <Icon aria-label="Promotion" name={ICON_NAME.tag} role="img" />
    </Badge>
}`,...(P=(F=g.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var Z,j,$;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...($=(j=p.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var W,k,Y;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(k=u.parameters)==null?void 0:k.docs)==null?void 0:Y.source}}};var q,V,H;B.parameters={...B.parameters,docs:{...(q=B.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(H=(V=B.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Ee=["Demo","Color","AnatomyTech","Default","Overview","Size","AccessibilityAriaLabel","AccessibilityWithTooltip","AccessibilityGrouping","AccessibilityAlternativeGrouping","ThemeGenerator"],xe=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAlternativeGrouping:B,AccessibilityAriaLabel:g,AccessibilityGrouping:u,AccessibilityWithTooltip:p,AnatomyTech:d,Color:s,Default:i,Demo:l,Overview:c,Size:m,ThemeGenerator:b,__namedExportsOrder:Ee,default:be},Symbol.toStringTag,{value:"Module"}));export{g as A,xe as B,s as C,i as D,c as O,m as S,p as a,u as b,B as c,d};
