import{r as w,e as r}from"./index-D_CmzhJ4.js";import{j as z}from"./jsx-runtime-VM66peLj.js";import{c as F}from"./index-CkQHsVsO.js";import{o as Y,C as m}from"./controls-BtiQQn1l.js";var n=(e=>(e.dark="dark",e.light="light",e))(n||{});const p=Object.freeze(Object.values(n));var c=(e=>(e._0="0",e._2="2",e._4="4",e._6="6",e._8="8",e._12="12",e._16="16",e._24="24",e._32="32",e._40="40",e._48="48",e._64="64",e))(c||{});const u=Object.freeze(Object.values(c)),l={"ods-divider":"_ods-divider_yxdnb_1","ods-divider--light":"_ods-divider--light_yxdnb_6","ods-divider--dark":"_ods-divider--dark_yxdnb_9","ods-divider--0":"_ods-divider--0_yxdnb_12","ods-divider--2":"_ods-divider--2_yxdnb_16","ods-divider--4":"_ods-divider--4_yxdnb_20","ods-divider--8":"_ods-divider--8_yxdnb_24","ods-divider--12":"_ods-divider--12_yxdnb_28","ods-divider--16":"_ods-divider--16_yxdnb_32","ods-divider--24":"_ods-divider--24_yxdnb_36","ods-divider--32":"_ods-divider--32_yxdnb_40","ods-divider--40":"_ods-divider--40_yxdnb_44","ods-divider--48":"_ods-divider--48_yxdnb_48","ods-divider--64":"_ods-divider--64_yxdnb_52"},d=w.forwardRef(({className:e,color:L=n.light,spacing:T=c._2,...k},V)=>z.jsx("hr",{className:F(l["ods-divider"],l[`ods-divider--${L}`],l[`ods-divider--${T}`],e),ref:V,...k}));d.displayName="OdsDivider";try{d.displayName="OdsDivider",d.__docgenInfo={description:"",displayName:"OdsDivider",props:{color:{defaultValue:{value:"ODS_DIVIDER_COLOR.light"},description:"",name:"color",required:!1,type:{name:'"dark" | "light"'}},spacing:{defaultValue:{value:"ODS_DIVIDER_SPACING._2"},description:"",name:"spacing",required:!1,type:{name:'"0" | "2" | "4" | "6" | "8" | "12" | "16" | "24" | "32" | "40" | "48" | "64"'}}}}}catch{}const q={component:d,title:"ODS Components/Divider"},s={argTypes:Y({color:{table:{category:m.design,defaultValue:{summary:n.light},type:{summary:p}},control:{type:"select"},options:p},spacing:{table:{category:m.design,defaultValue:{summary:c._2},type:{summary:u}},control:{type:"select"},options:u}})},a={tags:["!dev"],render:({})=>r.createElement(d,null)},t={tags:["!dev"],parameters:{layout:"centered"},render:({})=>r.createElement(r.Fragment,null,r.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),r.createElement(d,{color:"light"}),r.createElement("p",null,"Interdum et malesuada fames ac ante ipsum primis in faucibus."))},i={tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(d,{color:"light"}),r.createElement(d,{color:"dark"}))},o={tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(d,{spacing:"0"}),r.createElement(d,{spacing:"2"}),r.createElement(d,{spacing:"4"}),r.createElement(d,{spacing:"6"}))};var _,v,g;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_DIVIDER_COLOR.light
        },
        type: {
          summary: ODS_DIVIDER_COLORS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_DIVIDER_COLORS
    },
    spacing: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_DIVIDER_SPACING._2
        },
        type: {
          summary: ODS_DIVIDER_SPACINGS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_DIVIDER_SPACINGS
    }
  })
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,O,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsDivider />
}`,...(b=(O=a.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var f,x,E;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <OdsDivider color="light" />
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </>
}`,...(E=(x=t.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var h,D,C;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <OdsDivider color="light" />
      <OdsDivider color="dark" />
    </>
}`,...(C=(D=i.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var R,S,j;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <OdsDivider spacing="0" />
      <OdsDivider spacing="2" />
      <OdsDivider spacing="4" />
      <OdsDivider spacing="6" />
    </>
}`,...(j=(S=o.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const N=["Demo","Default","Overview","Color","Spacing"],J=Object.freeze(Object.defineProperty({__proto__:null,Color:i,Default:a,Demo:s,Overview:t,Spacing:o,__namedExportsOrder:N,default:q},Symbol.toStringTag,{value:"Module"}));export{i as C,J as D,t as O,o as S,a};
