import{x as e,o as _,C as a}from"./controls-DX883vx3.js";const E={title:"ODS Components/Clipboard",component:"ods-clipboard"},s={render:o=>e`
<ods-clipboard class="my-clipboard"
  is-disabled="${o.isDisabled}"
  label-copy="${o.labelCopy}"
  label-copy-success="${o.labelCopySuccess}"
  value="${o.value}">
</ods-clipboard>
<style>
  .my-clipboard::part(tooltip) {
    ${o.customTooltipCss}
  }
</style>
  `,argTypes:_({customTooltipCss:{table:{category:a.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style to the tooltip. Example: "width: 200px;"'},isDisabled:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},labelCopy:{table:{category:a.general,defaultValue:{summary:"Copy to clipboard"},type:{summary:"string"}},control:"text"},labelCopySuccess:{table:{category:a.general,defaultValue:{summary:"Copied!"},type:{summary:"string"}},control:"text"},value:{table:{category:a.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"}}),args:{isDisabled:!1,labelCopy:"Copy to clipboard",labelCopySuccess:"Copied!"}},r={tags:["isHidden"],render:()=>e`
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
  `},c={tags:["isHidden"],render:()=>e`
<ods-clipboard is-disabled value="Copy me"></ods-clipboard>
  `};var d,p,i;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: arg => html\`
<ods-clipboard class="my-clipboard"
  is-disabled="\${arg.isDisabled}"
  label-copy="\${arg.labelCopy}"
  label-copy-success="\${arg.labelCopySuccess}"
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
    isDisabled: false,
    labelCopy: 'Copy to clipboard',
    labelCopySuccess: 'Copied!'
  }
}`,...(i=(p=s.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,u,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-clipboard label-copy="Copier le contenu"
               label-copy-success="Copié !"
               value="Copy me">
</ods-clipboard>
  \`
}`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var b,C,g;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(g=(C=l.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var O,S,v;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
    <ods-clipboard value="Clipboard"></ods-clipboard>
  \`
}`,...(v=(S=t.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var x,T,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-clipboard value="Copy me"></ods-clipboard>
  \`
}`,...(f=(T=n.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var h,D,R;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-clipboard is-disabled value="Copy me"></ods-clipboard>
  \`
}`,...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const H=["Demo","CustomLabels","CustomTooltipCSS","Overview","Default","Disabled"],$=Object.freeze(Object.defineProperty({__proto__:null,CustomLabels:r,CustomTooltipCSS:l,Default:n,Demo:s,Disabled:c,Overview:t,__namedExportsOrder:H,default:E},Symbol.toStringTag,{value:"Module"}));export{$ as C,n as D,t as O,l as a,c as b,r as c};
