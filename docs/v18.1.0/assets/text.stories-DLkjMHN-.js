import{X as i,Y as _}from"./index-BNPjhb5w.js";import{x as n}from"./lit-html-D-ZEPr28.js";import{o as f}from"./unsafe-html-HR6uCwaW.js";import{o as v,C as d}from"./controls-DpsgTNdU.js";const b={title:"ODS Components/Text",component:"ods-text"},e={render:a=>n`
<ods-text class="my-text-demo"
          preset="${a.preset}">
  ${f(a.content)}
</ods-text>
<style>
  .my-text-demo::part(text) {
    ${a.customCss}
  }
</style>
  `,argTypes:v({preset:{table:{category:d.general,defaultValue:{summary:i.paragraph},type:{summary:"string"}},control:{type:"select"},options:_},content:{table:{category:d.slot,defaultValue:{summary:"ø"}},control:"text"},customCss:{table:{category:d.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "color: #008000;"'}}),args:{content:"lorem ipsum",preset:i.paragraph}},t={tags:["isHidden"],parameters:{layout:"centered"},render:()=>n`
<ods-text class="overview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ods-text>
<style>
  .overview-text::part(text) {
    color: var(--ods-color-text);
  }
</style>
  `},s={tags:["isHidden"],render:()=>n`
<ods-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ods-text>
  `},r={tags:["isHidden"],render:()=>n`
<ods-text preset="caption">Caption</ods-text><br>
<ods-text preset="code">Code</ods-text>
<ods-text preset="paragraph">Paragraph</ods-text>
<ods-text preset="span">Span</ods-text><br>
<ods-text preset="heading-1">Heading-1</ods-text>
<ods-text preset="heading-2">Heading-2</ods-text>
<ods-text preset="heading-3">Heading-3</ods-text>
<ods-text preset="heading-4">Heading-4</ods-text>
<ods-text preset="heading-5">Heading-5</ods-text>
<ods-text preset="heading-6">Heading-6</ods-text>
  `},o={tags:["isHidden"],render:()=>n`
<ods-text class="my-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ods-text>
<style>
  .my-text::part(text) {
    color: #008000;
  }
</style>
  `};var p,c,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: arg => html\`
<ods-text class="my-text-demo"
          preset="\${arg.preset}">
  \${unsafeHTML(arg.content)}
</ods-text>
<style>
  .my-text-demo::part(text) {
    \${arg.customCss}
  }
</style>
  \`,
  argTypes: orderControls({
    preset: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: ODS_TEXT_PRESET.paragraph
        },
        type: {
          summary: 'string'
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_TEXT_PRESETS
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
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "color: #008000;"'
    }
  }),
  args: {
    content: 'lorem ipsum',
    preset: ODS_TEXT_PRESET.paragraph
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,x,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-text class="overview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ods-text>
<style>
  .overview-text::part(text) {
    color: var(--ods-color-text);
  }
</style>
  \`
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var u,y,T;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ods-text>
  \`
}`,...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var S,h,C;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-text preset="caption">Caption</ods-text><br>
<ods-text preset="code">Code</ods-text>
<ods-text preset="paragraph">Paragraph</ods-text>
<ods-text preset="span">Span</ods-text><br>
<ods-text preset="heading-1">Heading-1</ods-text>
<ods-text preset="heading-2">Heading-2</ods-text>
<ods-text preset="heading-3">Heading-3</ods-text>
<ods-text preset="heading-4">Heading-4</ods-text>
<ods-text preset="heading-5">Heading-5</ods-text>
<ods-text preset="heading-6">Heading-6</ods-text>
  \`
}`,...(C=(h=r.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var O,E,H;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-text class="my-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ods-text>
<style>
  .my-text::part(text) {
    color: #008000;
  }
</style>
  \`
}`,...(H=(E=o.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const R=["Demo","Overview","Default","Preset","CustomCSS"],V=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:o,Default:s,Demo:e,Overview:t,Preset:r,__namedExportsOrder:R,default:b},Symbol.toStringTag,{value:"Module"}));export{o as C,s as D,t as O,r as P,V as T};
