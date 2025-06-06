import{r as x,e as r}from"./index-D_CmzhJ4.js";import{j as $}from"./jsx-runtime-VM66peLj.js";import{c as w}from"./index-CkQHsVsO.js";import{o as z,C as m}from"./controls-BtiQQn1l.js";var c=(e=>(e.dark="dark",e.light="light",e))(c||{});const F=Object.freeze(Object.values(c));var l=(e=>(e._0="0",e._2="2",e._4="4",e._6="6",e._8="8",e._12="12",e._16="16",e._24="24",e._32="32",e._40="40",e._48="48",e._64="64",e))(l||{});const Y=Object.freeze(Object.values(l)),q="_divider_1udy8_2",n={divider:q,"divider--light":"_divider--light_1udy8_7","divider--dark":"_divider--dark_1udy8_10","divider--0":"_divider--0_1udy8_13","divider--2":"_divider--2_1udy8_17","divider--4":"_divider--4_1udy8_21","divider--8":"_divider--8_1udy8_25","divider--12":"_divider--12_1udy8_29","divider--16":"_divider--16_1udy8_33","divider--24":"_divider--24_1udy8_37","divider--32":"_divider--32_1udy8_41","divider--40":"_divider--40_1udy8_45","divider--48":"_divider--48_1udy8_49","divider--64":"_divider--64_1udy8_53"},t=x.forwardRef(({className:e,color:T=c.light,spacing:L=l._2,...j},k)=>$.jsx("hr",{className:w(n.divider,n[`divider--${T}`],n[`divider--${L}`],e),ref:k,...j}));t.displayName="Divider";t.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{color:{required:!1,tsType:{name:"literal",value:"`${DIVIDER_COLOR}`"},description:"",defaultValue:{value:"DIVIDER_COLOR.light",computed:!0}},spacing:{required:!1,tsType:{name:"literal",value:"`${DIVIDER_SPACING}`"},description:"",defaultValue:{value:"DIVIDER_SPACING._2",computed:!0}}},composes:["ComponentPropsWithRef"]};const N={component:t,title:"ODS Components/Divider"},i={argTypes:z({color:{table:{category:m.design,type:{summary:"DIVIDER_COLOR"}},control:{type:"select"},options:F},spacing:{table:{category:m.design,type:{summary:"DIVIDER_SPACING"}},control:{type:"select"},options:Y}})},a={tags:["!dev"],render:({})=>r.createElement(t,null)},d={tags:["!dev"],parameters:{layout:"centered"},render:({})=>r.createElement(r.Fragment,null,r.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),r.createElement(t,{color:"light"}),r.createElement("p",null,"Interdum et malesuada fames ac ante ipsum primis in faucibus."))},s={tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(t,{color:"light"}),r.createElement(t,{color:"dark"}))},o={tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(t,{spacing:"0"}),r.createElement(t,{spacing:"2"}),r.createElement(t,{spacing:"4"}),r.createElement(t,{spacing:"6"}))};var p,u,_;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'DIVIDER_COLOR'
        }
      },
      control: {
        type: 'select'
      },
      options: DIVIDER_COLORS
    },
    spacing: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'DIVIDER_SPACING'
        }
      },
      control: {
        type: 'select'
      },
      options: DIVIDER_SPACINGS
    }
  })
}`,...(_=(u=i.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};var v,g,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Divider />
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var O,f,D;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Divider color="light" />
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </>
}`,...(D=(f=d.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var E,C,R;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <Divider color="light" />
      <Divider color="dark" />
    </>
}`,...(R=(C=s.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var b,h,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <Divider spacing="0" />
      <Divider spacing="2" />
      <Divider spacing="4" />
      <Divider spacing="6" />
    </>
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const V=["Demo","Default","Overview","Color","Spacing"],J=Object.freeze(Object.defineProperty({__proto__:null,Color:s,Default:a,Demo:i,Overview:d,Spacing:o,__namedExportsOrder:V,default:N},Symbol.toStringTag,{value:"Module"}));export{s as C,J as D,d as O,o as S,a};
