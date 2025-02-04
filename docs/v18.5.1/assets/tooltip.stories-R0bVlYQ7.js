import{L as l,M as p}from"./index-DCBH0_Tl.js";import{d as E}from"./ods-tooltip2-BwzEvmuE.js";import{x as o,o as P,C as d}from"./controls-DX883vx3.js";import{o as D}from"./unsafe-html-VJzuFJfF.js";const H=E;var c=Object.freeze,N=Object.defineProperty,R=(t,Y)=>c(N(t,"raw",{value:c(t.slice())})),m;H();const V={title:"ODS Components/Tooltip",component:"ods-tooltip",parameters:{layout:"centered"},decorators:[t=>o`<div style="padding-top: 50px; display: inline-flex; align-items: center;">${t()}</div>`]},e={render:t=>o`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-1"
          aria-labelledby="tooltip-demo"
          name="circle-question"
          tabindex="0">
</ods-icon>
<ods-tooltip position="${t.position}"
             trigger-id="trigger-1"
             id="tooltip-demo"
             with-arrow="${t.withArrow}">
  ${D(t.content)}
</ods-tooltip>
  `,argTypes:P({content:{table:{category:d.slot,defaultValue:{summary:"ø"}},control:"text"},position:{table:{category:d.general,defaultValue:{summary:l.top},type:{summary:p}},control:{type:"select"},options:p},withArrow:{table:{category:d.design,defaultValue:{summary:!1}},control:{type:"boolean"}}}),args:{content:"Tooltip content",position:l.top,withArrow:!0}},n={tags:["isHidden"],parameters:{layout:"centered"},render:()=>o`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-2"
          aria-labelledby="tooltip-overview"
          name="circle-question"
          tabindex="0">
</ods-icon>
<ods-tooltip trigger-id="trigger-2" id="tooltip-overview">
  Tooltip content
</ods-tooltip>
  `},r={tags:["isHidden"],render:()=>o`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-4"
          aria-labelledby="tooltip-default"
          name="circle-question"
          tabindex="0">
</ods-icon>
<ods-tooltip trigger-id="trigger-4" id="tooltip-default">
  Tooltip content
</ods-tooltip>
  `},i={tags:["isHidden"],render:()=>o`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-5"
          aria-labelledby="tooltip-arrow-tip"
          name="circle-question"
          tabindex="0">
</ods-icon>
<ods-tooltip trigger-id="trigger-5"
             id="tooltip-arrow-tip"
             with-arrow>
  Tooltip content
</ods-tooltip>
  `},s={tags:["isHidden"],render:()=>o`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-3"
          aria-labelledby="tooltip-custom-css"
          name="circle-question"
          tabindex="0">
</ods-icon>
<ods-tooltip trigger-id="trigger-3"
             id="tooltip-custom-css"
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
  `},a={tags:["isHidden"],render:()=>o(m||(m=R([`
<ods-button id="modal-button"
            label="Open Modal">
</ods-button>
<ods-modal id="modal-tooltip">
  <ods-icon id="modal-tooltip-trigger"
            aria-labelledby="tooltip-modal"
            name="circle-question"
            tabindex="0">
  </ods-icon>
  <ods-tooltip strategy="fixed"
               id="tooltip-modal"
               trigger-id="modal-tooltip-trigger">
    Some tooltip content
  </ods-tooltip>
</ods-modal>

<script>
  (() => {
    const modalButton = document.querySelector('#modal-button');
    const modalElement = document.querySelector('#modal-tooltip');

    modalButton.addEventListener('click', () => {
      modalElement.open();
    });
  })();
<\/script>
  `])))};var g,u,b;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => html\`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-1"
          aria-labelledby="tooltip-demo"
          name="circle-question"
          tabindex="0">
</ods-icon>
<ods-tooltip position="\${args.position}"
             trigger-id="trigger-1"
             id="tooltip-demo"
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
}`,...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var y,O,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-2"
          aria-labelledby="tooltip-overview"
          name="circle-question"
          tabindex="0">
</ods-icon>
<ods-tooltip trigger-id="trigger-2" id="tooltip-overview">
  Tooltip content
</ods-tooltip>
  \`
}`,...(x=(O=n.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var T,w,S;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-4"
          aria-labelledby="tooltip-default"
          name="circle-question"
          tabindex="0">
</ods-icon>
<ods-tooltip trigger-id="trigger-4" id="tooltip-default">
  Tooltip content
</ods-tooltip>
  \`
}`,...(S=(w=r.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var f,_,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-5"
          aria-labelledby="tooltip-arrow-tip"
          name="circle-question"
          tabindex="0">
</ods-icon>
<ods-tooltip trigger-id="trigger-5"
             id="tooltip-arrow-tip"
             with-arrow>
  Tooltip content
</ods-tooltip>
  \`
}`,...(h=(_=i.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var L,C,v;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-3"
          aria-labelledby="tooltip-custom-css"
          name="circle-question"
          tabindex="0">
</ods-icon>
<ods-tooltip trigger-id="trigger-3"
             id="tooltip-custom-css"
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
}`,...(v=(C=s.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var q,I,A;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button id="modal-button"
            label="Open Modal">
</ods-button>
<ods-modal id="modal-tooltip">
  <ods-icon id="modal-tooltip-trigger"
            aria-labelledby="tooltip-modal"
            name="circle-question"
            tabindex="0">
  </ods-icon>
  <ods-tooltip strategy="fixed"
               id="tooltip-modal"
               trigger-id="modal-tooltip-trigger">
    Some tooltip content
  </ods-tooltip>
</ods-modal>

<script>
  (() => {
    const modalButton = document.querySelector('#modal-button');
    const modalElement = document.querySelector('#modal-tooltip');

    modalButton.addEventListener('click', () => {
      modalElement.open();
    });
  })();
<\/script>
  \`
}`,...(A=(I=a.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};const $=["Demo","Overview","Default","ArrowTip","CustomCSS","FixedContext"],G=Object.freeze(Object.defineProperty({__proto__:null,ArrowTip:i,CustomCSS:s,Default:r,Demo:e,FixedContext:a,Overview:n,__namedExportsOrder:$,default:V},Symbol.toStringTag,{value:"Module"}));export{i as A,s as C,r as D,a as F,n as O,G as T};
