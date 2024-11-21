import{r as c,s as p,t as m,u as l}from"./index-BvAGq-5Z.js";import{x as e}from"./lit-html-D-ZEPr28.js";import{o as x,C as t}from"./controls-DpsgTNdU.js";const A={title:"ODS Components/Divider",component:"ods-divider"},d={render:a=>e`
<ods-divider class="my-divider-demo"
             color="${a.color}"
             spacing="${a.spacing}">
</ods-divider>
<style>
  .my-divider-demo::part(divider) {
    ${a.customCss}
  }
</style>
  `,argTypes:x({color:{table:{category:t.design,defaultValue:{summary:c.light},type:{summary:`Type string: ${p}`}},control:{type:"select"},options:p},spacing:{table:{category:t.design,defaultValue:{summary:m._2},type:{summary:`Type string from: ${l}`}},control:{type:"select"},options:l},customCss:{table:{category:t.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "height: 100px; background-color: #008000;"'}}),args:{color:c.light,spacing:m._2}},s={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <ods-divider></ods-divider>
    Interdum et malesuada fames ac ante ipsum primis in faucibus.
  `},i={tags:["isHidden"],render:()=>e`
<ods-divider></ods-divider>
  `},r={tags:["isHidden"],render:()=>e`
<ods-divider color="light" spacing="16"></ods-divider>
<ods-divider color="dark" spacing="16"></ods-divider>
  `},o={tags:["isHidden"],render:()=>e`
<ods-divider spacing="0"></ods-divider>
<ods-divider spacing="2"></ods-divider>
<ods-divider spacing="4"></ods-divider>
<ods-divider spacing="8"></ods-divider>
<ods-divider spacing="12"></ods-divider>
<ods-divider spacing="16"></ods-divider>
<ods-divider spacing="24"></ods-divider>
<ods-divider spacing="32"></ods-divider>
<ods-divider spacing="40"></ods-divider>
<ods-divider spacing="48"></ods-divider>
<ods-divider spacing="64"></ods-divider>
  `},n={tags:["isHidden"],render:()=>e`
<ods-divider class="my-divider"></ods-divider>
<style>
  .my-divider::part(divider) {
    background-color: red;
  }
</style>
  `};var g,v,u;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: arg => html\`
<ods-divider class="my-divider-demo"
             color="\${arg.color}"
             spacing="\${arg.spacing}">
</ods-divider>
<style>
  .my-divider-demo::part(divider) {
    \${arg.customCss}
  }
</style>
  \`,
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_DIVIDER_COLOR.light
        },
        type: {
          summary: \`Type string: \${ODS_DIVIDER_COLORS}\`
        }
      },
      // todo when options are defined, type select should be automatically inferred but not working?
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
          summary: \`Type string from: \${ODS_DIVIDER_SPACINGS}\`
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_DIVIDER_SPACINGS
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
      description: 'Set a custom style properties. Example: "height: 100px; background-color: #008000;"'
    }
  }),
  args: {
    color: ODS_DIVIDER_COLOR.light,
    spacing: ODS_DIVIDER_SPACING._2
  }
}`,...(u=(v=d.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var y,D,O;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <ods-divider></ods-divider>
    Interdum et malesuada fames ac ante ipsum primis in faucibus.
  \`
}`,...(O=(D=s.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var S,_,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-divider></ods-divider>
  \`
}`,...(C=(_=i.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var I,R,f;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-divider color="light" spacing="16"></ods-divider>
<ods-divider color="dark" spacing="16"></ods-divider>
  \`
}`,...(f=(R=r.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var E,b,h;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-divider spacing="0"></ods-divider>
<ods-divider spacing="2"></ods-divider>
<ods-divider spacing="4"></ods-divider>
<ods-divider spacing="8"></ods-divider>
<ods-divider spacing="12"></ods-divider>
<ods-divider spacing="16"></ods-divider>
<ods-divider spacing="24"></ods-divider>
<ods-divider spacing="32"></ods-divider>
<ods-divider spacing="40"></ods-divider>
<ods-divider spacing="48"></ods-divider>
<ods-divider spacing="64"></ods-divider>
  \`
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var V,T,L;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-divider class="my-divider"></ods-divider>
<style>
  .my-divider::part(divider) {
    background-color: red;
  }
</style>
  \`
}`,...(L=(T=n.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const G=["Demo","Overview","Default","Color","Spacing","CustomCSS"],k=Object.freeze(Object.defineProperty({__proto__:null,Color:r,CustomCSS:n,Default:i,Demo:d,Overview:s,Spacing:o,__namedExportsOrder:G,default:A},Symbol.toStringTag,{value:"Module"}));export{n as C,k as D,s as O,o as S,i as a,r as b};
