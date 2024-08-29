import{C as p,D as d}from"./index-CEZbmgmh.js";import{x as t}from"./lit-html-D-ZEPr28.js";import{o as L}from"./unsafe-html-HR6uCwaW.js";import{o as C,C as a}from"./control-C1r2wu67.js";const I={title:"ODS Components/Tooltip",component:"ods-tooltip",parameters:{layout:"centered"},decorators:[o=>t`<div style="padding-top: 50px; display: inline-flex; align-items: center;">${o()}</div>`]},e={render:o=>t`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-1"
          name="circle-question">
</ods-icon>
<ods-tooltip position="${o.position}"
             trigger-id="trigger-1"
             with-arrow="${o.withArrow}">
  ${L(o.content)}
</ods-tooltip>
  `,argTypes:C({content:{table:{category:a.slot,defaultValue:{summary:"ø"}},control:"text"},position:{table:{category:a.general,defaultValue:{summary:p.top},type:{summary:d}},control:{type:"select"},options:d},withArrow:{table:{category:a.design,defaultValue:{summary:!1}},control:{type:"boolean"}}}),args:{content:"Tooltip content",position:p.top,withArrow:!0}},r={tags:["isHidden"],parameters:{layout:"centered"},render:()=>t`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-2"
          name="circle-question">
</ods-icon>
<ods-tooltip trigger-id="trigger-2">
  Tooltip content
</ods-tooltip>
  `},n={tags:["isHidden"],render:()=>t`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-4"
          name="circle-question">
</ods-icon>
<ods-tooltip trigger-id="trigger-4">
  Tooltip content
</ods-tooltip>
  `},s={tags:["isHidden"],render:()=>t`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-5"
          name="circle-question">
</ods-icon>
<ods-tooltip trigger-id="trigger-5"
             with-arrow>
  Tooltip content
</ods-tooltip>
  `},i={tags:["isHidden"],render:()=>t`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-3"
          name="circle-question">
</ods-icon>
<ods-tooltip trigger-id="trigger-3"
             with-arrow>
  <p class="custom-tooltip">
    Custom tooltip
  </p>
</ods-tooltip>
<style>
  .custom-tooltip {
    font-style: italic;
  }
</style>
  `};var c,l,g;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => html\`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-1"
          name="circle-question">
</ods-icon>
<ods-tooltip position="\${args.position}"
             trigger-id="trigger-1"
             with-arrow="\${args.withArrow}">
  \${unsafeHTML(args.content)}
</ods-tooltip>
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
    position: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: ODS_TOOLTIP_POSITION.top
        },
        type: {
          summary: ODS_TOOLTIP_POSITIONS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_TOOLTIP_POSITIONS
    },
    withArrow: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: false
        }
      },
      control: {
        type: 'boolean'
      }
    }
  }),
  args: {
    content: 'Tooltip content',
    position: ODS_TOOLTIP_POSITION.top,
    withArrow: true
  }
}`,...(g=(l=e.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var m,u,O;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-2"
          name="circle-question">
</ods-icon>
<ods-tooltip trigger-id="trigger-2">
  Tooltip content
</ods-tooltip>
  \`
}`,...(O=(u=r.parameters)==null?void 0:u.docs)==null?void 0:O.source}}};var T,y,w;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-4"
          name="circle-question">
</ods-icon>
<ods-tooltip trigger-id="trigger-4">
  Tooltip content
</ods-tooltip>
  \`
}`,...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var x,S,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-5"
          name="circle-question">
</ods-icon>
<ods-tooltip trigger-id="trigger-5"
             with-arrow>
  Tooltip content
</ods-tooltip>
  \`
}`,...(h=(S=s.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var _,b,f;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-3"
          name="circle-question">
</ods-icon>
<ods-tooltip trigger-id="trigger-3"
             with-arrow>
  <p class="custom-tooltip">
    Custom tooltip
  </p>
</ods-tooltip>
<style>
  .custom-tooltip {
    font-style: italic;
  }
</style>
  \`
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const A=["Demo","Overview","Default","ArrowTip","CustomCSS"],R=Object.freeze(Object.defineProperty({__proto__:null,ArrowTip:s,CustomCSS:i,Default:n,Demo:e,Overview:r,__namedExportsOrder:A,default:I},Symbol.toStringTag,{value:"Module"}));export{s as A,i as C,n as D,r as O,R as T};
