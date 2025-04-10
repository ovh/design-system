import{d as x,a as I}from"./ods-breadcrumb-item2-C_Ah5FZN.js";import{x as e,o as F,C as $}from"./controls-DX883vx3.js";import{o as j}from"./unsafe-html-VJzuFJfF.js";const A=x,R=I;var n=Object.freeze,q=Object.defineProperty,z=(r,c)=>n(q(r,"raw",{value:n(r.slice())})),i;A();R();const G={title:"ODS Components/Breadcrumb",component:"ods-breadcrumb",decorators:[r=>(setTimeout(()=>{document.querySelectorAll("ods-breadcrumb-item").forEach(c=>{c.removeAttribute("href")})},0),r())]},d={render:r=>e`
<ods-breadcrumb>
  ${j(r.items)}
</ods-breadcrumb>
  `,argTypes:F({items:{table:{category:$.slot,defaultValue:{summary:"ø"}},control:"text",description:"Set the <ods-breadcrumb-item> list"}}),args:{items:`<ods-breadcrumb-item href="#" icon="home">
</ods-breadcrumb-item>
<ods-breadcrumb-item href="#" label="Parent">
</ods-breadcrumb-item>
<ods-breadcrumb-item href="#" label="Current">
</ods-breadcrumb-item>`}},m={tags:["isHidden"],render:()=>e(i||(i=z([`
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
  `])))},a={tags:["isHidden"],render:()=>e`
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
  `},b={tags:["isHidden"],render:()=>e`
<ods-breadcrumb>
  <ods-breadcrumb-item href="#" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Basic">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item class="my-item" href="#" label="Custom">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item class="my-item" href="#" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
<style>
  .my-item::part(link) {
    color: #008000;
  }

  .my-item::part(last) {
    color: #ed733d;
  }
</style>
  `},t={tags:["isHidden"],render:()=>e`
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
  `},s={tags:["isHidden"],render:()=>e`
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
}`,...(g=(p=m.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var C,y,k;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(y=a.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var S,v,L;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-breadcrumb>
  <ods-breadcrumb-item href="#" icon="home">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item href="#" label="Basic">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item class="my-item" href="#" label="Custom">
  </ods-breadcrumb-item>
  <ods-breadcrumb-item class="my-item" href="#" label="Last">
  </ods-breadcrumb-item>
</ods-breadcrumb>
<style>
  .my-item::part(link) {
    color: #008000;
  }

  .my-item::part(last) {
    color: #ed733d;
  }
</style>
  \`
}`,...(L=(v=b.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var _,O,E;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(E=(O=t.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var H,T,B;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(B=(T=s.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var P,D,w;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(w=(D=o.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const M=["Demo","ClickedItem","Collapsed","CustomCSS","CustomItem","Default","Overview"],J=Object.freeze(Object.defineProperty({__proto__:null,ClickedItem:m,Collapsed:a,CustomCSS:b,CustomItem:t,Default:s,Demo:d,Overview:o,__namedExportsOrder:M,default:G},Symbol.toStringTag,{value:"Module"}));export{J as B,b as C,s as D,o as O,a,m as b,t as c};
