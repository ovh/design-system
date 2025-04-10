import{r as L,e as a}from"./index-E9JSHJbc.js";import{j as I}from"./jsx-runtime-BSm7YJ_y.js";import{c as T,o as j,C as m}from"./controls-CQ2mnOwv.js";var o=(e=>(e.alpha="alpha",e.beta="beta",e.critical="critical",e.information="information",e.neutral="neutral",e.new="new",e.promotion="promotion",e.success="success",e.warning="warning",e))(o||{});const i=Object.freeze(Object.values(o));var n=(e=>(e.lg="lg",e.md="md",e.sm="sm",e))(n||{});const p=Object.freeze(Object.values(n)),g={"ods-badge":"_ods-badge_1m1vv_1","ods-badge--alpha":"_ods-badge--alpha_1m1vv_10","ods-badge--beta":"_ods-badge--beta_1m1vv_14","ods-badge--critical":"_ods-badge--critical_1m1vv_18","ods-badge--information":"_ods-badge--information_1m1vv_22","ods-badge--neutral":"_ods-badge--neutral_1m1vv_26","ods-badge--new":"_ods-badge--new_1m1vv_30","ods-badge--promotion":"_ods-badge--promotion_1m1vv_34","ods-badge--success":"_ods-badge--success_1m1vv_38","ods-badge--warning":"_ods-badge--warning_1m1vv_42","ods-badge--sm":"_ods-badge--sm_1m1vv_46","ods-badge--md":"_ods-badge--md_1m1vv_51","ods-badge--lg":"_ods-badge--lg_1m1vv_56"},r=L.forwardRef(({children:e,className:G,color:R=o.information,size:z=n.md,...h},N)=>I.jsx("span",{className:T(g["ods-badge"],g[`ods-badge--${R}`],g[`ods-badge--${z}`],G),ref:N,...h,children:e}));r.displayName="OdsBadge";try{r.displayName="OdsBadge",r.__docgenInfo={description:"",displayName:"OdsBadge",props:{color:{defaultValue:{value:"ODS_BADGE_COLOR.information"},description:"",name:"color",required:!1,type:{name:'"critical" | "neutral" | "alpha" | "beta" | "information" | "new" | "promotion" | "success" | "warning"'}},size:{defaultValue:{value:"ODS_BADGE_SIZE.md"},description:"",name:"size",required:!1,type:{name:'"md" | "sm" | "lg"'}}}}}catch{}const M={component:r,title:"ODS Components/Badge"},s={argTypes:j({children:{table:{category:m.slot,defaultValue:{summary:"ø"}},control:"text"},color:{table:{category:m.design,defaultValue:{summary:o.information},type:{summary:i}},control:{type:"select"},options:i},size:{table:{category:m.design,defaultValue:{summary:n.md},type:{summary:p}},control:{type:"select"},options:p}}),args:{children:"My badge"}},t={decorators:[e=>a.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px"}},e())],tags:["!dev"],render:({})=>a.createElement(a.Fragment,null,a.createElement(r,{color:o.alpha},"Alpha"),a.createElement(r,{color:o.beta},"Beta"),a.createElement(r,{color:o.critical},"Critical"),a.createElement(r,{color:o.information},"Information"),a.createElement(r,{color:o.neutral},"Neutral"),a.createElement(r,{color:o.new},"New"),a.createElement(r,{color:o.promotion},"Promotion"),a.createElement(r,{color:o.success},"Success"),a.createElement(r,{color:o.warning},"Warning"))},d={tags:["!dev"],render:({})=>a.createElement(r,null,"My badge")},l={tags:["!dev"],parameters:{layout:"centered"},render:({})=>a.createElement(r,null,"Badge")},c={decorators:[e=>a.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},e())],tags:["!dev"],render:({})=>a.createElement(a.Fragment,null,a.createElement(r,{size:n.sm},"SM badge"),a.createElement(r,{size:n.md},"MD badge"),a.createElement(r,{size:n.lg},"LG badge"))};var u,_,O;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  argTypes: orderControls({
    children: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text'
    },
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_BADGE_COLOR.information
        },
        type: {
          summary: ODS_BADGE_COLORS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_BADGE_COLORS
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_BADGE_SIZE.md
        },
        type: {
          summary: ODS_BADGE_SIZES
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_BADGE_SIZES
    }
  }),
  args: {
    children: 'My badge'
  }
}`,...(O=(_=s.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var b,y,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <OdsBadge color={ODS_BADGE_COLOR.alpha}>Alpha</OdsBadge>
      <OdsBadge color={ODS_BADGE_COLOR.beta}>Beta</OdsBadge>
      <OdsBadge color={ODS_BADGE_COLOR.critical}>Critical</OdsBadge>
      <OdsBadge color={ODS_BADGE_COLOR.information}>Information</OdsBadge>
      <OdsBadge color={ODS_BADGE_COLOR.neutral}>Neutral</OdsBadge>
      <OdsBadge color={ODS_BADGE_COLOR.new}>New</OdsBadge>
      <OdsBadge color={ODS_BADGE_COLOR.promotion}>Promotion</OdsBadge>
      <OdsBadge color={ODS_BADGE_COLOR.success}>Success</OdsBadge>
      <OdsBadge color={ODS_BADGE_COLOR.warning}>Warning</OdsBadge>
    </>
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var B,f,E;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsBadge>
      My badge
    </OdsBadge>
}`,...(E=(f=d.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var S,D,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <OdsBadge>
      Badge
    </OdsBadge>
}`,...(w=(D=l.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var C,x,A;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <OdsBadge size={ODS_BADGE_SIZE.sm}>SM badge</OdsBadge>
      <OdsBadge size={ODS_BADGE_SIZE.md}>MD badge</OdsBadge>
      <OdsBadge size={ODS_BADGE_SIZE.lg}>LG badge</OdsBadge>
    </>
}`,...(A=(x=c.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const V=["Demo","Color","Default","Overview","Size"],P=Object.freeze(Object.defineProperty({__proto__:null,Color:t,Default:d,Demo:s,Overview:l,Size:c,__namedExportsOrder:V,default:M},Symbol.toStringTag,{value:"Module"}));export{P as B,t as C,d as D,l as O,c as S};
