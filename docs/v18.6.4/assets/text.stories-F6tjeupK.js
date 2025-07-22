import{x as p,y as L}from"./index-BfWXrq3E.js";import{d as V}from"./ods-text-BO_pN8NQ.js";import{x as e,o as A,C as c}from"./controls-DX883vx3.js";import{o as M}from"./unsafe-html-VJzuFJfF.js";V();const $={title:"ODS Components/Text",component:"ods-text"},t={render:i=>e`
<ods-text class="my-text-demo"
          preset="${i.preset}">
  ${M(i.content)}
</ods-text>
<style>
  .my-text-demo::part(text) {
    ${i.customCss}
  }
</style>
  `,argTypes:A({preset:{table:{category:c.general,defaultValue:{summary:p.paragraph},type:{summary:"string"}},control:{type:"select"},options:L},content:{table:{category:c.slot,defaultValue:{summary:"ø"}},control:"text"},customCss:{table:{category:c.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "color: #008000;"'}}),args:{content:"lorem ipsum",preset:p.paragraph}},s={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
<ods-text class="overview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ods-text>
<style>
  .overview-text::part(text) {
    color: var(--ods-color-text);
  }
</style>
  `},o={tags:["isHidden"],render:()=>e`
<ods-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ods-text>
  `},r={tags:["isHidden"],render:()=>e`
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
  `},n={tags:["isHidden"],render:()=>e`
<ods-text class="my-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ods-text>
<style>
  .my-text::part(text) {
    color: #008000;
  }
</style>
  `},a={tags:["isHidden"],render:()=>e`
<table id="css-table">
  <caption id="css-caption">
    <ods-text preset="caption">My table title</ods-text>
  </caption>
  <thead>
  <tr>
    <th scope="col">Person</th>
    <th scope="col">Age</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <th scope="row">Chris</th>
    <td>22</td>
  </tr>
  </tbody>
</table>
<style>
  #css-caption {
    caption-side: bottom;
  }
  #css-table {
    border-collapse: collapse;
    border: 2px solid rgb(140 140 140);
  }
</style>
  `},d={tags:["isHidden"],render:()=>e`
<figure>
  <img id="css-img" src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4" alt="OVHcloud logo" />
  <figcaption>
    <ods-text preset="caption">My picture title</ods-text>
  </figcaption>
</figure>
<style>
  #css-img {
    height: 100px;
  }
</style>
  `};var l,m,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,u,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var h,b,C;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ods-text>
  \`
}`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var T,_,S;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(S=(_=r.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var f,H,O;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-text class="my-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ods-text>
<style>
  .my-text::part(text) {
    color: #008000;
  }
</style>
  \`
}`,...(O=(H=n.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var E,v,w;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<table id="css-table">
  <caption id="css-caption">
    <ods-text preset="caption">My table title</ods-text>
  </caption>
  <thead>
  <tr>
    <th scope="col">Person</th>
    <th scope="col">Age</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <th scope="row">Chris</th>
    <td>22</td>
  </tr>
  </tbody>
</table>
<style>
  #css-caption {
    caption-side: bottom;
  }
  #css-table {
    border-collapse: collapse;
    border: 2px solid rgb(140 140 140);
  }
</style>
  \`
}`,...(w=(v=a.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var P,R,D;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<figure>
  <img id="css-img" src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4" alt="OVHcloud logo" />
  <figcaption>
    <ods-text preset="caption">My picture title</ods-text>
  </figcaption>
</figure>
<style>
  #css-img {
    height: 100px;
  }
</style>
  \`
}`,...(D=(R=d.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};const z=["Demo","Overview","Default","Preset","CustomCSS","CaptionTable","FigCaption"],Y=Object.freeze(Object.defineProperty({__proto__:null,CaptionTable:a,CustomCSS:n,Default:o,Demo:t,FigCaption:d,Overview:s,Preset:r,__namedExportsOrder:z,default:$},Symbol.toStringTag,{value:"Module"}));export{n as C,o as D,d as F,s as O,r as P,Y as T,a};
