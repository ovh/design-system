import{r as c,s as g,t as u,u as p}from"./index-CGJBSJl7.js";import{d as Y}from"./ods-message-DuyDaLcv.js";import{x as e,o as k,C as a}from"./controls-DX883vx3.js";import{o as j}from"./unsafe-html-VJzuFJfF.js";Y();const F={title:"ODS Components/Message",component:"ods-message"},n={render:s=>e`
<ods-message class="my-message-demo"
         color="${s.color}"
         is-dismissible="${s.isDismissible}"
         variant="${s.variant}">
  ${j(s.content)}
</ods-message>
<style>
  .my-message-demo::part(message) {
    ${s.customCss}
  }
</style>
  `,argTypes:k({content:{table:{category:a.slot,defaultValue:{summary:"ø"}},control:"text"},color:{table:{category:a.design,defaultValue:{summary:c.information},type:{summary:`Type string: ${g}`}},control:{type:"select"},options:g},isDismissible:{table:{category:a.general,defaultValue:{summary:!0},type:{summary:"boolean"}},control:"boolean"},variant:{table:{category:a.design,defaultValue:{summary:u.default},type:{summary:`Type string: ${p}`}},control:{type:"select"},options:p},customCss:{table:{category:a.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "background-color: #ffff00;"'}}),args:{content:"Some Message content",color:c.information,isDismissible:!0,variant:u.default}},o={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
<ods-message>Message</ods-message>
  `},r={tags:["isHidden"],render:()=>e`
<ods-message>Default Message</ods-message>
  `},t={tags:["isHidden"],decorators:[s=>e`<div style="display: flex; flex-direction: column; gap: 8px;">${s()}</div>`],render:()=>e`
<ods-message color="critical">Critical Message</ods-message>
<ods-message color="danger">Danger Message</ods-message>
<ods-message color="information">Information Message</ods-message>
<ods-message color="success">Success Message</ods-message>
<ods-message color="warning">Warning Message</ods-message>
  `},i={tags:["isHidden"],render:()=>e`
<ods-message is-dismissible="false">Default Message</ods-message>
  `},m={tags:["isHidden"],decorators:[s=>e`<div style="display: flex; flex-direction: column; gap: 8px;">${s()}</div>`],render:()=>e`
<ods-message variant="default">Default variant Message</ods-message>
<ods-message variant="light">Light variant Message</ods-message>
  `},l={tags:["isHidden"],render:()=>e`
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
  `};var y,S,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: arg => html\`
<ods-message class="my-message-demo"
         color="\${arg.color}"
         is-dismissible="\${arg.isDismissible}"
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
    isDismissible: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: true
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
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
    isDismissible: true,
    variant: ODS_MESSAGE_VARIANT.default
  }
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var O,M,C;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-message>Message</ods-message>
  \`
}`,...(C=(M=o.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var b,_,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-message>Default Message</ods-message>
  \`
}`,...(v=(_=r.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var D,E,A;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['isHidden'],
  decorators: [story => html\`<div style="display: flex; flex-direction: column; gap: 8px;">\${story()}</div>\`],
  render: () => html\`
<ods-message color="critical">Critical Message</ods-message>
<ods-message color="danger">Danger Message</ods-message>
<ods-message color="information">Information Message</ods-message>
<ods-message color="success">Success Message</ods-message>
<ods-message color="warning">Warning Message</ods-message>
  \`
}`,...(A=(E=t.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var T,x,R;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-message is-dismissible="false">Default Message</ods-message>
  \`
}`,...(R=(x=i.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var V,h,G;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['isHidden'],
  decorators: [story => html\`<div style="display: flex; flex-direction: column; gap: 8px;">\${story()}</div>\`],
  render: () => html\`
<ods-message variant="default">Default variant Message</ods-message>
<ods-message variant="light">Light variant Message</ods-message>
  \`
}`,...(G=(h=m.parameters)==null?void 0:h.docs)==null?void 0:G.source}}};var $,L,N;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-message class="my-message">Custom CSS Message</ods-message>
<style>
  .my-message::part(message) {
    background-color: #ac246f;
  }
</style>
  \`
}`,...(N=(L=l.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var H,I,w;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(w=(I=d.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const W=["Demo","Overview","Default","Color","NotDismissible","Variant","CustomCSS","Multiline"],J=Object.freeze(Object.defineProperty({__proto__:null,Color:t,CustomCSS:l,Default:r,Demo:n,Multiline:d,NotDismissible:i,Overview:o,Variant:m,__namedExportsOrder:W,default:F},Symbol.toStringTag,{value:"Module"}));export{l as C,r as D,J as M,i as N,o as O,m as V,t as a,d as b};
