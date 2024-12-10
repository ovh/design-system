import{x as t,o as S,C as c}from"./controls-DX883vx3.js";const b={title:"ODS Components/Code",component:"ods-code"},o={render:a=>t`
<ods-code can-copy="${a.canCopy}">${a.content}</ods-code>
  `,argTypes:S({canCopy:{table:{category:c.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},content:{table:{category:c.slot,defaultValue:{summary:"ø"}},control:"text"}}),args:{canCopy:!1,content:"import { OdsText } from '@ovhcloud/ods-components/react';"}},e={tags:["isHidden"],render:()=>t`
<ods-code can-copy>import { OdsText } from '@ovhcloud/ods-components/react';
</ods-code>
  `},n={tags:["isHidden"],render:()=>t`
<ods-code class="my-code">import { OdsText } from '@ovhcloud/ods-components/react';
</ods-code>
<style>
  .my-code {
    display: flex;
    color: cyan;
  }
</style>
  `},s={tags:["isHidden"],parameters:{layout:"centered"},render:()=>t`
    <ods-code can-copy>import { OdsText } from '@ovhcloud/ods-components/react';
    </ods-code>
  `},r={tags:["isHidden"],render:()=>t`
<ods-code>import { OdsText } from '@ovhcloud/ods-components/react';
</ods-code>
  `};var d,m,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: arg => html\`
<ods-code can-copy="\${arg.canCopy}">\${arg.content}</ods-code>
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
    }
  }),
  args: {
    canCopy: false,
    content: 'import { OdsText } from \\'@ovhcloud/ods-components/react\\';'
  }
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,u,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-code can-copy>import { OdsText } from '@ovhcloud/ods-components/react';
</ods-code>
  \`
}`,...(i=(u=e.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var y,g,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-code class="my-code">import { OdsText } from '@ovhcloud/ods-components/react';
</ods-code>
<style>
  .my-code {
    display: flex;
    color: cyan;
  }
</style>
  \`
}`,...(C=(g=n.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var f,O,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
    <ods-code can-copy>import { OdsText } from '@ovhcloud/ods-components/react';
    </ods-code>
  \`
}`,...(T=(O=s.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var x,h,v;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-code>import { OdsText } from '@ovhcloud/ods-components/react';
</ods-code>
  \`
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const _=["Demo","CanCopy","CustomCSS","Overview","Default"],D=Object.freeze(Object.defineProperty({__proto__:null,CanCopy:e,CustomCSS:n,Default:r,Demo:o,Overview:s,__namedExportsOrder:_,default:b},Symbol.toStringTag,{value:"Module"}));export{D as C,r as D,s as O,n as a,e as b};
