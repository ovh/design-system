import{e}from"./index-D_CmzhJ4.js";import{O as r,a as m,b as n,c as S,d as l}from"./OdsSpinner-DCrUZmmt.js";import{o as z,C as d}from"./controls-BtiQQn1l.js";const f={component:r,title:"ODS Components/Spinner"},s={argTypes:z({color:{table:{category:d.design,defaultValue:{summary:l.primary},type:{summary:S}},control:{type:"select"},options:S},size:{table:{category:d.design,defaultValue:{summary:n.md},type:{summary:m}},control:{type:"select"},options:m}})},a={tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:l.neutral}),e.createElement(r,{color:l.primary}),e.createElement(r,{style:{backgroundColor:"#262626"},color:l.white}))},t={tags:["!dev"],render:({})=>e.createElement(r,null)},o={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null)},c={tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{size:n.xs}),e.createElement(r,{size:n.sm}),e.createElement(r,{size:n.md}),e.createElement(r,{size:n.lg}))};var p,O,i;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_SPINNER_COLOR.primary
        },
        type: {
          summary: ODS_SPINNER_COLORS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_SPINNER_COLORS
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_SPINNER_SIZE.md
        },
        type: {
          summary: ODS_SPINNER_SIZES
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_SPINNER_SIZES
    }
  })
}`,...(i=(O=s.parameters)==null?void 0:O.docs)==null?void 0:i.source}}};var u,_,E;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <OdsSpinner color={ODS_SPINNER_COLOR.neutral} />
      <OdsSpinner color={ODS_SPINNER_COLOR.primary} />
      <OdsSpinner style={{
      backgroundColor: '#262626'
    }} color={ODS_SPINNER_COLOR.white} />
    </>
}`,...(E=(_=a.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var N,y,g;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsSpinner />
}`,...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var R,I,C;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <OdsSpinner />
}`,...(C=(I=o.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var D,P,v;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <OdsSpinner size={ODS_SPINNER_SIZE.xs} />
      <OdsSpinner size={ODS_SPINNER_SIZE.sm} />
      <OdsSpinner size={ODS_SPINNER_SIZE.md} />
      <OdsSpinner size={ODS_SPINNER_SIZE.lg} />
    </>
}`,...(v=(P=c.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};const L=["Demo","Color","Default","Overview","Size"],w=Object.freeze(Object.defineProperty({__proto__:null,Color:a,Default:t,Demo:s,Overview:o,Size:c,__namedExportsOrder:L,default:f},Symbol.toStringTag,{value:"Module"}));export{a as C,t as D,o as O,w as S,c as a};
