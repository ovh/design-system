import{L as d,M as m,N as c,P as l}from"./index-B1WyGMUD.js";import{x as e,o as P,C as p}from"./controls-DX883vx3.js";const L={title:"ODS Components/Spinner",component:"ods-spinner"},s={render:i=>e`
<ods-spinner class="my-spinner-demo"
             color="${i.color}"
             size="${i.size}">
</ods-spinner>
<style>
  .my-spinner-demo::part(spinner) {
    ${i.customCss}
  }
</style>
  `,argTypes:P({color:{table:{category:p.design,defaultValue:{summary:d.primary},type:{summary:`Type string: ${m}`}},control:{type:"select"},options:m},size:{table:{category:p.design,defaultValue:{summary:c.md},type:{summary:`Type string from: ${l}`}},control:{type:"select"},options:l},customCss:{table:{category:p.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "height: 100px; color: #008000;"'}}),args:{color:d.primary,size:c.md}},n={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
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
  `};var y,u,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(u=s.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var g,O,_;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-spinner></ods-spinner>
  \`
}`,...(_=(O=n.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var C,N,R;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-spinner></ods-spinner>
  \`
}`,...(R=(N=r.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var E,z,h;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-spinner color="neutral"></ods-spinner>
<ods-spinner color="primary"></ods-spinner>
<ods-spinner style="background-color: #262626;" color="white"></ods-spinner>
  \`
}`,...(h=(z=o.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var D,I,f;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-spinner size="xs"></ods-spinner>
<ods-spinner size="sm"></ods-spinner>
<ods-spinner size="md"></ods-spinner>
<ods-spinner size="lg"></ods-spinner>
  \`
}`,...(f=(I=t.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var T,b,x;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-spinner class="my-spinner"></ods-spinner>
<style>
  .my-spinner::part(spinner) {
    height: 100px;
  }
</style>
  \`
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const H=["Demo","Overview","Default","Color","Size","CustomCSS"],V=Object.freeze(Object.defineProperty({__proto__:null,Color:o,CustomCSS:a,Default:r,Demo:s,Overview:n,Size:t,__namedExportsOrder:H,default:L},Symbol.toStringTag,{value:"Module"}));export{a as C,r as D,n as O,V as S,o as a,t as b};
