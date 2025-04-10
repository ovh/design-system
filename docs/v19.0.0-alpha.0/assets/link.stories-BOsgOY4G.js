import{r as j,e}from"./index-E9JSHJbc.js";import{O as y}from"./icon-name-BXMPYDqj.js";import{j as V}from"./jsx-runtime-BSm7YJ_y.js";import{c as q,o as z,C as i}from"./controls-CQ2mnOwv.js";var d=(a=>(a.primary="primary",a))(d||{});const A=Object.freeze(Object.values(d)),m={"ods-link":"_ods-link_1q5zs_1","ods-link--disabled":"_ods-link--disabled_1q5zs_23","ods-link--primary":"_ods-link--primary_1q5zs_23"},r=j.forwardRef(({children:a,className:R,color:N=d.primary,disabled:c=!1,...p},T)=>{function x(u){c&&(u.preventDefault(),u.stopPropagation())}return V.jsx("a",{className:q(m["ods-link"],m[`ods-link--${N}`],{[m["ods-link--disabled"]]:c},R),onClick:x,ref:T,tabIndex:c?-1:p.tabIndex,...p,children:a})});r.displayName="OdsLink";try{r.displayName="OdsLink",r.__docgenInfo={description:"",displayName:"OdsLink",props:{color:{defaultValue:{value:"ODS_LINK_COLOR.primary"},description:"",name:"color",required:!1,type:{name:'"primary"'}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const G={component:r,title:"ODS Components/Link"},t={argTypes:z({children:{table:{category:i.slot,defaultValue:{summary:"ø"}},control:"text"},color:{table:{category:i.design,defaultValue:{summary:d.primary},type:{summary:"string"}},control:"select",options:A},disabled:{table:{category:i.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"}}),args:{children:"My link"}},o={tags:["!dev"],render:({})=>e.createElement(r,{href:"https://www.ovhcloud.com"},"Default Link")},s={tags:["!dev"],render:({})=>e.createElement(r,{disabled:!0,href:"https://www.ovhcloud.com"},"Disabled")},n={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{href:"https://www.ovhcloud.com",target:"_blank"},"Link")},l={decorators:[a=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr"}},a())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{href:"https://www.ovhcloud.com"},e.createElement(y,{name:"arrow-left"})," Icon Link"),e.createElement(r,{style:{justifySelf:"right"},href:"https://www.ovhcloud.com"},"Icon Link ",e.createElement(y,{name:"arrow-right"})))};var f,O,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
          summary: ODS_LINK_COLOR.primary
        },
        type: {
          summary: 'string'
        }
      },
      control: 'select',
      options: ODS_LINK_COLORS
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    }
  }),
  args: {
    children: 'My link'
  }
}`,...(g=(O=t.parameters)==null?void 0:O.docs)==null?void 0:g.source}}};var h,k,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsLink href="https://www.ovhcloud.com">
      Default Link
    </OdsLink>
}`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var L,_,b;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <OdsLink disabled href="https://www.ovhcloud.com">
      Disabled
    </OdsLink>
}`,...(b=(_=s.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var v,C,D;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <OdsLink href="https://www.ovhcloud.com" target="_blank">
      Link
    </OdsLink>
}`,...(D=(C=n.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var S,E,I;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <OdsLink href="https://www.ovhcloud.com">
        <OdsIcon name="arrow-left" /> Icon Link
      </OdsLink>

      <OdsLink style={{
      justifySelf: 'right'
    }} href="https://www.ovhcloud.com">
        Icon Link <OdsIcon name="arrow-right" />
      </OdsLink>
    </>
}`,...(I=(E=l.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const K=["Demo","Default","Disabled","Overview","WithIcon"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Demo:t,Disabled:s,Overview:n,WithIcon:l,__namedExportsOrder:K,default:G},Symbol.toStringTag,{value:"Module"}));export{o as D,F as L,n as O,l as W,s as a};
