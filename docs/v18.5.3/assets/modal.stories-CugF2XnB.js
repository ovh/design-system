import{a0 as b,a1 as g}from"./index-DCBH0_Tl.js";import{d as Z}from"./ods-modal2-CLthqs1m.js";import{x as e,o as oo,C as s}from"./controls-DX883vx3.js";import{o as p}from"./unsafe-html-VJzuFJfF.js";const eo=Z,to=()=>{const o=document.querySelector("#storybook-root");o&&(o.innerHTML="")},so=o=>(to(),o());var y=Object.freeze,no=Object.defineProperty,t=(o,lo)=>y(no(o,"raw",{value:y(o.slice())})),v,L,q,C,f,S,x,O,D;eo();const io={title:"ODS Components/Modal",component:"ods-modal",decorators:[so]},n={render:o=>e(v||(v=t([`
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
  `])),o.isOpen,o.isDismissible,o.color,p(o.content),p(o.actions),p(o.customCss)),argTypes:oo({isOpen:{table:{category:s.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDismissible:{table:{category:s.general,defaultValue:{summary:!0},type:{summary:"boolean"}},control:"boolean"},color:{table:{category:s.design,defaultValue:{summary:b.information},type:{summary:g}},control:{type:"select"},options:g},content:{table:{category:s.slot,defaultValue:{summary:"ø"}},control:"text"},actions:{table:{category:s.slot,defaultValue:{summary:"ø"}},control:"text"},customCss:{table:{category:s.design,defaultValue:{summary:"ø"}},control:"text",description:'Set a custom style properties. Example: "ods-modal::part(dialog) { border: 1px red solid; }"'}}),args:{isOpen:!1,isDismissible:!0,color:b.information,content:`<ods-text preset="heading-4" class="my-text">Hello, world!</ods-text>
<ods-text preset="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ods-text>`,actions:`<ods-button label="Cancel" slot="actions" variant="ghost"></ods-button>
<ods-button label="Confirm" slot="actions"></ods-button>`,customCss:`.modal-demo .my-text::part(text) {
  margin: 0 0 1rem 0;
}
.modal-demo ods-button {
  max-width: 100%;
}
.modal-demo ods-button::part(button) {
  margin-top: 1rem;
}`}},i={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e(L||(L=t([`
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
  `])))},a={tags:["isHidden"],render:()=>e(q||(q=t([`
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
  `])))},d={tags:["isHidden"],render:()=>e(C||(C=t([`
<ods-button class="button-custom-css" label="Trigger Modal"></ods-button>
<ods-modal class="modal-custom-css">
  <ods-text preset="span" class="my-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
    max-height: 90%;
    max-width: 70%;
  }
</style>
  `])))},l={tags:["isHidden"],render:()=>e(f||(f=t([`
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
  `])))},r={tags:["isHidden"],render:()=>e(S||(S=t([`
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
  `])),b.critical)},m={tags:["isHidden"],render:()=>e(x||(x=t([`
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
  `])))},c={tags:["isHidden"],render:()=>e(O||(O=t([`
<ods-button class="button-overlay" label="Trigger Modal">
</ods-button>
<ods-modal class="modal-overlay">
  <div class="modal-overlay-content"
    <label for="modal-overlay-datepicker">
      Choose a date:
    </label>

    <div class="modal-overlay-content-picker">
      <ods-datepicker id="modal-overlay-datepicker" strategy="fixed"></ods-datepicker>
    </div>
  </div>
</ods-modal>

<script>
  (() => {
    const buttonColor = document.querySelector('.button-overlay');
    const modalColor = document.querySelector('.modal-overlay');

    buttonColor.addEventListener('click', () => {
      modalColor.open();
    });
  })();
<\/script>

<style>
  .modal-overlay-content {
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 8px;
    align-items: center;
  }

  .modal-overlay-content-picker {
    /* You need to define a "fake" space that match the size your fixed component would actually take */
    height: var(--ods-form-element-input-height);
  }
</style>
  `])))},u={tags:["isHidden"],render:()=>e(D||(D=t([`
<ods-button class="button-overflow" label="Trigger Modal">
</ods-button>
<ods-modal class="modal-overflow">
  <label for="modal-overflow-datepicker">
    Choose a date:
  </label>

  <ods-datepicker id="modal-overflow-datepicker"></ods-datepicker>
</ods-modal>

<script>
  (() => {
    const buttonColor = document.querySelector('.button-overflow');
    const modalColor = document.querySelector('.modal-overflow');

    buttonColor.addEventListener('click', () => {
      modalColor.open();
    });
  })();
<\/script>

<style>
  .modal-overflow::part(dialog),
  .modal-overflow::part(dialog-content) {
    overflow: visible;
  }
</style>
  `])))};var h,w,k;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(k=(w=n.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var _,T,M;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(M=(T=i.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var E,A,R;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(R=(A=a.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var N,H,V;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button class="button-custom-css" label="Trigger Modal"></ods-button>
<ods-modal class="modal-custom-css">
  <ods-text preset="span" class="my-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
    max-height: 90%;
    max-width: 70%;
  }
</style>
  \`
}`,...(V=(H=d.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var Y,$,G;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(G=($=l.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var z,F,j;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(j=(F=r.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var P,B,I;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(I=(B=m.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var J,K,Q;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button class="button-overlay" label="Trigger Modal">
</ods-button>
<ods-modal class="modal-overlay">
  <div class="modal-overlay-content"
    <label for="modal-overlay-datepicker">
      Choose a date:
    </label>

    <div class="modal-overlay-content-picker">
      <ods-datepicker id="modal-overlay-datepicker" strategy="fixed"></ods-datepicker>
    </div>
  </div>
</ods-modal>

<script>
  (() => {
    const buttonColor = document.querySelector('.button-overlay');
    const modalColor = document.querySelector('.modal-overlay');

    buttonColor.addEventListener('click', () => {
      modalColor.open();
    });
  })();
<\/script>

<style>
  .modal-overlay-content {
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 8px;
    align-items: center;
  }

  .modal-overlay-content-picker {
    /* You need to define a "fake" space that match the size your fixed component would actually take */
    height: var(--ods-form-element-input-height);
  }
</style>
  \`
}`,...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button class="button-overflow" label="Trigger Modal">
</ods-button>
<ods-modal class="modal-overflow">
  <label for="modal-overflow-datepicker">
    Choose a date:
  </label>

  <ods-datepicker id="modal-overflow-datepicker"></ods-datepicker>
</ods-modal>

<script>
  (() => {
    const buttonColor = document.querySelector('.button-overflow');
    const modalColor = document.querySelector('.modal-overflow');

    buttonColor.addEventListener('click', () => {
      modalColor.open();
    });
  })();
<\/script>

<style>
  .modal-overflow::part(dialog),
  .modal-overflow::part(dialog-content) {
    overflow: visible;
  }
</style>
  \`
}`,...(X=(W=u.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const ao=["Demo","Overview","Default","CustomCSS","NotDismissible","Color","Actions","OverlayFixed","OverlayVisible"],po=Object.freeze(Object.defineProperty({__proto__:null,Actions:m,Color:r,CustomCSS:d,Default:a,Demo:n,NotDismissible:l,OverlayFixed:c,OverlayVisible:u,Overview:i,__namedExportsOrder:ao,default:io},Symbol.toStringTag,{value:"Module"}));export{m as A,d as C,a as D,po as M,l as N,i as O,r as a,c as b,u as c};
