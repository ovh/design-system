import{d as S}from"./ods-skeleton2-B7sDasgF.js";import{x as n,o as O,C as h}from"./controls-DX883vx3.js";const x=S;x();const f={title:"ODS Components/Skeleton",component:"ods-skeleton"},e={render:C=>n`
<ods-skeleton class="my-skeleton-demo">
</ods-skeleton>
<style>
  .my-skeleton-demo::part(skeleton) {
    ${C.customCss}
  }
</style>
  `,argTypes:O({customCss:{table:{category:h.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "height: 50px; width: 500px;"'}}),args:{}},s={tags:["isHidden"],render:()=>n`
<ods-skeleton></ods-skeleton>
  `},t={tags:["isHidden"],render:()=>n`
<ods-skeleton></ods-skeleton>
  `},o={tags:["isHidden"],render:()=>n`
<ods-skeleton class="my-skeleton">
</ods-skeleton>
<style>
  .my-skeleton::part(skeleton) {
    width: 50%;
  }
</style>
  `};var r,a,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: arg => html\`
<ods-skeleton class="my-skeleton-demo">
</ods-skeleton>
<style>
  .my-skeleton-demo::part(skeleton) {
    \${arg.customCss}
  }
</style>
  \`,
  argTypes: orderControls({
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
      description: 'Set a custom style properties. Example: "height: 50px; width: 500px;"'
    }
  }),
  args: {}
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var d,m,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-skeleton></ods-skeleton>
  \`
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var i,p,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-skeleton></ods-skeleton>
  \`
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var k,y,g;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-skeleton class="my-skeleton">
</ods-skeleton>
<style>
  .my-skeleton::part(skeleton) {
    width: 50%;
  }
</style>
  \`
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const _=["Demo","Overview","Default","CustomCSS"],w=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:o,Default:t,Demo:e,Overview:s,__namedExportsOrder:_,default:f},Symbol.toStringTag,{value:"Module"}));export{o as C,t as D,s as O,w as S};
