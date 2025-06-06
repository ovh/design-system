import{r as R,e as a}from"./index-D_CmzhJ4.js";import{j as z}from"./jsx-runtime-VM66peLj.js";import{c as I}from"./index-CkQHsVsO.js";import{o as L,C as g}from"./controls-BtiQQn1l.js";var n=(e=>(e.alpha="alpha",e.beta="beta",e.critical="critical",e.information="information",e.neutral="neutral",e.new="new",e.promotion="promotion",e.success="success",e.warning="warning",e))(n||{});const T=Object.freeze(Object.values(n));var t=(e=>(e.lg="lg",e.md="md",e.sm="sm",e))(t||{});const N=Object.freeze(Object.values(t)),M="_badge_5jh8g_2",i={badge:M,"badge--alpha":"_badge--alpha_5jh8g_11","badge--beta":"_badge--beta_5jh8g_15","badge--critical":"_badge--critical_5jh8g_19","badge--information":"_badge--information_5jh8g_23","badge--neutral":"_badge--neutral_5jh8g_27","badge--new":"_badge--new_5jh8g_31","badge--promotion":"_badge--promotion_5jh8g_35","badge--success":"_badge--success_5jh8g_39","badge--warning":"_badge--warning_5jh8g_43","badge--sm":"_badge--sm_5jh8g_47","badge--md":"_badge--md_5jh8g_52","badge--lg":"_badge--lg_5jh8g_57"},r=R.forwardRef(({children:e,className:j,color:D=n.information,size:x=t.md,...A},G)=>z.jsx("span",{className:I(i.badge,i[`badge--${D}`],i[`badge--${x}`],j),ref:G,...A,children:e}));r.displayName="Badge";r.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{color:{required:!1,tsType:{name:"literal",value:"`${BADGE_COLOR}`"},description:"",defaultValue:{value:"BADGE_COLOR.information",computed:!0}},size:{required:!1,tsType:{name:"literal",value:"`${BADGE_SIZE}`"},description:"",defaultValue:{value:"BADGE_SIZE.md",computed:!0}}},composes:["ComponentPropsWithRef"]};const Z={component:r,title:"ODS Components/Badge"},o={argTypes:L({children:{table:{category:g.slot},control:"text"},color:{table:{category:g.design,type:{summary:"BADGE_COLOR"}},control:{type:"select"},options:T},size:{table:{category:g.design,type:{summary:"BADGE_SIZE"}},control:{type:"select"},options:N}}),args:{children:"My badge"}},s={decorators:[e=>a.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},e())],tags:["!dev"],render:({})=>a.createElement(a.Fragment,null,a.createElement(r,{color:n.alpha},"Alpha"),a.createElement(r,{color:n.beta},"Beta"),a.createElement(r,{color:n.critical},"Critical"),a.createElement(r,{color:n.information},"Information"),a.createElement(r,{color:n.neutral},"Neutral"),a.createElement(r,{color:n.new},"New"),a.createElement(r,{color:n.promotion},"Promotion"),a.createElement(r,{color:n.success},"Success"),a.createElement(r,{color:n.warning},"Warning"))},l={tags:["!dev"],render:({})=>a.createElement(r,null,"My badge")},c={tags:["!dev"],parameters:{layout:"centered"},render:({})=>a.createElement(r,null,"Badge")},d={decorators:[e=>a.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},e())],tags:["!dev"],render:({})=>a.createElement(a.Fragment,null,a.createElement(r,{size:t.sm},"SM badge"),a.createElement(r,{size:t.md},"MD badge"),a.createElement(r,{size:t.lg},"LG badge"))};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var _,b,B;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
      <Badge color={BADGE_COLOR.promotion}>Promotion</Badge>
      <Badge color={BADGE_COLOR.success}>Success</Badge>
      <Badge color={BADGE_COLOR.warning}>Warning</Badge>
    </>
}`,...(B=(b=s.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var E,y,f;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Badge>
      My badge
    </Badge>
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var O,h,v;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Badge>
      Badge
    </Badge>
}`,...(v=(h=c.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var S,w,C;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(w=d.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const F=["Demo","Color","Default","Overview","Size"],q=Object.freeze(Object.defineProperty({__proto__:null,Color:s,Default:l,Demo:o,Overview:c,Size:d,__namedExportsOrder:F,default:Z},Symbol.toStringTag,{value:"Module"}));export{q as B,s as C,l as D,c as O,d as S};
