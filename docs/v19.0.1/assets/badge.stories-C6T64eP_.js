import{r as h,e}from"./index-D_CmzhJ4.js";import{j as q}from"./jsx-runtime-VM66peLj.js";import{c as z}from"./index-CkQHsVsO.js";import{a as I}from"./colors-DSObuHxd.js";import{o as N,C as g}from"./controls-BtiQQn1l.js";var R=(r=>(r.alpha="alpha",r.beta="beta",r.new="new",r.promotion="promotion",r))(R||{});const t={...I,...R},T=Object.freeze(Object.values(t));var o=(r=>(r.lg="lg",r.md="md",r.sm="sm",r))(o||{});const Z=Object.freeze(Object.values(o)),F="_badge_vpjtq_2",m={badge:F,"badge--alpha":"_badge--alpha_vpjtq_11","badge--beta":"_badge--beta_vpjtq_15","badge--critical":"_badge--critical_vpjtq_19","badge--information":"_badge--information_vpjtq_23","badge--neutral":"_badge--neutral_vpjtq_27","badge--new":"_badge--new_vpjtq_31","badge--primary":"_badge--primary_vpjtq_35","badge--promotion":"_badge--promotion_vpjtq_39","badge--success":"_badge--success_vpjtq_43","badge--warning":"_badge--warning_vpjtq_47","badge--sm":"_badge--sm_vpjtq_51","badge--md":"_badge--md_vpjtq_56","badge--lg":"_badge--lg_vpjtq_61"},a=h.forwardRef(({children:r,className:j,color:w=t.information,size:S=o.md,...L},x)=>q.jsx("span",{className:z(m.badge,m[`badge--${w}`],m[`badge--${S}`],j),ref:x,...L,children:r}));a.displayName="Badge";a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{color:{required:!1,tsType:{name:"literal",value:"`${BADGE_COLOR}`"},description:"The color preset to use.",defaultValue:{value:"BADGE_COLOR.information",computed:!0}},size:{required:!1,tsType:{name:"literal",value:"`${BADGE_SIZE}`"},description:"The size preset to use.",defaultValue:{value:"BADGE_SIZE.md",computed:!0}}},composes:["ComponentPropsWithRef"]};const M={component:a,title:"React Components/Badge"},n={argTypes:N({children:{table:{category:g.slot},control:"text"},color:{table:{category:g.design,type:{summary:"BADGE_COLOR"}},control:{type:"select"},options:T},size:{table:{category:g.design,type:{summary:"BADGE_SIZE"}},control:{type:"select"},options:Z}}),args:{children:"My badge"}},s={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(a,{color:t.alpha},"Alpha"),e.createElement(a,{color:t.beta},"Beta"),e.createElement(a,{color:t.critical},"Critical"),e.createElement(a,{color:t.information},"Information"),e.createElement(a,{color:t.neutral},"Neutral"),e.createElement(a,{color:t.new},"New"),e.createElement(a,{color:t.primary},"Primary"),e.createElement(a,{color:t.promotion},"Promotion"),e.createElement(a,{color:t.success},"Success"),e.createElement(a,{color:t.warning},"Warning"))},l={tags:["!dev"],render:({})=>e.createElement(a,null,"My badge")},d={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,null,"Badge")},c={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(a,{size:o.sm},"SM badge"),e.createElement(a,{size:o.md},"MD badge"),e.createElement(a,{size:o.lg},"LG badge"))};var i,p,_;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(_=(p=n.parameters)==null?void 0:p.docs)==null?void 0:_.source}}};var u,b,B;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(B=(b=s.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var E,y,O;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Badge>
      My badge
    </Badge>
}`,...(O=(y=l.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var v,f,C;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Badge>
      Badge
    </Badge>
}`,...(C=(f=d.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var D,A,G;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(G=(A=c.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const P=["Demo","Color","Default","Overview","Size"],H=Object.freeze(Object.defineProperty({__proto__:null,Color:s,Default:l,Demo:n,Overview:d,Size:c,__namedExportsOrder:P,default:M},Symbol.toStringTag,{value:"Module"}));export{H as B,s as C,l as D,d as O,c as S};
