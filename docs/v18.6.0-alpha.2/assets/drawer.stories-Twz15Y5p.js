import{I as u,J as c}from"./index-CGJBSJl7.js";import{d as L}from"./ods-drawer2-DKhK7oOX.js";import{x as a,o as k,C as i}from"./controls-DX883vx3.js";import{o as I}from"./unsafe-html-VJzuFJfF.js";const A=L;var l=Object.freeze,H=Object.defineProperty,d=(e,W)=>l(H(e,"raw",{value:l(e.slice())})),m,w,p,b,g;A();const N={title:"ODS Components/Drawer",component:"ods-drawer"},t={render:e=>a(m||(m=d([`
<ods-button variant="outline" class="button-drawer-demo" label="Trigger Drawer"></ods-button>
<ods-drawer class="my-drawer-demo" is-open="`,'" position="',`">
  `,`
</ods-drawer>
<style>
  .my-drawer-demo::part(dialog) {
    `,`
  }
</style>

<script>
(() => {
  const buttonDemo = document.querySelector('.button-drawer-demo');
  const drawerDemo = document.querySelector('.my-drawer-demo');

  buttonDemo.addEventListener('click', () => {
    if (drawerDemo.isOpen) {
      drawerDemo.close();
    } else {
      drawerDemo.open();
    }
  });
})();
<\/script>`])),e.isOpen,e.position,I(e.content),e.customCss),argTypes:k({isOpen:{table:{category:i.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},position:{table:{category:i.general,defaultValue:{summary:u.left},type:{summary:c}},control:{type:"select"},options:c},content:{table:{category:i.slot,defaultValue:{summary:"ø"}},control:"text"},customCss:{table:{category:i.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "height: 100px; background-color: #008000;"'}}),args:{content:`
    <div>
      <ods-text preset="heading-4">Hello, world!</ods-text>
      <ods-text preset="heading-3">Press 'Escape' to close the drawer</ods-text>
      <ods-text preset="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ods-text>
    </div>`,isOpen:!1,position:u.left}},r={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a(w||(w=d([`
<ods-button variant="outline" id="button-drawer-overview" label="Trigger Drawer"></ods-button>
<ods-drawer id="drawer-overview">Esc to close the drawer</ods-drawer>

<script>
(() => {
  const buttonOverview = document.querySelector('#button-drawer-overview');
  const drawerOverview = document.querySelector('#drawer-overview');

  buttonOverview.addEventListener('click', () => {
    if (drawerOverview.isOpen) {
      drawerOverview.close();
    } else {
      drawerOverview.open();
    }
  });
})();
<\/script>
  `])))},o={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a(p||(p=d([`
<ods-button variant="outline" id="button-drawer-default" label="Trigger Drawer"></ods-button>
<ods-drawer id="drawer-default">Esc to close the drawer</ods-drawer>

<script>
(() => {
  const buttonDefault = document.querySelector('#button-drawer-default');
  const drawerDefault = document.querySelector('#drawer-default');

  buttonDefault.addEventListener('click', () => {
    if (drawerDefault.isOpen) {
      drawerDefault.close();
    } else {
      drawerDefault.open();
    }
  });
})();
<\/script>
  `])))},n={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a(b||(b=d([`
<ods-drawer class="my-drawer"></ods-drawer>
<ods-button variant="outline" id="button-drawer-custom-css" label="Trigger Drawer"></ods-button>
<ods-drawer id="drawer-custom-css" class="my-drawer-custom-css">Esc to close the drawer</ods-drawer>

<script>
(() => {
  const buttonCustomCSS = document.querySelector('#button-drawer-custom-css');
  const drawerCustomCSS = document.querySelector('#drawer-custom-css');

  buttonCustomCSS.addEventListener('click', () => {
    if (drawerCustomCSS.isOpen) {
      drawerCustomCSS.close();
    } else {
      drawerCustomCSS.open();
    }
  });
})();
<\/script>
<style>
  .my-drawer-custom-css::part(drawer) {
    background-color: red;
  }
</style>
  `])))},s={tags:["isHidden"],parameters:{layout:"centered"},render:()=>a(g||(g=d([`
<ods-button variant="outline" id="button-drawer-left" label="Trigger Drawer Left"></ods-button>
<ods-button variant="outline" id="button-drawer-right" label="Trigger Drawer Right"></ods-button>
<ods-button variant="outline" id="button-drawer-bottom" label="Trigger Drawer bottom"></ods-button>
<ods-button variant="outline" id="button-drawer-top" label="Trigger Drawer top"></ods-button>

<ods-drawer id="drawer-position">Esc to close the drawer</ods-drawer>

<script>
(() => {
  const buttonLeft = document.querySelector('#button-drawer-left');
  const buttonRight = document.querySelector('#button-drawer-right');
  const buttonBottom = document.querySelector('#button-drawer-bottom');
  const buttonTop = document.querySelector('#button-drawer-top');

  const drawerPosition = document.querySelector('#drawer-position');

  [buttonLeft, buttonRight, buttonBottom, buttonTop].forEach((button) =>
    button.addEventListener('click', async() => {
      const lastPosition = drawerPosition.position;
      drawerPosition.position = button.id.replace('button-drawer-', '');
      if (lastPosition !== drawerPosition.position && drawerPosition.isOpen) {
        return;
      }
      if (drawerPosition.isOpen) {
        await drawerPosition.close();
      } else {
        await drawerPosition.open();
      }
    }));
})();
<\/script>
  `])))};var y,v,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: arg => html\`
<ods-button variant="outline" class="button-drawer-demo" label="Trigger Drawer"></ods-button>
<ods-drawer class="my-drawer-demo" is-open="\${arg.isOpen}" position="\${arg.position}">
  \${unsafeHTML(arg.content)}
</ods-drawer>
<style>
  .my-drawer-demo::part(dialog) {
    \${arg.customCss}
  }
</style>

<script>
(() => {
  const buttonDemo = document.querySelector('.button-drawer-demo');
  const drawerDemo = document.querySelector('.my-drawer-demo');

  buttonDemo.addEventListener('click', () => {
    if (drawerDemo.isOpen) {
      drawerDemo.close();
    } else {
      drawerDemo.open();
    }
  });
})();
<\/script>\`,
  argTypes: orderControls({
    isOpen: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    position: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: ODS_DRAWER_POSITION.left
        },
        type: {
          summary: ODS_DRAWER_POSITIONS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_DRAWER_POSITIONS
    },
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text'
    },
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
      description: 'Set a custom style properties. Example: "height: 100px; background-color: #008000;"'
    }
  }),
  args: {
    content: \`
    <div>
      <ods-text preset="heading-4">Hello, world!</ods-text>
      <ods-text preset="heading-3">Press 'Escape' to close the drawer</ods-text>
      <ods-text preset="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ods-text>
    </div>\`,
    isOpen: false,
    position: ODS_DRAWER_POSITION.left
  }
}`,...(S=(v=t.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var f,O,D;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-button variant="outline" id="button-drawer-overview" label="Trigger Drawer"></ods-button>
<ods-drawer id="drawer-overview">Esc to close the drawer</ods-drawer>

<script>
(() => {
  const buttonOverview = document.querySelector('#button-drawer-overview');
  const drawerOverview = document.querySelector('#drawer-overview');

  buttonOverview.addEventListener('click', () => {
    if (drawerOverview.isOpen) {
      drawerOverview.close();
    } else {
      drawerOverview.open();
    }
  });
})();
<\/script>
  \`
}`,...(D=(O=r.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var C,T,E;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-button variant="outline" id="button-drawer-default" label="Trigger Drawer"></ods-button>
<ods-drawer id="drawer-default">Esc to close the drawer</ods-drawer>

<script>
(() => {
  const buttonDefault = document.querySelector('#button-drawer-default');
  const drawerDefault = document.querySelector('#drawer-default');

  buttonDefault.addEventListener('click', () => {
    if (drawerDefault.isOpen) {
      drawerDefault.close();
    } else {
      drawerDefault.open();
    }
  });
})();
<\/script>
  \`
}`,...(E=(T=o.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var h,P,_;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-drawer class="my-drawer"></ods-drawer>
<ods-button variant="outline" id="button-drawer-custom-css" label="Trigger Drawer"></ods-button>
<ods-drawer id="drawer-custom-css" class="my-drawer-custom-css">Esc to close the drawer</ods-drawer>

<script>
(() => {
  const buttonCustomCSS = document.querySelector('#button-drawer-custom-css');
  const drawerCustomCSS = document.querySelector('#drawer-custom-css');

  buttonCustomCSS.addEventListener('click', () => {
    if (drawerCustomCSS.isOpen) {
      drawerCustomCSS.close();
    } else {
      drawerCustomCSS.open();
    }
  });
})();
<\/script>
<style>
  .my-drawer-custom-css::part(drawer) {
    background-color: red;
  }
</style>
  \`
}`,...(_=(P=n.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var q,R,x;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-button variant="outline" id="button-drawer-left" label="Trigger Drawer Left"></ods-button>
<ods-button variant="outline" id="button-drawer-right" label="Trigger Drawer Right"></ods-button>
<ods-button variant="outline" id="button-drawer-bottom" label="Trigger Drawer bottom"></ods-button>
<ods-button variant="outline" id="button-drawer-top" label="Trigger Drawer top"></ods-button>

<ods-drawer id="drawer-position">Esc to close the drawer</ods-drawer>

<script>
(() => {
  const buttonLeft = document.querySelector('#button-drawer-left');
  const buttonRight = document.querySelector('#button-drawer-right');
  const buttonBottom = document.querySelector('#button-drawer-bottom');
  const buttonTop = document.querySelector('#button-drawer-top');

  const drawerPosition = document.querySelector('#drawer-position');

  [buttonLeft, buttonRight, buttonBottom, buttonTop].forEach((button) =>
    button.addEventListener('click', async() => {
      const lastPosition = drawerPosition.position;
      drawerPosition.position = button.id.replace('button-drawer-', '');
      if (lastPosition !== drawerPosition.position && drawerPosition.isOpen) {
        return;
      }
      if (drawerPosition.isOpen) {
        await drawerPosition.close();
      } else {
        await drawerPosition.open();
      }
    }));
})();
<\/script>
  \`
}`,...(x=(R=s.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};const V=["Demo","Overview","Default","CustomCSS","Position"],B=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:n,Default:o,Demo:t,Overview:r,Position:s,__namedExportsOrder:V,default:N},Symbol.toStringTag,{value:"Module"}));export{n as C,B as D,r as O,s as P,o as a};
