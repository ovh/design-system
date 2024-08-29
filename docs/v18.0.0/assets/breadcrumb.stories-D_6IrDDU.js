import{x as e}from"./lit-html-D-ZEPr28.js";import{o as I}from"./unsafe-html-HR6uCwaW.js";import{o as w,C as F}from"./control-C1r2wu67.js";var n=Object.freeze,j=Object.defineProperty,A=(r,c)=>n(j(r,"raw",{value:n(c||r.slice())})),i;const R={title:"ODS Components/Breadcrumb",component:"ods-breadcrumb",decorators:[r=>(setTimeout(()=>{document.querySelectorAll("ods-breadcrumb-item").forEach(c=>{c.removeAttribute("href")})},0),r())]},d={render:r=>e`
<ods-breadcrumb>
  ${I(r.items)}
</ods-breadcrumb>
  `,argTypes:w({items:{table:{category:F.slot,defaultValue:{summary:"ø"}},control:"text",description:"Set the <ods-breadcrumb-item> list"}}),args:{items:`<ods-breadcrumb-item href="#" icon="home">
</ods-breadcrumb-item>
<ods-breadcrumb-item href="#" label="Parent">
</ods-breadcrumb-item>
<ods-breadcrumb-item href="#" label="Current">
</ods-breadcrumb-item>`}},m={tags:["isHidden"],render:()=>e(i||(i=A([`
<ods-breadcrumb id="my-breadcrumb-clicked">
  <ods-breadcrumb-item id="home" href="#" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item id="link1" href="#" label="Link 1">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item id="link2" href="#" label="Link 2">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Last">
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
  `])))},b={tags:["isHidden"],render:()=>e`
<ods-breadcrumb>
  <ods-breadcrumb-item href="#" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="First">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Second">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Third">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Fourth">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  `},a={tags:["isHidden"],render:()=>e`
<ods-breadcrumb>
  <ods-breadcrumb-item href="#" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Basic">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item class="my-link" href="#" label="Custom">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
<style>
  .my-link::part(link) {
    color: #008000;
  }
</style>
  `},s={tags:["isHidden"],render:()=>e`
<ods-breadcrumb>
  <ods-breadcrumb-item href="#" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Blank" target="_blank">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" is-disabled label="Disabled">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  `},t={tags:["isHidden"],render:()=>e`
<ods-breadcrumb>
  <ods-breadcrumb-item href="#" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Parent">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Current">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  `},o={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
<ods-breadcrumb>
  <ods-breadcrumb-item href="#" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Parent">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Current">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  `};var u,l,h;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    items: \`<ods-breadcrumb-item href="#" icon="home">
</ods-breadcrumb-item>
<ods-breadcrumb-item href="#" label="Parent">
</ods-breadcrumb-item>
<ods-breadcrumb-item href="#" label="Current">
</ods-breadcrumb-item>\`
  }
}`,...(h=(l=d.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var f,p,g;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-breadcrumb id="my-breadcrumb-clicked">
  <ods-breadcrumb-item id="home" href="#" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item id="link1" href="#" label="Link 1">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item id="link2" href="#" label="Link 2">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Last">
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
}`,...(g=(p=m.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var C,k,y;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-breadcrumb>
  <ods-breadcrumb-item href="#" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="First">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Second">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Third">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Fourth">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  \`
}`,...(y=(k=b.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var S,v,L;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-breadcrumb>
  <ods-breadcrumb-item href="#" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Basic">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item class="my-link" href="#" label="Custom">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
<style>
  .my-link::part(link) {
    color: #008000;
  }
</style>
  \`
}`,...(L=(v=a.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var _,O,H;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-breadcrumb>
  <ods-breadcrumb-item href="#" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Blank" target="_blank">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" is-disabled label="Disabled">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  \`
}`,...(H=(O=s.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var T,E,B;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-breadcrumb>
  <ods-breadcrumb-item href="#" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Parent">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Current">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  \`
}`,...(B=(E=t.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var P,D,x;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-breadcrumb>
  <ods-breadcrumb-item href="#" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Parent">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Current">
  </ods-breadcrumb-item>
</ods-breadcrumb>
  \`
}`,...(x=(D=o.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};const q=["Demo","ClickedItem","Collapsed","CustomCSS","CustomItem","Default","Overview"],N=Object.freeze(Object.defineProperty({__proto__:null,ClickedItem:m,Collapsed:b,CustomCSS:a,CustomItem:s,Default:t,Demo:d,Overview:o,__namedExportsOrder:q,default:R},Symbol.toStringTag,{value:"Module"}));export{N as B,a as C,t as D,o as O,b as a,m as b,s as c};
