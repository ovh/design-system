import{C as p,D as l}from"./index-DryTTbHl.js";import{x as o}from"./lit-html-D-ZEPr28.js";import{o as R}from"./unsafe-html-HR6uCwaW.js";import{o as D,C as d}from"./control-C1r2wu67.js";const M={title:"ODS Components/Popover",component:"ods-popover",parameters:{layout:"centered"},decorators:[t=>o`<div style="padding-top: 50px; display: inline-flex; align-content: center;">${t()}</div>`]},e={render:t=>o`
<ods-button id="trigger-demo"
            label="Trigger">
</ods-button>
<ods-popover position="${t.position}"
             trigger-id="trigger-demo"
             with-arrow="${t.withArrow}">
  ${R(t.content)}
</ods-popover>
  `,argTypes:D({content:{table:{category:d.slot,defaultValue:{summary:"ø"}},control:"text"},position:{table:{category:d.general,defaultValue:{summary:p.top},type:{summary:l}},control:{type:"select"},options:l},withArrow:{table:{category:d.design,defaultValue:{summary:!1}},control:{type:"boolean"}}}),args:{content:'<div><p>Some text content</p><input type="text" /><button>Action</button>',position:p.bottom,withArrow:!0}},n={tags:["isHidden"],render:()=>o`
<ods-button icon="home"
            id="trigger-arrow"
            label="Menu">
</ods-button>
<ods-popover trigger-id="trigger-arrow"
             with-arrow>
  Popover content
</ods-popover>
  `},r={tags:["isHidden"],render:()=>o`
<ods-button icon="home"
            id="trigger-css"
            label="Menu">
</ods-button>
<ods-popover trigger-id="trigger-css"
             with-arrow>
  <p class="custom-content">
    Popover content
  </p>
</ods-popover>
<style>
  .custom-content {
    margin: 0;
    font-style: italic;
  }
</style>
  `},s={tags:["isHidden"],render:()=>o`
<ods-button icon="home"
            id="trigger-default"
            label="Menu">
</ods-button>
<ods-popover trigger-id="trigger-default">
  Popover content
</ods-popover>
  `},i={tags:["isHidden"],parameters:{layout:"centered"},render:()=>o`
<ods-button icon="home"
            id="trigger-overview"
            label="Menu">
</ods-button>
<ods-popover trigger-id="trigger-overview">
  Popover content
</ods-popover>
  `},a={tags:["isHidden"],decorators:[t=>o`<div style="height: 200px;">${t()}</div>`],render:()=>o`
<div style="display: flex;">
  <ods-button class="my-trigger"
              icon="ellipsis-vertical"
              id="trigger-menu"
              variant="outline"></ods-button>

  <ods-popover class="custom-popover"
               trigger-id="trigger-menu"
               with-arrow>
    <ods-button class="my-button"
                label="Button"
                variant="ghost"></ods-button>
    <ods-button class="my-button"
                label="Button"
                variant="ghost"></ods-button>
    <ods-divider></ods-divider>
    <ods-button class="my-button"
                label="Button"
                variant="ghost"
                color="critical"></ods-button>
  </ods-popover>

  <style>
    .custom-popover {
      padding: 8px 0;
    }
    .my-trigger::part(button) {
      width: 40px;
      height: 40px;
      justify-content: center;
    }
    .my-button::part(button) {
      height: 32px;
      border-radius: 0;
    }
  </style>
</div>
  `};var u,c,g;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => html\`
<ods-button id="trigger-demo"
            label="Trigger">
</ods-button>
<ods-popover position="\${args.position}"
             trigger-id="trigger-demo"
             with-arrow="\${args.withArrow}">
  \${unsafeHTML(args.content)}
</ods-popover>
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
          summary: ODS_POPOVER_POSITION.top
        },
        type: {
          summary: ODS_POPOVER_POSITIONS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_POPOVER_POSITIONS
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
    content: '<div><p>Some text content</p><input type="text" /><button>Action</button>',
    position: ODS_POPOVER_POSITION.bottom,
    withArrow: true
  }
}`,...(g=(c=e.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,b,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button icon="home"
            id="trigger-arrow"
            label="Menu">
</ods-button>
<ods-popover trigger-id="trigger-arrow"
             with-arrow>
  Popover content
</ods-popover>
  \`
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,h,O;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button icon="home"
            id="trigger-css"
            label="Menu">
</ods-button>
<ods-popover trigger-id="trigger-css"
             with-arrow>
  <p class="custom-content">
    Popover content
  </p>
</ods-popover>
<style>
  .custom-content {
    margin: 0;
    font-style: italic;
  }
</style>
  \`
}`,...(O=(h=r.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var w,S,f;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button icon="home"
            id="trigger-default"
            label="Menu">
</ods-button>
<ods-popover trigger-id="trigger-default">
  Popover content
</ods-popover>
  \`
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var P,x,T;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-button icon="home"
            id="trigger-overview"
            label="Menu">
</ods-button>
<ods-popover trigger-id="trigger-overview">
  Popover content
</ods-popover>
  \`
}`,...(T=(x=i.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var _,C,A;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['isHidden'],
  decorators: [story => html\`<div style="height: 200px;">\${story()}</div>\`],
  render: () => html\`
<div style="display: flex;">
  <ods-button class="my-trigger"
              icon="ellipsis-vertical"
              id="trigger-menu"
              variant="outline"></ods-button>

  <ods-popover class="custom-popover"
               trigger-id="trigger-menu"
               with-arrow>
    <ods-button class="my-button"
                label="Button"
                variant="ghost"></ods-button>
    <ods-button class="my-button"
                label="Button"
                variant="ghost"></ods-button>
    <ods-divider></ods-divider>
    <ods-button class="my-button"
                label="Button"
                variant="ghost"
                color="critical"></ods-button>
  </ods-popover>

  <style>
    .custom-popover {
      padding: 8px 0;
    }
    .my-trigger::part(button) {
      width: 40px;
      height: 40px;
      justify-content: center;
    }
    .my-button::part(button) {
      height: 32px;
      border-radius: 0;
    }
  </style>
</div>
  \`
}`,...(A=(C=a.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const I=["Demo","ArrowTip","CustomCSS","Default","Overview","Menu"],$=Object.freeze(Object.defineProperty({__proto__:null,ArrowTip:n,CustomCSS:r,Default:s,Demo:e,Menu:a,Overview:i,__namedExportsOrder:I,default:M},Symbol.toStringTag,{value:"Module"}));export{n as A,r as C,s as D,a as M,i as O,$ as P};
