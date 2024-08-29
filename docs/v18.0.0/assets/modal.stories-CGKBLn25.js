import{W as u,X as b}from"./index-DryTTbHl.js";import{x as t}from"./lit-html-D-ZEPr28.js";import{o as m}from"./unsafe-html-HR6uCwaW.js";import{o as P,C as s}from"./control-C1r2wu67.js";const W=()=>{const o=document.querySelector("#storybook-root");o&&(o.innerHTML="")},X=o=>(W(),o());var p=Object.freeze,B=Object.defineProperty,e=(o,F)=>p(B(o,"raw",{value:p(F||o.slice())})),g,y,C,S,O,v,x;const I={title:"ODS Components/Modal",component:"ods-modal",decorators:[X]},n={render:o=>t(g||(g=e([`
<ods-button class="button-demo" label="Trigger Modal"></ods-button>
<ods-modal class="modal-demo" is-open="`,'" is-dismissible="','" color="',`">
  `,`
  `,`
</ods-modal>

<style>
  `,`
</style>

<script>
  (() => {
    const buttonDemo = document.querySelector('.button-demo');
    const modalDemo = document.querySelector('.modal-demo');

    buttonDemo.addEventListener('click', () => {
      modalDemo.open();
    });
  })();
<\/script>
  `])),o.isOpen,o.isDismissible,o.color,m(o.content),m(o.actions),m(o.customCss)),argTypes:P({isOpen:{table:{category:s.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDismissible:{table:{category:s.general,defaultValue:{summary:!0},type:{summary:"boolean"}},control:"boolean"},color:{table:{category:s.design,defaultValue:{summary:u.information},type:{summary:b}},control:{type:"select"},options:b},content:{table:{category:s.slot,defaultValue:{summary:"ø"}},control:"text"},actions:{table:{category:s.slot,defaultValue:{summary:"ø"}},control:"text"},customCss:{table:{category:s.design,defaultValue:{summary:"ø"}},control:"text",description:'Set a custom style properties. Example: "ods-modal::part(dialog) { border: 1px red solid; }"'}}),args:{isOpen:!1,isDismissible:!0,color:u.information,content:`<ods-text preset="heading-4" class="my-text">Hello, world!</ods-text>
<ods-text preset="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ods-text>`,actions:`<ods-button label="Cancel" slot="actions" variant="ghost"></ods-button>
<ods-button label="Confirm" slot="actions"></ods-button>`,customCss:`.modal-demo .my-text::part(text) {
  margin: 0 0 1rem 0;
}
.modal-demo ods-button {
  max-width: 100%;
}
.modal-demo ods-button::part(button) {
  margin-top: 1rem;
}`}},a={tags:["isHidden"],parameters:{layout:"centered"},render:()=>t(y||(y=e([`
<ods-button class="button-overview" variant="outline" label="Trigger Modal"></ods-button>
<ods-modal class="modal-overview">
  <ods-text class="headline" preset="heading-4">Overview</ods-text>
  <ods-text preset="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ods-text>
</ods-modal>

<script>
  (() => {
    const buttonOverview = document.querySelector('.button-overview');
    const modalOverview = document.querySelector('.modal-overview');

    buttonOverview.addEventListener('click', () => {
      modalOverview.open();
    });
  })();
<\/script>

<style>
  .modal-overview .headline::part(text) {
    margin: 0 0 1rem 0;
  }
</style>
  `])))},l={tags:["isHidden"],render:()=>t(C||(C=e([`
<ods-button class="button-default" label="Trigger Modal"></ods-button>
<ods-modal class="modal-default"></ods-modal>

<script>
  (() => {
    const buttonDefault = document.querySelector('.button-default');
    const modalDefault = document.querySelector('.modal-default');

    buttonDefault.addEventListener('click', () => {
      modalDefault.open();
    });
  })();
<\/script>
  `])))},d={tags:["isHidden"],render:()=>t(S||(S=e([`
<ods-button class="button-custom-css" label="Trigger Modal"></ods-button>
<ods-modal class="modal-custom-css">
  <ods-text preset="span" class="my-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </ods-text>
</ods-modal>

<script>
  (() => {
    const buttonCustomCSS = document.querySelector('.button-custom-css');
    const modalCustomCSS = document.querySelector('.modal-custom-css');

    buttonCustomCSS.addEventListener('click', () => {
      modalCustomCSS.open();
    });
  })();
<\/script>

<style>
  .modal-custom-css .my-text {
    color: red;
  }

  .modal-custom-css::part(dialog) {
    border: .5rem red solid;
    height: 90%;
  }
</style>
  `])))},r={tags:["isHidden"],render:()=>t(O||(O=e([`
<ods-button class="button-not-dismissible" label="Trigger Modal">
</ods-button>
<ods-modal class="modal-not-dismissible" is-dismissible="false">
  <ods-text preset="span">
    This Modal is not dismissible. You can use the custom "Close" button to close it.
  </ods-text>
  <ods-button label="Close" slot="actions" icon="xmark" class="modal-not-dismissible-close"></ods-button>
</ods-modal>

<script>
  (() => {
    const buttonNotDismissible = document.querySelector('.button-not-dismissible');
    const modalNotDismissible = document.querySelector('.modal-not-dismissible');
    const modalNotDismissibleClose = document.querySelector('.modal-not-dismissible-close');

    buttonNotDismissible.addEventListener('click', () => {
      modalNotDismissible.open();
    });

    modalNotDismissibleClose.addEventListener('click', () => {
      modalNotDismissible.close();
    });
  })();
<\/script>

<style>
  .modal-not-dismissible ods-button {
    max-width: 100%;
  }
</style>
  `])))},i={tags:["isHidden"],render:()=>t(v||(v=e([`
<ods-button class="button-color" label="Trigger Modal">
</ods-button>
<ods-modal class="modal-color" color=`,`>
  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </ods-text>
</ods-modal>

<script>
  (() => {
    const buttonColor = document.querySelector('.button-color');
    const modalColor = document.querySelector('.modal-color');

    buttonColor.addEventListener('click', () => {
      modalColor.open();
    });
  })();
<\/script>
  `])),u.critical)},c={tags:["isHidden"],render:()=>t(x||(x=e([`
<ods-button class="button-actions" label="Trigger Modal">
</ods-button>
<ods-modal class="modal-actions">
  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </ods-text>
  <ods-button label="Close" slot="actions" icon="xmark" class="modal-actions-close"></ods-button>
</ods-modal>

<script>
  (() => {
    const buttonActions = document.querySelector('.button-actions');
    const modalActions = document.querySelector('.modal-actions');
    const modalActionsClose = document.querySelector('.modal-actions-close');

    buttonActions.addEventListener('click', () => {
      modalActions.open();
    });

    modalActionsClose.addEventListener('click', () => {
      modalActions.close();
    });
  })();
<\/script>

<style>
  .modal-actions .modal-actions-close::part(button) {
    margin-top: 1rem;
  }
  .modal-actions ods-button {
    max-width: 100%;
  }
</style>
  `])))};var f,D,L;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => html\`
<ods-button class="button-demo" label="Trigger Modal"></ods-button>
<ods-modal class="modal-demo" is-open="\${args.isOpen}" is-dismissible="\${args.isDismissible}" color="\${args.color}">
  \${unsafeHTML(args.content)}
  \${unsafeHTML(args.actions)}
</ods-modal>

<style>
  \${unsafeHTML(args.customCss)}
</style>

<script>
  (() => {
    const buttonDemo = document.querySelector('.button-demo');
    const modalDemo = document.querySelector('.modal-demo');

    buttonDemo.addEventListener('click', () => {
      modalDemo.open();
    });
  })();
<\/script>
  \`,
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
    isDismissible: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: true
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: ODS_MODAL_COLOR.information
        },
        type: {
          summary: ODS_MODAL_COLORS
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_MODAL_COLORS
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
    actions: {
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
        }
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "ods-modal::part(dialog) { border: 1px red solid; }"'
    }
  }),
  args: {
    isOpen: false,
    isDismissible: true,
    color: ODS_MODAL_COLOR.information,
    content: \`<ods-text preset="heading-4" class="my-text">Hello, world!</ods-text>
<ods-text preset="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ods-text>\`,
    actions: \`<ods-button label="Cancel" slot="actions" variant="ghost"></ods-button>
<ods-button label="Confirm" slot="actions"></ods-button>\`,
    customCss: \`.modal-demo .my-text::part(text) {
  margin: 0 0 1rem 0;
}
.modal-demo ods-button {
  max-width: 100%;
}
.modal-demo ods-button::part(button) {
  margin-top: 1rem;
}\`
  }
}`,...(L=(D=n.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var q,_,T;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-button class="button-overview" variant="outline" label="Trigger Modal"></ods-button>
<ods-modal class="modal-overview">
  <ods-text class="headline" preset="heading-4">Overview</ods-text>
  <ods-text preset="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ods-text>
</ods-modal>

<script>
  (() => {
    const buttonOverview = document.querySelector('.button-overview');
    const modalOverview = document.querySelector('.modal-overview');

    buttonOverview.addEventListener('click', () => {
      modalOverview.open();
    });
  })();
<\/script>

<style>
  .modal-overview .headline::part(text) {
    margin: 0 0 1rem 0;
  }
</style>
  \`
}`,...(T=(_=a.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var h,w,A;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button class="button-default" label="Trigger Modal"></ods-button>
<ods-modal class="modal-default"></ods-modal>

<script>
  (() => {
    const buttonDefault = document.querySelector('.button-default');
    const modalDefault = document.querySelector('.modal-default');

    buttonDefault.addEventListener('click', () => {
      modalDefault.open();
    });
  })();
<\/script>
  \`
}`,...(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var M,E,R;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button class="button-custom-css" label="Trigger Modal"></ods-button>
<ods-modal class="modal-custom-css">
  <ods-text preset="span" class="my-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </ods-text>
</ods-modal>

<script>
  (() => {
    const buttonCustomCSS = document.querySelector('.button-custom-css');
    const modalCustomCSS = document.querySelector('.modal-custom-css');

    buttonCustomCSS.addEventListener('click', () => {
      modalCustomCSS.open();
    });
  })();
<\/script>

<style>
  .modal-custom-css .my-text {
    color: red;
  }

  .modal-custom-css::part(dialog) {
    border: .5rem red solid;
    height: 90%;
  }
</style>
  \`
}`,...(R=(E=d.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var N,k,H;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button class="button-not-dismissible" label="Trigger Modal">
</ods-button>
<ods-modal class="modal-not-dismissible" is-dismissible="false">
  <ods-text preset="span">
    This Modal is not dismissible. You can use the custom "Close" button to close it.
  </ods-text>
  <ods-button label="Close" slot="actions" icon="xmark" class="modal-not-dismissible-close"></ods-button>
</ods-modal>

<script>
  (() => {
    const buttonNotDismissible = document.querySelector('.button-not-dismissible');
    const modalNotDismissible = document.querySelector('.modal-not-dismissible');
    const modalNotDismissibleClose = document.querySelector('.modal-not-dismissible-close');

    buttonNotDismissible.addEventListener('click', () => {
      modalNotDismissible.open();
    });

    modalNotDismissibleClose.addEventListener('click', () => {
      modalNotDismissible.close();
    });
  })();
<\/script>

<style>
  .modal-not-dismissible ods-button {
    max-width: 100%;
  }
</style>
  \`
}`,...(H=(k=r.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var V,Y,G;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button class="button-color" label="Trigger Modal">
</ods-button>
<ods-modal class="modal-color" color=\${ODS_MODAL_COLOR.critical}>
  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </ods-text>
</ods-modal>

<script>
  (() => {
    const buttonColor = document.querySelector('.button-color');
    const modalColor = document.querySelector('.modal-color');

    buttonColor.addEventListener('click', () => {
      modalColor.open();
    });
  })();
<\/script>
  \`
}`,...(G=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var $,j,z;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button class="button-actions" label="Trigger Modal">
</ods-button>
<ods-modal class="modal-actions">
  <ods-text preset="span">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </ods-text>
  <ods-button label="Close" slot="actions" icon="xmark" class="modal-actions-close"></ods-button>
</ods-modal>

<script>
  (() => {
    const buttonActions = document.querySelector('.button-actions');
    const modalActions = document.querySelector('.modal-actions');
    const modalActionsClose = document.querySelector('.modal-actions-close');

    buttonActions.addEventListener('click', () => {
      modalActions.open();
    });

    modalActionsClose.addEventListener('click', () => {
      modalActions.close();
    });
  })();
<\/script>

<style>
  .modal-actions .modal-actions-close::part(button) {
    margin-top: 1rem;
  }
  .modal-actions ods-button {
    max-width: 100%;
  }
</style>
  \`
}`,...(z=(j=c.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const J=["Demo","Overview","Default","CustomCSS","NotDismissible","Color","Actions"],oo=Object.freeze(Object.defineProperty({__proto__:null,Actions:c,Color:i,CustomCSS:d,Default:l,Demo:n,NotDismissible:r,Overview:a,__namedExportsOrder:J,default:I},Symbol.toStringTag,{value:"Module"}));export{c as A,d as C,l as D,oo as M,r as N,a as O,i as a};
