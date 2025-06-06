import{d as A}from"./ods-code2-D4zmvcg_.js";import{x as e,T as m,o as D,C as n}from"./controls-DX883vx3.js";const G=A;G();const N={title:"ODS Components/Code",component:"ods-code"},t={render:o=>e`
<ods-code class="my-code"
          can-copy="${o.canCopy}"
          label-copy="${o.labelCopy||m}"
          label-copy-success="${o.labelCopySuccess||m}">${o.content}</ods-code>
<style>
  .my-code::part(tooltip) {
    ${o.customTooltipCss}
  }
</style>
  `,argTypes:D({canCopy:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},content:{table:{category:n.slot,defaultValue:{summary:"ø"}},control:"text"},customTooltipCss:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style to the tooltip. Example: "width: 200px;"'},labelCopy:{table:{category:n.general,defaultValue:{summary:"Copy to clipboard"},type:{summary:"string"}},control:"text"},labelCopySuccess:{table:{category:n.general,defaultValue:{summary:"Copied!"},type:{summary:"string"}},control:"text"}}),args:{canCopy:!1,content:"import { OdsText } from '@ovhcloud/ods-components/react';"}},s={tags:["isHidden"],render:()=>e`
<ods-code can-copy>import { OdsText } from '@ovhcloud/ods-components/react';
</ods-code>
  `},r={tags:["isHidden"],render:()=>e`
<ods-code class="my-code" can-copy>import { OdsText } from '@ovhcloud/ods-components/react';</ods-code>
<style>
  .my-code {
    display: flex;
    color: #00ffff;
  }

  .my-code::part(tooltip) {
    background-color: #eee;
    color: #111;
  }
</style>
  `},a={tags:["isHidden"],render:()=>e`
<ods-code can-copy label-copy="Copier le contenu" label-copy-success="Copié !">import { OdsText } from '@ovhcloud/ods-components/react';</ods-code>
  `},c={tags:["isHidden"],render:()=>e`
<ods-code>import { OdsText } from '@ovhcloud/ods-components/react';</ods-code>
  `},d={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
    <ods-code can-copy>import { OdsText } from '@ovhcloud/ods-components/react';</ods-code>
  `},l={tags:["isHidden"],render:()=>e`
<ods-code>function isTargetInElement(event, element) {
  if (!element) {
    return false;
  }

    return element.contains(event.target) || event.composedPath().includes(element);
  }</ods-code>
  `};var p,u,i;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: arg => html\`
<ods-code class="my-code"
          can-copy="\${arg.canCopy}"
          label-copy="\${arg.labelCopy || nothing}"
          label-copy-success="\${arg.labelCopySuccess || nothing}">\${arg.content}</ods-code>
<style>
  .my-code::part(tooltip) {
    \${arg.customTooltipCss}
  }
</style>
  \`,
  argTypes: orderControls({
    canCopy: {
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
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text'
    },
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
    }
  }),
  args: {
    canCopy: false,
    content: 'import { OdsText } from \\'@ovhcloud/ods-components/react\\';'
  }
}`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var y,g,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-code can-copy>import { OdsText } from '@ovhcloud/ods-components/react';
</ods-code>
  \`
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var f,b,O;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-code class="my-code" can-copy>import { OdsText } from '@ovhcloud/ods-components/react';</ods-code>
<style>
  .my-code {
    display: flex;
    color: #00ffff;
  }

  .my-code::part(tooltip) {
    background-color: #eee;
    color: #111;
  }
</style>
  \`
}`,...(O=(b=r.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};var T,x,h;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-code can-copy label-copy="Copier le contenu" label-copy-success="Copié !">import { OdsText } from '@ovhcloud/ods-components/react';</ods-code>
  \`
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,S,E;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-code>import { OdsText } from '@ovhcloud/ods-components/react';</ods-code>
  \`
}`,...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var H,R,_;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
    <ods-code can-copy>import { OdsText } from '@ovhcloud/ods-components/react';</ods-code>
  \`
}`,...(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var $,V,L;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-code>function isTargetInElement(event, element) {
  if (!element) {
    return false;
  }

    return element.contains(event.target) || event.composedPath().includes(element);
  }</ods-code>
  \`
}`,...(L=(V=l.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};const Y=["Demo","CanCopy","CustomCSS","CustomLabels","Default","Overview","Multiline"],P=Object.freeze(Object.defineProperty({__proto__:null,CanCopy:s,CustomCSS:r,CustomLabels:a,Default:c,Demo:t,Multiline:l,Overview:d,__namedExportsOrder:Y,default:N},Symbol.toStringTag,{value:"Module"}));export{P as C,c as D,l as M,d as O,r as a,s as b,a as c};
