import{e as c,f as l}from"./index-DCBH0_Tl.js";import{d as h}from"./ods-card-CsxtEQHf.js";import{x as d,o as D,C as n}from"./controls-DX883vx3.js";import{o as i}from"./unsafe-html-VJzuFJfF.js";h();const L={title:"ODS Components/Card",component:"ods-card"},e={render:a=>d`
<ods-card class="demo-card" color="${a.color}">
  ${i(a.content)}
</ods-card>

<style>
  ${i(a.customCss)}
</style>
  `,argTypes:D({color:{table:{category:n.design,defaultValue:{summary:c.primary},type:{summary:l}},control:{type:"select"},options:l},content:{table:{category:n.slot,defaultValue:{summary:"ø"}},control:"text"},customCss:{table:{category:n.design,defaultValue:{summary:"ø"}},control:"text",description:'Set a custom style properties. Example: ".demo-card { border: 1px red solid; }"'}}),args:{color:c.primary,content:'<ods-text preset="heading-6">Hello, world!</ods-text>',customCss:".demo-card { padding: 0 24px; }"}},r={tags:["isHidden"],render:()=>d`
<ods-card>
  <ods-text preset="heading-6">Hello, world!</ods-text>
</ods-card>
  `},s={tags:["isHidden"],parameters:{layout:"centered"},render:()=>d`
<ods-card class="overview-card">
  <ods-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Interdum et malesuada fames ac ante ipsum primis in faucibus.</ods-text>
</ods-card>

<style>
  .overview-card {
    padding: 0 24px;
  }
</style>
  `},o={tags:["isHidden"],render:()=>d`
<ods-card class="my-card">
  <ods-text preset="heading-6">Hello, world!</ods-text>
</ods-card>

<style>
  .my-card {
    width: 500px;
    display: flex;
    justify-content: center;
    border: 3px solid green;
  }
</style>
  `},t={tags:["isHidden"],render:()=>d`
<ods-card color="primary">
  <ods-text preset="heading-6">Hello, world!</ods-text>
</ods-card>

<ods-card color="neutral">
  <ods-text preset="heading-6">Hello, world!</ods-text>
</ods-card>
  `};var m,p,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => html\`
<ods-card class="demo-card" color="\${args.color}">
  \${unsafeHTML(args.content)}
</ods-card>

<style>
  \${unsafeHTML(args.customCss)}
</style>
  \`,
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_CARD_COLOR.primary
        },
        type: {
          summary: ODS_CARD_COLORS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_CARD_COLORS
    },
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text'
    },
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text',
      description: 'Set a custom style properties. Example: ".demo-card { border: 1px red solid; }"'
    }
  }),
  args: {
    color: ODS_CARD_COLOR.primary,
    content: '<ods-text preset="heading-6">Hello, world!</ods-text>',
    customCss: '.demo-card { padding: 0 24px; }'
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var y,g,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-card>
  <ods-text preset="heading-6">Hello, world!</ods-text>
</ods-card>
  \`
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var C,O,S;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-card class="overview-card">
  <ods-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Interdum et malesuada fames ac ante ipsum primis in faucibus.</ods-text>
</ods-card>

<style>
  .overview-card {
    padding: 0 24px;
  }
</style>
  \`
}`,...(S=(O=s.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var f,_,H;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-card class="my-card">
  <ods-text preset="heading-6">Hello, world!</ods-text>
</ods-card>

<style>
  .my-card {
    width: 500px;
    display: flex;
    justify-content: center;
    border: 3px solid green;
  }
</style>
  \`
}`,...(H=(_=o.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var R,b,w;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-card color="primary">
  <ods-text preset="heading-6">Hello, world!</ods-text>
</ods-card>

<ods-card color="neutral">
  <ods-text preset="heading-6">Hello, world!</ods-text>
</ods-card>
  \`
}`,...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const v=["Demo","Slot","Overview","CustomCSS","Color"],$=Object.freeze(Object.defineProperty({__proto__:null,Color:t,CustomCSS:o,Demo:e,Overview:s,Slot:r,__namedExportsOrder:v,default:L},Symbol.toStringTag,{value:"Module"}));export{$ as C,s as O,r as S,o as a,t as b};
