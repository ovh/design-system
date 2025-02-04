import{d as A}from"./ods-medium2-BB_NU63C.js";import{o as R,C as l,x as d}from"./controls-DX883vx3.js";const V=A;V();const E={title:"ODS Components/Medium",component:"ods-medium"},e="OVHcloud logo",r="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4",a={argTypes:R({alt:{table:{category:l.general,defaultValue:{summary:""},type:{summary:"string"}},control:"text"},height:{table:{category:l.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},src:{table:{category:l.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},width:{table:{category:l.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"}}),args:{alt:e,src:r,width:700}},t={tags:["isHidden"],render:()=>d`
<ods-medium alt="${e}"
            class="my-medium"
            src="${r}">
</ods-medium>
<style>
  .my-medium::part(image) {
    max-width: 100px;
  }
</style>
  `},s={tags:["isHidden"],parameters:{layout:"centered"},render:()=>d`
<ods-medium alt="${e}" src="${r}" height="100"></ods-medium>
  `},n={tags:["isHidden"],render:()=>d`
<ods-medium alt="${e}" src="${r}"></ods-medium>
  `},m={tags:["isHidden"],render:()=>d`
<ods-medium alt="${e}" src="${r}" height="200"></ods-medium>
  `},o={tags:["isHidden"],render:()=>d`
<ods-medium alt="${e}" src="${r}" width="300"></ods-medium>
  `};var u,c,i;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,g,y;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-medium alt="\${exampleAlt}"
            class="my-medium"
            src="\${exampleSrc}">
</ods-medium>
<style>
  .my-medium::part(image) {
    max-width: 100px;
  }
</style>
  \`
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,x,O;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-medium alt="\${exampleAlt}" src="\${exampleSrc}" height="100"></ods-medium>
  \`
}`,...(O=(x=s.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var C,S,$;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-medium alt="\${exampleAlt}" src="\${exampleSrc}"></ods-medium>
  \`
}`,...($=(S=n.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var b,f,_;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-medium alt="\${exampleAlt}" src="\${exampleSrc}" height="200"></ods-medium>
  \`
}`,...(_=(f=m.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var H,w,T;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-medium alt="\${exampleAlt}" src="\${exampleSrc}" width="300"></ods-medium>
  \`
}`,...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const v=["Demo","CustomCSS","Overview","Default","Height","Width"],L=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:t,Default:n,Demo:a,Height:m,Overview:s,Width:o,__namedExportsOrder:v,default:E},Symbol.toStringTag,{value:"Module"}));export{t as C,n as D,m as H,L as M,s as O,o as W};
