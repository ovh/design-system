import{d as _}from"./ods-clipboard2-CWpjSCiO.js";import{x as e,T as c,o as $,C as a}from"./controls-DX883vx3.js";const H=_;H();const V={title:"ODS Components/Form elements/Clipboard",component:"ods-clipboard"},s={render:o=>e`
<ods-clipboard class="my-clipboard"
  is-disabled="${o.isDisabled}"
  label-copy="${o.labelCopy||c}"
  label-copy-success="${o.labelCopySuccess||c}"
  value="${o.value}">
</ods-clipboard>
<style>
  .my-clipboard::part(tooltip) {
    ${o.customTooltipCss}
  }
</style>
  `,argTypes:$({customTooltipCss:{table:{category:a.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style to the tooltip. Example: "width: 200px;"'},isDisabled:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},labelCopy:{table:{category:a.general,defaultValue:{summary:"Copy to clipboard"},type:{summary:"string"}},control:"text"},labelCopySuccess:{table:{category:a.general,defaultValue:{summary:"Copied!"},type:{summary:"string"}},control:"text"},value:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"}}),args:{isDisabled:!1}},r={tags:["isHidden"],render:()=>e`
<ods-clipboard label-copy="Copier le contenu"
               label-copy-success="Copié !"
               value="Copy me">
</ods-clipboard>
  `},l={tags:["isHidden"],render:()=>e`
<ods-clipboard class="my-custom-clipboard"
               label-copy="Copier le contenu"
               label-copy-success="Copié !"
               value="Copy me">
</ods-clipboard>
<style>
  .my-custom-clipboard {
    width: 100%;
  }

  .my-custom-clipboard::part(tooltip) {
    width: 200px;
  }
</style>
  `},t={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
    <ods-clipboard value="Clipboard"></ods-clipboard>
  `},n={tags:["isHidden"],render:()=>e`
<ods-clipboard value="Copy me"></ods-clipboard>
  `},d={tags:["isHidden"],render:()=>e`
<ods-clipboard is-disabled value="Copy me"></ods-clipboard>
  `};var p,i,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: arg => html\`
<ods-clipboard class="my-clipboard"
  is-disabled="\${arg.isDisabled}"
  label-copy="\${arg.labelCopy || nothing}"
  label-copy-success="\${arg.labelCopySuccess || nothing}"
  value="\${arg.value}">
</ods-clipboard>
<style>
  .my-clipboard::part(tooltip) {
    \${arg.customTooltipCss}
  }
</style>
  \`,
  argTypes: orderControls({
    customTooltipCss: {
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
      description: 'Set a custom style to the tooltip. Example: "width: 200px;"'
    },
    isDisabled: {
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
    },
    labelCopy: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'Copy to clipboard'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    labelCopySuccess: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'Copied!'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    value: {
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
    }
  }),
  args: {
    isDisabled: false
  }
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,y,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-clipboard label-copy="Copier le contenu"
               label-copy-success="Copié !"
               value="Copy me">
</ods-clipboard>
  \`
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var C,g,O;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-clipboard class="my-custom-clipboard"
               label-copy="Copier le contenu"
               label-copy-success="Copié !"
               value="Copy me">
</ods-clipboard>
<style>
  .my-custom-clipboard {
    width: 100%;
  }

  .my-custom-clipboard::part(tooltip) {
    width: 200px;
  }
</style>
  \`
}`,...(O=(g=l.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};var f,T,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
    <ods-clipboard value="Clipboard"></ods-clipboard>
  \`
}`,...(v=(T=t.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var x,S,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-clipboard value="Copy me"></ods-clipboard>
  \`
}`,...(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var D,E,R;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-clipboard is-disabled value="Copy me"></ods-clipboard>
  \`
}`,...(R=(E=d.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const w=["Demo","CustomLabels","CustomTooltipCSS","Overview","Default","Disabled"],G=Object.freeze(Object.defineProperty({__proto__:null,CustomLabels:r,CustomTooltipCSS:l,Default:n,Demo:s,Disabled:d,Overview:t,__namedExportsOrder:w,default:V},Symbol.toStringTag,{value:"Module"}));export{G as C,n as D,t as O,l as a,d as b,r as c};
