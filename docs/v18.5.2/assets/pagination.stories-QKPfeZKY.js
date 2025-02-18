import{I as J,J as q}from"./index-DCBH0_Tl.js";import{d as B}from"./ods-pagination2-Do5FFUNV.js";import{C as a,x as t,o as M}from"./controls-DX883vx3.js";const F=B;F();const K={title:"ODS Components/Pagination",component:"ods-pagination"},Y={defaultCurrentPage:{table:{category:a.general,defaultValue:{summary:4},type:{summary:"number"}},control:"number"},isDisabled:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},labelTooltipPrevious:{table:{category:a.general,defaultValue:{summary:"Previous label"},type:{summary:"string"}},control:"text"},labelTooltipNext:{table:{category:a.general,defaultValue:{summary:"Next label"},type:{summary:"string"}},control:"text"}},Q={defaultItemsPerPage:{table:{category:a.general,defaultValue:{summary:J.option_10},type:{summary:"number"}},control:"select",options:q},totalItems:{table:{category:a.general,defaultValue:{summary:60},type:{summary:"number"}},control:"number"},beforeTotalItems:{table:{category:a.slot,defaultValue:{summary:"of "},type:{summary:"string"}},control:"text"},afterTotalItems:{table:{category:a.slot,defaultValue:{summary:" results"},type:{summary:"string"}},control:"text"}},U={totalPages:{table:{category:a.general,defaultValue:{summary:9},type:{summary:"number"}},control:"number"}},o={render:e=>t`
    <ods-pagination
      default-current-page="${e.defaultCurrentPage}"
      is-disabled="${e.isDisabled}"
      label-tooltip-next="${e.labelTooltipNext}"
      label-tooltip-previous="${e.labelTooltipPrevious}"
      total-items="${e.totalItems}"
      total-pages="${e.totalPages}">
    </ods-pagination>
  `,argTypes:M({...Y,...U}),args:{defaultCurrentPage:4,isDisabled:!1,labelTooltipPrevious:"Previous label",labelTooltipNext:"Next label",totalPages:9}},s={render:e=>t`
    <ods-pagination
      default-current-page="${e.defaultCurrentPage}"
      default-items-per-page="${e.defaultItemsPerPage}"
      is-disabled="${e.isDisabled}"
      label-tooltip-next="${e.labelTooltipNext}"
      label-tooltip-previous="${e.labelTooltipPrevious}"
      total-items="${e.totalItems}">
      <span slot="before-total-items">${e.beforeTotalItems}</span>
      <span slot="after-total-items">${e.afterTotalItems}</span>
    </ods-pagination>
  `,argTypes:M({...Y,...Q}),args:{defaultCurrentPage:4,defaultItemsPerPage:J.option_10,isDisabled:!1,labelTooltipPrevious:"Previous label",labelTooltipNext:"Next label",totalItems:60,beforeTotalItems:"of ",afterTotalItems:" results"}},r={tags:["isHidden"],parameters:{layout:"centered"},render:()=>t`
    <ods-pagination
      default-current-page="3"
      total-items="100"
      label-tooltip-next="Next page"
      label-tooltip-previous="Previous page">
      <span slot="before-total-items">of </span>
      <span slot="after-total-items"> results</span>
    </ods-pagination>
  `},n={tags:["isHidden"],render:()=>t`
    <ods-pagination default-current-page="4" total-pages="7"></ods-pagination>
  `},l={tags:["isHidden"],render:()=>t`
    <ods-pagination default-current-page="3" total-pages="21"></ods-pagination>
  `},i={tags:["isHidden"],render:()=>t`
    <ods-pagination default-current-page="3" total-pages="21" is-disabled></ods-pagination>
  `},p={tags:["isHidden"],render:()=>t`
    <ods-pagination
      default-current-page="3"
      total-pages="21"
      label-tooltip-next="Go to next page"
      label-tooltip-previous="Go to previous page">
    </ods-pagination>
  `},d={tags:["isHidden"],render:()=>t`
    <ods-pagination default-current-page="3" total-items="100"></ods-pagination>
  `},u={tags:["isHidden"],render:()=>t`
    <ods-pagination
      default-current-page="3"
      total-items="100"
      label-tooltip-next="Go to next page"
      label-tooltip-previous="Go to previous page">
      <span slot="before-total-items">of </span>
      <span slot="after-total-items"> results</span>
    </ods-pagination>
  `},g={tags:["isHidden"],render:()=>t`
    <ods-pagination default-current-page="3" total-pages="21" class="my-pagination"></ods-pagination>
    <style>
      .my-pagination::part(button) {
        background-color: lightblue;
      }
    </style>
  `};var m,c,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => html\`
    <ods-pagination
      default-current-page="\${args.defaultCurrentPage}"
      is-disabled="\${args.isDisabled}"
      label-tooltip-next="\${args.labelTooltipNext}"
      label-tooltip-previous="\${args.labelTooltipPrevious}"
      total-items="\${args.totalItems}"
      total-pages="\${args.totalPages}">
    </ods-pagination>
  \`,
  argTypes: orderControls({
    ...storyParams,
    ...totalPagesParam
  }),
  args: {
    defaultCurrentPage: 4,
    isDisabled: false,
    labelTooltipPrevious: 'Previous label',
    labelTooltipNext: 'Next label',
    totalPages: 9
  }
}`,...(b=(c=o.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var f,P,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => html\`
    <ods-pagination
      default-current-page="\${args.defaultCurrentPage}"
      default-items-per-page="\${args.defaultItemsPerPage}"
      is-disabled="\${args.isDisabled}"
      label-tooltip-next="\${args.labelTooltipNext}"
      label-tooltip-previous="\${args.labelTooltipPrevious}"
      total-items="\${args.totalItems}">
      <span slot="before-total-items">\${args.beforeTotalItems}</span>
      <span slot="after-total-items">\${args.afterTotalItems}</span>
    </ods-pagination>
  \`,
  argTypes: orderControls({
    ...storyParams,
    ...totalItemsParam
  }),
  args: {
    defaultCurrentPage: 4,
    defaultItemsPerPage: ODS_PAGINATION_PER_PAGE.option_10,
    isDisabled: false,
    labelTooltipPrevious: 'Previous label',
    labelTooltipNext: 'Next label',
    totalItems: 60,
    beforeTotalItems: 'of ',
    afterTotalItems: ' results'
  }
}`,...(y=(P=s.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var T,I,x;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
    <ods-pagination
      default-current-page="3"
      total-items="100"
      label-tooltip-next="Next page"
      label-tooltip-previous="Previous page">
      <span slot="before-total-items">of </span>
      <span slot="after-total-items"> results</span>
    </ods-pagination>
  \`
}`,...(x=(I=r.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var v,$,N;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-pagination default-current-page="4" total-pages="7"></ods-pagination>
  \`
}`,...(N=($=n.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var C,D,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-pagination default-current-page="3" total-pages="21"></ods-pagination>
  \`
}`,...(S=(D=l.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var h,O,_;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-pagination default-current-page="3" total-pages="21" is-disabled></ods-pagination>
  \`
}`,...(_=(O=i.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var H,G,A;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-pagination
      default-current-page="3"
      total-pages="21"
      label-tooltip-next="Go to next page"
      label-tooltip-previous="Go to previous page">
    </ods-pagination>
  \`
}`,...(A=(G=p.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var E,V,W;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-pagination default-current-page="3" total-items="100"></ods-pagination>
  \`
}`,...(W=(V=d.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var L,R,j;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-pagination
      default-current-page="3"
      total-items="100"
      label-tooltip-next="Go to next page"
      label-tooltip-previous="Go to previous page">
      <span slot="before-total-items">of </span>
      <span slot="after-total-items"> results</span>
    </ods-pagination>
  \`
}`,...(j=(R=u.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var k,w,z;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-pagination default-current-page="3" total-pages="21" class="my-pagination"></ods-pagination>
    <style>
      .my-pagination::part(button) {
        background-color: lightblue;
      }
    </style>
  \`
}`,...(z=(w=g.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const X=["Demo","TotalItems","Overview","Default","DefaultLargeAmountOfPages","Disabled","WithTooltips","WithTotalItems","WithTotalItemsWithLabels","CustomCSS"],ae=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:g,Default:n,DefaultLargeAmountOfPages:l,Demo:o,Disabled:i,Overview:r,TotalItems:s,WithTooltips:p,WithTotalItems:d,WithTotalItemsWithLabels:u,__namedExportsOrder:X,default:K},Symbol.toStringTag,{value:"Module"}));export{l as D,r as O,ae as P,p as W,n as a,i as b,d as c,u as d};
