import{d as V}from"./ods-clipboard2-DUxkOe0Y.js";import{o as M}from"./if-defined-C8hFR4Kz.js";import{x as e,T as i,o as L,C as o}from"./controls-DX883vx3.js";const w=V;w();const A={title:"ODS Components/Form elements/Clipboard",component:"ods-clipboard"},s={render:a=>e`
<ods-clipboard class="my-clipboard"
  is-disabled="${a.isDisabled}"
  is-masked="${M(a.isMasked)}"
  label-copy="${a.labelCopy||i}"
  label-copy-success="${a.labelCopySuccess||i}"
  value="${a.value}">
</ods-clipboard>
<style>
  .my-clipboard::part(tooltip) {
    ${a.customTooltipCss}
  }
</style>
  `,argTypes:L({customTooltipCss:{table:{category:o.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style to the tooltip. Example: "width: 200px;"'},isDisabled:{table:{category:o.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isMasked:{table:{category:o.general,defaultValue:{summary:void 0},type:{summary:"boolean"}},control:"boolean"},labelCopy:{table:{category:o.general,defaultValue:{summary:"Copy to clipboard"},type:{summary:"string"}},control:"text"},labelCopySuccess:{table:{category:o.general,defaultValue:{summary:"Copied!"},type:{summary:"string"}},control:"text"},value:{table:{category:o.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"}}),args:{isDisabled:!1,isMasked:void 0}},r={tags:["isHidden"],render:()=>e`
<ods-clipboard label-copy="Copier le contenu"
               label-copy-success="Copié !"
               value="Copy me">
</ods-clipboard>
  `},n={tags:["isHidden"],render:()=>e`
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
  `},l={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
    <ods-clipboard value="Clipboard"></ods-clipboard>
  `},t={tags:["isHidden"],render:()=>e`
<ods-clipboard value="Copy me"></ods-clipboard>
  `},d={tags:["isHidden"],render:()=>e`
<ods-clipboard is-disabled value="Copy me"></ods-clipboard>
  `},c={tags:["isHidden"],render:()=>e`
<ods-clipboard is-masked value="Copy me"></ods-clipboard>
  `};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: arg => html\`
<ods-clipboard class="my-clipboard"
  is-disabled="\${arg.isDisabled}"
  is-masked="\${ifDefined(arg.isMasked)}"
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
    isMasked: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: undefined
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
    isMasked: undefined
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,b,C;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-clipboard label-copy="Copier le contenu"
               label-copy-success="Copié !"
               value="Copy me">
</ods-clipboard>
  \`
}`,...(C=(b=r.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var g,f,O;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(O=(f=n.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var v,T,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
    <ods-clipboard value="Clipboard"></ods-clipboard>
  \`
}`,...(x=(T=l.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var S,h,D;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-clipboard value="Copy me"></ods-clipboard>
  \`
}`,...(D=(h=t.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var E,R,_;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-clipboard is-disabled value="Copy me"></ods-clipboard>
  \`
}`,...(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var $,k,H;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-clipboard is-masked value="Copy me"></ods-clipboard>
  \`
}`,...(H=(k=c.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};const G=["Demo","CustomLabels","CustomTooltipCSS","Overview","Default","Disabled","Masked"],j=Object.freeze(Object.defineProperty({__proto__:null,CustomLabels:r,CustomTooltipCSS:n,Default:t,Demo:s,Disabled:d,Masked:c,Overview:l,__namedExportsOrder:G,default:A},Symbol.toStringTag,{value:"Module"}));export{j as C,t as D,c as M,l as O,n as a,d as b,r as c};
