import{x as e}from"./lit-html-D-ZEPr28.js";import{o as I}from"./unsafe-html-HR6uCwaW.js";import{o as w,C as F}from"./control-C1r2wu67.js";var c=Object.freeze,j=Object.defineProperty,R=(o,x)=>c(j(o,"raw",{value:c(x||o.slice())})),n;const z={title:"ODS Components/Breadcrumb",component:"ods-breadcrumb"},r={render:o=>e`
<ods-breadcrumb>
  ${I(o.items)}
</ods-breadcrumb>
  `,argTypes:w({items:{table:{category:F.slot,defaultValue:{summary:"ø"}},control:"text",description:"Set the <ods-breadcrumb-item> list"}}),args:{items:`<ods-breadcrumb-item href="" icon="home">
</ods-breadcrumb-item>
<ods-breadcrumb-item href="" label="Parent">
</ods-breadcrumb-item>
<ods-breadcrumb-item href="" label="Current">
</ods-breadcrumb-item>`}},d={tags:["isHidden"],render:()=>e(n||(n=R([`
<ods-breadcrumb id="my-breadcrumb-clicked">
  <ods-breadcrumb-item id="home" href="" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item id="link1" href="" label="Link 1">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item id="link2" href="" label="Link 2">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
<script>
(() => {
  const breadcrumbEl = document.querySelector('#my-breadcrumb-clicked');
    breadcrumbEl.addEventListener('odsBreadcrumbItemClick', (event) => {
      // event.target.id will refer to the clicked element
    });
})();
<\/script>
  `])))},m={tags:["isHidden"],render:()=>e`
<ods-breadcrumb>
  <ods-breadcrumb-item href="" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="First">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Second">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Third">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Fourth">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  `},b={tags:["isHidden"],render:()=>e`
<ods-breadcrumb>
  <ods-breadcrumb-item href="" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Basic">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item class="my-link" href="" label="Custom">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
<style>
  .my-link::part(link) {
    color: #008000;
  }
</style>
  `},a={tags:["isHidden"],render:()=>e`
<ods-breadcrumb>
  <ods-breadcrumb-item href="" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Blank" target="_blank">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" is-disabled label="Disabled">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  `},s={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
<ods-breadcrumb>
  <ods-breadcrumb-item href="" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Parent">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Current">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  `},t={tags:["isHidden"],render:()=>e`
<ods-breadcrumb>
  <ods-breadcrumb-item href="" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Parent">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Current">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  `};var i,u,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: arg => html\`
<ods-breadcrumb>
  \${unsafeHTML(arg.items)}
</ods-breadcrumb>
  \`,
  argTypes: orderControls({
    items: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text',
      description: 'Set the <ods-breadcrumb-item> list'
    }
  }),
  args: {
    items: \`<ods-breadcrumb-item href="" icon="home">
</ods-breadcrumb-item>
<ods-breadcrumb-item href="" label="Parent">
</ods-breadcrumb-item>
<ods-breadcrumb-item href="" label="Current">
</ods-breadcrumb-item>\`
  }
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var h,f,p;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-breadcrumb id="my-breadcrumb-clicked">
  <ods-breadcrumb-item id="home" href="" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item id="link1" href="" label="Link 1">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item id="link2" href="" label="Link 2">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
<script>
(() => {
  const breadcrumbEl = document.querySelector('#my-breadcrumb-clicked');
    breadcrumbEl.addEventListener('odsBreadcrumbItemClick', (event) => {
      // event.target.id will refer to the clicked element
    });
})();
<\/script>
  \`
}`,...(p=(f=d.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var g,C,k;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-breadcrumb>
  <ods-breadcrumb-item href="" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="First">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Second">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Third">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Fourth">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  \`
}`,...(k=(C=m.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var y,S,L;b.parameters={...b.parameters,docs:{...(y=b.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-breadcrumb>
  <ods-breadcrumb-item href="" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Basic">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item class="my-link" href="" label="Custom">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
<style>
  .my-link::part(link) {
    color: #008000;
  }
</style>
  \`
}`,...(L=(S=b.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var _,v,O;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-breadcrumb>
  <ods-breadcrumb-item href="" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Blank" target="_blank">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" is-disabled label="Disabled">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  \`
}`,...(O=(v=a.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var H,T,B;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-breadcrumb>
  <ods-breadcrumb-item href="" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Parent">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Current">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  \`
}`,...(B=(T=s.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var E,P,D;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-breadcrumb>
  <ods-breadcrumb-item href="" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Parent">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="" label="Current">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  \`
}`,...(D=(P=t.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};const q=["Demo","ClickedItem","Collapsed","CustomCSS","CustomItem","Overview","Default"],N=Object.freeze(Object.defineProperty({__proto__:null,ClickedItem:d,Collapsed:m,CustomCSS:b,CustomItem:a,Default:t,Demo:r,Overview:s,__namedExportsOrder:q,default:z},Symbol.toStringTag,{value:"Module"}));export{N as B,b as C,t as D,s as O,m as a,d as b,a as c};
