import{x as d}from"./lit-html-D-ZEPr28.js";import{o as C,C as o}from"./controls-D697y8_r.js";const T={title:"ODS Components/Medium",component:"ods-medium"},s="OVHcloud logo",m="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4",e={argTypes:C({alt:{table:{category:o.general,defaultValue:{summary:""},type:{summary:"string"}},control:"text"},height:{table:{category:o.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},src:{table:{category:o.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},width:{table:{category:o.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"}}),args:{alt:s,src:m,width:700}},r={tags:["isHidden"],parameters:{layout:"centered"},render:()=>d`
<ods-medium alt="${s}" src="${m}" height="100"></ods-medium>
  `},a={tags:["isHidden"],render:()=>d`
<ods-medium alt="${s}" src="${m}"></ods-medium>
  `},t={tags:["isHidden"],render:()=>d`
<ods-medium alt="${s}" src="${m}" height="200"></ods-medium>
  `},n={tags:["isHidden"],render:()=>d`
<ods-medium alt="${s}" src="${m}" width="300"></ods-medium>
  `};var l,u,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes: orderControls({
    alt: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: ''
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    height: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'number'
        }
      },
      control: 'number'
    },
    src: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    width: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'number'
        }
      },
      control: 'number'
    }
  }),
  args: {
    alt: exampleAlt,
    src: exampleSrc,
    width: 700
  }
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var i,p,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-medium alt="\${exampleAlt}" src="\${exampleSrc}" height="100"></ods-medium>
  \`
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,h,O;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-medium alt="\${exampleAlt}" src="\${exampleSrc}"></ods-medium>
  \`
}`,...(O=(h=a.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var x,b,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-medium alt="\${exampleAlt}" src="\${exampleSrc}" height="200"></ods-medium>
  \`
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var _,$,S;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-medium alt="\${exampleAlt}" src="\${exampleSrc}" width="300"></ods-medium>
  \`
}`,...(S=($=n.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};const H=["Demo","Overview","Default","Height","Width"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Demo:e,Height:t,Overview:r,Width:n,__namedExportsOrder:H,default:T},Symbol.toStringTag,{value:"Module"}));export{a as D,t as H,R as M,r as O,n as W};
