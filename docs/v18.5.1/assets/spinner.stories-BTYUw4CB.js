import{N as p,P as m,Q as c,R as l}from"./index-DCBH0_Tl.js";import{d as P}from"./ods-spinner2-DCN2yKlT.js";import{x as e,o as $,C as d}from"./controls-DX883vx3.js";const H=P;H();const L={title:"ODS Components/Spinner",component:"ods-spinner"},s={render:i=>e`
<ods-spinner class="my-spinner-demo"
             color="${i.color}"
             size="${i.size}">
</ods-spinner>
<style>
  .my-spinner-demo::part(spinner) {
    ${i.customCss}
  }
</style>
  `,argTypes:$({color:{table:{category:d.design,defaultValue:{summary:p.primary},type:{summary:`Type string: ${m}`}},control:{type:"select"},options:m},size:{table:{category:d.design,defaultValue:{summary:c.md},type:{summary:`Type string from: ${l}`}},control:{type:"select"},options:l},customCss:{table:{category:d.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "height: 100px; color: #008000;"'}}),args:{color:p.primary,size:c.md}},n={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
<ods-spinner></ods-spinner>
  `},r={tags:["isHidden"],render:()=>e`
<ods-spinner></ods-spinner>
  `},o={tags:["isHidden"],render:()=>e`
<ods-spinner color="neutral"></ods-spinner>
<ods-spinner color="primary"></ods-spinner>
<ods-spinner style="background-color: #262626;" color="white"></ods-spinner>
  `},t={tags:["isHidden"],render:()=>e`
<ods-spinner size="xs"></ods-spinner>
<ods-spinner size="sm"></ods-spinner>
<ods-spinner size="md"></ods-spinner>
<ods-spinner size="lg"></ods-spinner>
  `},a={tags:["isHidden"],render:()=>e`
<ods-spinner class="my-spinner"></ods-spinner>
<style>
  .my-spinner::part(spinner) {
    height: 100px;
  }
</style>
  `};var u,y,S;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: arg => html\`
<ods-spinner class="my-spinner-demo"
             color="\${arg.color}"
             size="\${arg.size}">
</ods-spinner>
<style>
  .my-spinner-demo::part(spinner) {
    \${arg.customCss}
  }
</style>
  \`,
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_SPINNER_COLOR.primary
        },
        type: {
          summary: \`Type string: \${ODS_SPINNER_COLORS}\`
        }
      },
      // todo when options are defined, type select should be automatically inferred but not working?
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
          summary: \`Type string from: \${ODS_SPINNER_SIZES}\`
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_SPINNER_SIZES
    },
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "height: 100px; color: #008000;"'
    }
  }),
  args: {
    color: ODS_SPINNER_COLOR.primary,
    size: ODS_SPINNER_SIZE.md
  }
}`,...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var g,O,_;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-spinner></ods-spinner>
  \`
}`,...(_=(O=n.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var C,N,E;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-spinner></ods-spinner>
  \`
}`,...(E=(N=r.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var R,f,z;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-spinner color="neutral"></ods-spinner>
<ods-spinner color="primary"></ods-spinner>
<ods-spinner style="background-color: #262626;" color="white"></ods-spinner>
  \`
}`,...(z=(f=o.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var h,D,I;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-spinner size="xs"></ods-spinner>
<ods-spinner size="sm"></ods-spinner>
<ods-spinner size="md"></ods-spinner>
<ods-spinner size="lg"></ods-spinner>
  \`
}`,...(I=(D=t.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var T,b,x;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-spinner class="my-spinner"></ods-spinner>
<style>
  .my-spinner::part(spinner) {
    height: 100px;
  }
</style>
  \`
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const w=["Demo","Overview","Default","Color","Size","CustomCSS"],A=Object.freeze(Object.defineProperty({__proto__:null,Color:o,CustomCSS:a,Default:r,Demo:s,Overview:n,Size:t,__namedExportsOrder:w,default:L},Symbol.toStringTag,{value:"Module"}));export{a as C,r as D,n as O,A as S,o as a,t as b};
