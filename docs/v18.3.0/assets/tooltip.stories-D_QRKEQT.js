import{G as l,H as p}from"./index-LQAjXuKp.js";import{x as t}from"./lit-html-D-ZEPr28.js";import{o as P}from"./unsafe-html-HR6uCwaW.js";import{o as D,C as d}from"./controls-DpsgTNdU.js";var c=Object.freeze,H=Object.defineProperty,N=(o,E)=>c(H(o,"raw",{value:c(E||o.slice())})),m;const R={title:"ODS Components/Tooltip",component:"ods-tooltip",parameters:{layout:"centered"},decorators:[o=>t`<div style="padding-top: 50px; display: inline-flex; align-items: center;">${o()}</div>`]},e={render:o=>t`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-1"
          name="circle-question">
</ods-icon>
<ods-tooltip position="${o.position}"
             trigger-id="trigger-1"
             with-arrow="${o.withArrow}">
  ${P(o.content)}
</ods-tooltip>
  `,argTypes:D({content:{table:{category:d.slot,defaultValue:{summary:"ø"}},control:"text"},position:{table:{category:d.general,defaultValue:{summary:l.top},type:{summary:p}},control:{type:"select"},options:p},withArrow:{table:{category:d.design,defaultValue:{summary:!1}},control:{type:"boolean"}}}),args:{content:"Tooltip content",position:l.top,withArrow:!0}},n={tags:["isHidden"],parameters:{layout:"centered"},render:()=>t`
<ods-text preset="paragraph">Lorem ipsum &nbsp;</ods-text>
<ods-icon id="trigger-2"
          name="circle-question">
</ods-icon>
<ods-tooltip trigger-id="trigger-2">
  Tooltip content
</ods-tooltip>
  `},r={tags:["isHidden"],render:()=>t`
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
  `},a={tags:["isHidden"],render:()=>t(m||(m=N([`
<ods-button id="modal-button"
            label="Open Modal">
</ods-button>
<ods-modal id="modal-tooltip">
  <ods-icon id="modal-tooltip-trigger"
            name="circle-question">
  </ods-icon>
  <ods-tooltip strategy="fixed"
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
  `])))};var g,u,O;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(O=(u=e.parameters)==null?void 0:u.docs)==null?void 0:O.source}}};var y,T,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(T=n.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var x,b,w;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(w=(b=r.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var _,h,f;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var L,C,q;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(q=(C=i.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var I,A,v;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button id="modal-button"
            label="Open Modal">
</ods-button>
<ods-modal id="modal-tooltip">
  <ods-icon id="modal-tooltip-trigger"
            name="circle-question">
  </ods-icon>
  <ods-tooltip strategy="fixed"
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
}`,...(v=(A=a.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};const V=["Demo","Overview","Default","ArrowTip","CustomCSS","FixedContext"],B=Object.freeze(Object.defineProperty({__proto__:null,ArrowTip:s,CustomCSS:i,Default:r,Demo:e,FixedContext:a,Overview:n,__namedExportsOrder:V,default:R},Symbol.toStringTag,{value:"Module"}));export{s as A,i as C,r as D,a as F,n as O,B as T};
