import{r as Q,e}from"./index-D_CmzhJ4.js";import{j as X}from"./jsx-runtime-VM66peLj.js";import{c as U}from"./index-CkQHsVsO.js";import{a as ee}from"./colors-DSObuHxd.js";import{I as W,a as Y}from"./icon-name-CL_C5kfn.js";import{b as ae,T as re,a as te}from"./TooltipTrigger--1kPNsOd.js";import{o as oe,C as u}from"./controls-BtiQQn1l.js";var $=(r=>(r.alpha="alpha",r.beta="beta",r.new="new",r.promotion="promotion",r))($||{});const t={...ee,...$},ne=Object.freeze(Object.values(t));var o=(r=>(r.lg="lg",r.md="md",r.sm="sm",r))(o||{});const le=Object.freeze(Object.values(o)),se="_badge_vpjtq_2",b={badge:se,"badge--alpha":"_badge--alpha_vpjtq_11","badge--beta":"_badge--beta_vpjtq_15","badge--critical":"_badge--critical_vpjtq_19","badge--information":"_badge--information_vpjtq_23","badge--neutral":"_badge--neutral_vpjtq_27","badge--new":"_badge--new_vpjtq_31","badge--primary":"_badge--primary_vpjtq_35","badge--promotion":"_badge--promotion_vpjtq_39","badge--success":"_badge--success_vpjtq_43","badge--warning":"_badge--warning_vpjtq_47","badge--sm":"_badge--sm_vpjtq_51","badge--md":"_badge--md_vpjtq_56","badge--lg":"_badge--lg_vpjtq_61"},a=Q.forwardRef(({children:r,className:V,color:k=t.information,size:H=o.md,...J},K)=>X.jsx("span",{className:U(b.badge,b[`badge--${k}`],b[`badge--${H}`],V),"data-ods":"badge",ref:K,...J,children:r}));a.displayName="Badge";a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{color:{required:!1,tsType:{name:"literal",value:"`${BADGE_COLOR}`"},description:"The color preset to use.",defaultValue:{value:"BADGE_COLOR.information",computed:!0}},size:{required:!1,tsType:{name:"literal",value:"`${BADGE_SIZE}`"},description:"The size preset to use.",defaultValue:{value:"BADGE_SIZE.md",computed:!0}}},composes:["ComponentPropsWithRef"]};const ie={component:a,title:"React Components/Badge"},n={argTypes:oe({children:{table:{category:u.slot},control:"text"},color:{table:{category:u.design,type:{summary:"BADGE_COLOR"}},control:{type:"select"},options:ne},size:{table:{category:u.design,type:{summary:"BADGE_SIZE"}},control:{type:"select"},options:le}}),args:{children:"My badge"}},l={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(a,{color:t.alpha},"Alpha"),e.createElement(a,{color:t.beta},"Beta"),e.createElement(a,{color:t.critical},"Critical"),e.createElement(a,{color:t.information},"Information"),e.createElement(a,{color:t.neutral},"Neutral"),e.createElement(a,{color:t.new},"New"),e.createElement(a,{color:t.primary},"Primary"),e.createElement(a,{color:t.promotion},"Promotion"),e.createElement(a,{color:t.success},"Success"),e.createElement(a,{color:t.warning},"Warning"))},s={tags:["!dev"],render:({})=>e.createElement(a,null,"My badge")},i={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,null,"Badge")},c={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(a,{size:o.sm},"SM badge"),e.createElement(a,{size:o.md},"MD badge"),e.createElement(a,{size:o.lg},"LG badge"))},d={tags:["!dev"],render:({})=>e.createElement(a,null,e.createElement(W,{name:Y.tag,"aria-label":"Promotion",role:"img"}))},m={tags:["!dev"],render:({})=>e.createElement(ae,null,e.createElement(re,{asChild:!0},e.createElement(a,{color:t.promotion,"aria-labelledby":"tooltip-a11y"},e.createElement(W,{name:Y.tag}))),e.createElement(te,{id:"tooltip-a11y"},"Promotion valid from November 22 to 26"))},g={tags:["!dev"],render:({})=>e.createElement("ul",{style:{display:"flex",flexFlow:"row",gap:"8px",margin:0,padding:0,listStyle:"none"}},e.createElement("li",null,e.createElement(a,null,"Item 1")),e.createElement("li",null,e.createElement(a,null,"Item 2")))},p={tags:["!dev"],render:({})=>e.createElement("div",{role:"list",style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},e.createElement(a,{role:"listitem"},"Item 1"),e.createElement(a,{role:"listitem"},"Item 2"))};var _,y,B;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(B=(y=n.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var E,v,O;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
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
  tags: ['!dev'],
  render: ({}) => <Badge>
      My badge
    </Badge>
}`,...(C=(A=s.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var x,G,I;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Badge>
      Badge
    </Badge>
}`,...(I=(G=i.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var w,D,S;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(D=c.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var R,T,L;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Badge>
      <Icon name={ICON_NAME.tag} aria-label="Promotion" role="img"></Icon>
    </Badge>
}`,...(L=(T=d.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var j,h,N;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Tooltip>
      <TooltipTrigger asChild>
        <Badge color={BADGE_COLOR.promotion} aria-labelledby="tooltip-a11y">
          <Icon name={ICON_NAME.tag} />
        </Badge>
      </TooltipTrigger>

      <TooltipContent id="tooltip-a11y">
        Promotion valid from November 22 to 26
      </TooltipContent>
    </Tooltip>
}`,...(N=(h=m.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var q,z,F;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(F=(z=g.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var P,M,Z;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(Z=(M=p.parameters)==null?void 0:M.docs)==null?void 0:Z.source}}};const ce=["Demo","Color","Default","Overview","Size","AccessibilityAriaLabel","AccessibilityWithTooltip","AccessibilityGrouping","AccessibilityAlternativeGrouping"],ye=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAlternativeGrouping:p,AccessibilityAriaLabel:d,AccessibilityGrouping:g,AccessibilityWithTooltip:m,Color:l,Default:s,Demo:n,Overview:i,Size:c,__namedExportsOrder:ce,default:ie},Symbol.toStringTag,{value:"Module"}));export{d as A,ye as B,l as C,s as D,i as O,c as S,m as a,g as b,p as c};
