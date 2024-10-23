import{z as l,A as c,B as g,C as u}from"./index-CnlqR0TT.js";import{x as e}from"./lit-html-D-ZEPr28.js";import{o as H}from"./unsafe-html-HR6uCwaW.js";import{o as N,C as i}from"./controls-DpsgTNdU.js";const I={title:"ODS Components/Message",component:"ods-message"},a={render:s=>e`
<ods-message class="my-message-demo"
         color="${s.color}"
         variant="${s.variant}">
  ${H(s.content)}
</ods-message>
<style>
  .my-message-demo::part(message) {
    ${s.customCss}
  }
</style>
  `,argTypes:N({content:{table:{category:i.slot,defaultValue:{summary:"ø"}},control:"text"},color:{table:{category:i.design,defaultValue:{summary:l.information},type:{summary:`Type string: ${c}`}},control:{type:"select"},options:c},variant:{table:{category:i.design,defaultValue:{summary:g.default},type:{summary:`Type string: ${u}`}},control:{type:"select"},options:u},customCss:{table:{category:i.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "background-color: #ffff00;"'}}),args:{content:"Some Message content",color:l.information,variant:g.default}},o={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
<ods-message>Message</ods-message>
  `},r={tags:["isHidden"],render:()=>e`
<ods-message>Default Message</ods-message>
  `},n={tags:["isHidden"],decorators:[s=>e`<div style="display: flex; flex-direction: column; gap: 8px;">${s()}</div>`],render:()=>e`
<ods-message color="critical">Critical Message</ods-message>
<ods-message color="danger">Danger Message</ods-message>
<ods-message color="information">Information Message</ods-message>
<ods-message color="success">Success Message</ods-message>
<ods-message color="warning">Warning Message</ods-message>
  `},t={tags:["isHidden"],decorators:[s=>e`<div style="display: flex; flex-direction: column; gap: 8px;">${s()}</div>`],render:()=>e`
<ods-message variant="default">Default variant Message</ods-message>
<ods-message variant="light">Light variant Message</ods-message>
  `},m={tags:["isHidden"],render:()=>e`
<ods-message class="my-message">Custom CSS Message</ods-message>
<style>
  .my-message::part(message) {
    background-color: #ac246f;
  }
</style>
  `},d={tags:["isHidden"],render:()=>e`
<div class="multiline">
  <ods-message >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus, libero et pharetra mattis, ipsum velit semper risus, non ultrices lacus massa sed arcu. Nulla sed tellus.
  </ods-message>
</div>
<style>
  .multiline {
    width: 400px;
  }
</style>
  `};var p,y,S;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: arg => html\`
<ods-message class="my-message-demo"
         color="\${arg.color}"
         variant="\${arg.variant}">
  \${unsafeHTML(arg.content)}
</ods-message>
<style>
  .my-message-demo::part(message) {
    \${arg.customCss}
  }
</style>
  \`,
  argTypes: orderControls({
    content: {
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
          summary: ODS_MESSAGE_COLOR.information
        },
        type: {
          summary: \`Type string: \${ODS_MESSAGE_COLORS}\`
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_MESSAGE_COLORS
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_MESSAGE_VARIANT.default
        },
        type: {
          summary: \`Type string: \${ODS_MESSAGE_VARIANTS}\`
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_MESSAGE_VARIANTS
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
      description: 'Set a custom style properties. Example: "background-color: #ffff00;"'
    }
  }),
  args: {
    content: 'Some Message content',
    color: ODS_MESSAGE_COLOR.information,
    variant: ODS_MESSAGE_VARIANT.default
  }
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,O,M;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-message>Message</ods-message>
  \`
}`,...(M=(O=o.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var C,v,_;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-message>Default Message</ods-message>
  \`
}`,...(_=(v=r.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var E,A,x;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['isHidden'],
  decorators: [story => html\`<div style="display: flex; flex-direction: column; gap: 8px;">\${story()}</div>\`],
  render: () => html\`
<ods-message color="critical">Critical Message</ods-message>
<ods-message color="danger">Danger Message</ods-message>
<ods-message color="information">Information Message</ods-message>
<ods-message color="success">Success Message</ods-message>
<ods-message color="warning">Warning Message</ods-message>
  \`
}`,...(x=(A=n.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var D,T,R;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['isHidden'],
  decorators: [story => html\`<div style="display: flex; flex-direction: column; gap: 8px;">\${story()}</div>\`],
  render: () => html\`
<ods-message variant="default">Default variant Message</ods-message>
<ods-message variant="light">Light variant Message</ods-message>
  \`
}`,...(R=(T=t.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var b,h,G;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-message class="my-message">Custom CSS Message</ods-message>
<style>
  .my-message::part(message) {
    background-color: #ac246f;
  }
</style>
  \`
}`,...(G=(h=m.parameters)==null?void 0:h.docs)==null?void 0:G.source}}};var V,L,$;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<div class="multiline">
  <ods-message >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus, libero et pharetra mattis, ipsum velit semper risus, non ultrices lacus massa sed arcu. Nulla sed tellus.
  </ods-message>
</div>
<style>
  .multiline {
    width: 400px;
  }
</style>
  \`
}`,...($=(L=d.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};const w=["Demo","Overview","Default","Color","Variant","CustomCSS","Multiline"],F=Object.freeze(Object.defineProperty({__proto__:null,Color:n,CustomCSS:m,Default:r,Demo:a,Multiline:d,Overview:o,Variant:t,__namedExportsOrder:w,default:I},Symbol.toStringTag,{value:"Module"}));export{m as C,r as D,F as M,o as O,t as V,n as a,d as b};
