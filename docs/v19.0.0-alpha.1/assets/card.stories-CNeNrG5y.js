import{r as D,e}from"./index-D_CmzhJ4.js";import{j as L}from"./jsx-runtime-VM66peLj.js";import{c as N}from"./index-CkQHsVsO.js";import{o as T,C as l}from"./controls-BtiQQn1l.js";var d=(r=>(r.neutral="neutral",r.primary="primary",r))(d||{});const c=Object.freeze(Object.values(d)),m={"ods-card":"_ods-card_kcgr9_1","ods-card--neutral":"_ods-card--neutral_kcgr9_7","ods-card--primary":"_ods-card--primary_kcgr9_10"},a=D.forwardRef(({className:r,color:x=d.primary,...R},S)=>L.jsx("div",{className:N(m["ods-card"],m[`ods-card--${x}`],r),ref:S,...R}));a.displayName="OdsCard";try{a.displayName="OdsCard",a.__docgenInfo={description:"",displayName:"OdsCard",props:{color:{defaultValue:{value:"ODS_CARD_COLOR.primary"},description:"",name:"color",required:!1,type:{name:'"neutral" | "primary"'}}}}}catch{}const j={component:a,title:"ODS Components/Card"},t={argTypes:T({color:{table:{category:l.design,defaultValue:{summary:"primary"},type:{summary:c}},control:"select",options:c},children:{table:{category:l.slot,defaultValue:{summary:"ø"}},control:"text"}}),args:{children:"Hello, world!"}},s={tags:["!dev"],render:({})=>e.createElement(a,null,e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus."))},o={decorators:[r=>e.createElement("div",{style:{display:"flex",gap:"16px"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(a,{color:"primary"},e.createElement("p",null,"Primary Card")),e.createElement(a,{color:"neutral"},e.createElement("p",null,"Neutral Card")))},n={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,{style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus.")};var i,p,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: 'primary'
        },
        type: {
          summary: ODS_CARD_COLORS
        }
      },
      control: 'select',
      options: ODS_CARD_COLORS
    },
    children: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text'
    }
  }),
  args: {
    children: 'Hello, world!'
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var y,O,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsCard>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </OdsCard>
}`,...(C=(O=s.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var g,_,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    gap: '16px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <OdsCard color="primary">
        <p>Primary Card</p>
      </OdsCard>

      <OdsCard color="neutral">
        <p>Neutral Card</p>
      </OdsCard>
    </>
}`,...(f=(_=o.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var v,b,E;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <OdsCard style={{
    padding: '8px'
  }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
      Interdum et malesuada fames ac ante ipsum primis in faucibus.
    </OdsCard>
}`,...(E=(b=n.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};const A=["Demo","Default","Color","Overview"],k=Object.freeze(Object.defineProperty({__proto__:null,Color:o,Default:s,Demo:t,Overview:n,__namedExportsOrder:A,default:j},Symbol.toStringTag,{value:"Module"}));export{k as C,s as D,n as O,o as a};
