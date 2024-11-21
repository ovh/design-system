import{G as l,H as u}from"./index-BvAGq-5Z.js";import{x as t}from"./lit-html-D-ZEPr28.js";import{o as B}from"./unsafe-html-HR6uCwaW.js";import{o as N,C as p}from"./controls-DpsgTNdU.js";var c=Object.freeze,L=Object.defineProperty,$=(o,V)=>c(L(o,"raw",{value:c(V||o.slice())})),g;const j={title:"ODS Components/Popover",component:"ods-popover",parameters:{layout:"centered"},decorators:[o=>t`<div style="padding-top: 50px; display: inline-flex; align-content: center;">${o()}</div>`]},e={render:o=>t`
<ods-button id="trigger-demo"
            label="Trigger">
</ods-button>
<ods-popover position="${o.position}"
             trigger-id="trigger-demo"
             with-arrow="${o.withArrow}">
  ${B(o.content)}
</ods-popover>
  `,argTypes:N({content:{table:{category:p.slot,defaultValue:{summary:"ø"}},control:"text"},position:{table:{category:p.general,defaultValue:{summary:l.top},type:{summary:u}},control:{type:"select"},options:u},withArrow:{table:{category:p.design,defaultValue:{summary:!1}},control:{type:"boolean"}}}),args:{content:'<div><p>Some text content</p><input type="text" /><button>Action</button>',position:l.bottom,withArrow:!0}},n={tags:["isHidden"],render:()=>t`
<ods-button icon="home"
            id="trigger-arrow"
            label="Menu">
</ods-button>
<ods-popover trigger-id="trigger-arrow"
             with-arrow>
  Popover content
</ods-popover>
  `},r={tags:["isHidden"],render:()=>t`
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
  `},s={tags:["isHidden"],render:()=>t`
<ods-button icon="home"
            id="trigger-default"
            label="Menu">
</ods-button>
<ods-popover trigger-id="trigger-default">
  Popover content
</ods-popover>
  `},d={tags:["isHidden"],render:()=>t(g||(g=$([`
<ods-button id="modal-button"
            label="Open Modal">
</ods-button>
<ods-modal id="modal-popover">
  <ods-button id="modal-popover-trigger"
              label="Open Popover">
  </ods-button>
  <ods-popover strategy="fixed"
               trigger-id="modal-popover-trigger">
    Some popover content
  </ods-popover>
</ods-modal>

<script>
  (() => {
    const modalButton = document.querySelector('#modal-button');
    const modalElement = document.querySelector('#modal-popover');

    modalButton.addEventListener('click', () => {
      modalElement.open();
    });
  })();
<\/script>
  `])))},a={tags:["isHidden"],parameters:{layout:"centered"},render:()=>t`
<ods-button icon="home"
            id="trigger-overview"
            label="Menu">
</ods-button>
<ods-popover trigger-id="trigger-overview">
  Popover content
</ods-popover>
  `},i={tags:["isHidden"],decorators:[o=>t`<div style="height: 200px;">${o()}</div>`],render:()=>t`
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
  `};var m,b,v;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(b=e.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,O,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(O=n.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};var w,S,f;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(f=(S=r.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var x,P,_;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(_=(P=s.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var T,C,A;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button id="modal-button"
            label="Open Modal">
</ods-button>
<ods-modal id="modal-popover">
  <ods-button id="modal-popover-trigger"
              label="Open Popover">
  </ods-button>
  <ods-popover strategy="fixed"
               trigger-id="modal-popover-trigger">
    Some popover content
  </ods-popover>
</ods-modal>

<script>
  (() => {
    const modalButton = document.querySelector('#modal-button');
    const modalElement = document.querySelector('#modal-popover');

    modalButton.addEventListener('click', () => {
      modalElement.open();
    });
  })();
<\/script>
  \`
}`,...(A=(C=d.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var E,M,H;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(H=(M=a.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var R,D,I;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(I=(D=i.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const Y=["Demo","ArrowTip","CustomCSS","Default","FixedContext","Overview","Menu"],k=Object.freeze(Object.defineProperty({__proto__:null,ArrowTip:n,CustomCSS:r,Default:s,Demo:e,FixedContext:d,Menu:i,Overview:a,__namedExportsOrder:Y,default:j},Symbol.toStringTag,{value:"Module"}));export{n as A,r as C,s as D,d as F,i as M,a as O,k as P};
