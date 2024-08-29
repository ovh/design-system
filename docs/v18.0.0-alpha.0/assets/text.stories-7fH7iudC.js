import{T as b}from"./index-DB8q6ij-.js";import{x as n}from"./lit-html-D-ZEPr28.js";import{o as f}from"./unsafe-html-HR6uCwaW.js";import{o as v,C as d}from"./control-C1r2wu67.js";const _={title:"ODS Components/Text",component:"ods-text"},e={render:a=>n`
<ods-text class="my-text-demo"
          preset="${a.preset}">
  ${f(a.content)}
</ods-text>
<style>
  .my-text-demo::part(text) {
    ${a.customCss}
  }
</style>
  `,argTypes:v({preset:{table:{category:d.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:{type:"select"},options:b},content:{table:{category:d.slot,defaultValue:{summary:"ø"}},control:"text"},customCss:{table:{category:d.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "color: #008000;"'}}),args:{content:"lorem ipsum"}},t={tags:["isHidden"],parameters:{layout:"centered"},render:()=>n`
<ods-text class="overview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ods-text>
<style>
  .overview-text::part(text) {
    color: var(--ods-color-text);
  }
</style>
  `},s={tags:["isHidden"],render:()=>n`
<ods-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ods-text>
  `},o={tags:["isHidden"],render:()=>n`
<ods-text preset="caption">Caption</ods-text><br>
<ods-text preset="code">Code</ods-text>
<ods-text preset="paragraph">Paragraph</ods-text>
<ods-text preset="span">Span</ods-text><br>
<ods-text preset="label">Label</ods-text>
<ods-text preset="heading-1">Heading-1</ods-text>
<ods-text preset="heading-2">Heading-2</ods-text>
<ods-text preset="heading-3">Heading-3</ods-text>
<ods-text preset="heading-4">Heading-4</ods-text>
<ods-text preset="heading-5">Heading-5</ods-text>
<ods-text preset="heading-6">Heading-6</ods-text>
  `},r={tags:["isHidden"],render:()=>n`
<ods-text class="my-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ods-text>
<style>
  .my-text::part(text) {
    color: #008000;
  }
</style>
  `};var i,p,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          summary: 'ø'
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
    content: 'lorem ipsum'
  }
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,l,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(l=t.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var g,u,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ods-text>
  \`
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var C,S,T;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-text preset="caption">Caption</ods-text><br>
<ods-text preset="code">Code</ods-text>
<ods-text preset="paragraph">Paragraph</ods-text>
<ods-text preset="span">Span</ods-text><br>
<ods-text preset="label">Label</ods-text>
<ods-text preset="heading-1">Heading-1</ods-text>
<ods-text preset="heading-2">Heading-2</ods-text>
<ods-text preset="heading-3">Heading-3</ods-text>
<ods-text preset="heading-4">Heading-4</ods-text>
<ods-text preset="heading-5">Heading-5</ods-text>
<ods-text preset="heading-6">Heading-6</ods-text>
  \`
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var h,H,O;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-text class="my-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ods-text>
<style>
  .my-text::part(text) {
    color: #008000;
  }
</style>
  \`
}`,...(O=(H=r.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const E=["Demo","Overview","Default","Preset","CustomCSS"],w=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:r,Default:s,Demo:e,Overview:t,Preset:o,__namedExportsOrder:E,default:_},Symbol.toStringTag,{value:"Module"}));export{r as C,s as D,t as O,o as P,w as T};
