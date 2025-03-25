import{d as E}from"./ods-progress-bar2-zR9YGHZb.js";import{x as r,o as V,C as d}from"./controls-DX883vx3.js";const R=E;R();const $={title:"ODS Components/Progress Bar",component:"ods-progress-bar"},e={render:m=>r`
    <ods-progress-bar
     class="my-progress-bar-demo"
     max=${m.max}
     value=${m.value}
      >
    </ods-progress-bar>
    <style>
      .my-progress-bar-demo::part(progress) {
        ${m.CustomCss}
      }
    </style>`,argTypes:V({max:{table:{category:d.general,defaultValue:{summary:"100"},type:{summary:"number"}},control:"number"},value:{table:{category:d.general,defaultValue:{summary:"0"},type:{summary:"number"}},control:"number"},CustomCss:{table:{category:d.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties on the progress bar. Example: "width: 100px;"'}}),args:{max:100,value:50}},s={tags:["isHidden"],render:()=>r`
<ods-progress-bar class="my-progress" value="50"></ods-progress-bar>
<style>
  .my-progress::part(progress) {
    width: 100px;
  }
</style>
`},a={tags:["isHidden"],parameters:{layout:"centered"},render:()=>r`
<ods-progress-bar value="50"></ods-progress-bar>
  `},o={tags:["isHidden"],render:()=>r`
<ods-progress-bar></ods-progress-bar>
  `},n={tags:["isHidden"],render:()=>r`
<ods-progress-bar max="500" value="50"></ods-progress-bar>
  `},t={tags:["isHidden"],render:()=>r`
<ods-progress-bar value="50"></ods-progress-bar>
  `};var p,l,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => html\`
    <ods-progress-bar
     class="my-progress-bar-demo"
     max=\${args.max}
     value=\${args.value}
      >
    </ods-progress-bar>
    <style>
      .my-progress-bar-demo::part(progress) {
        \${args.CustomCss}
      }
    </style>\`,
  argTypes: orderControls({
    max: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: '100'
        },
        type: {
          summary: 'number'
        }
      },
      control: 'number'
    },
    value: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: '0'
        },
        type: {
          summary: 'number'
        }
      },
      control: 'number'
    },
    CustomCss: {
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
      description: 'Set a custom style properties on the progress bar. Example: "width: 100px;"'
    }
  }),
  args: {
    max: 100,
    value: 50
  }
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,c,i;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-progress-bar class="my-progress" value="50"></ods-progress-bar>
<style>
  .my-progress::part(progress) {
    width: 100px;
  }
</style>
\`
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var b,y,C;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-progress-bar value="50"></ods-progress-bar>
  \`
}`,...(C=(y=a.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var x,v,O;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-progress-bar></ods-progress-bar>
  \`
}`,...(O=(v=o.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var S,f,h;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-progress-bar max="500" value="50"></ods-progress-bar>
  \`
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var T,H,_;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-progress-bar value="50"></ods-progress-bar>
  \`
}`,...(_=(H=t.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};const w=["Demo","CustomCSS","Overview","Default","Max","Value"],G=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:s,Default:o,Demo:e,Max:n,Overview:a,Value:t,__namedExportsOrder:w,default:$},Symbol.toStringTag,{value:"Module"}));export{s as C,o as D,n as M,a as O,G as P,t as V};
